
<high_level_design>
## 1. Brand & Art Direction Overview

This is a **modern, high-energy sales page** for a workshop about AI for digital businesses. The visual style is **bold, dark, and tech-forward** with strong emphasis on:

- **Dark theme dominance** - Deep blacks (#0A0A0A, #141414, #1A1A1A) create a sophisticated, tech-industry aesthetic
- **Vibrant coral/orange gradient accents** - Used for CTAs, highlights, and emphasis (gradient from #D15449 to #E88B4E to #F2B263)
- **High contrast typography** - White text on dark backgrounds with strategic use of orange highlights
- **Geometric patterns** - Pixelated circular logo, dotted patterns, and angular decorative elements
- **Professional photography** - Black and white portraits with leather jacket styling for authority
- **Polaroid-style image treatments** - Casual, authentic photo frames with slight rotation
- **Meme/casual imagery** - Strategic use of relatable images to break formality
- **Marquee scrolling text** - Animated text bands with keywords (inteligência artificial, produtividade, etc.)
- **Data visualization** - Progress bars, statistics, and infographic elements
- **Warning/alert icons** - Strategic use of triangular warning symbols for urgency

## 2. Color Palette (Dark Theme)

| Token | HEX/RGB | Usage | Notes |
|-------|---------|-------|-------|
| **Primary Background** | #0A0A0A | Main page background | Deep black |
| **Secondary Background** | #141414, #1A1A1A | Section containers | Slight variations for depth |
| **Light Background** | #E8E5E0, #F5F3F0 | Alternating sections | Off-white/cream |
| **Accent Gradient Start** | #D15449 | CTA buttons, highlights | Coral red |
| **Accent Gradient Mid** | #E88B4E | Gradient transitions | Orange |
| **Accent Gradient End** | #F2B263 | Gradient end point | Golden orange |
| **Text Primary** | #FFFFFF | Main headings, body text | Pure white |
| **Text Secondary** | #C7C7C7, #B8B8B8 | Supporting text | Light gray |
| **Text Dark** | #1E1E1E, #2D2D2D | Text on light backgrounds | Dark gray/black |
| **Border/Divider** | rgba(255,255,255,0.1) | Subtle borders | Transparent white |
| **Card Background** | #1F1F1F, #252525 | Content cards | Dark gray |
| **Success Green** | #4A6B4A | Positive indicators | Muted green |
| **Warning Red** | #6B3A3A | Negative indicators | Muted red/brown |

## 3. Typography Scale

**Primary Font Family:**
- **Display:** "Bomstad Display Bold" - Custom bold display font for large headings
- **Body:** "Satoshi" (Regular, Italic, Bold, Variable) - Modern sans-serif
- **Secondary:** "Lato" (Regular, Bold) - Clean sans-serif for UI elements

**Font Sizes (Desktop):**
- Hero Headline: 56-72px, Bomstad Display Bold, line-height: 1.1
- Section Headline: 40-52px, Bomstad Display Bold, line-height: 1.15
- Subheadline: 24-32px, Satoshi Regular/Bold, line-height: 1.4
- Body Large: 18-20px, Satoshi Regular, line-height: 1.6
- Body: 16px, Satoshi Regular, line-height: 1.6
- Small/Caption: 14px, Satoshi Regular, line-height: 1.5
- Button: 16-18px, Satoshi Bold, uppercase tracking

**Font Weights:**
- Bold: 700 (Bomstad, Satoshi, Lato)
- Regular: 400 (Satoshi, Lato)
- Italic: 400 italic (Satoshi)

**Special Typography Treatments:**
- Gradient text: Linear gradient applied to key phrases
- Text balance: CSS text-wrap: balance for better readability
- Uppercase: Strategic use for labels and CTAs
- Italic: Used for emphasis and quotes

## 4. Spacing & Layout Grid

**Container Widths:**
- Max width: 1200-1400px
- Content width: 800-1000px for text-heavy sections
- Narrow width: 600-700px for single-column content

**Spacing Scale:**
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px
- 3xl: 96px
- 4xl: 128px

**Section Padding:**
- Vertical: 80-120px desktop, 48-64px mobile
- Horizontal: 24-48px
- Internal card padding: 32-48px

**Grid System:**
- 12-column responsive grid
- Gutter: 24-32px
- Two-column layouts for features/benefits
- Three-column layouts for schedule blocks

## 5. Visual Effects & Treatments

**Shadows:**
- Card shadow: 0 4px 20px rgba(0,0,0,0.3)
- Button hover: 0 8px 30px rgba(209,84,73,0.3)
- Image shadow: 0 10px 40px rgba(0,0,0,0.5)

**Border Radius:**
- Small: 8px (buttons, tags)
- Medium: 12-16px (cards, inputs)
- Large: 24px (major containers)
- Circle: 50% (avatars, icons)

**Gradients:**
- Primary CTA: linear-gradient(135deg, #D15449 0%, #E88B4E 50%, #F2B263 100%)
- Text highlight: Same as primary
- Radial gradient: Used for icon backgrounds

**Filters & Effects:**
- Image grayscale: Applied to portraits for consistency
- Blur backdrop: Used sparingly for overlays
- Hover scale: 1.02-1.05 for interactive elements
- Rotation: -2 to 3 degrees for polaroid images

**Animations:**
- Marquee scroll: Continuous horizontal scroll for keyword bands
- Fade in: On scroll animations for content
- Button hover: Scale + shadow transition
- Progress bars: Animated fill

## 6. Component Styles (Dark Theme)

**Navigation:**
- Fixed header with dark background
- Logo: Pixelated circular icon + text
- CTA button in top right
- Icon list for metadata (date, location, format)

**Buttons:**
- Primary CTA: Gradient background (#D15449 to #F2B263), white text, 16-18px bold uppercase, 16px padding, 8px border radius, shadow on hover
- Secondary: Border style with transparent background
- Size: Small (compact), Medium (default), Large (hero)

**Cards:**
- Dark background (#1F1F1F - #252525)
- 16-24px border radius
- 32-48px internal padding
- Subtle border or shadow
- Icon + title + description layout
- Hover: Slight lift effect

**Icon Lists:**
- Star icons: 4-point stars in gradient colors
- Check marks: In circles for positive lists
- X marks: In circles for negative lists
- Icon size: 24-32px
- Spacing: 16-24px between items

**Progress Bars:**
- Container: Dark background with border
- Fill: Gradient (coral to orange)
- Height: 8-12px
- Border radius: 4-6px
- Label: Percentage + text description

**Testimonial Cards:**
- Light background on dark sections
- Circular avatar image (grayscale)
- Quote marks
- Name + handle
- 24-32px padding
- Border radius: 16px

**Stats/Numbers:**
- Large display: 72-96px, Bomstad Display Bold
- Label: 16-18px, Satoshi Regular
- Gradient color or white
- Used for key metrics (132%, U$ 391 bilhões)

**Schedule Blocks:**
- Three-column grid
- Light background boxes
- Numbered blocks (Bloco 1, 2, 3...)
- Title + bullet list format
- 16-24px border radius
- 24-32px padding

**FAQ Accordion:**
- Light background sections
- Question: Bold text
- Answer: Regular text with padding
- Expandable interaction
- Border separators

**Image Treatments:**
- Portraits: Grayscale with high contrast
- Polaroid frames: White border, slight rotation
- Screenshots: Border or shadow
- Logo badges: Grid layout with spacing

**Warning/Alert Boxes:**
- Triangle icon with exclamation
- Orange/coral border
- Dark background
- 12-16px padding
- Used for urgency messaging

**Price Display:**
- Extremely large numbers (120-160px)
- Gradient or white color
- Decimal and currency symbol styling
- Context text (old price crossed out)
- Dark container background

## 7. Site Sections (In Order)

1. **Hero/Header Section**
   - Fixed navigation with logo and CTA
   - Workshop branding/logo
   - Metadata icons (digital business, dates, live format)
   - Main headline with gradient emphasis
   - Subheadline
   - Primary CTA button
   - Progress bar showing "100% LOTE 1 vendido"

2. **Marquee Band**
   - Infinite scroll with keywords
   - Dark background with light text

3. **Value Proposition Section**
   - "Nada de prompts genéricos!" headline
   - Four feature cards with icons
   - Dark background
   - Two-column grid layout

4. **Social Proof / Stats Section**
   - "O mundo mudou" heading
   - Large stats display (132% growth, U$391 billion)
   - News screenshot images
   - Light background

5. **CTA Section**
   - "Por isso, em 2 dias juntos" headline
   - Image of person (dark gray background)
   - CTA button with decorative stars

6. **Testimonials Section**
   - "Elas não sabiam nada" heading
   - Four testimonial cards
   - Portrait images (grayscale)
   - Quote format with names/handles
   - Dark background

7. **Pain Points Section**
   - "A oportunidade de ouro" headline
   - Meme image (woman drinking coffee)
   - List of competitor actions
   - Two options comparison
   - CTA button

8. **Clarity/Benefits Section**
   - Six benefit cards in grid
   - Icon + title format
   - Light background

9. **Target Audience Section**
   - "É para você!" heading
   - Two columns: positive (checkmarks) and negative (X marks)
   - Contrasting background colors (green/red tints)
   - CTA button

10. **Schedule/Curriculum Section**
    - "Cronograma do nosso workshop" headline
    - Timeline format (10h start, 12h30 lunch, 14h return, 17h end)
    - Two days (Sábado/Domingo)
    - Six blocks total (3 per day)
    - Three-column card layout per day
    - Detailed bullet lists per block

11. **Instructor Bio Section**
    - "Quem te guiará" headline
    - Large portrait photo (grayscale)
    - Three credential badges
    - Personal story/credentials
    - Social proof statement
    - Screenshot of results (R$0 → R$500k)

12. **Pricing Section**
    - "Cabe no meu bolso?" headline
    - Polaroid-style photos
    - Could charge R$997 positioning
    - Large price display: R$ 47,00
    - Payment icons
    - CTA button
    - Warning about limited spots

13. **Value Justification Section**
    - "Por que tão barato?" headline
    - Transparency about business model
    - "É um ganha-ganha" explanation

14. **Guarantee Section**
    - "Risco Zero" label
    - Large "7 DIAS" circular badge
    - Guarantee explanation
    - Decorative circular patterns

15. **Urgency Section**
    - "Últimas Vagas Disponíveis" headline
    - Warning icon
    - Remaining spots counter (87 vagas restantes)
    - Urgency messaging
    - CTA button

16. **FAQ Section**
    - "Perguntas Frequentes" headline
    - Accordion-style Q&A
    - Light background
    - Support contact card (Dhara Loise)

17. **Footer**
    - Copyright notice
    - LGPD compliance text
    - Developer credit
    - Dark background
</high_level_design>

<theme>
dark
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/header-navigation.tsx</file_path>
    <design_instructions>
Clone the fixed header navigation bar with dark background (#1a1a1a). Left side displays the workshop logo "Workshop IA para negócios digitais" with an orange pixelated circular icon. Right side contains a "GARANTIR INGRESSO" (Guarantee Entry) button with white border, transparent background, and white text. Below the logo are three info badges with icons: "Negócios digitais" (digital businesses), "Dias 29 e 30/11 das 10h às 17h" (Days 29 and 30/11 from 10am to 5pm), and "AO VIVO no Zoom" (LIVE on Zoom). Use flexbox layout with space-between alignment. Header should be sticky/fixed at top with z-index layering. Typography uses Satoshi font family with consistent spacing. Responsive: stack vertically on mobile with logo centered and button full-width.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/Logo-WIAND-ht-1a-1.avif"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/hero-section.tsx</file_path>
    <design_instructions>
Clone the hero section with split layout: left side text content, right side professional woman image with circular orange decorative elements. Dark gradient background (#1a1a1a to darker). Headline in large Bomstad Display Bold font: "Como aplicar IA no seu Negócio Digital para Reduzir até 70% da carga operacional" with gradient orange text on "IA no seu Negócio Digital". Subheadline in italic explaining the 2-day practical approach. Primary CTA button "GARANTIR INGRESSO | LOTE 01" with orange-red gradient background, white text, rounded corners. Below button: progress bar showing "100% do LOTE 1 vendido a R$47" with dynamic fill. Small tag above headline "A oportunidade de ouro". Text on right: "Enquanto você lê isso, experts de todos os nichos usam IA para converter 2x mais, com time menor e mais lucro!" Responsive: stack vertically on mobile, image at top, text below.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/BG-TOPO-PV-WIAN-DESKTOP-DARK-1B-14.avif"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/scrolling-keywords.tsx</file_path>
    <design_instructions>
Clone the horizontally scrolling keyword banner with dark background. Contains repeating keywords with star icons: "inteligência artificial", "negócios digitais", "produtividade", "escala", "lucratividade". Each keyword has a 4-point star icon (32px) before text. White text on dark background with seamless infinite scroll animation. Use CSS keyframes for smooth continuous scrolling effect. Keywords separated by consistent spacing. Font: Satoshi Regular, 18px. Section has subtle top/bottom padding. Mobile: same infinite scroll effect but adjusted speed.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/features-grid.tsx</file_path>
    <design_instructions>
Clone the features section with light beige background (#f5f3f0). Small tag "Nada de prompts genéricos!" above main heading. Headline: "Chega de prompt genérico" (orange gradient) + "IA tem que facilitar sua vida. Em dois dias você vai sair plano para:" Four feature cards in 2x2 grid, each with gradient radial icon (orange/pink), bold title, and description text. Cards: 1) "IA produzindo conteúdo autêntico que vende", 2) "Agente personalizado de vendas", 3) "Agente de suporte aos alunos", 4) "Eliminação de tarefas operacionais repetitivas". Cards have subtle rounded borders, light background. Typography: Satoshi for body, Bomstad Display for headings. Responsive: single column on mobile with full-width cards.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/world-changed.tsx</file_path>
    <design_instructions>
Clone the "O mundo mudou" section with light background. Centered layout. Small tag "Tudo mudou!" Headline: "Hoje você tem acesso aos sistemas de IA que eram luxo das gigantes bilionárias." Bold "Tem noção da loucura que é isso?" with exploding head emoji. Subtext with "Traduzindo: você tá diante da janela de oportunidade mais bizarra da história!" Below: row of tech company logos (Meta, Netflix, Amazon, Adobe, Apple) in grayscale/muted colors, evenly spaced. Decorative wave/arrow SVG element at bottom. Clean, modern layout with ample whitespace. Typography hierarchy: Bomstad Display for headings, Satoshi for body. Responsive: logos wrap to 2 rows on tablet, single column on mobile.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/Selos-redes-sociais-2.avif", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/svgs/1f92f-1.svg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/market-stats.tsx</file_path>
    <design_instructions>
Clone the AI market statistics section with light beige background. Small tag "Tudo mudou!" Headline: "IA nivelou o jogo" (gradient) + "- 2025 é o último ano em que IA é 'novidade'". Large image showing news headlines about AI with overlay stats box. Stats display: "132% de crescimento de 2022 vs 2025" and "U$ 391 bilhões de valor no mercado de AI". Below: dark card with rounded corners containing headline "Por isso, em 2 dias juntos, vamos:" and bold subheading about automating business and charging 2x more. Card has subtle gradient background. Clean typography hierarchy. Responsive: stack vertically on mobile, full-width image and stats.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/PRINT-NOTICIAS-3.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/testimonials-carousel.tsx</file_path>
    <design_instructions>
Clone the testimonials section with dark background (#1a1a1a). Small text "Elas não sabiam nada sobre Inteligência Artificial" with arrow pointing to testimonials. Four testimonial cards in masonry/staggered grid layout. Each card: circular profile photo, quotation mark icon, bold headline quote, body text, and social media handle. Cards have light background (#f5f3f0), rounded corners, subtle shadow. Testimonials from Marília Ponte, Liz Valz, Marina Ratton, and Nathalia Rabello. Typography: Satoshi font family. Cards are different heights for visual interest. Responsive: 2 columns on tablet, single column on mobile. Smooth hover effects on cards.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-depo-04-4.avif", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-depo-02a-5.avif", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-depo-03-6.avif", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-depo-01a-7.avif"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/opportunity-cta.tsx</file_path>
    <design_instructions>
Clone the urgency section with dark background. Left side: meme-style image of professionals with text overlay. Right side: headline "A Pergunta É:" followed by bold question about paying R$10k-20k monthly for team doing AI work. List of competitor actions with checkmarks. Two-option choice layout: "1 Continuar gastando com equipe enquanto sua margem diminui" vs "2 Aprender a aplicar IA do jeito certo nos dias 29 e 30/11". Below: "Clareza total - Você vai sair desse workshop com clareza de:" with icon list. Typography: Bomstad Display for headings, Satoshi for body. Orange accent color for emphasis. Responsive: stack vertically on mobile.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/IMG-MEME-1A-8.avif"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/target-audience.tsx</file_path>
    <design_instructions>
Clone the "Para quem é este Workshop?" section with light beige background. Small tag "É para você!" Centered heading. Two-column layout: left column "Este Workshop É Para Você Se:" with green checkmark icons and positive criteria list (has digital business, tired of paying team, invested in IA courses, wants to reduce costs, doesn't want to learn Make/N8n, wants to understand where IA works). Right column "Este Workshop NÃO É Para Você Se:" with red X icons and negative criteria list (expects magic formulas, wants ready prompts, doesn't have digital business, thinks IA does everything alone). Icons use custom star-burst design in green/red. Typography hierarchy clear. Responsive: stack vertically on mobile with full-width columns.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/svgs/ESTRELA-POSITIVO-2.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/svgs/ESTRELA-NEGATIVO-3.svg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/schedule-overview.tsx</file_path>
    <design_instructions>
Clone the workshop schedule section with dark background. Small tag "Workshop". Heading "Cronograma do nosso workshop. 2 Dias de Conteúdo 100% Prático!" Below: info badges for dates and Zoom. Right sidebar: timeline with icons showing 10h Start, 12h30 Almoço (Lunch), 14h Retorno, 17h Encerramento. Main content area shows "Dia 1: Sábado" (29/11, sábado, das 10h às 17h) with three blocks in white cards: "Bloco 1: Fundamentos de IA para Negócios Digitais", "Bloco 2: IA no Atendimento e Vendas", "Bloco 3: IA na Criação de Conteúdo". Each block contains detailed bullet points. Clean card design with light gray background, rounded corners. Typography: Satoshi for body, Bomstad Display for headings. Responsive: single column on mobile.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/schedule-day-two.tsx</file_path>
    <design_instructions>
Clone "Dia 2: Domingo" section with same design system as day 1. Dark background with white content cards. Shows "30/11, Domingo, das 10h às 17h". Three blocks in white rounded cards: "Bloco 4: IA na Operação e Gestão", "Bloco 5: IA em Marketing e Tráfego", "Bloco 6: Implementação e Próximos Passos". Each block contains detailed curriculum items as bullet points. Consistent typography and spacing with previous schedule section. Cards have subtle hover effects. Responsive: stack vertically on mobile with full-width cards, maintain readability.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/instructor-bio.tsx</file_path>
    <design_instructions>
Clone the instructor section with light beige background transitioning to dark. Small tag "Quem te guiará". Left side: large professional black and white photo of Amanda in leather jacket with circular orange decorative elements. Right side: headline "Eu Sou Amanda Lourenço" followed by bio text about agency experience since 2023, working with companies worldwide (China, USA, India). Three credential badges with icons: ESPM MBA, Embdev experience, PUCPR Engineering degree. Bold section "E já te aviso:" with direct tone about no trends/hacks. Section about going from 0 to 500k in 6 months. Typography: Bomstad Display for headings, Satoshi for body. Orange star decorative elements. Responsive: stack vertically on mobile, image full-width at top.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/IMG-INDIV-AMANDA-BIO-9.avif"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/results-showcase.tsx</file_path>
    <design_instructions>
Clone the results section with dark background. Large text "R$0 → R$500k" with arrow, followed by detailed explanation text about achieving 500k in 6 months without team using IA. Image showing workspace interface screenshots with follower count metrics (1,832 to 80,9 mil followers). Text emphasizes applying IA in mentoring and service operations. Typography: large display numbers in Bomstad Display, body text in Satoshi. Orange accent color for key metrics. Clean layout with ample whitespace. Responsive: stack content vertically on mobile, full-width images.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/IMG-0-A-500K-DESKTOP-10.avif"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/pricing-card.tsx</file_path>
    <design_instructions>
Clone the pricing section with split layout. Light beige background on left, dark card on right. Left side: small tag "Cabe no meu bolso?", text explaining workshop could cost R$997, reasons for R$47 price point, bullet points about win-win scenario. Right side: dark card with workshop logo, "Você garante sua vaga por apenas:" heading, massive "R$ 47,00" in large display font, subtext "(Menos que um jantar no iFood)", payment method icons (Hotmart, PIX, Elo, Visa, American Express), primary CTA button "GARANTIR INGRESSO | LOTE 01" with orange-red gradient, warning icon with "O LOTE pode virar a qualquer momento". Typography: Bomstad Display for price, Satoshi for body. Responsive: stack vertically on mobile, card full-width.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/Logo-WIAN-ht-11.avif", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/svgs/26a0-4.svg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/why-cheap.tsx</file_path>
    <design_instructions>
Clone the "Por que tão barato?" section with dark background. Left side: tilted polaroid-style photo frames showing couple photo. Right side: headline "Por que tão barato?" followed by "Deixa eu ser direta com você:". Explanation text about pricing strategy (could charge R$997, makes money applying IA not selling courses, workshop as entry point). Description of two outcomes: some implement alone, others hire agency. "É um ganha-ganha:" with two benefit cards with star icons. Typography: Bomstad Display for headings, Satoshi for body. Orange accent on key points. Photo frames have white borders with subtle shadow/rotation. Responsive: stack vertically on mobile, photo at top.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/CTA-FOTO-AMANDA2-15.avif"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/guarantee-section.tsx</file_path>
    <design_instructions>
Clone the guarantee section with dark background and concentric circular design. Center: large "7 DIAS" (7 days) text with pixelated circular pattern in orange. Small tag "Risco Zero" above. Heading "Garantia Incondicional de 7 Dias". Body text explaining 7-day money-back guarantee, no questions asked, no bureaucracy. Clean centered layout with ample whitespace. Decorative concentric circles in background (subtle, low opacity). Typography: Bomstad Display for heading, Satoshi for body. Orange accent color for the "7" and circles. Responsive: maintain centered layout on all screens, adjust circle sizes proportionally.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/urgency-banner.tsx</file_path>
    <design_instructions>
Clone the urgency section with dark background. Small tag "A decisão". Large warning triangle icon. Headline "Últimas Vagas Disponíveis" in large Bomstad Display font. Body text explaining live workshop limited to 200 people. Bold text "Vagas restantes: 87". Warning text "Quando acabar, acabou. Não vai ter 'link de acesso depois' ou 'gravação disponível'." Final urgency line "Ou você garante sua vaga agora, ou vai ficar de fora." Large CTA button "GARANTIR INGRESSO | LOTE 01" with orange-red gradient. Typography hierarchy clear with emphasis on scarcity. Responsive: centered layout on all screens, maintain visual hierarchy.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/faq-section.tsx</file_path>
    <design_instructions>
Clone the FAQ section with light beige background. Small tag "FAQ". Heading "Perguntas Frequentes". Accordion-style FAQ items in white rounded cards with subtle shadow. Questions include: workshop live or recorded, need programming knowledge, works for any niche, learn Make/N8n, post-workshop support, installment payments, guarantee. Each item expands to show answer. Clean typography with Satoshi font. Right sidebar: support card with star icon, "Se ainda tiver dúvidas, minha equipe está a disposição:" heading, profile photo of Dhara Loise (Head Comercial), WhatsApp support button with teal color. Responsive: stack FAQ and sidebar vertically on mobile, full-width cards.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6ea0497a-5899-4c1f-825b-1774d1c506e6-amandalourenco-com/assets/images/foto-dhara-suporte-13.avif"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer.tsx</file_path>
    <design_instructions>
Clone the footer section with dark background (#1a1a1a). Copyright text "© 2025 Amanda Lourenço | Todos os direitos reservados" followed by LGPD compliance notice about data protection and privacy. Small text "Desenvolvido por:" with developer credit. Minimal design with centered text. Light gray text color (#999). Subtle top border. Typography: Satoshi Regular, 14px. Responsive: maintain centered layout, adjust padding for mobile. Footer sits at bottom of page with proper spacing from last section.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>
</sections>
