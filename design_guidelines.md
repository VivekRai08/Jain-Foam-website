# Design Guidelines for Jain Foam & Furnishing Website

## Design Approach

**Selected Approach:** Hybrid - Modern E-commerce with Local Business Trust
- Drawing inspiration from: Shopify's clean product layouts + Airbnb's trust-building elements
- Aesthetic Direction: Light, airy theme with subtle sophistication
- Purpose: Showcase products beautifully while emphasizing 30+ years of local trust and expertise

## Typography

**Font System (Google Fonts):**
- **Primary (Headings):** Poppins (500, 600, 700) - Modern, friendly, professional
- **Secondary (Body):** Inter (400, 500) - Excellent readability for product descriptions and content

**Type Scale:**
- Hero Headlines: text-5xl md:text-6xl font-bold
- Section Headings: text-3xl md:text-4xl font-semibold
- Subheadings: text-xl md:text-2xl font-medium
- Body Text: text-base leading-relaxed
- Small Text/Captions: text-sm

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20
- Section padding: py-16 md:py-20
- Component gaps: gap-6 md:gap-8
- Card padding: p-6
- Container max-width: max-w-7xl

**Grid System:**
- Product cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Features/Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Gallery: Masonry-style grid with varying heights
- Contact page: 2-column split (form + map/info)

## Component Library

### Navigation
- Sticky header with light backdrop blur
- Logo left, navigation center, CTA button right
- Mobile: Hamburger menu with slide-in drawer
- Quick contact info bar above main nav (phone, hours)

### Hero Section (Home Page)
- Full-width hero with high-quality lifestyle image (sofa/living room setup)
- Overlay: Semi-transparent white gradient for text legibility
- Centered content with main headline, subheadline, dual CTAs
- Trust indicators below hero: "30+ Years Experience" | "Same-Day Delivery" | "Trusted by Thousands"
- Buttons on hero: Blurred background with white/glass effect

### Product Cards
- Image with hover zoom effect
- Category badge (top-left overlay)
- Product name + brief description
- Subtle shadow that lifts on hover (shadow-md → shadow-xl transition)
- Rounded corners: rounded-lg

### Service Sections
- Icon-title-description cards in 4-column grid (desktop)
- Icons: Heroicons (outline style for consistency)
- Hover: Subtle lift with shadow transition

### Gallery
- Filterable masonry grid
- Lightbox modal for full-size viewing
- Category filters (All, Curtains, Sofas, Wallpapers, etc.)
- Instagram feed integration at bottom

### Contact Form
- Clean, spacious form fields with labels
- Input styling: border with focus ring, rounded-md
- Large textarea for message/requirements
- Submit button: Primary style with loading state
- Form left, Map + business info right (desktop)

### Chatbot
- Fixed bottom-right floating button
- Rounded-full icon with pulse animation
- Chat modal: Clean white card with subtle shadow
- Message bubbles: Rounded, alternating alignment
- Powered by AI badge at bottom

### Footer
- Multi-column layout (About, Quick Links, Contact, Map)
- Social media icons (Instagram prominent)
- Newsletter signup option
- Business hours, address, contact details
- Copyright and trust badges

## Animations

**Entrance Animations:**
- Page load: Fade-in for all major sections (duration-700)
- Scroll-triggered: Slide-up with fade (IntersectionObserver)
- Stagger children elements by 100ms for card grids

**Interaction Animations:**
- Buttons: Scale on hover (scale-105) + shadow lift
- Product cards: Smooth zoom on image hover (scale-110)
- Links: Underline expansion from center
- Form inputs: Border color transition on focus

**Performance:**
- Use CSS transforms (translate, scale) for smooth 60fps
- GPU-accelerated properties only
- Reduce motion for accessibility (prefers-reduced-motion)

## Images

**Image Strategy:**
- **Hero Image:** Large, aspirational lifestyle shot showing a beautifully furnished living room with sofa, curtains, and decor (warm, inviting atmosphere)
- **About Section:** Shop exterior/interior photo showing the physical store
- **Product Categories:** High-quality product photography on clean white backgrounds
- **Gallery:** Customer installations, before/after transformations, product variety
- **Testimonials:** Optional customer photos for authenticity
- All images: Lazy loading, WebP format with fallbacks

**Image Placement:**
- Hero: Full-width background
- Products: Square aspect ratio (1:1) for consistency
- Gallery: Mixed aspect ratios for visual interest
- About: 50/50 split with text content

## Key Design Principles

1. **Trust Through Transparency:** Prominent display of experience, contact info, location
2. **Visual Hierarchy:** Clear path from hero → products → social proof → contact
3. **Breathing Room:** Generous whitespace, never cramped
4. **Mobile-First:** Touch-friendly targets (min 44px), readable text without zoom
5. **Performance:** Optimized images, minimal animation overhead, fast load times
6. **Local SEO:** Schema markup, location prominence, customer base highlights

This design creates a modern, trustworthy online presence that converts local customers while maintaining excellent performance across all devices.