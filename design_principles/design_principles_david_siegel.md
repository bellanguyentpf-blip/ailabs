# Design Principles from David Siegel

## About the Reviewer

**Name:** David Siegel  
**Current Role:** CEO, Glide  
**Background:** Co-founder of Glide, a no-code app development platform  
**Review Context:** Developer tool startup websites

---

## Table of Contents

1. [Design Principles](#design-principles)
   - [Social Proof & Credibility](#social-proof--credibility)
   - [Developer Experience & Engagement](#developer-experience--engagement)
   - [Code Presentation](#code-presentation)
   - [Messaging & Clarity](#messaging--clarity)
   - [Visual Design & Layout](#visual-design--layout)
   - [Calls to Action](#calls-to-action)
   - [Audience & Stage Considerations](#audience--stage-considerations)
   - [Customer Engagement](#customer-engagement)
2. [Case Studies](#case-studies)
   - [Automorphic](#case-study-automorphic)
   - [Trigger.dev](#case-study-triggerdev)
   - [Mozart Data](#case-study-mozart-data)
   - [Sweep](#case-study-sweep)
   - [Mirror](#case-study-mirror)

---

# Design Principles

## Social Proof & Credibility

### Show GitHub Stars Prominently

For open-source developer tools, GitHub metrics are critical trust signals that should be visible immediately.

> "I like that I can see the GitHub Stars right at the Top. This is a popular project 4100 Stars you know it's legit right out of the gate."

> "Social proof is there a GitHub repo how many stars does it have can I look at it what's the velocity of that project that's very interesting to me."

**Good Example:** [Trigger.dev](#case-study-triggerdev) — GitHub stars visible in the header, establishing credibility immediately.

---

### Multiple Contributors Signal Project Health

When evaluating open-source projects, the contributor count indicates community engagement.

> "If there's more than like six contributors with some activity like there's some momentum around the open source if you just see the founder of the company and nothing else then it doesn't really have traction yet."

> "It's just one of the health signals of an open source project you can have an open-source project that's just the externalized source code of the company and no one's engaging."

**Good Example:** [Trigger.dev](#case-study-triggerdev) — Multiple external contributors with meaningful commits.

---

### Having Pricing Signals Maturity

Pricing differentiates projects from products and signals sustainability.

> "Having pricing is the difference between a project and a product if there's no pricing you're a project especially if you're open source."

> "Once there's pricing then you know I from as an owner of a company we deploy a lot of technology and we have a lot of vendors... it's something I can consider buying putting it into production and relying on it. It convinces you it'll stick around and be supportive."

**Good Example:** [Trigger.dev](#case-study-triggerdev) — Has pricing page indicating product maturity.

---

### Customer Logos Build Trust

Showing recognizable companies that use your product provides immediate credibility.

> "Trusted by okay so the Ripling uses it these are real companies yeah real companies use it right so this is good."

> "Case studies is a great sign of maturity I would check those out if I was feeling skeptical."

**Good Example:** [Mozart Data](#case-study-mozart-data) — Shows logos of recognizable companies using the product.

---

### Embrace Current Design Aesthetics

Developers notice when you're keeping up with modern design trends.

> "It's nice to see developers you know if they're embracing the Aesthetics and the trends of the day."

**Good Example:** [Trigger.dev](#case-study-triggerdev) — Modern, thoughtful design throughout.

---

## Developer Experience & Engagement

### Enable Immediate Product Experience

Let developers try your product without friction. The try-it experience should be prominent.

> "At the top level of the landing page I want to know how do I try it is there a button that opens a playground where I can experience this right now and change some code and rerun it and see it work."

> "Whenever you can put interactive stuff on your homepage for developer tools where they can see the calculations happen that's awesome."

**Good Example:** [Automorphic](#case-study-automorphic) — Has an interactive "break the firewall" challenge and playground.

**Bad Example:** [Automorphic](#case-study-automorphic) — Buried these interactive elements too deep on the page.

---

### Embed Interactive Elements, Don't Hide Them

Interactive demos should be inline on the page, not hidden behind clicks.

> "I would just put that in line on this page yeah you could have both a landing page for that really fun interactive experience and you could have it right here that's much more engaging than seeing these code samples."

> "There's no reason why this couldn't be a section somewhere on the website without having to click through."

**Bad Example:** [Automorphic](#case-study-automorphic) — Playground was on a separate page instead of embedded in the homepage.

---

### Optimize for Trying, Not Just Signing Up

Getting people to experience your product is more valuable than collecting email addresses.

> "What's more valuable to this company to have more people on the wait list or people trying the thing and it seems like trying the thing is the thing that's going to convince people to join the weight list to begin with."

> "I want try our playground right below the orb."

**Bad Example:** [Automorphic](#case-study-automorphic) — "Join the waitlist" CTA was prioritized over getting people into the playground.

---

### Label Interactive Elements Clearly

Make it obvious when something can be interacted with.

> "I thought this was a screenshot and now you're interacting with it yeah it's just a bit confusing to understand what we're looking at."

> "If trying it is actually something really important so people can experience it there's nothing here that says like try it live right down here change the label from button to edit me or customize me or something."

**Bad Example:** [Mirror](#case-study-mirror) — Interactive component looked like a static screenshot.

---

### Include One-Click Copy for Code

Developers expect to copy code snippets easily.

> "I like that I can pip install some code right now and there's a one-click copy icon that's great to copy it."

**Good Example:** [Automorphic](#case-study-automorphic) — Copy icon next to installation commands.

---

## Code Presentation

### Make Code as Legible as Marketing Copy

When selling a code-based product, code samples deserve equal visual treatment.

> "If the thing that you're selling is an API or service called via code the code samples should not be smaller than the copy on the website. It looks like it's not important when this is the central thing."

> "It should be text syntax highlighted it should be at least as legible as the marketing copy on your website."

**Bad Example:** [Automorphic](#case-study-automorphic) — Code samples were too small compared to marketing text.

---

### Use Syntax Highlighting for All Code

Code should always be properly syntax highlighted, not screenshots.

> "When you're showing sample code for a developer tool yes you want syntax highlighting."

> "It is text okay it's text that's good I thought those were screenshots from an IDE that would be a mistake but they didn't make that mistake."

**Good Example:** [Automorphic](#case-study-automorphic) — Used actual text with syntax highlighting instead of screenshots.

---

### Hand-Wrap Code for Presentation

Code on marketing sites needs manual formatting to fit the design.

> "When you I've designed a lot of code for marketing websites you want to get in there by hand and hand wrap the text to make it fit the presentation we have these 110 character wide lines here it's too wide."

**Bad Example:** [Automorphic](#case-study-automorphic) — Lines were too wide for the presentation context.

---

### Annotate Code to Explain Functionality

Help visitors understand unfamiliar code with inline explanations.

> "They're showing us the code here and they're actually highlighting in plain English what each line of code does which is very interesting it really helps me understand quickly at a glance a foreign codebase that I'm not instantly familiar with."

> "They're sort of breaking it down step by step what's happening it's a lot of information but it's really well done."

**Good Example:** [Trigger.dev](#case-study-triggerdev) — Each code section had plain English annotations.

---

### Simplify Complex Code Examples

Avoid overwhelming visitors with horizontally and vertically scrolling code blocks.

> "It's horizontal and vertically scrolling it's a lot yeah it's easy to miss there so maybe just a simpler example."

> "The prompt is inside of a python string it's getting syntax highlighted in an undifferentiated way and that string contains within it Json right and prompt instructions you might want to make that a little bit visually easy for people to pick out."

**Bad Example:** [Automorphic](#case-study-automorphic) — Complex nested code with JSON inside Python strings was hard to follow.

---

## Messaging & Clarity

### Lead with What It Does, Then Benefits

For developer tools, credibility comes from technical clarity, not marketing promises.

> "We have a claim that it's without all the work I'd like to know what it is before I understand the benefit."

> "Especially for a developer tool some products you the other way around you start with the benefits and then you can get into the dirty technical details but when it comes to developer tools you want to be credible with your users who are very intelligent very technical choosy people they want the details."

**Bad Example:** [Mirror](#case-study-mirror) — Led with "without all the work" without explaining what the product was.

---

### Don't Bury Your Most Exciting Feature

If you have a standout capability, make it immediately obvious.

> "This is a sensational and extremely exciting idea it took us way too long to figure out what it was."

> "Sweep automatically creates PRS against your code base based on issues you file something like that just very clearly tell me what this thing does because it's too exciting for people to miss out on it."

> "This website is totally burying the lead they need to tell people that this is something that can automatically write PRS against your repositories on GitHub just from tickets."

**Bad Example:** [Sweep](#case-study-sweep) — The exciting core feature (auto-generating PRs from issues) wasn't clear until deep into the page.

---

### Hit Visitors Over the Head with Your Value

Don't make people work to understand what you do.

> "When people hit the website you need to hit them over the head with what this does otherwise if it's too nuanced people are not going to be able to take anything away from it."

**Bad Example:** [Sweep](#case-study-sweep) — Took too long to explain the core product.

---

### Broad Claims Invite Skepticism

When you claim to do many things, people doubt you do any of them well.

> "That's a lot it makes me skeptical that they do all of those very well right."

> "It's not as specific as some of the value props that we've seen before um this is very Broad."

**Bad Example:** [Mozart Data](#case-study-mozart-data) — Listed "ETL data warehousing data transformation and more" which felt unfocused.

---

### Address the Primary Objection

If your product sounds too good to be true, acknowledge that skepticism.

> "I think this helps to address probably one of the primary questions that people have which is like sounds super exciting does it actually work you're going to have to try it for yourself."

> "This is it too good to be true and if you try it and it works take my money."

**Needs Improvement:** [Sweep](#case-study-sweep) — Should address "does this actually work?" skepticism head-on.

---

### Explain What's Different About Your Approach

If you're in a crowded space, acknowledge competitors and differentiate.

> "I've seen this premise a lot a no-code react component editor or people who are less technical or the designers on your team could focus on the component library then the developers would refer to them... it would be good to acknowledge what's different about this approach."

> "I think the promise of these always sounds great they fall down in practice because something gets out of sync... if they do have a way in here to actually keep it always in sync then I think highlighting that would address the primary concern that a lot of people would have."

**Needs Improvement:** [Mirror](#case-study-mirror) — Didn't differentiate from other no-code component editors.

---

## Visual Design & Layout

### Use Bento Box Feature Grids

A grid layout with interlocking sections is an effective way to present features.

> "I love a feature grid the sort of bento box design is sometimes how it's referred where you have you split up your major features into these sort of interlocking rectangles where you get a title a short description and then you do an illustration it's a really nice way to consume important features."

**Good Example:** [Trigger.dev](#case-study-triggerdev) — Well-designed feature grid layout.

---

### Alternate Background Colors Between Sections

Visual differentiation helps users parse content sections.

> "Here's a simple technique for these contiguous sections put them on an alternating background color where one is white and the next one is off-white and increase their margin."

> "Right now these are bleeding into each other."

**Bad Example:** [Mirror](#case-study-mirror) — Sections bled together without visual separation.

---

### Prevent Screenshots from Bleeding into Background

Product screenshots need visual contrast with the page background.

> "Their screenshots look like the same design as this website so the website is black text on a white background and all the screenshots are also showing black text on a white background and they kind of bleed into the background."

> "It might be better to change the background color of the website so the white UI elements stick out more."

**Bad Example:** [Mirror](#case-study-mirror) — White screenshots on white background.

---

### Show Your Product Early

Don't make visitors dig to see what they're getting.

> "I think it's almost always a mistake not to have a screenshot of your product on the homepage you don't want to bury that."

> "If you're building a developer tool and especially if you're early stage the people coming to your website are developers they're going to be using your product show them the product show them the code examples."

**Bad Example:** [Mozart Data](#case-study-mozart-data) — Product screenshot didn't appear until a subpage.

---

### Simplify Multi-Product Homepages

When you have multiple products, present them individually rather than all at once.

> "When you've got this many different products how do you simplify that say on a homepage without sounding like you do everything it's a challenge for sure."

> "I would maybe break them up into their own section... so we can understand them one at a time."

**Needs Improvement:** [Mozart Data](#case-study-mozart-data) — Multiple products presented without clear separation.

---

### Design Care Shows Everywhere

Attention to detail on your website signals the quality of your product.

> "You can tell that they care about design here like even just how it's easy to just dump a block of code in a box and move on but you can tell it's like very thoughtful."

> "Their care for design on their website seeps through into GitHub the readme everything."

**Good Example:** [Trigger.dev](#case-study-triggerdev) — Consistent design quality throughout.

---

## Calls to Action

### Differentiate Buttons from Copyable Text

Interactive elements need distinct visual treatment from static content.

> "You've got text here that you can select and copy that looks just like the buttons so some way to make these primary actions that you want users to take more prominent."

**Bad Example:** [Automorphic](#case-study-automorphic) — Buttons and copyable text had similar styling.

---

### Match CTAs to Your Audience

The primary call to action should reflect who's coming to your site.

> "You can also see the main CTA book demo... it's not check out our GitHub repo or download some code it's talk to a person get on a calendar so this is more sales led."

> "Pricing tells me they're probably going for larger companies... there's probably lots of key decision makers that need different bits of information before making a purchasing decision."

**Good Example:** [Mozart Data](#case-study-mozart-data) — "Book Demo" matched their enterprise sales motion.

---

## Audience & Stage Considerations

### Tailor Content to Your Stage and Audience

Early-stage companies should lead with product; later-stage companies can lead with social proof.

> "If you're building a developer tool and especially if you're early stage the people coming to your website are developers they're going to be using your product show them the product show them the Code examples."

> "As you get later stage the people coming to your website might be higher level engineering Executives and then you might want the customer testimonials the pricing contact sales but when you're early I think you want to show the product right away."

**Good Example:** [Mozart Data](#case-study-mozart-data) — Appropriately targeted executives with testimonials and "Book Demo" given their $1,000/month price point.

---

### Understand Early-Stage Pricing Norms

Developer tools at early stage typically have very low or free pricing tiers.

> "Developer tools at early stage are usually free or some ridiculously low price like $4 a month greatly undercharging."

> "This pricing tells me they're probably going for larger companies... there's probably lots of key decision makers that need different bits of information before making a purchasing decision."

---

## Customer Engagement

### Be Hyper-Available When You're Small

Founder availability is a startup superpower.

> "I think it's really great when you're early in your company to be hyper available to your customers get the intercom app on your phone in your pocket and put it on your landing page and let people interrupt your dates your dinners uh distract you at the gym and talk to your customers all the time."

> "If the founders are available behind that it'd be really exciting to start talking to them."

**Good Example:** [Sweep](#case-study-sweep) — Chat widget on the website for direct access.

---

### Responsiveness is a Competitive Advantage

Your small size enables personalized service no enterprise can match.

> "A lot of times as small companies and Founders you're worried that your disadvantage is that you're so small this is actually one of the things that gives you an advantage your responsiveness your personal availability giving people your cell phone number making yourself available on the website 24/7 no larger company is going to do that."

> "It's also the easiest way to impress people in the world is to call yourself a founder and like reply to people's emails and their chats people are like wow I can't believe I'm talking to the founder."

---

# Case Studies

## Case Study: Automorphic

**Website:** AI model security platform  
**Product:** Secure, self-improving language models with firewall protection

### What Worked

- **Interactive brain visualization:** "We've got a cool floaty AI brain... it's interactive the text glitches when you get your cursor over it Matrix style... it's got a fidget spinner for me to play with developers love that"
- **Concise headline:** "Secure self-improving language models that's a concise description I don't know all the details but at least it's brief"
- **Real text for code:** "It is text okay it's text that's good I thought those were screenshots from an IDE that would be a mistake but they didn't make that mistake"
- **Copy icon for code:** "I like that I can pip install some code right now and there's a one-click copy icon that's great"
- **Interactive challenge:** "Think you can break our firewall okay fun this is really inviting... We're interacting with this... we're playing models right now"
- **Community access:** "There's a Discord up here where you can join the community"
- **Playground available:** "We've also got a playground here great"

### What Failed

- **Buried CTA:** "I can join a weight list which makes me nervous that I can't try this right away... I feel like I would have missed the join the wait list it's a bit buried"
- **Code too small:** "The code samples should not be smaller than the copy on the website it looks like it's not important when this is the central thing"
- **Lines too wide:** "We have these 110 character wide lines here it's too wide"
- **Complex code samples:** "It's horizontal and vertically scrolling it's a lot yeah it's easy to miss there so maybe just a simpler example"
- **Confusing product organization:** "Now I'm thinking these are all different products code names or apis oh I see they're they're package names"
- **Hidden scrolling:** "I just realized this Scrolls too that was not obvious to me"
- **Buttons look like text:** "You've got text here that you can select and copy that looks just like the buttons"
- **Playground buried:** "It feels like maybe this should be up higher right like rather than joining the weight list maybe we want to get people right in playing around with it"

### Key Lessons

- Put interactive playground above the fold, not below
- Optimize for product experience over waitlist signups
- Make code samples as prominent as marketing copy
- Hand-format code to fit the presentation width
- Simplify complex code examples
- Visually differentiate buttons from selectable text
- Make horizontal/vertical scrolling obvious

---

## Case Study: Trigger.dev

**Website:** Background jobs framework  
**Product:** Open-source background jobs framework for Next.js

**Overall Assessment:** "This is a really nice open-source company product... nice design interesting approach to explaining how their product works it's a great package"

### What Worked

- **GitHub stars visible:** "I like that I can see the GitHub Stars right at the Top This is a popular project 4100 Stars you know it's legit right out of the gate"
- **Great domain:** "Cool domain easy to remember"
- **Community access:** "We've got a little Discord icon for joining the community"
- **Pricing indicates maturity:** "They have pricing so they're a little bit mature you can actually pay for this"
- **Annotated code:** "They're showing us the code here and they're actually highlighting in plain English what each line of code does which is very interesting it really helps me understand quickly at a glance"
- **Feature grid design:** "I love a feature grid the sort of bento box design... a really nice way to consume important features"
- **Design consistency:** "You can tell that they care about design here like even just how it's easy to just dump a block of code in a box and move on but you can tell it's like very thoughtful"
- **Healthy open source:** "Their care for design on their website seeps through into GitHub the readme everything"
- **Multiple contributors:** "The first external contributor number six has done 15 commits 1600 lines of code that's not nothing"
- **Clear product types:** "They have a cloud and you could run it yourself"

### What Failed

- No significant failures noted

### Key Lessons

- Show GitHub stars prominently in the header
- Include pricing to signal product maturity
- Annotate code samples with plain English explanations
- Use bento box layouts for feature presentation
- Let design quality extend to GitHub repo
- Offer both cloud and self-hosted options

---

## Case Study: Mozart Data

**Website:** Data platform  
**Product:** All-in-one data platform with ETL, warehousing, and transformation

### What Worked

- **Real customer logos:** "Trusted by okay so the Ripling uses it these are real companies"
- **Case studies available:** "Case studies is a great sign of maturity"
- **Appropriate for audience:** "This pricing tells me they're probably going for larger companies... from that perspective you know this site actually does a good job"
- **Clear CTA for sales motion:** "The main CTA book demo... it's talk to a person get on a calendar so this is more sales led"

### What Failed

- **Too broad claims:** "The modern data platform for growing businesses every tool you need to make the most of your data ETL data warehousing data transformation and more that's a lot it makes me skeptical that they do all of those very well"
- **Missing product screenshots on homepage:** "I think it's almost always a mistake not to have a screenshot of your product on the homepage you don't want to bury that"
- **Vague promises:** "We're still seeing the sort of vague Promises of putting insights into reach connecting and syncing centralizing processes as a developer this doesn't really speak to me when it's not talking about the technology"
- **Screenshot too small:** "It's too small to tell what's going on we've got a bunch of data sources I presume that are floating around here"
- **Multi-product complexity:** "When you've got this many different products how do you simplify that say on a homepage without sounding like you do everything it's a challenge for sure"
- **Products not separated:** "I would maybe break them up into their own section... so we can understand them one at a time"

### Key Lessons

- Show product screenshots on the homepage
- Be specific about capabilities rather than claiming to do everything
- Understand your audience—enterprise buyers need different info than developers
- Use case studies to address skepticism about broad claims
- Match CTA style (book demo vs. try it) to your sales motion
- Break multiple products into separate sections so users can understand them individually
- Early-stage dev tools should show product/code; later-stage can emphasize testimonials

---

## Case Study: Sweep

**Website:** AI code assistant  
**Product:** AI that automatically creates PRs from GitHub issues

**Overall Assessment:** "This is a sensational and extremely exciting idea" but "this website is totally burying the lead"

### What Worked

- **Exciting core concept:** "This is a sensational and extremely exciting idea"
- **Visual demo:** "Okay so you go on GitHub you make an issue and then sweep is going to magically create a PR for you with what you've described"
- **Example tickets shown:** "You can see some example tickets"
- **Chat widget:** "I really like that they have the chat widget on their website I'm assuming I can talk to a person"
- **Try it yourself approach:** "This helps to address probably one of the primary questions that people have which is like sounds super exciting does it actually work you're going to have to try it for yourself"

### What Failed

- **Buried lead:** "It took us way too long to figure out what it was"
- **Vague headline:** "Ship code faster sounds good... let Sweep handle your Tech debt so you can focus on the exciting problems... it's not literally about shipping faster"
- **Features too buried:** "Now we're starting to get into some of the specifics of what it is but again still too buried"
- **No clear product explanation:** "When people hit the website you need to hit them over the head with what this does otherwise if it's too nuanced people are not going to be able to take anything away from it"

### Key Lessons

- Lead with your most exciting capability
- "Automatically creates PRs from GitHub issues" is clearer than "ship code faster"
- Hit visitors over the head with what you do
- Don't bury specifics below vague value propositions
- If your product sounds too good to be true, make it easy to try
- Be founder-available through chat widgets

---

## Case Study: Mirror

**Website:** UI component library tool  
**Product:** No-code React component editor for design-to-code synchronization

### What Worked

- **Interactive component editing:** "Something interactive whenever you can put interactive stuff on your homepage for developer tools where they can see the calculations happen that's awesome"

### What Failed

- **Unclear what it is:** "I'm still a little confused about what this is"
- **Lead with benefits over explanation:** "We have a claim that it's without all the work I'd like to know what it is before I understand the benefit"
- **Screenshots blend into page:** "Their screenshots look like the same design as this website so the website is black text on a white background and all the screenshots are also showing black text on a white background and they kind of bleed into the background"
- **Interactive element looks static:** "I thought it was a screenshot too... I thought this was a screenshot and now you're interacting with it yeah it's just a bit confusing to understand what we're looking at"
- **Sections bleed together:** "Right now these are bleeding into each other... build product at the speed of light with this illustration that doesn't actually do too much for you um and then document your data system is another point I would just put those in separate sections"
- **No differentiation:** "I've seen this premise a lot a no-code react component editor... it would be good to acknowledge what's different about this approach"
- **Doesn't address primary concern:** "The promise of these always sounds great they fall down in practice because something gets out of sync... if they do have a way in here to actually keep it always in sync then I think highlighting that would address the primary concern"
- **Missing "try it" labels:** "There's nothing here that says like try it live"

### Key Lessons

- Explain what you are before explaining benefits
- Differentiate from similar solutions in the space
- Address the known objections head-on (e.g., synchronization problems)
- Make screenshots visually distinct from the page background
- Label interactive elements clearly ("Try it live", "Edit me")
- Use alternating backgrounds to separate content sections
- Add margin between contiguous sections
