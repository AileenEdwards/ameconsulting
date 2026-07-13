/* ============================================================
   AME CONSULTING — V10  ·  WebGL hero
   A slow, living plum→gold field built from layered fbm noise.
   Mouse-reactive. Pauses off-screen. Falls back to CSS gradient
   on reduced-motion / no-WebGL (handled by .hero-fallback).
   ============================================================ */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = document.getElementById('hero-canvas');
const fallback = document.querySelector('.hero-fallback');

function showFallback() { if (fallback) fallback.style.opacity = '1'; if (canvas) canvas.style.display = 'none'; }

if (!canvas || reduced) {
  showFallback();
} else {
  try {
    boot();
  } catch (e) {
    console.warn('[hero] WebGL init failed, using fallback', e);
    showFallback();
  }
}

/* Palette comes from the CSS RGB-triplet variables (see v10.css :root
   and themes.css) so the shader follows the active colour theme. */
function cssColor(name) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim().split(/\s+/).map(Number);
  return new THREE.Color(`rgb(${v[0]}, ${v[1]}, ${v[2]})`);
}

function boot() {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  const dpr = Math.min(window.devicePixelRatio, 2);
  renderer.setPixelRatio(dpr);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const uniforms = {
    u_time: { value: 0 },
    u_res: { value: new THREE.Vector2(1, 1) },
    u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
    u_mouseV: { value: 0 },
    // palette
    u_obsidian: { value: cssColor('--c-obsidian') },
    u_plum: { value: cssColor('--c-plum') },
    u_purple: { value: cssColor('--c-purple') },
    u_gold: { value: cssColor('--c-gold') },
    u_vig: { value: 0.45 }
  };

  // On light backgrounds the heavy corner vignette reads as dirt — soften it.
  const setVignette = () => {
    const c = uniforms.u_obsidian.value;
    const lum = 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
    uniforms.u_vig.value = lum > 0.5 ? 0.12 : 0.45;
  };
  setVignette();

  window.addEventListener('themechange', () => {
    uniforms.u_obsidian.value.copy(cssColor('--c-obsidian'));
    uniforms.u_plum.value.copy(cssColor('--c-plum'));
    uniforms.u_purple.value.copy(cssColor('--c-purple'));
    uniforms.u_gold.value.copy(cssColor('--c-gold'));
    setVignette();
  });

  const vert = /* glsl */`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }
  `;

  const frag = /* glsl */`
    precision highp float;
    varying vec2 vUv;
    uniform float u_time;
    uniform vec2  u_res;
    uniform vec2  u_mouse;
    uniform float u_mouseV;
    uniform vec3  u_obsidian, u_plum, u_purple, u_gold;
    uniform float u_vig;

    // --- hash + value noise + fbm ---
    vec2 hash2(vec2 p){
      p = vec2(dot(p, vec2(127.1,311.7)), dot(p, vec2(269.5,183.3)));
      return -1.0 + 2.0*fract(sin(p)*43758.5453123);
    }
    float noise(vec2 p){
      vec2 i = floor(p); vec2 f = fract(p);
      vec2 u = f*f*(3.0-2.0*f);
      return mix(mix(dot(hash2(i+vec2(0.0,0.0)), f-vec2(0.0,0.0)),
                     dot(hash2(i+vec2(1.0,0.0)), f-vec2(1.0,0.0)), u.x),
                 mix(dot(hash2(i+vec2(0.0,1.0)), f-vec2(0.0,1.0)),
                     dot(hash2(i+vec2(1.0,1.0)), f-vec2(1.0,1.0)), u.x), u.y);
    }
    float fbm(vec2 p){
      float v = 0.0; float a = 0.5;
      mat2 m = mat2(1.6,1.2,-1.2,1.6);
      for(int i=0;i<6;i++){ v += a*noise(p); p = m*p; a *= 0.5; }
      return v;
    }

    void main(){
      vec2 uv = vUv;
      vec2 p = uv;
      p.x *= u_res.x / u_res.y;          // aspect correct
      float t = u_time * 0.045;

      // domain-warped flow field
      vec2 q = vec2(fbm(p*1.4 + vec2(0.0, t)), fbm(p*1.4 + vec2(5.2, -t)));
      vec2 r = vec2(fbm(p*1.8 + 1.7*q + vec2(1.7, 9.2) + 0.15*t),
                    fbm(p*1.8 + 1.7*q + vec2(8.3, 2.8) - 0.12*t));
      float f = fbm(p*1.6 + 2.2*r);

      // mouse as a soft light source / heat
      vec2 m = u_mouse; m.x *= u_res.x/u_res.y;
      float md = distance(p, m);
      float heat = smoothstep(0.85, 0.0, md) * (0.35 + u_mouseV*1.4);

      // base vertical gradient obsidian -> plum
      vec3 col = mix(u_obsidian, u_plum, smoothstep(0.0, 1.0, uv.y*0.85 + 0.1));
      // purple nebula from the flow field
      col = mix(col, u_purple, smoothstep(0.25, 0.95, f) * 0.55);
      // gold filaments where the warp ridges peak
      float ridge = smoothstep(0.55, 0.85, length(r));
      col = mix(col, u_gold, ridge * 0.30);
      // gold bloom around cursor
      col = mix(col, u_gold, heat * 0.5);

      // subtle grain to kill banding
      float g = (hash2(uv*u_res).x) * 0.025;
      col += g;

      // vignette (softened on light themes via u_vig)
      float vig = smoothstep(1.25, 0.25, distance(uv, vec2(0.5)));
      col *= (1.0 - u_vig) + u_vig*vig;

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  const material = new THREE.ShaderMaterial({ uniforms, vertexShader: vert, fragmentShader: frag });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(quad);

  function resize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    uniforms.u_res.value.set(w * dpr, h * dpr);
  }
  resize();
  window.addEventListener('resize', resize);

  // mouse with eased velocity
  const target = new THREE.Vector2(0.5, 0.5);
  let lastX = 0.5, vel = 0;
  window.addEventListener('mousemove', (e) => {
    target.x = e.clientX / window.innerWidth;
    target.y = 1.0 - e.clientY / window.innerHeight;
  });
  window.addEventListener('touchmove', (e) => {
    if (!e.touches[0]) return;
    target.x = e.touches[0].clientX / window.innerWidth;
    target.y = 1.0 - e.touches[0].clientY / window.innerHeight;
  }, { passive: true });

  // pause when hero scrolled out of view
  let visible = true;
  const hero = canvas.closest('section') || canvas.parentElement;
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; }, { threshold: 0 }).observe(hero);
  }

  const clock = new THREE.Clock();
  function loop() {
    requestAnimationFrame(loop);
    if (!visible) return;
    const dt = clock.getDelta();
    uniforms.u_time.value += dt;
    // ease mouse
    uniforms.u_mouse.value.x += (target.x - uniforms.u_mouse.value.x) * 0.06;
    uniforms.u_mouse.value.y += (target.y - uniforms.u_mouse.value.y) * 0.06;
    vel += (Math.abs(target.x - lastX) * 12 - vel) * 0.1;
    lastX = target.x;
    uniforms.u_mouseV.value = Math.min(vel, 1.0);
    renderer.render(scene, camera);
  }
  loop();

  // reveal canvas once first frame is drawn
  requestAnimationFrame(() => { canvas.style.opacity = '1'; });
}
