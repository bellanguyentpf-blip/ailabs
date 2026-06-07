# Design Principles from Raphael Shad: AI Interfaces

## About the Reviewer

**Name:** Raphael Shad  
**Current Role:** Creator of Notion Calendar  
**Background:** Product designer with expertise in AI-native interface design  
**Review Context:** Reviewing cutting-edge AI interfaces submitted by the YC community, hosted by Aaron Epstein (YC Partner) on the Design Review series. Focus on emerging AI user interfaces beyond the common chat UI.

---

## Table of Contents

1. [Design Principles](#design-principles)
   - [Multimodal & Feedback Design](#multimodal--feedback-design)
   - [Latency & Performance](#latency--performance)
   - [Canvas & Workflow Visualization](#canvas--workflow-visualization)
   - [Prompt Design & Input](#prompt-design--input)
   - [Trust & Transparency](#trust--transparency)
   - [Human-AI Collaboration](#human-ai-collaboration)
   - [Adaptive & Dynamic Interfaces](#adaptive--dynamic-interfaces)
   - [Interaction Design](#interaction-design)
2. [Case Studies](#case-studies)
   - [Vapi](#case-study-vapi)
   - [Retail AI](#case-study-retail-ai)
   - [Gumloop](#case-study-gumloop)
   - [Answer Grid](#case-study-answer-grid)
   - [Polymet](#case-study-polymet)
   - [Zuni](#case-study-zuni)
   - [Argil](#case-study-argil)

---

# Design Principles

## Multimodal & Feedback Design

### Pair Audio with Visual Feedback

Voice interfaces must provide visual confirmation that the system is listening and responding, especially when a screen is present.

> "One of the first things that I noticed was that when I was speaking um it wasn't there was no visual feedback um making it clear that my voice is actually recognized by the microphone um and then similarly when the uh voice was answering um there was no sort of like visual indication um that that's what's happening so for example if our laptop was a mute uh we were not sure whether demo is broken or what's going on so important I guess to kind of pair multimodal cues um so not just rely on voice um in these type of scenarios where you do have a screen"

**Bad Example:** [Vapi](#case-study-vapi) — No visual indication when user speaks or when AI responds

---

### Support Natural Conversation Behaviors

Voice AI must handle interruptions gracefully to feel human-like.

> "When you're talking to a human um the latency is really important and also interruptions and it felt pretty fast and pretty natural when we were conversing I wonder what would happen if we tried to interrupt"

**Bad Example:** [Vapi](#case-study-vapi) — "It didn't pause uh when you were interrupting and then two um it entirely missed um your your question when uh when it actually got done with with its own sort of agenda"

---

## Latency & Performance

### Latency Is the Interface

In voice and conversational AI, response time isn't just a performance metric—it fundamentally shapes the user experience.

> "The latency is the interface in some ways and that how fast it responds to you the longer it takes the less it feels like a natural conversation and the more it feels like you're talking to a robot the whole point is to make it seem like you're talking to a human"

> "Latency is is an issue huh that's what kind of like breaks the illusion of this being a real person"

**Good Example:** [Vapi](#case-study-vapi) — "The voice felt incredibly realistic it felt like I was talking to a human... just the latency was the only thing that gave me a clue that maybe this was not a human"

---

### Expose Performance Metrics in Dev Mode

For developer-focused products, surface technical details like latency that help users understand and optimize the experience.

> "One of the things that I actually do really like here is that they always because it's developer Focus they always rendered um kind of like a little label that shows you instantly for each each answer the milliseconds of the delay um really kind of building you an intuition you know how many milliseconds feels natural ver it kind of feels like oh I'm talking to a robot"

> "Whenever you can and are in this situation like what are all the things that you might be able to expose such as kind of the milliseconds of latency kind like think of it as Dev mode versus sort of like production mode"

**Good Example:** [Vapi](#case-study-vapi) — Shows millisecond latency labels for each response

---

## Canvas & Workflow Visualization

### Use Canvas for Complex AI Workflows

Visual, node-based canvases are emerging as the ideal interface for modeling and controlling multi-step AI processes.

> "Canvas has really emerged as a really interesting kind of almost new document type um that seems to lend itself pretty well to not just kind of for design tools or or kind of brainstorming tools but lends itself really well for these sort of modeling these kind of like AI processes"

> "It's great because it gives us the user a visual overflow of exactly what steps the agent is going to take and we can control what it should do at each of these steps"

**Good Example:** [Gumloop](#case-study-gumloop) — "A big open-ended canvas that we can pan around and zoom in on that gives us a bunch of uh boxes for each step in the flow"

---

### Use Color Coding with Legends

Differentiate node types visually, but provide context for what each color means.

> "One of the things that does pretty well is um using color um to show different type of notes um kind of like input actions um output Etc I almost feel like I would want like a legend like which color is what"

**Needs Improvement:** [Gumloop](#case-study-gumloop) — Uses color effectively but lacks a legend

---

### Adapt Fidelity to Zoom Level

When users zoom out, collapse detail; when they zoom in, reveal it. Don't show unreadable text at a distance.

> "Because it is uh canvas um kind of having different Zoom levels showing different Fidelity so right now we're so zoomed out I can't read any of the small text why not just kind of hide it and make the note almost collapse it into just you know in this case a brown Block in this case a Yellow Block to kind of give different Zoom levels different fidelities"

**Needs Improvement:** [Gumloop](#case-study-gumloop) — Shows unreadable text at distant zoom levels

---

### Showcase Branching Power

Canvas interfaces truly shine when workflows branch and diverge—use templates that demonstrate this.

> "The canvas and modeling these kind of like AI ancient decision trees gets really really powerful when it isn't something you could just kind of like linearly write in a document like a recipe first do this then do this then do this but really the power is in sort of like the multi-dimensionality in the branching um and so for as a starter template to kind of like explain the power of this tool to mod these processes I think one that is multi-dimensional would really showcase the power of this"

**Needs Improvement:** [Gumloop](#case-study-gumloop) — Starter template was too linear

---

### Enable Inline Documentation

Canvas interfaces allow explanatory content to live alongside the workflow.

> "Another Advantage for this too is that you can just add text blocks kind of next to these as instruction so here was a template that that we just pulled down to get started with and it's got big text explaining you know if you're going to customize this here are some things that you should consider which is helpful as you're just jumping in and trying to learn a product for the first time"

**Good Example:** [Gumloop](#case-study-gumloop) — Template includes instructional text blocks

---

## Prompt Design & Input

### Turn Example Prompts into One-Click Buttons

Don't leave users staring at a blank prompt box. Provide clickable examples that instantly populate the input.

> "Whenever you have a free form uh text box where basically you're expected to prompt um write text as an instruction for the llm um kind of the AI engine uh to use as an input having some examples um to just kind of like turn examples into buttons where with a single click you can basically fill out uh like a pretty reasonal example is um is something that's you know really good to start"

> "It's hard sometimes you come here and you're like I'm not sure what to use this for and you you're staring at the blank canvas effectively and this gives you some suggestions to make it easy to get the value of the product"

**Good Example:** [Answer Grid](#case-study-answer-grid) — Pre-built prompt suggestions as clickable buttons

**Good Example:** [Polymet](#case-study-polymet) — "It looks like a bunch of pre-built prompts that are ready to go"

---

### Dynamically Suggest Prompts from Context

Go beyond static examples—infer useful prompts from user behavior and application state.

> "I would take this even a level further I think it's not just for examples where you know as a demo um but what if you can guess or infer from other context of your application like what might be like a good prompt even as you're kind of using the application and then make them single click as opposed to just being static examples so get collapsing sort of like suggested prompts into buttons I think is like a really interesting kind of dynamic uh uh pattern here"

---

### Build Richer Prompt Builders for Domain Terminology

When prompts require specialized vocabulary, help users discover and use it.

> "The prompt is entirely there were examples for the prompt but it was basically completely free form and I meant not be familiar with some of these kind of design terms kind of glass morphic or skoric or flat design or gradient or whatever um and so having maybe a interface here um that gives me sort of like selection and ideas kind of almost like pills maybe these are design terms that can almost like you know like Lego bricks can like drag in versus just I need to know these terms and just type them"

> "The good news it can be anything bad news it can be anything... the worry as a user when using these interfaces is that you're worried you're going to tell it something like glass morphic and it's not going to know what that is and you're going to wait for 2 minutes for it to generate it and then it's it's not going to be the thing that you expected"

**Needs Improvement:** [Polymet](#case-study-polymet) — Free-form prompt without guidance on design terminology

---

### Bring Selection UI Closer to Input

When users need to choose options that modify their prompt (like body language or camera angles), integrate those controls near the text input.

> "You can almost imagine how you could highlight certain parts of the script and then from a drop-down there kind of choose suggest but then also kind of standard um uh part of this this Library kind of like you know just try point to myself... there's like a lot of kind of like interplay with the text interface to the left"

> "Opportunity um to potentially bring some of the selection UI kind of closer to the input itself the text um uh I think there's a lot of room there to grow"

**Needs Improvement:** [Argil](#case-study-argil) — Body language selection was separate from script editing

---

## Trust & Transparency

### Show Sources Inline with Answers

When AI retrieves information, attach citations directly to the content so users can verify accuracy.

> "This is another common pattern that we see where if AI is going out and doing a thing how do you know you can trust the results that it brings back you know sometimes it hallucinates sometimes it gets the wrong thing and so by having a source closely attached that you can just you know Click on each of these right here you can see immediately where the sources came from it helps us to be able to validate and Trust the data that the AI agent is bringing back"

> "The pattern of having the footnotes almost directly in the answer is a really really successful pattern"

> "Just like an academic papers of the past um footnotes you have your references like from which paper which data source you actually draw a conclusion now we kind of see this pattern more and more in software"

**Good Example:** [Answer Grid](#case-study-answer-grid) — "You can click into each of these and see where it got the information from"

---

### Make Each AI Action Visible

When agents work on multiple tasks simultaneously, show progress in every cell or node.

> "What's cool is it's almost like every cell of the spreadsheet gets its own AI agent to get the data that we want which is pretty incredible it's like a spreadsheet on steroids"

> "You can see each agent working we get the feedback in every single cell"

**Good Example:** [Answer Grid](#case-study-answer-grid) — Shows agent activity in each spreadsheet cell

---

### Show Progress During Long Generation

Don't just show a spinner—communicate what's happening step by step.

> "We've got some animations that are um trying to keep us entertained and engaged says at the bottom assembling pixels with tweezers so I got some humor in the messages that are popping up um but you know are we going to be waiting 10 seconds or we're going to be waiting 10 minutes here it's a little unclear"

> "They kind of appear and disappear pretty quickly I almost um for kind of more technical audience um would love to see kind of like a log to actually see kind of what's going on under the hood and then also kind of Step by Step just kind of keeping it on the screen um so you kind of see the progress of the machine"

**Needs Improvement:** [Polymet](#case-study-polymet) — Humorous loading messages but no real progress indication

---

### Use Progressive Disclosure for Long Waits

If generation takes minutes, show early results at low fidelity while high-fidelity processing continues.

> "Maybe some good prior art um to borrow from there is today's uh kind of uh uh meta search engines for flights and they also take a while and they already show you kind of in a low resolution some early results and you can always start to interact with the filters ask and more results come in"

---

## Human-AI Collaboration

### Trade Fidelity for Immediacy

Show a fast, low-fidelity preview so humans can iterate quickly, then generate the final high-fidelity output.

> "The easier or the faster part in generating this is actually in creating the voice and the hard part is it takes many minutes to actually process and generate the video with the right lip movement to match the text that you've entered and so rather than showing you something you know lips moving that is off from what you what you've uh put in they first show you just kind of a blurry version with the audio so you can get a sense of like what it's going to be like then you click generate here"

> "They're trading off um basically uh Fidelity for immediacy and basically putting the human kind back in the loop because if it was just a generate button right we would wait for 12 minutes uh figure out that something is not quite right and then kind of like you know give the machine a new prompt and wait until it comes back so this is a really uh clever trick uh to really kind of create this iterative human machine collaboration interface"

**Good Example:** [Argil](#case-study-argil) — Shows blurry video with accurate audio for quick iteration before 12-minute full render

---

### Preview Options Before Selection

When users hover over choices, show them what will happen.

> "It's cool here that as you hover over these you can see the different uh samples of of what will happen"

**Good Example:** [Argil](#case-study-argil) — Hover previews for body language options

---

### Support Incremental Changes

Allow users to modify specific elements without regenerating everything.

> "What if I said okay explain your changes okay so so so make this make the sidebar blue... now we're waiting again hopefully this will be faster hopefully it's like an incremental change right where we can sort of only submit to Delta and not like do sort of like a single shot do the whole thing over again um not just for kind of to weight but also for you know resources um preserve kind of the the existing um design that we did like"

> "Any interface designer or technical team kind of figure out the challenge of how to kind of add sub prompts or how to only change kind of iteratively um that that that's kind of like really the the frontier"

**Good Example:** [Polymet](#case-study-polymet) — Allows editing individual elements without regenerating the entire design

---

### Show What the AI Understood (and Missed)

Provide feedback on which parts of the prompt were respected versus ignored.

> "What are the things the machine actually respected from your prompt and where did it sort of like ignore or struggle with kind of giving that feedback back to the human and the prompt maybe with like little squiggly lines or kind of things or with color kind of showing you know what did it index on from The Prompt and execute on and what did it sort like maybe your fail if there could be sort of like that feedback loop then it can help the human to refine their prompt"

---

### Design AI That Learns from Conversation

AI should adapt in real-time based on context corrections during the interaction.

> "I threw at a curveball and it totally adjusted cuz when I typed in the form here I told it that my name was Aaron and a simple system would just keep referring to me as Aaron throughout the entire call and halfway through I told it oh no actually this is not Aaron this is Steve and it referred to me as Steve after that... so it actually learned from the conversation"

**Good Example:** [Retail AI](#case-study-retail-ai) — Adjusted to name correction mid-call

**Needs Improvement:** [Retail AI](#case-study-retail-ai) — "Build on that there's room for improvement where you could then not just say like oh sorry I made a mistake but actually follow sort of like your cue of you you know knowing um uh Aaron right um but he's on vacation but it kind of like just shut down"

---

## Adaptive & Dynamic Interfaces

### Let Content Generate Custom UI

Instead of showing all possible actions, surface only the relevant ones based on the current content.

> "Some of the uh adap interface that we see emerge um based on the content of for example an email or document the interface then dynamically changes which typically isn't you know static software typically wasn't the case and so here it's kind of like the input is the actual content and then the output of the AI llm is then the UI to interact back with that content"

> "With AI now we don't need to show all the buttons we can just show you the buttons that are relevant"

**Good Example:** [Zuni](#case-study-zuni) — Shows email-specific response options that change per message

---

### Balance Adaptation with Predictability

When UI elements change dynamically, anchor them with consistent access patterns.

> "The challenges of course are kind of predictability people love to have like their you know billion buttons and like the exact place"

> "The buttons and the responses are technically changing for every single email but the the keys that you're pressing do not and so you can kind of keep your hand right there and and know what to expect each time"

**Good Example:** [Zuni](#case-study-zuni) — Dynamic buttons but consistent keyboard shortcuts (Y, N, etc.)

---

### Show Appropriate Follow-up Inputs

When a user selects an action, dynamically reveal only the inputs needed for that action.

> "The first one here it said confirm a call time and the UI actually knew that that we needed input of what call time should we suggest and so it knows the next step based on which response you want to give which it's showing you a custom UI for how to respond and not showing you a list of five text boxes of which maybe one is the one that you should fill out and respond"

**Good Example:** [Zuni](#case-study-zuni) — Showed time picker only when "confirm a call" was selected

---

### Consider Higher Levels of Abstraction

Think about how much human effort each interaction level requires.

> "What's the right level of abstraction to reply to an email in the future so this still makes me kind of process each email just maybe like a little faster but I still have to go do it um if you go like higher level abstraction can s like an email inbox of the future just kind of like autopilots do that for me"

> "What if um sort of like the best guest draft for that email would already be sitting in the inbox for me and then I can on a higher level than so like text editing I can uh prompt it to change it"

---

## Interaction Design

### Use Keyboard Shortcuts Without Modifiers (Carefully)

Hot keys without modifiers (like pressing just "Y") can be fast, but require clear focus states.

> "Being able to access all these adaptive kind of like uh uh options by just keyboard shortcut with a single letter um is uh is is really on point"

> "One kind of interaction design challenge with these hot keys that are not like with a modifier key like a keyboard shortcut so command C for copy for example has a modifier key but these are just hot keys where I just press y it just does it right um but what if I think that my cursor is focused inserting text and I want to kind of reply yes then basically my first y keystroke like submits a button right and so there's always this challenge of really being very clear when an input element is focused and you're typing versus now typing on the keyboard will just do stuff in your UI"

**Good Example:** [Zuni](#case-study-zuni) — Single-letter shortcuts for fast email triage

**Risk to Consider:** Confusing focus states when text input is nearby

---

### Make Run/Execute Actions Obvious

When users need to trigger an agent, make the action button unmistakable.

> "Interesting choice kind of like the the Run button was there like this Arrow up um there's probably well first of all kind of uh very interesting choice kind of like oh send the agents are like up to the cloud almost um sent them off uh and then maybe as a second point maybe there's some improvement kind of to make make this button a little bit clearer like how to actually you want people to click this button basically kind of like Run play Go"

**Needs Improvement:** [Answer Grid](#case-study-answer-grid) — Arrow-up icon for "run" was unclear

---

### Consider Showing Results Progressively

When running parallel AI tasks, decide whether to show results as they arrive or all at once.

> "You can see each agent working we get the feedback in every single cell um curious if they're going to come back in one at a time or all at the same time oh all at the same time"

---

### Consider the Backend Experience

For AI that handles first-line tasks (like calls), design the operator's view of what happened.

> "You're hinting kind of you know the backside of this product that we currently don't see um but you can imagine like really rich UI AI UI that then kind of shows what happened during the call to the um call center operator uh that is a whole other side of this this technology"

> "There's a transcript and and a lot more information that a human could then follow up on so this eliminates a lot of the grunt work"

**Consideration for:** [Retail AI](#case-study-retail-ai) — Backend dashboard for human operators

---

# Case Studies

## Case Study: Vapi

**Website:** vapi.ai  
**Product:** Voice AI platform for developers to build, test, and deploy voice agents

**Overall Assessment:** Strong developer focus with impressive voice quality, but missing visual feedback for multimodal interaction

### What Worked

- **Developer-focused positioning:** "This um uh demo and website is really targeted at the developer that would actually implement this technology not so much the user that will eventually use it"
- **Natural voice quality:** "The voice felt like I was talking to a human which was pretty incredible"
- **Latency display:** "They always rendered um kind of like a little label that shows you instantly for each each answer the milliseconds of the delay um really kind of building you an intuition"
- **Fast response time:** "It felt pretty fast and pretty natural when we were conversing"

### What Failed

- **No visual feedback for voice input:** "When I was speaking um it wasn't there was no visual feedback um making it clear that my voice is actually recognized by the microphone"
- **No visual feedback for voice output:** "When the uh voice was answering um there was no sort of like visual indication um that that's what's happening"
- **Broken state ambiguity:** "If our laptop was a mute uh we were not sure whether demo is broken or what's going on"
- **Can't handle interruptions:** "It didn't pause uh when you were interrupting and then two um it entirely missed um your your question"

### Key Lessons

- Always pair voice interfaces with visual feedback when a screen is available
- Show listening/speaking states clearly
- Handle interruptions gracefully to feel human-like
- Surface technical metrics (like latency) for developer audiences

---

## Case Study: Retail AI

**Website:** retail-ai  
**Product:** Voice AI for call center operations including debt collection, appointments, lead qualification

**Overall Assessment:** Impressive real-time adaptation but latency breaks the human illusion

### What Worked

- **Real phone call demo:** Let users receive an actual AI phone call to experience the product
- **Realistic voice:** "The voice felt incredibly realistic it felt like I was talking to a human"
- **Adaptive learning:** "I threw at a curveball and it totally adjusted... halfway through I told it oh no actually this is not Aaron this is Steve and it referred to me as Steve after that"
- **Human handoff potential:** "This may kind of be technology used in a first line um of sort of like you know a defense and then you can bring a human into the loop"
- **Transcript generation:** "There's a transcript and and a lot more information that a human could then follow up on"

### What Failed

- **Latency breaks illusion:** "Latency is is an issue huh that's what kind of like breaks the illusion of this being a real person"
- **Incomplete context handling:** "Build on that there's room for improvement where you could then not just say like oh sorry I made a mistake but actually follow sort of like your cue of you you know knowing um uh Aaron right um but he's on vacation but it kind of like just shut down and that's when it started to feel a little bit more robotic"

### Key Lessons

- Real phone demos are powerful for voice AI products
- Latency is the primary factor that breaks the human illusion
- AI should follow conversational cues, not just correct factual errors
- Design the backend operator experience, not just the caller experience

---

## Case Study: Gumloop

**Website:** gumloop.com  
**Product:** No-code AI automation with visual workflow builder

**Overall Assessment:** "A pretty incredible product and you can tell a lot of attention to detail was paid here"

### What Worked

- **Visual workflow canvas:** "A big open-ended canvas that we can pan around and zoom in on that gives us a bunch of uh boxes for each step in the flow"
- **Color-coded node types:** "Using color um to show different type of notes um kind of like input actions um output"
- **Inline documentation:** "You can just add text blocks kind of next to these as instruction... it's got big text explaining you know if you're going to customize this here are some things that you should consider"
- **Template-based onboarding:** Good starting point for new users

### What Failed

- **Missing color legend:** "I almost feel like I would want like a legend like which color is what"
- **No zoom-level adaptation:** "We're so zoomed out I can't read any of the small text why not just kind of hide it and make the note almost collapse"
- **Linear starter template:** "For as a starter template to kind of like explain the power of this tool to mod these processes I think one that is multi-dimensional would really showcase the power of this"

### Key Lessons

- Canvas interfaces are ideal for modeling AI agent workflows
- Provide a color legend for node types
- Adapt visual detail to zoom level—collapse unreadable text
- Use branching templates to showcase the power of the canvas paradigm
- Canvas + inline documentation enables self-guided learning

---

## Case Study: Answer Grid

**Website:** answergrid.ai  
**Product:** AI-powered research tool that generates structured data at scale

**Overall Assessment:** "Really well done" — Spreadsheet paradigm enhanced with per-cell AI agents and inline citations

### What Worked

- **Example prompts as buttons:** "Having some examples um to just kind of like turn examples into buttons where with a single click you can basically fill out"
- **Fast initial results:** "Wow that's pretty fast"
- **Agent-per-cell model:** "It's almost like every cell of the spreadsheet gets its own AI agent to get the data that we want which is pretty incredible it's like a spreadsheet on steroids"
- **Visible agent activity:** "You can see each agent working we get the feedback in every single cell"
- **Inline source citations:** "You can click into each of these and see where it got the information from"
- **Expandable detail:** "I notice as I click into each of these it shows me the answer 6.6 it also shows the sources in line"
- **Dynamic column addition:** "What's cool is... we can do is add columns and have sort of the agent go out again... our columns like things we want to know kind of putting the human back into the loop"

### What Failed

- **Missing units in condensed view:** "It feels like it's missing um the unit the unit for the condensed version... we're missing a b [billion]"
- **Unclear run button:** "The Run button was there like this Arrow up... maybe there's some improvement kind of to make make this button a little bit clearer like how to actually you want people to click this button basically kind of like Run play Go"

### Key Lessons

- Turn example prompts into clickable one-click buttons
- Show agent activity in every cell/unit of work
- Inline citations build trust and enable verification
- Allow users to dynamically define the data structure (columns)
- Make run/execute buttons unmistakably clear
- Show units and context in condensed views

---

## Case Study: Polymet

**Website:** polymet.ai  
**Product:** AI product designer that generates production-ready code from prompts

**Overall Assessment:** Powerful generation with good iteration support, but needs better progress visibility and prompt guidance

### What Worked

- **Multimodal input:** "Takes multimodal uh input so um we see little icons for the microphone uh and even an image so it looks like we might be able to upload a sketch"
- **Pre-built prompt examples:** "It looks like a bunch of pre-built prompts that are ready to go"
- **Interactive output:** "This seems pretty interactive it looks like it may oh wow there's even hovers here"
- **Element-level editing:** "When you clicked on a um one of the sub elements that you can sort like prompt on a on a sort of like module basis"
- **Incremental changes:** "It looks like it did... the rest is is the same here" — system preserved existing design when making targeted changes
- **Humor in loading states:** "Says at the bottom assembling pixels with tweezers so I got some humor in the messages"

### What Failed

- **Unclear wait time:** "You know are we going to be waiting 10 seconds or we're going to be waiting 10 minutes here it's a little unclear"
- **Transient progress messages:** "They kind of appear and disappear pretty quickly I almost um for kind of more technical audience um would love to see kind of like a log"
- **No step-by-step progress:** "Would love to see kind of like a log to actually see kind of what's going on under the hood and then also kind of Step by Step just kind of keeping it on the screen"
- **No prompt guidance for domain terms:** "Not be familiar with some of these kind of design terms kind of glass morphic or skoric... having maybe a interface here um that gives me sort of like selection and ideas"
- **No prompt feedback:** "What are the things the machine actually respected from your prompt and where did it sort of like ignore or struggle"
- **Small submit button:** "Let's click our tiny little button here"

### Key Lessons

- Show clear progress indication with time estimates for long generation
- Keep progress logs visible, don't flash and hide them
- Help users discover domain-specific vocabulary in prompts
- Show what parts of the prompt were understood vs. ignored
- Support incremental editing without full regeneration
- Make primary actions visually prominent

---

## Case Study: Zuni

**Website:** zuni.ai  
**Product:** AI-powered email client for founders with adaptive response suggestions

**Overall Assessment:** "Adaptive uis of the future here" — Strong example of content-driven dynamic interface design

### What Worked

- **Content-adaptive buttons:** "This interface on the side where it's pulling up the user's email and it's suggesting specific responses to that email based on the content of that email it's it's almost changing what the reaction buttons are"
- **High-level response options:** "Very high level and then when you click on each one if they need more information like you click dismiss it'll just go away no other context is needed"
- **Context-aware follow-up UI:** "The first one here it said confirm a call time and the UI actually knew that that we needed input of what call time should we suggest"
- **Keyboard shortcuts for consistency:** "Being able to access all these adaptive kind of like uh uh options by just keyboard shortcut with a single letter um is uh is is really on point"
- **Predictable access pattern:** "The buttons and the responses are technically changing for every single email but the the keys that you're pressing do not"

### What Failed/Considerations

- **Focus state challenges:** "What if I think that my cursor is focused inserting text and I want to kind of reply yes then basically my first y keystroke like submits a button right and so there's always this challenge of really being very clear when an input element is focused"
- **Could go higher abstraction:** "What if um sort of like the best guest draft for that email would already be sitting in the inbox for me"

### Key Lessons

- Let content generate custom UI—don't show all possible actions
- Balance dynamic elements with consistent access patterns (keyboard shortcuts)
- Show follow-up inputs only when needed for the selected action
- Be extremely clear about focus state when using single-key shortcuts
- Consider pre-generating drafts for even faster workflows

---

## Case Study: Argil

**Website:** argil.ai  
**Product:** AI video studio for creating videos using deepfake technology and custom avatars

**Overall Assessment:** Brilliant fidelity/latency tradeoff that enables iterative human-AI collaboration

### What Worked

- **Blurry preview with accurate audio:** "Rather than showing you something you know lips moving that is off from what you what you've uh put in they first show you just kind of a blurry version with the audio so you can get a sense of like what it's going to be like"
- **Fidelity/latency tradeoff:** "They're trading off um basically uh Fidelity for immediacy and basically putting the human kind back in the loop"
- **Iterative collaboration:** "This is a really uh clever trick uh to really kind of create this iterative human machine collaboration interface"
- **Clear time estimates:** "It says 12 minutes right here is how long it's gonna take"
- **Hover previews:** "As you hover over these you can see the different uh samples of of what will happen"
- **Accurate voice cloning:** "The the voice was was very good that sounded like me and I typed a bunch of text to get that"
- **Low training data requirement:** "They just need a few minutes of uh video of me or whoever talking"
- **Camera angle blocks:** "We can change camera angles for each of these uh different settings"

### What Failed

- **Manual body language selection:** "You have to select it manually... you could imagine in the future they would autodetect it"
- **Separated selection UI:** "Opportunity um to potentially bring some of the selection UI kind of closer to the input itself the text"

### Key Lessons

- Trade fidelity for speed to enable rapid iteration
- Show accurate fast outputs (audio) while slow outputs (video) process
- Display clear time estimates for long generations
- Enable hover previews for all selectable options
- Consider auto-detecting context (like gestures matching script content)
- Integrate selection UI with the text/content it modifies

---

## Meta-Insights: The Future of AI Interfaces

### From Nouns to Verbs

> "A big difference is that software of today or kind of like up until this point was mostly kind of like just clear things you can point out on the screen um that are you know kind of nouns like text forms drop downs buttons Etc and with AI what really changes is I think so much of the design of what AI does is kind of more verbs um it's more the workflows Auto Complete Auto suggest um go out and gather some information for me Etc and we don't really have the tooling yet to kind of draw verbs on the screen"

### The New Paradigm Shift

> "It almost feels like back in like 2010 or so when when touch um devices really kind of came on the market and everything had to reinvented kind of Touch first and we're at one of those moments again where like all of software all the components that we kind of took for granted um they are really being reimagined and reshaped by the builders and startups and designers out there right now"

### Keeping Humans in Control

> "So much of it is how do you keep the user in the loop and in control while AI does its magic and we've seen some pretty amazing interfaces to get that level of control and and make sure it's doing the right thing that leads to incredible output that would have taken days years"

### Building on Legacy Patterns

> "Kind of what what is old is uh is new again so kind of flowcharts Etc probably like chip designers like 50 years ago they're like oh yeah we used to you know kind of model our things like that and so it's interesting to kind of like see this Paradigm kind of getting resurfaced in the AI era so you know we didn't invent this today but we're building on a lot of Legacy um and on the Giant on the shoulder of giants"
