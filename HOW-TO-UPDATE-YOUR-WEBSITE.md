# How to Update Your Website

A guide for Aileen. No tech experience needed.

**What's in this guide:**

1. [Why you can never permanently break your website](#1-why-you-can-never-permanently-break-your-website)
2. [What GitHub is, and why your website lives there](#2-what-github-is-and-why-your-website-lives-there)
3. [Set up Claude and GitHub (you only do this once)](#3-set-up-claude-and-github-you-only-do-this-once)
4. [How to write a change request that Claude gets right the first time](#4-how-to-write-a-change-request-that-claude-gets-right-the-first-time)
5. [Copy-paste examples for the most common changes](#5-copy-paste-examples-for-the-most-common-changes)
6. [How to check that your change is live](#6-how-to-check-that-your-change-is-live)
7. [Where to find the history of every change in GitHub](#7-where-to-find-the-history-of-every-change-in-github)
8. [How to undo a change and go back to an earlier version](#8-how-to-undo-a-change-and-go-back-to-an-earlier-version)
9. [Five rules that make every update go smoothly](#9-five-rules-that-make-every-update-go-smoothly)

---

## 1. Why you can never permanently break your website

Every time your website changes, a snapshot of the whole site gets saved. Automatically. Those snapshots last forever.

So if a change ever looks wrong, we go back to an earlier snapshot. That takes five minutes.

The worst case is never "the site is ruined." The worst case is "we undo it."

Keep that in mind while you read the rest. You can experiment without fear.

---

## 2. What GitHub is, and why your website lives there

GitHub is a website where people store files for projects. Your website's files are stored there, in a project called **ameconsulting**. Here's the address: [github.com/AileenEdwards/ameconsulting](https://github.com/AileenEdwards/ameconsulting). It belongs to your account.

Why GitHub instead of a normal website builder? Three reasons:

1. **It publishes the site.** The files in your GitHub project ARE the website. When a file changes there, ameconsulting.ca updates itself a few minutes later. Nobody has to upload anything.
2. **It remembers everything.** Every change gets saved as a snapshot, with a date and a short note about what changed. GitHub calls each snapshot a "commit." You'll see that word on screen. Just think "snapshot."
3. **It costs nothing.** No monthly website builder fee. Ever.

The note on each snapshot matters. It's how you can look back and know "oh, that's the day we changed the phone number." Claude writes these notes for you when it saves a change.

---

## 3. Set up Claude and GitHub (you only do this once)

If this part feels confusing, do it with Izzy on a call. It takes five minutes.

1. **Get Claude.** Go to [claude.ai](https://claude.ai) and sign in. Or download the Claude app on your phone. Your phone works fine for all of this.
2. **Find your GitHub login.** Your username is **AileenEdwards**. Lost the password? Click "Forgot password" on github.com and it emails you a reset.
3. **Connect them.** Go to [claude.ai/code](https://claude.ai/code). The first time, it asks permission to connect to your GitHub. Say yes. Pick the **ameconsulting** project. You never have to do this again.

---

## 4. How to write a change request that Claude gets right the first time

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

## 5. Copy-paste examples for the most common changes

These are real parts of your site. Copy any prompt, change the details, and send it to Claude.

**Change your phone number everywhere:**

> My phone number changed. Please replace (416) 768-3612 with (416) 555-1234 everywhere on my website.

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

## 6. How to check that your change is live

After Claude says it's done:

1. Read Claude's summary. Does it match what you asked?
2. Wait two or three minutes.
3. Open [ameconsulting.ca](https://ameconsulting.ca) and look at the page. Refresh if needed. On a phone, close the tab and open the site fresh.

If something's not right, just tell Claude. Like you'd tell a person:

> That changed the wrong section. I meant the one lower down, under the photo.

---

## 7. Where to find the history of every change in GitHub

Want to know what changed and when? Here is the exact path, click by click:

1. Go to [github.com/AileenEdwards/ameconsulting](https://github.com/AileenEdwards/ameconsulting) and sign in.
2. You'll see a list of folders and files. Look above that list, on the right side. There's a small **clock icon** with a number next to it. It may also say **"Commits."** Click it.
3. You're now on the **history page**. Every snapshot ever saved, newest at the top. Each row shows the note, who saved it, and when.
4. **Click any row** to see exactly what changed in that snapshot. Words that were removed show in red. Words that were added show in green. Ignore the code around them. The red and green tell the story.
5. Each row also has a short code on the right, seven letters and numbers, like `df73900`. That code is the snapshot's ID. You'll use it if you ever want to go back to that exact version. To copy it, click the little **copy icon** next to the code.

Nothing on this page can break anything. It's read-only. Look around freely.

---

## 8. How to undo a change and go back to an earlier version

**Option A: Ask Claude. This is the way to do it 99% of the time.**

If the change was recent, describe it:

> Please undo the change from earlier today that reworded the Executive Coaching section on the Services page. Put it back exactly how it was.

If you want to go back to a specific snapshot, get its ID from the history page (Section 7, step 5), and say:

> Please restore my website to snapshot df73900. That version was correct.

The undo becomes its own snapshot. So even undos can be undone. Nothing is ever lost.

**Option B: Look before you leap, using GitHub.**

Not sure which snapshot was the good one? You can view the whole site as it was at any point:

1. On the history page, find the row for the snapshot you want to inspect.
2. On the right side of that row, click the **< > icon** (it means "browse the files at this point in time").
3. You're now looking at the site's files exactly as they were on that day. When you've confirmed it's the version you want, copy that snapshot's ID and give it to Claude using the prompt above.

**Option C: Ask Izzy.**

If anything feels stuck, stop. Send Izzy a message with a screenshot. Going back to any earlier version is a five-minute job. There is no situation that can't be walked back.

---

## 9. Five rules that make every update go smoothly

1. One change at a time.
2. Name the page, the spot, the old words, and the new words.
3. Attach a screenshot.
4. Check the live site after.
5. Never panic. Every version is saved forever. Undoing is easy.
