# Design Principles from Rio Lou

## About the Reviewer

**Name:** Rio Lou  
**Current Role:** Head of Design, Cursor  
**Background:** Founding designer at Notion, Product Designer at Stripe and Asana  
**Review Context:** Startup websites built with Cursor by YC founders

---

## Table of Contents

1. [Design Principles](#design-principles)
   - [Messaging & Clarity](#messaging--clarity)
   - [Visual Design & Polish](#visual-design--polish)
   - [Interaction & Motion](#interaction--motion)
   - [Information Architecture](#information-architecture)
   - [AI Product-Specific UX](#ai-product-specific-ux)
2. [Case Studies](#case-studies)
   - [Crunched](#case-study-crunched)
   - [Velvet](#case-study-velvet)
   - [Clavis AI / Strata](#case-study-clavis-ai--strata)
   - [Code Crafters](#case-study-code-crafters)
   - [Slashy](#case-study-slashy)
   - [Freya](#case-study-freya)
   - [Finta](#case-study-finta)
   - [Vibe Flow](#case-study-vibe-flow)

---

# Design Principles

## Messaging & Clarity

### Answer the Four Questions Immediately

Every visitor arrives with the same questions. Your hero section must answer them fast.

> "A lot of times when people hit a site, you know, they're asking themselves a question: What is this? Is it for me? Does it work? Is it credible? And I have to work pretty hard to figure out the answers to those questions."

**Good Example:** [Freya](#case-study-freya) — "It's very clear... we understand what they do and I think if we ran a call center, an enterprise call center, we'd probably consider this and we know that this is for us."

**Bad Example:** [Velvet](#case-study-velvet) — "I'm not sure what I'm looking at. What is this for? Is it for like an e-commerce thing? Is it for like an ad?"

---

### Use a Literal Sub-Headline

If your main headline is clever or aspirational, pair it with a concrete explanation.

> "A common pattern is like a sub headline under here... sometimes people have like a cute kind of marketing headline but then if you do that you should have like a literal sub headline that explains exactly what and you should talk to the people you want to talk to."

**Bad Example:** [Crunched](#case-study-crunched) — "Not sure what I'm getting from the hero at all... there's tiny text here that says Excel native AI analyst. Not sure what it means."

---

### Speak Your Users' Language, Not Your Own

Avoid internal jargon and invented concepts. Use the words your customers actually use.

> "The thing I hate for like a lot of companies what they do is like they love talking in their own words and with their own concepts that they came up that nobody else understands... The best way is to talk to your users and use the words that they understand. You talk in their language in their problems, the world they are used to now and the new thing, how is it different?"

**Bad Example:** [Clavis AI](#case-study-clavis-ai--strata) — "Progressive discovery, smart navigation, precise execution. Not sure what they mean... It is very jargony."

---

### Own Your Identity

Don't define yourself by referencing other products. Explain what you do directly.

> "They're using cursor to describe what they do. So cursor for email... power of chat GPT... best of super deep. So they keep calling out all these other products that people may know to describe what they do rather than just literally explaining what they do... And owning it themselves."

**Bad Example:** [Slashy](#case-study-slashy) — "They almost look like notion agent and cursor in one. But lacking all the details."

---

### Differentiate from Competitors

Visitors need to understand why you over alternatives.

> "How is it different from other video models?... What's special about it. What's different from your video thing versus say like Sora?"

**Bad Example:** [Velvet](#case-study-velvet) — No explanation of differentiation from existing AI video tools.

---

### State Who It's For

Make your target audience explicit, especially if it's a specific segment.

> "For US-based C corps, LLC's, and PBC's... Maybe like kind of fold that with the primary messaging."

**Needs Improvement:** [Finta](#case-study-finta) — Target audience was buried below the fold instead of in the hero.

---

### Don't Lead with Negatives

Frame your value proposition positively rather than telling people what not to do.

> "It was a lot to get through here and it was it started out with the negative stop doing this thing. So instead of saying what they do in the positive, it started out with don't do this which is not informative for what they actually do."

**Bad Example:** [Code Crafters](#case-study-code-crafters) — Hero led with "Stop following tutorials designed for beginners."

---

## Visual Design & Polish

### Avoiding the "Vibe Coded" Look

AI-generated designs have telltale signs. Avoid these defaults to look professional.

> "You want to avoid say all the typical AI slop say like massive shadows, purple gradients... Bad typography."

> "If you look at all the little details, they don't melt together... everything feels kind of disjointed."

> "This is almost like a vibe code of VS Code... That's just pure AI generated UI, you know? There's not even like a... not even say you're not using chassen or whatever... it's just raw AI output."

**Telltale Signs:**
- Purple gradients
- Massive shadows
- Generic icon sets (like Heroicons defaults)
- Inconsistent hover states
- Misaligned elements
- Mixed visual styles

**Bad Example:** [Code Crafters](#case-study-code-crafters) — "Oh, we got the purple gradients. They're here. Scary... This looks vibe coded. It's got all the hallmarks of it."

**Bad Example:** [Vibe Flow](#case-study-vibe-flow) — "There's like weird hover states like with little radius on top but not on the bottom."

---

### When in Doubt, Go Safe

If you're not a designer, use conservative defaults rather than risky choices.

> "If you're not sure, actually go safe. Say like you just use system fonts. You let others decide for you instead of like you deciding."

> "With like a really robust like foundational set of tokens and components, AI is able to compose them pretty well."

---

### Details Matter Above the Fold

First impressions are formed instantly. Polish everything visible on load.

> "The first impression really matters. And anything above the fold just make them as good as you can. Like no, you know, obvious detail bugs."

**Bad Example:** [Slashy](#case-study-slashy) — "The video is like clipped wrongly. There's like an extra like a white border."

---

### Consistency Across the Site

Every page should feel like the same product.

> "The whole website changed when we clicked through to this too. There's like no continuity from the marketing page... even all the colors style... the green... And then the other one is what? Like purple purpley purple everywhere."

> "We somehow kept getting to different versions of the site that all looked wildly different."

**Bad Example:** [Code Crafters](#case-study-code-crafters) — Marketing page, product pages, and pricing all had different visual styles.

---

### Standardize Photo Treatments

When showing multiple photos (team, investors, customers), make them visually consistent.

> "I would not like modify other people's pictures like this. It was like kind of intrusive... they're all kind of a different style... This one's like a professional head shot. This one's like a phone photo."

> "One trick you can do is like maybe like you knock down all their backgrounds but keep them like white. Maybe you add a filter so that they're all like black and white... Then it kind of standardize the thing without like butchering the picture too much."

**Bad Example:** [Code Crafters](#case-study-code-crafters) — Investor photos had inconsistent styles and intrusive masking.

---

### Make Your Logo Visible

Your brand should be immediately identifiable.

> "I almost thought like this was YC cuz that's the more prominent logo than their logo, which is tiny and awkward... They should probably like make a better logo slash just use like a word mark. Or at least make it bigger."

> "They don't have the name of the company up here... I was looking for like what is the name of this company again and I couldn't find it anywhere on the page. Logo is also very generic. Doesn't tell me anything."

**Bad Example:** [Velvet](#case-study-velvet) — Logo was a tiny, hard-to-see face icon.

**Bad Example:** [Code Crafters](#case-study-code-crafters) — Company name wasn't visible; logo was generic.

---

### Avoid Unnecessary Visual Noise

Remove decorative elements that don't serve a purpose.

> "I also don't like lines when you don't need lines."

> "There's a lot of like boxes and boxes and boxes."

**Bad Example:** [Slashy](#case-study-slashy) — "There's a screenshot with a border and the window and then a border around the window."

---

## Interaction & Motion

### Motion Should Help, Not Distract

Animation can guide attention or steal it. Use it intentionally.

> "That's a good use case for motion is it can steal your attention and it can be either distracting or it can be helpful."

> "It got my attention though... not at not in the right time."

**Bad Timing:** [Crunched](#case-study-crunched) — Buttons animated before content was ready to be interacted with.

---

### Don't Hijack Scroll

Users expect scrolling to behave normally.

> "They're kind of hijacking the scrolljack. Not sure... Minus five points... Don't hijack the scroll."

**Bad Example:** [Freya](#case-study-freya) — Despite being the best overall, lost points for scroll hijacking.

---

### Smooth, Continuous Animations

Avoid jarring snaps or stutters.

> "When you hover the logos are not like showing the right highlight... when it goes to like 100% it snaps. The right way to do it is like you're slotting more things up... It should just be a continuous stream."

**Bad Example:** [Crunched](#case-study-crunched) — Logo carousel snapped instead of smoothly transitioning.

---

### Control Reading-Time Motion

Don't animate content while users are trying to read.

> "Oh, whoa, whoa, whoa. Whoa, whoa, whoa, whoa. Everything's kind of moving... I don't like moving things when I'm not moving and when you're trying to read... It's like distracting."

> "This is moving too fast. I can't tell what's happening here."

**Bad Example:** [Clavis AI](#case-study-clavis-ai--strata) — Multiple elements animating while trying to read content.

**Bad Example:** [Crunched](#case-study-crunched) — Demo animation moved too fast to comprehend.

---

## Information Architecture

### One CTA Per Scroll

Don't overwhelm visitors with competing actions.

> "Kill all the distractions. Make sure that like every single scroll there's only one main CTA. There's always like a priority."

> "There's a lot of things that look like buttons... Join our Discord, check out GitHub, back by YC, product of the day, start free documentation, sign up button up here. There's a lot of things."

**Bad Example:** [Clavis AI](#case-study-clavis-ai--strata) — Too many competing CTAs in the hero section.

---

### Hierarchy: Message → CTA → Proof

Structure your page in this priority order.

> "Your main message. What the hell is it? The CTAs and then it's like the proofs."

---

### Headlines Must Stand Alone

Assume users will only scan headlines, not read body copy.

> "What most people do is they come down and they're going to read the headlines... you got to be explicit and assume people are not going to read the sub headline. They're only going to read the sub headline if they're intrigued by the headline."

**Bad Example:** [Clavis AI](#case-study-clavis-ai--strata) — Headlines like "What our customers say" without meaningful content.

---

### Keep Your About Page On-Site

Don't link out for core company information.

> "The about page and it links off to their YC launch, which is a little bit jarring... talking about who's behind this product is something you should have a dedicated page on your site about. Otherwise, it makes me seem like this company is so early. They haven't even had time to like build their own."

**Bad Example:** [Code Crafters](#case-study-code-crafters) — About page linked to external YC launch page.

---

### Don't Lead with Pricing

Let users understand value before asking for money.

> "Now you're asking for money. And I'm not even sure what it is yet."

> "Us money off front patterns... Is that too early for that? Probably. You should get them to sign up and start trialing."

**Bad Example:** [Velvet](#case-study-velvet) — Pricing appeared before product was explained.

**Bad Example:** [Clavis AI](#case-study-clavis-ai--strata) — Pricing shown too early in the page.

---

### De-emphasize YC Backing

Social proof matters, but product clarity comes first.

> "A lot of them pride on being backed on YC, but that is actually not the main thing you're doing... make people focus on what the hell is the thing."

> "To the point where you look at it quickly and the YC logo looks like their logo."

**Bad Example:** [Velvet](#case-study-velvet), [Code Crafters](#case-study-code-crafters) — YC branding was more prominent than product branding.

---

### Reveal CTAs at the Right Time

Animate in buttons when they become relevant.

> "I would steal the little trick to hide this button until say you're here. And then it kind of animates in then you know where it is."

**Opportunity:** [Finta](#case-study-finta) — Could benefit from progressive CTA reveal.

---

### Clear Section Hierarchy

Visual treatments should clarify, not confuse, content relationships.

> "How the sections break is a little weird to me... you get this like white section and then some grays and then some whites and then some cards on top. Kind of up the hierarchy... the line that goes across makes it feel like it's breaking up."

> "There's some cool visual treatments, but they actually cause some confusion."

**Bad Example:** [Finta](#case-study-finta) — Card overlapping and section breaks created confusion.

---

## AI Product-Specific UX

### Show What's Happening During Wait Times

Users need to understand what the AI is doing.

> "I think you want to almost like show every single state that's happening. So like, you know, I thought for like 29 minutes, what did it do? And if it does like tool calls like just show them."

> "You want to control like you don't want to show too many things at once or like it just becomes like a wall of text."

---

### Guide Focus Through States

Shift user attention as the AI progresses through stages.

> "You kind of shift people's focus... the things that are running. You show them in a more like focusable spot and as it progresses it kind of shows you like these are the things that are running. These maybe are the actions I need to confirm. This is my input."

---

### Avoid Empty Spinners

Loading states should be informative, not vacant.

> "I don't want these like random empty states with spinners everywhere."

> "Why is there two spinners?... Why can't I open the thinking? Why is there just spinning and not telling me what it's thinking?"

> "It was like looping some random messages but they weren't really helpful... They were actually kind of distracting."

**Bad Example:** [Vibe Flow](#case-study-vibe-flow) — Multiple uninformative spinners with no context.

---

### Let Users Try Before Sign-Up

Reduce friction to first value.

> "Before I came in, I couldn't even do anything or see anything... there was the prompt box and then when you scroll down it's like all your projects sign in... we tried to make something and we got hit with a signup wall."

> "Why not just show people like other people's projects... just let people play. Even in Rio OS you can send three free messages before you sign in."

**Bad Example:** [Vibe Flow](#case-study-vibe-flow) — Required sign-up before any interaction.

---

### Constrain Initial Demos

First experiences should be optimized for success.

> "Maybe make sure that maybe the initial demo is more constrained so that it gives you better output."

**Bad Example:** [Vibe Flow](#case-study-vibe-flow) — Open-ended demo led to errors and poor first impressions.

---

### Interactive CTAs Over Static Ones

If your product is experiential, let users engage directly.

> "How to make the demo even more like obvious. Maybe you can just start right here."

**Good Example:** [Freya](#case-study-freya) — "Talk to Freya" button let users experience the voice AI immediately.

---

### Use Clear CTA Labels

"Book a demo" beats vague alternatives.

> "Meet the team is kind of weird too. Like do I want to demo?... who is the team?... Book a demo would be better."

**Needs Improvement:** [Freya](#case-study-freya) — "Meet the team" was confusing as a primary CTA.

---

## When Templates Work

Not every site needs to break the mold.

> "A lot of these are building effectively the same template... We got the little thing up here. Some people put the backed by YC here. Some people put we're hiring. We got the blue buttons. We got two buttons next to each other. We got a headline. We got something else here. We got a logo here. We got a screenshot here."

> "Sometimes for a lot of businesses that might be good enough... just clearly it's like a pattern that users are used to they know where to go."

> "Sometimes it's helpful if you want to build your own brand and identity and be different and memorable is to break out of that box and come up with something that's like really unique."

> "I actually don't mind keeping things like simple and plain. Just let people scroll. Have the messaging be the primary thing. Have the product be the primary thing."

---

# Case Studies

## Case Study: Crunched

**Website:** AI reimagined for Excel  
**Target Audience:** Investment banks, investors, consultants, financial analysts  
**Built With:** Cursor (vibe coded by non-tech founders)

### What Worked
- Motion on buttons captured attention (though timing was off)
- Domain-specific terminology (DCF, market models) appropriate for target users
- Professional enough overall appearance

### What Failed
- **Unclear hero:** "Not sure what I'm getting from the hero at all"
- **Buried explanation:** "There's tiny text here that says Excel native AI analyst. Not sure what it means"
- **Broken interactions:** "When you hover the logos are not like showing the right highlight... when it goes to like 100% it snaps"
- **Animation too fast:** "This is moving too fast. I can't tell what's happening here"
- **Hidden navigation:** "There's tabs here that just cuz we happen to be here, I noticed them. Otherwise, I don't think I would have even..."
- **Generic AI styling:** "The icons that are used maybe like this is like the most popular like AI... AI will just pick that one"

### Key Lessons
- Add a literal sub-headline explaining the product
- Smooth out animation transitions
- Slow down demo animations so users can follow
- Replace default AI icon sets with intentional choices

---

## Case Study: Velvet

**Website:** velvet.video  
**Product:** Create detailed brand videos with AI

### What Worked
- Video examples were "striking" and "high quality"
- Demo booking flow was "kind of cute"
- AI-generated model changes grabbed attention

### What Failed
- **Unclear purpose:** "I'm not sure what I'm looking at. What is this for? Is it for like an e-commerce thing? Is it for like an ad?"
- **No differentiation:** "How is it different from other video models?... What's different from your video thing versus say like Sora?"
- **Invisible logo:** "It's like a little face. You can't really see. I can't even see it from here"
- **Minimal copy:** "There's literally only six words on the page that describe what they do. Everything else is about sign up"
- **Early paywall:** "Now you're asking for money. And I'm not even sure what it is yet"
- **YC overshadowing brand:** "I almost thought like this was YC cuz that's the more prominent logo than their logo"
- **No demo context:** "There's no information about like what's going to happen or who you're going to talk to"

### Key Lessons
- Explain what makes your AI different from competitors
- Add substantial copy describing the product
- Make your logo bigger or use a wordmark
- Don't ask for money before explaining value
- Provide context for what happens after CTA clicks

---

## Case Study: Clavis AI / Strata

**Website:** MCP server for AI agents  
**Product:** One MCP server for AI agents to use tools reliably at any scale

### What Worked
- Sub-headline was actually clear and helpful
- Integration logos showed breadth of compatibility

### What Failed
- **Naming confusion:** "Why is it introducing Strata?... I thought this was Clavis. Why is there two names when you're just starting?"
- **Template appearance:** "This looks like a template... It almost looks like old school bootstrap"
- **CTA overload:** "There's a lot of things that look like buttons... Join our Discord, check out GitHub, back by YC, product of the day, start free documentation, sign up button"
- **Jargon overload:** "Progressive discovery, smart navigation, precise execution. Not sure what they mean... It is very jargony"
- **No context for claims:** "Better than what?"
- **Distracting animation:** "Oh, whoa, whoa, whoa... Everything's kind of moving... I don't like moving things when I'm not moving and when you're trying to read"
- **Low-quality visuals:** "This chart. This looks like a screenshot from Y Excel or something like that. Sad"
- **Early pricing:** "Us money off front patterns... Is that too early for that? Probably"
- **Weak headlines:** "You got to be explicit and assume people are not going to read the sub headline"

### Key Lessons
- Pick one name and stick with it
- Limit to one CTA per section
- Use customer language, not internal concepts
- Stop all motion when users are reading
- Make the clearer sub-headline your main headline
- Remove decorative lines and unnecessary elements

---

## Case Study: Code Crafters

**Website:** Learning platform for software engineers  
**Product:** Practice projects to become a better engineer

### What Worked
- Aspirational messaging appealed to developer ambition

### What Failed
- **Purple gradient overload:** "Oh, we got the purple gradients. They're here. Scary"
- **Missing company name:** "They don't have the name of the company up here... I was looking for like what is the name of this company again and I couldn't find it anywhere on the page"
- **Generic logo:** "Logo is also very generic. Doesn't tell me anything"
- **Negative framing:** "It started out with the negative stop doing this thing... which is not informative for what they actually do"
- **Unclear product:** "I still don't get it"
- **Inconsistent design:** "The whole website changed when we clicked through... There's like no continuity from the marketing page... even all the colors style"
- **Intrusive photo editing:** "I would not like modify other people's pictures like this. It was like kind of intrusive"
- **Inconsistent photo styles:** "They're all kind of a different style... This one's like a professional head shot. This one's like a phone photo"
- **External about page:** "The about page and it links off to their YC launch, which is a little bit jarring"
- **YC overshadowing product:** "A lot of them pride on being backed on YC, but that is actually not the main thing you're doing"
- **Obvious AI generation:** "This looks vibe coded. It's got all the hallmarks of it"

### Key Lessons
- Eliminate purple gradients
- Show company name prominently
- Lead with positive value proposition
- Maintain visual consistency across all pages
- Standardize photos with filters or background removal
- Build your own about page
- Prioritize product explanation over investor backing

---

## Case Study: Slashy

**Website:** AI email tool  
**Product:** ChatGPT-powered email assistant

### What Worked
- Messaging was clear and understandable
- Structure followed good patterns

### What Failed
- **Missing polish:** "A lot of details are not there"
- **Raw output appearance:** "It almost feels like it's the raw like markdown output"
- **Clipping errors:** "The video is like clipped wrongly. There's like an extra like a white border"
- **Misalignment:** "This thing is like not aligned in the same spot"
- **Inconsistent styling:** "These images and the previews all have different sizes... Some of them have shadows, some of them don't"
- **Excessive borders:** "There's a screenshot with a border and the window and then a border around the window. There's a lot of like boxes and boxes and boxes"
- **Identity by comparison:** "They keep calling out all these other products that people may know to describe what they do rather than just literally explaining what they do"
- **Copied assets:** "They're actually stealing like a notion picture here"

### Key Lessons
- Fix all visual bugs above the fold
- Standardize image sizes and treatments
- Remove redundant borders and containers
- Define yourself on your own terms, not by comparison
- Use original assets

---

## Case Study: Freya

**Website:** Voice AI for enterprise  
**Product:** AI voice agents for call center operations

**Overall Assessment:** "This is actually probably the best one we've seen today"

### What Worked
- **Clear messaging:** "It's very clear"
- **Accessible demo:** "The communication... demo really accessible pretty good"
- **Obvious target audience:** "We understand what they do and I think if we ran a call center, an enterprise call center, we'd probably consider this and we know that this is for us"
- **Interactive experience:** "Talk to Freya" let users experience the product immediately

### What Failed
- **Scroll hijacking:** "They're kind of hijacking the scrolljack. Not sure... Minus five points... Don't hijack the scroll"
- **Confusing CTA label:** "Meet the team is kind of weird too. Like do I want to demo?... who is the team?"

### Key Lessons
- Don't hijack scroll behavior
- Use "Book a demo" instead of vague CTAs like "Meet the team"
- Make interactive demos even more prominent
- Let the product speak for itself

---

## Case Study: Finta

**Website:** Accounting and tax automation  
**Product:** Automated bookkeeping and tax filing for US-based businesses

### What Worked
- **Clever dynamic element:** Time display showing "set up in 10 minutes, back to building by [current time + 10 min]" — "That's cool. That's cute"
- **Emotional appeal:** "Tax season with zero stress. You know, that probably appeals to the type of person that would be their customer"
- **Visual quality:** "Visually it looks nice. It looks well organized"
- **Attention to detail:** "If you look at each of the pieces, it's actually pretty well built. There's a lot of little details in there"
- **Focused screenshots:** "The temptation is to show a big screenshot from far away and you can't tell what's going on. Instead, they're honing in on the very specific thing"
- **Clear value:** "I think it communicates what it does. My sense is if I were in the market for a product like this, this would appeal to me"

### What Failed
- **Hidden audience:** "For US-based C corps, LLC's, and PBC's... Maybe like kind of fold that with the primary messaging"
- **Confusing sections:** "How the sections break is a little weird to me"
- **Visual hierarchy issues:** "You get this like white section and then some grays and then some whites and then some cards on top"
- **Decoration over clarity:** "There's some cool visual treatments, but they actually cause some confusion"
- **Post-hero disorientation:** "Once you pass here it's like a little disorienting. Not sure what to do now"

### Key Lessons
- Put target audience in the hero
- Clarify section hierarchy with consistent backgrounds
- Cool visual effects shouldn't compromise understanding
- Progressive CTA reveal can help guide users through the page

---

## Case Study: Vibe Flow

**Website:** Visual prompting tool  
**Product:** AI-powered visual development environment

### What Worked
- **Suggestion chips:** "That's cool. Like a little like suggestions... I might steal this"

### What Failed
- **Empty state:** "Prompt it visually... Where's the visuals?"
- **Sign-up wall:** "I couldn't even do anything or see anything... there was the prompt box and then when you scroll down it's like all your projects sign in... we tried to make something and we got hit with a signup wall"
- **Uninformative loading:** "What did it do?... for like 29 minutes, what did it do?"
- **Multiple spinners:** "Why is there two spinners?... Why can't I open the thinking? Why is there just spinning and not telling me what it's thinking?"
- **Unhelpful messages:** "It was like looping some random messages but they weren't really helpful... They were actually kind of distracting"
- **Vibe coded appearance:** "Feels very like vibe coded the whole thing"
- **Disjointed details:** "If you look at all the little details, they don't melt together... everything feels kind of disjointed"
- **Inconsistent states:** "There's like weird hover states like with little radius on top but not on the bottom"
- **Raw AI output:** "This is almost like a vibe code of VS Code... That's just pure AI generated UI... it's just raw AI output"
- **Mystery controls:** "No tool tip either... What does it do?" (about a toggle button)
- **Premature suggestions:** "The suggestions came before it did anything"

### Key Lessons
- Show other users' projects to demonstrate value before sign-up
- Let users try 3+ interactions before requiring sign-up
- Show every state during AI processing
- Control focus as AI progresses through stages
- Remove empty spinners; make all loading states informative
- Constrain initial demos for better first impressions
- Add tooltips to all controls
- Polish hover states and visual consistency
