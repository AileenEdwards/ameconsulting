# How to Update Your Website

A guide for Aileen. No tech experience needed.

**What's in this guide:**

1. [The one big idea](#1-the-one-big-idea)
2. [One-time setup](#2-one-time-setup)
3. [How to ask for a change](#3-how-to-ask-for-a-change)
4. [Real examples you can copy](#4-real-examples-you-can-copy)
5. [Check your change](#5-check-your-change)
6. [See the history of every change](#6-see-the-history-of-every-change)
7. [Undo a change](#7-undo-a-change)
8. [The golden rules](#8-the-golden-rules)

---

## 1. The one big idea

You cannot break your website. Not permanently.

Your website files live in one place online. It's called GitHub. Every time a file changes, GitHub saves a snapshot of the whole site. Those snapshots last forever. If a change ever looks wrong, we go back to an earlier snapshot. That takes five minutes.

So relax. The worst case is never "the site is ruined." The worst case is "we undo it."

To make a change, you tell Claude (the AI assistant) what you want. In plain English. It edits the files. The live site updates a few minutes later.

---

## 2. One-time setup

You only do this once. If it feels confusing, do it with Izzy on a call. Five minutes.

1. **Get Claude.** Go to [claude.ai](https://claude.ai) and sign in. Or download the Claude app on your phone. Your phone works fine for all of this.
2. **Find your GitHub login.** Your username is **AileenEdwards**. Your website lives at [github.com/AileenEdwards/ameconsulting](https://github.com/AileenEdwards/ameconsulting). Lost the password? Click "Forgot password" and GitHub emails you a reset.
3. **Connect them.** Go to [claude.ai/code](https://claude.ai/code). The first time, it asks to connect to your GitHub. Say yes. Pick the **ameconsulting** project. Done forever.

One helpful habit: start each new conversation with this line.

> I'm updating my website. The pages are in the v10 folder.

---

## 3. How to ask for a change

Claude is smart. But it can't read your mind. Specific requests get perfect results. Vague requests get guesses.

Every request needs four things:

1. **The page.** Homepage, About, Services, Speaking, or Contact.
2. **The spot.** "Near the top." "The section with my book." "The footer."
3. **The words there now.** Copy them exactly.
4. **What you want instead.** Exact new words, or a clear description.

**And attach a screenshot whenever you can.** On iPhone: press the side button and volume-up together. Then attach the picture to your Claude message, like texting a photo. A screenshot removes all guesswork.

Here's the fill-in-the-blank template:

> On the ______ page, in the section that says "______", please change "______" to "______". Screenshot attached.

**Bad request:** "Can you fix the services page? Something looks off."

**Good request:** "On the Services page, under Executive Coaching, one card says 'Bi-Weekly Sessions.' Please change it to 'Weekly Sessions.' Screenshot attached."

One more rule: **one change at a time.** Ten changes in one message is where mistakes happen.

---

## 4. Real examples you can copy

These are real parts of your site. Copy any prompt, change the details, and send it to Claude.

**Change your phone number everywhere:**

> My phone number changed. Please replace (416) 768-3612 with (416) 555-1234 everywhere on the site, in the v10 folder.

**Add a company to the "Trusted by" scroll on the homepage:**

> On the homepage, the moving "Trusted by leaders inside" list shows CAMH, Halton Children's Aid Society, Queen's University, and AMER Sports. Please add "Sick Kids Foundation" to that list.

**Add a new testimonial to the Speaking page:**

> On the Speaking page, in the section called "What it's like in the room with Aileen," please add a fourth testimonial. The quote is: "Aileen's keynote was the highlight of our conference." The name is Jane Smith, Events Director, ABC Association. Here's a screenshot of her email so you have the exact wording.

**Change one of the signature talks:**

> On the Speaking page, under Signature Talks, the talk called "Upholding Boundaries Is a Business Strategy" needs a new description. Please replace its current paragraph with this: [paste your new paragraph]

**Swap a photo:**

> On the About page, please replace the photo of me in the yellow dress with the new photo I've attached. Keep it the same size and position.

**Feature a different Amazon review on the homepage:**

> On the homepage, under my book, there are six Amazon review cards. Please remove the one from Nanceebee and replace it with this quote from the review by Shawn: [paste the exact quote from Amazon]. Don't change the wording of the quote.

**Update your bio details:**

> On the About page, the card called "In the Community" says I'm Board Chair at Three Oaks Foundation. I've stepped down. Please remove that line and keep the rest.

**Change a headline:**

> On the homepage, the big headline says "Your Best Leaders Are Still Auditioning for Belonging." Please change it to: [your new headline]. Don't change anything else.

---

## 5. Check your change

After Claude says it's done:

1. Read Claude's summary. Does it match what you asked?
2. Wait two or three minutes.
3. Open [ameconsulting.ca](https://ameconsulting.ca) and look at the page. Refresh if needed. On a phone, close the tab and open the site fresh.

If something's not right, just tell Claude. Like you'd tell a person:

> That changed the wrong section. I meant the one lower down, under the photo.

---

## 6. See the history of every change

Want to know what changed and when? GitHub keeps the full list.

1. Go to [github.com/AileenEdwards/ameconsulting](https://github.com/AileenEdwards/ameconsulting) and sign in.
2. Above the file list, find the small **clock icon** with a number. It may say **"Commits."** Click it.
3. Now you see every change ever made. Newest first. Each line has a note, a name, and a date.
4. Click any line to see the details. Red text was removed. Green text was added.

You never need to touch anything on this page. It's just for looking.

---

## 7. Undo a change

**Option A: Ask Claude.** This is almost always the right way.

> Please undo the change from earlier today that reworded the Executive Coaching section on the Services page. Put it back exactly how it was.

Or, if you found the change in the GitHub history:

> Please restore the site to the snapshot from July 15 called "Update footer links."

The undo becomes its own snapshot. Nothing is ever lost.

**Option B: Ask Izzy.** If anything feels stuck, stop. Send Izzy a message with a screenshot. Going back to any earlier version is a five-minute job.

---

## 8. The golden rules

1. One change at a time.
2. Name the page, the spot, the old words, and the new words.
3. Attach a screenshot.
4. Check the live site after.
5. Never panic. Every version is saved forever. Undoing is easy.
