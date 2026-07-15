# AME Consulting Website Guide

Hi Aileen! This is your go-to guide for everything about your website. How to change it, how to undo anything, where your logins are, and how it all works. No tech experience needed.

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
10. [Your account logins, all in one place](#10-your-account-logins-all-in-one-place)
11. [Your domain and your email](#11-your-domain-and-your-email)
12. [Need help? Contact Izzy](#12-need-help-contact-izzy)
13. [Technical reference (for developers)](#13-technical-reference-for-developers)

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
3. **Connect them.** In Claude, click **Code** in the left sidebar (or go to [claude.ai/code](https://claude.ai/code)). Click **Connect GitHub**, sign in, and click **Authorize**. Then pick the **ameconsulting** project. You never have to do this again.

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

Two more habits that help:

- **One change at a time.** Ten changes in one message is where mistakes happen.
- **Use Plan mode.** In Claude Code there's a setting called Plan mode. Turn it on. Claude will explain its plan first, you approve it, then it makes the change.

---

## 5. Copy-paste examples for the most common changes

These use real parts of your site. Copy any prompt, change the details, and send it to Claude.

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

**Add a whole new page:**

> Add a new page called [page name] to my website. It should include [describe what goes on the page]. Add a link to it in the menu at the top, and match the look of my other pages.

**Add a new section to an existing page:**

> On the [page name] page, add a new section after the [describe the nearby section]. The heading should be "[heading text]" and the content should be: [describe or paste the content]

**Change a button:**

> On the [page name] page, find the button that says "[current button text]". Change it to say "[new button text]" and make it link to [where it should go].

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

---

## 10. Your account logins, all in one place

| Account | Link | What it's for |
|---|---|---|
| **GitHub** (your website files) | [github.com/AileenEdwards/ameconsulting](https://github.com/AileenEdwards/ameconsulting) | Where your website lives |
| **GitHub Pages settings** | [Pages settings](https://github.com/AileenEdwards/ameconsulting/settings/pages) | Domain and HTTPS settings |
| **Network Solutions** | [networksolutions.com](https://www.networksolutions.com/my-account/login) | Your domain and email billing |
| **DNS settings** | [Manage DNS Settings Page](https://www.networksolutions.com/my-account/domain-center/dns-details?domain=ameconsulting.ca) | Where your website and email point |
| **Google Workspace** | [admin.google.com](https://admin.google.com) | Manage your @ameconsulting.ca email |

---

## 11. Your domain and your email

Your domain (`ameconsulting.ca`) and your professional email (`@ameconsulting.ca`) are both managed through **Network Solutions**.

Log in at Network Solutions if you ever need to:

- Renew your domain name
- Update where your website or email points
- Transfer your domain to another provider

**Optional, for someday: moving your email billing to Google.**

Right now your email is billed through Network Solutions. You can switch to paying Google directly. Same service, same price, one less middleman. Nothing to do now; everything works. If you ever want to switch:

1. Go to [admin.google.com](https://admin.google.com) and sign in with your `@ameconsulting.ca` email
2. Click **Billing** in the left menu, then **Subscriptions**
3. Go to **Account**, then **Reseller Management**
4. Find your subscription, click **Transfer**, and choose **Transfer to Google**
5. Enter a credit card. Google bills you directly from then on.

Your emails, contacts, and files all stay exactly as they are. Full instructions from Google: [support.google.com/a/answer/7643791](https://support.google.com/a/answer/7643791)

---

## 12. Need help? Contact Izzy

Reach out to **Izzy Piyale-Sheard** anytime:

- Email: [izzy@joinclearcareer.com](mailto:izzy@joinclearcareer.com)
- LinkedIn: [linkedin.com/in/izzydoesizzy](https://linkedin.com/in/izzydoesizzy)

---

## 13. Technical reference (for developers)

*If a developer or web professional ever needs to know how your website is set up, point them here.*

| | |
|---|---|
| **Hosting** | GitHub Pages |
| **Repo** | [github.com/AileenEdwards/ameconsulting](https://github.com/AileenEdwards/ameconsulting) |
| **Domain Registrar** | Network Solutions — [networksolutions.com](https://www.networksolutions.com/my-account/login) |
| **DNS** | Network Solutions — [Manage DNS Settings Page](https://www.networksolutions.com/my-account/domain-center/dns-details?domain=ameconsulting.ca) |
| **Email** | Google Workspace via Network Solutions reseller |
| **Live URL** | [ameconsulting.ca](https://ameconsulting.ca) |
| **Social preview image** | `v10/images/og-image.jpg`, regenerate from `v10/images/og-card-source.html` |
