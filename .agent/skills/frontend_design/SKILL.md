---
name: frontend_design
description: Create dynamic, high-energy, personal brand websites with complex scroll-driven storytelling, interactive 3D elements, and bold typography. Use this skill when the user asks to build modern, edgy portfolio or brand pages that require a high-impact, kinetic aesthetic.
license: Complete terms in LICENSE.txt
---

This skill guides the creation of distinctive, production-grade frontend interfaces tailored for high-profile personal brands, athletes, or creators. Implement real working code that captures a sense of speed, energy, and premium exclusivity, avoiding generic or static layouts.

The user provides frontend requirements: a portfolio, merchandise page, or interactive biography. They may include context about the brand colors, key achievements, or specific media assets to feature.

## Design Thinking

Before coding, understand the context and commit to a BOLD, KINETIC aesthetic direction:
- **Purpose**: What story is being told? (e.g., career timeline, championship victory, merchandise launch).
- **Tone**: High-octane, edgy, modern, athletic, premium. It should feel fast but meticulously controlled.
- **Constraints**: Heavy media usage (video, high-res images, 3D elements) requires strict performance optimization and smooth rendering.
- **Differentiation**: What is the interactive centerpiece? (e.g., a cursor-tracking 3D helmet, an oversized signature, a winding chronological timeline).

**CRITICAL**: Execute with precision. The aesthetic relies on extreme contrast, scale, and motion. Timid typography or standard block layouts will break the illusion of a premium, bespoke brand experience. 

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Utilize an aggressive, ultra-bold, condensed sans-serif for monumental impact (hero statements, massive quotes). Pair this with a highly legible, clean sans-serif for UI elements and secondary text. Introduce handwritten/signature-style fonts as oversized graphic overlays, not just text. 
- **Color & Theme**: Extreme, high-contrast palettes. Anchor the design with stark white and deep, rich darks (black, dark olive, charcoal). Punctuate with a single, aggressive neon or vibrant accent color (e.g., neon yellow/green) used sparingly but consistently for UI triggers, highlights, and interactive states.
- **Motion**: Prioritize continuous, scroll-triggered storytelling. The page should feel alive. Implement parallax imagery, masked text reveals, and cursor-tracking elements. 
- **Spatial Composition**: Break the grid. Use heavy asymmetry and overlapping elements. Text should frequently overlap images, and massive graphics (like a signature) should span across multiple sections.
- **Backgrounds & Visual Details**: Avoid flat, empty backgrounds. Integrate subtle environmental textures like moving topographical contour lines, grain overlays, or large-scale, faded typography. 

NEVER use standard bootstrap-style grids, generic card layouts, or evenly distributed, symmetrical content blocks. Avoid soft drop-shadows and rounded corners; opt for sharp edges and harsh, graphic contrast.

## High-Octane Scroll-Driven Design Guidelines

When this skill is invoked for a dynamic, scroll-driven website, follow these specific rules:

### The Interactive Centerpiece
- The hero section MUST contain a highly interactive or visually disruptive element. 
- Examples include: A 3D model that maps to cursor movement, a multi-layered mask reveal, or an oversized graphic that pins and scales as the user scrolls.

### Topographical Pathways & Flow
- Instead of stacked, distinct horizontal sections, use continuous visual elements to draw the eye downward.
- Implement winding, curved SVG lines or borders that travel through the page, connecting disparate media elements (images, quotes, stats) to create a sense of a "journey" or timeline.

### Typography as Structural Graphics
- Headings are not just text; they are architectural elements. Use massive scale (e.g., full viewport width) with tight line-heights.
- Utilize alternating font weights or colors within a single massive headline to create rhythm (e.g., alternating between solid fill and outline styles, or white and neon).

### Horizontal Exploration Zones
- Break vertical scrolling monotony by introducing horizontal scroll zones for categorized content (e.g., a "Hall of Fame" gallery, merchandise carousels, or chronologies).
- These horizontal sections should feel seamless, often pinning the section container while the content slides horizontally on vertical scroll.

### Aggressive Color Zoning
- Backgrounds must shift dramatically to signal a change in narrative pace. Transition from a stark white background to a pitch-black background using a sharp, immediate wipe or a smooth but rapid fade. 
- Text and UI elements must invert flawlessly across these zones.

### Layering and Depth
- Treat the page like a physical collage. Elements should exist on distinct Z-axis planes. 
- Example: A massive, rough signature graphic sits in the background (z-index: 1), an image scrolls over it (z-index: 2), and clean typographic stats overlay the image (z-index: 3).