# How to Update Your Website

A guide for Aileen. No tech experience needed.

---

## The short version

Your website is a set of files stored in one place online, called GitHub. Think of GitHub as a filing cabinet that also keeps a photo of every version of every file, forever. Nothing you do can permanently break the site, because we can always go back to an earlier photo.

To change the website, you talk to Claude (the AI assistant) in plain English. You tell it exactly what you want changed, it edits the files for you, and the live site updates a few minutes later.

That's the whole system. The rest of this guide walks through each part slowly.

---

## Part 1: What you need (one-time setup)

You only do this once.

1. **A Claude account.** Go to [claude.ai](https://claude.ai) and sign in, or download the Claude app on your phone. This works fine from a phone.
2. **Your GitHub account.** You already have one. Your username is **AileenEdwards** and your website lives at [github.com/AileenEdwards/ameconsulting](https://github.com/AileenEdwards/ameconsulting). If you've lost the password, GitHub has a "Forgot password" link and it emails you a reset.
3. **Connect the two.** In Claude, go to [claude.ai/code](https://claude.ai/code). The first time, it will ask permission to connect to your GitHub. Say yes and pick the **ameconsulting** repository ("repository" is just GitHub's word for a project folder). You only have to do this once. If any of this step feels confusing, ask Izzy to do it with you on a call. It takes five minutes.

---

## Part 2: How to ask for a change (the most important part)

Claude is smart, but it cannot read your mind. The difference between a great result and a frustrating one is almost always how specific the request is.

Every request should include:

1. **Which page.** Homepage, Services, Speaking, About, or Contact.
2. **Which part of the page.** "Near the top," "the section with my book," "the footer at the very bottom."
3. **The exact words you see now.** Copy them word for word.
4. **What you want instead.** The exact new wording, or a clear description of the change.
5. **A screenshot, whenever possible.** On an iPhone, press the side button and volume-up button at the same time. On a Mac, press Shift + Command + 4 and drag over the area. Then attach the picture to your message in Claude, the same way you'd attach a photo to a text message. A screenshot removes almost all guesswork.

**A vague request (avoid this):**

> "Can you fix the services page? Something looks off."

Claude will have to guess what "off" means, and it might guess wrong.

**A specific request (do this):**

> "On the Services page, in the section called Executive Coaching, the text currently says 'Bi-Weekly Sessions.' Please change it to 'Weekly Sessions.' Screenshot attached, I circled the part I mean."

That request will be done correctly the first time, every time.

**One more tip:** make one change request at a time, or a short list of small ones. Ten unrelated changes in one message is where mistakes creep in.

---

## Part 3: Making the change

1. Go to [claude.ai/code](https://claude.ai/code) in a browser, or open the Claude app on your phone.
2. Make sure it's pointed at your **ameconsulting** repository (it remembers after the first time).
3. Type your request, following the recipe in Part 2. Attach your screenshot.
4. Claude will work for a minute or two and describe what it changed. Read its summary and make sure it matches what you asked for.
5. Claude will save the change to GitHub. When it saves, it writes a short note describing the change (this note is called a "commit message," and you'll see these notes in Part 5).
6. Wait a few minutes, then open [ameconsulting.ca](https://ameconsulting.ca) and check the page. If it doesn't look updated, refresh the page. On a phone, close the browser tab and open the site fresh.

If the result isn't right, just tell Claude what's wrong, the same way you'd tell a person: "That changed the wrong section. I meant the one lower down, under the photo."

---

## Part 4: How GitHub works, in plain language

GitHub does two jobs for you:

**Job 1: It stores the website.** The files in your ameconsulting repository ARE the website. When a file changes there, the live site at ameconsulting.ca updates itself a few minutes later. Nobody has to "upload" anything anywhere.

**Job 2: It remembers everything.** Every time anyone saves a change, GitHub takes a snapshot of the entire website at that moment, with a date, a name, and a note about what changed. These snapshots are called **commits**. They go back to the very first day of the project and they can never be deleted by accident.

This is why you can be relaxed about making changes. The worst case is never "the website is ruined." The worst case is "we go back to yesterday's snapshot," which takes a few minutes.

---

## Part 5: How to see the history of every change

1. Go to [github.com/AileenEdwards/ameconsulting](https://github.com/AileenEdwards/ameconsulting) and sign in.
2. You'll see a list of folders and files. Near the top right of that list there's a small clock icon with a number next to it (the number of snapshots so far). It may also say **"Commits."** Click it.
3. You're now looking at the full history: every change ever made, newest at the top. Each line shows the note that was written when the change was saved, who made it, and when.
4. Click any line to see exactly what changed in that snapshot. Text that was removed shows in red, text that was added shows in green. You don't need to understand the code around it; the red and green words tell the story.

This page is also handy when something on the site looks different and you're not sure why. The history will show what changed and when.

---

## Part 6: How to undo a change

There are two ways. The first one is almost always the right one.

**Option A: Ask Claude (recommended).**

Go back to Claude, and tell it what to undo, being specific about what and when:

> "Please undo the change from earlier today that reworded the Executive Coaching section on the Services page. Put it back exactly how it was before."

Or, if you found the exact snapshot in the history page:

> "Please restore the site to the snapshot from July 15 called 'Update footer links.'"

Claude will roll it back and save that as a new snapshot. Nothing is lost either way; even the undo gets its own entry in the history.

**Option B: Ask Izzy.**

If anything ever feels stuck, or the site looks wrong and you can't tell why, stop and send Izzy a message with a screenshot. Reverting to any earlier snapshot is a five-minute job. There is no situation that can't be walked back.

---

## The golden rules

1. Be specific: page, section, exact current words, exact new words.
2. Include a screenshot whenever you can.
3. One change at a time.
4. Check the live site after every change.
5. If something looks wrong, don't panic and don't keep clicking. Every version of the site is saved forever, and going back is easy.
