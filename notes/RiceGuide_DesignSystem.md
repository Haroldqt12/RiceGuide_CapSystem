# RiceGuide Design System
**Version 1.0** · Agriculture Farm Management Platform

---

## 1. Brand Identity

### Logo
The RiceGuide logo combines a speech bubble with a rice stalk, representing smart, AI-assisted agricultural guidance. The speech bubble references the conversational AI assistant, while the golden grain stalks evoke harvest and growth.

**Logo usage rules:**
- Minimum size: 32px height (app icon), 120px width (horizontal lockup)
- Maintain clear space equal to 1× the logo height on all sides
- Never distort, recolor, or separate the mark from the wordmark in primary usage
- Approved on white, light green (#F0F7E8), and dark backgrounds only

---

## 2. Color System

All colors are derived from the RiceGuide logo: deep greens from the leaf and stalk, golden ambers from the rice grain heads, and neutral warm grays for supporting UI surfaces.

### 2.1 Primary Palette

#### Green — Brand Primary
The dominant green communicates growth, nature, and agriculture.

| Token | Hex | Usage |
|---|---|---|
| `--green-50` | `#F0F7E8` | Page backgrounds, hover states |
| `--green-100` | `#D4EBBA` | Light card tints |
| `--green-200` | `#A8D476` | Subtle highlights |
| `--green-400` | `#5AAF1E` | Secondary buttons, icons |
| `--green-500` | `#4A9318` | Active nav items, focus rings |
| `--green-600` | `#3A7512` | Primary buttons, active states |
| `--green-700` | `#2D5C0E` | Hover on primary buttons |
| `--green-800` | `#1E3E09` | Dark text on green backgrounds |
| `--green-900` | `#0F2004` | Deepest green for emphasis |

#### Amber — Brand Accent
Golden amber from the rice grain — used for highlights, alerts, and data callouts.

| Token | Hex | Usage |
|---|---|---|
| `--amber-50` | `#FFF8E8` | Warning backgrounds |
| `--amber-100` | `#FDECC4` | Yield metric tints |
| `--amber-200` | `#FBCF7A` | Chart fills |
| `--amber-400` | `#F0A500` | Warning badges, yield indicators |
| `--amber-500` | `#D4920A` | Active warning states |
| `--amber-600` | `#B07908` | Amber borders |
| `--amber-700` | `#8A5E06` | Dark amber text |
| `--amber-800` | `#624304` | Amber on light bg |
| `--amber-900` | `#3A2802` | Deepest amber |

### 2.2 Semantic / Role Colors

| Role | Token | Light | Dark | Usage |
|---|---|---|---|---|
| Success | `--color-success` | `#3A7512` | `#A8D476` | Completed tasks, good health |
| Warning | `--color-warning` | `#B07908` | `#FBCF7A` | Pest alerts, weather warnings |
| Danger | `--color-danger` | `#C0392B` | `#F08080` | Disease alerts, critical issues |
| Info | `--color-info` | `#1A6FA8` | `#7ABDE0` | AI insights, informational notes |

### 2.3 Neutral Palette (Warm Grays)

Warm gray complements the green/amber brand palette without feeling cold.

| Token | Hex | Usage |
|---|---|---|
| `--neutral-0` | `#FFFFFF` | Card surfaces, input backgrounds |
| `--neutral-50` | `#F7F6F2` | Page canvas |
| `--neutral-100` | `#EDECEA` | Dividers, secondary backgrounds |
| `--neutral-200` | `#D8D7D2` | Border default |
| `--neutral-400` | `#9E9D97` | Placeholder text |
| `--neutral-600` | `#6B6A65` | Secondary text |
| `--neutral-800` | `#3A3A36` | Primary text |
| `--neutral-900` | `#1E1E1A` | Headings, maximum contrast |

### 2.4 Dark Mode Palette

| Light Token | Light Hex | Dark Hex |
|---|---|---|
| `--surface-page` | `#F7F6F2` | `#161914` |
| `--surface-card` | `#FFFFFF` | `#1E2219` |
| `--surface-panel` | `#F0F7E8` | `#252C20` |
| `--text-primary` | `#1E1E1A` | `#E8EBE4` |
| `--text-secondary` | `#6B6A65` | `#9BA89A` |
| `--border-default` | `#D8D7D2` | `#323828` |
| `--green-600` | `#3A7512` | `#5AAF1E` |

### 2.5 Color Application Rules

- **Navigation active state:** `--green-600` fill with white text
- **Primary CTA buttons:** `--green-600` background, `#FFFFFF` text
- **Data visualization primary series:** `--green-400`, `--amber-400`, `--color-info`
- **Status badges:** Use semantic role tokens, never raw color values
- **Chart crop health "Good":** `--color-success`; "Fair": `--color-warning`; "Poor": `--color-danger`
- Never place amber text on green backgrounds or green text on amber — insufficient contrast

---

## 3. Typography

### 3.1 Font Stack

**Primary:** `"Inter", "Helvetica Neue", Arial, sans-serif`
- All UI labels, body text, inputs, navigation
- Available via Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`

**Monospace:** `"JetBrains Mono", "Fira Code", monospace`
- Numeric data values, coordinates, code outputs, sensor readings

### 3.2 Type Scale

| Name | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `display` | 32px | 600 | 1.2 | -0.5px | Page titles (rare) |
| `h1` | 24px | 600 | 1.3 | -0.3px | Dashboard headings |
| `h2` | 20px | 600 | 1.35 | -0.2px | Section titles |
| `h3` | 16px | 600 | 1.4 | 0px | Card titles |
| `h4` | 14px | 600 | 1.4 | 0.1px | Sub-section labels |
| `body-lg` | 16px | 400 | 1.6 | 0px | Main body text |
| `body` | 14px | 400 | 1.6 | 0px | Default body, descriptions |
| `body-sm` | 13px | 400 | 1.5 | 0px | Supporting copy, tooltips |
| `label` | 12px | 500 | 1.4 | 0.3px | Input labels, column headers |
| `caption` | 11px | 400 | 1.4 | 0.2px | Timestamps, metadata |
| `data-lg` | 28px | 600 | 1.1 | -0.5px | Metric cards (e.g. 25.6 ha) |
| `data` | 20px | 600 | 1.2 | -0.3px | Summary numbers |

### 3.3 Typography Rules

- **Sentence case** everywhere: "Farm overview", not "Farm Overview"
- Minimum font size: **11px** (caption only)
- Maximum font weight used: **600** (semibold) — avoid 700/bold which reads heavy
- Numeric metric values use monospace stack for alignment
- Text on colored backgrounds must pass **WCAG AA** (4.5:1 minimum)

---

## 4. Spacing System

Based on a **4px base unit**. All spacing tokens are multiples of 4.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Icon padding, tight micro-gaps |
| `--space-2` | 8px | Internal component padding (small) |
| `--space-3` | 12px | Inline element gaps |
| `--space-4` | 16px | Card internal padding (default) |
| `--space-5` | 20px | Card internal padding (comfortable) |
| `--space-6` | 24px | Section gaps, card padding (lg) |
| `--space-8` | 32px | Between major sections |
| `--space-10` | 40px | Page-level vertical rhythm |
| `--space-12` | 48px | Hero spacing, large section separators |
| `--space-16` | 64px | Full-bleed section padding |

### Layout Grid

| Breakpoint | Columns | Gutter | Margin | Max Content Width |
|---|---|---|---|---|
| Mobile (< 480px) | 4 | 16px | 16px | 100% |
| Tablet (480–1024px) | 8 | 20px | 24px | 100% |
| Desktop (≥ 1024px) | 12 | 24px | 32px | 1280px |

---

## 5. Elevation & Shadow

| Level | Token | Value | Usage |
|---|---|---|---|
| 0 | `--shadow-none` | none | Flat surfaces, page background |
| 1 | `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Cards, input fields |
| 2 | `--shadow-md` | `0 4px 12px rgba(0,0,0,0.10)` | Dropdowns, popovers |
| 3 | `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.14)` | Modals, floating panels |
| 4 | `--shadow-xl` | `0 16px 48px rgba(0,0,0,0.18)` | Overlays, critical dialogs |

---

## 6. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Badges, tags, small chips |
| `--radius` | 8px | Inputs, buttons, small cards |
| `--radius-md` | 12px | Cards, panels |
| `--radius-lg` | 16px | Modal dialogs, large cards |
| `--radius-xl` | 24px | Feature cards, hero sections |
| `--radius-full` | 9999px | Pills, avatar circles, toggle tracks |

---

## 7. Components

### 7.1 Buttons

**Anatomy:** `[icon?] label`

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `--green-600` | `#FFFFFF` | none | `--green-700` bg |
| Secondary | `transparent` | `--green-600` | `1px solid --green-600` | `--green-50` bg |
| Danger | `--color-danger` | `#FFFFFF` | none | darken 10% |
| Ghost | `transparent` | `--neutral-800` | `1px solid --neutral-200` | `--neutral-50` bg |
| Disabled | `--neutral-100` | `--neutral-400` | none | no change |

**Sizes:**

| Size | Height | Padding H | Font | Icon Size |
|---|---|---|---|---|
| `sm` | 32px | 12px | 13px/500 | 16px |
| `md` (default) | 40px | 16px | 14px/500 | 18px |
| `lg` | 48px | 24px | 16px/500 | 20px |

**States:** default → hover (bg shift) → pressed (scale 0.98) → focus (2px green outline, 2px offset) → disabled (40% opacity, cursor not-allowed)

**Icon button:** square aspect ratio, same height tokens, `--radius` corners.

---

### 7.2 Form Inputs

**Text Input**

```
┌─────────────────────────────────────┐
│ Field label                  (12px) │
│ ┌───────────────────────────────┐   │
│ │ placeholder text...       [i] │   │  ← 40px height
│ └───────────────────────────────┘   │
│ Helper text or error message (11px) │
└─────────────────────────────────────┘
```

- Background: `#FFFFFF`
- Border: `1px solid --neutral-200`; focus: `2px solid --green-500`
- Border radius: `--radius` (8px)
- Padding: `10px 14px`
- Error state: border `--color-danger`, helper text in `--color-danger`

**Select / Dropdown**
Same dimensions as text input. Trailing chevron icon at 16px. Opens a menu card at elevation 2.

**Textarea**
Minimum height 96px, resizable vertically only. Same border styles as text input.

**Checkbox & Radio**

- Size: 18×18px (`--radius-sm` for checkbox, `--radius-full` for radio)
- Checked fill: `--green-600`
- Check icon: `#FFFFFF` 12px stroke
- Label: 14px regular, 8px gap from control

**Toggle / Switch**

- Track: 32×18px, `--radius-full`
- Off track: `--neutral-200`; on track: `--green-600`
- Thumb: 14×14px white circle, 2px inset, transitions 0.2s ease

---

### 7.3 Navigation — Sidebar

Sidebar width: **220px** (desktop), **64px** collapsed (tablet), hidden (mobile → bottom tab bar)

```
┌──────────────────┐
│  🌾 RiceGuide    │  ← Brand lockup, 48px row
├──────────────────┤
│  [icon] Dashboard│  ← Active: green-600 bg, white text
│  [icon] Farm     │  ← Default: transparent, neutral-800
│  [icon] Crops    │
│  [icon] Activities│
│  [icon] Weather  │
│  [icon] AI Asst. │
│  [icon] Reports  │
│  [icon] Alerts 3 │  ← Badge on notification count
├──────────────────┤
│  [icon] Settings │
│  [icon] Profile  │
└──────────────────┘
```

- Nav item height: 44px
- Active state: `--green-600` background, white label, 8px radius
- Hover state: `--green-50` background
- Icon size: 20px, same color as label
- Active icon: white
- Notification badge: `--color-danger` fill, 18px, positioned top-right of icon
- Transition: background 150ms ease

---

### 7.4 Cards

**Standard Card**

- Background: `#FFFFFF`
- Border: `1px solid --neutral-100`
- Border radius: `--radius-md` (12px)
- Padding: 20px
- Shadow: `--shadow-sm`

**Metric Card (Farm Overview stats)**

```
┌────────────────────────┐
│ [icon 24px]  Label     │  ← label: 12px/500, --neutral-600
│                        │
│  25.6 ha               │  ← 28px/600, --neutral-900
│  +2.5% from last month │  ← 12px, --color-success (positive) / --color-danger (negative)
└────────────────────────┘
```

- Width: flexible (fits grid)
- Min height: 100px
- Icon background: 36×36px circle with role-specific tint (green-50, amber-50, etc.)

**Status Card (Crop Monitoring)**

Includes a thumbnail image slot (80×80px, `--radius` corners), stage label, progress bar, and metadata rows.

**AI Insight Card**

- Left border accent: 4px `--color-info`
- Icon: 20px, `--color-info`
- Title: 14px/500
- Body: 13px, `--neutral-600`
- Background: `--neutral-50`

---

### 7.5 Badges & Status Pills

**Badge anatomy:** `[icon?] label`

| Variant | Background | Text | Usage |
|---|---|---|---|
| Success | `#E8F5E0` | `--green-700` | Completed, Good health |
| Warning | `--amber-100` | `--amber-800` | Attention needed |
| Danger | `#FDECEC` | `#C0392B` | Critical alerts |
| Info | `#E3F2FD` | `#1A6FA8` | AI tips, neutral info |
| Neutral | `--neutral-100` | `--neutral-700` | In preparation, pending |

- Height: 22px (sm) / 26px (default)
- Padding: 4px 10px
- Border radius: `--radius-full`
- Font: 12px/500

**Activity status chips** (Completed / In Progress / No Issues / Pending):
Same colors as above. Used inline in activity logs and tables.

---

### 7.6 Progress Bar

- Track: `--neutral-100`, height 8px, `--radius-full`
- Fill: `--green-500` for crop growth, `--amber-400` for warnings
- Animated: transitions `width` over 600ms ease-out on mount
- Label text above: right-aligned percentage in 12px/500

---

### 7.7 Data Table

```
┌─────────┬──────────┬──────────┬────────────┬──────────┐
│ Field   │ Date/Time│ Activity │ Area       │ Status   │
├─────────┼──────────┼──────────┼────────────┼──────────┤
│ 3A      │ May 22   │ Irrigtn  │ 2.5 ha     │ ●Done    │
│ 5B      │ May 21   │ Fertilzr │ 3.2 ha     │ ●Done    │
│ 2A      │ May 21   │ Pest     │ 1.8 ha     │ ○No Issue│
└─────────┴──────────┴──────────┴────────────┴──────────┘
```

- Header row: `--neutral-50` bg, 12px/500, `--neutral-600`, uppercase, 0.3px letter-spacing
- Body rows: 52px height, alternating `#FFFFFF` / `--neutral-50`
- Row hover: `--green-50`
- Dividers: `1px solid --neutral-100`
- Tab filters above table: underline style, `--green-600` active indicator
- Mobile: scroll horizontally on wrapper, or collapse to card-per-row view

---

### 7.8 Weather Widget

```
┌──────────────────────────────────────────┐
│  ☀️ Partly Cloudy     Rain: 37%          │
│  28°C                 Humidity: 78%      │
│  Feels like 30°C      Wind: 12 km/h      │
├──────────────────────────────────────────┤
│  Mon  Tue  Wed  Thu   Fri   Sat          │
│  ⛅   ☀️   ☁️   🌧️    ☀️    ⛅           │
│  29° 30°  31°  30°   29°   29°          │
│  24° 25°  24°  24°   24°   23°          │
└──────────────────────────────────────────┘
```

- Temperature: `data-lg` token (28px/600)
- Condition label: `body` (14px/400)
- Metric labels: `caption` (11px/400), muted
- Metric values: `label` (12px/500)
- Forecast days: 48px wide columns, center-aligned
- Highlight today: `--green-50` bg column

---

### 7.9 AI Assistant Panel

- Header: "AI Rice Assistant" with sparkle icon in `--color-info`
- Subtitle: "Smart Insights for Your Farm" — 13px, `--neutral-600`
- Insight rows:
  - Icon: 20px colored per type (blue = irrigation, green = fertilizer, amber = pest, red = weather)
  - Title: 14px/500
  - Body: 13px, `--neutral-600`
  - Left border accent: 3px, matching icon color
  - Row padding: 12px 16px
  - Divider: `1px solid --neutral-100` between rows

---

### 7.10 Notifications / Alerts

**Toast notification**

- Max width: 360px
- Border-left accent: 4px
- Auto-dismiss: 5 seconds (errors stay until dismissed)
- Position: top-right, 24px from edges
- Stack: max 3 visible, stack downward

**Alert Banner**

- Full-width, inside content area
- Height: auto, min 48px
- Icon left, message, optional action button right
- Role colors applied to bg and left border

---

### 7.11 Modals & Dialogs

- Overlay: `rgba(0, 0, 0, 0.45)`
- Modal surface: `#FFFFFF`, `--radius-lg` (16px), `--shadow-xl`
- Max width: 480px (default), 640px (wide), 100vw-32px (mobile)
- Header: 20px/600 title, 24px bottom border `--neutral-100`
- Footer: right-aligned button group, ghost + primary pair
- Close button: top-right, 32×32px icon button
- Transition: fade + scale(0.96→1) over 200ms

---

## 8. Iconography

**Icon set:** Tabler Icons (outline style only)
- Source: `https://tabler.io/icons`
- CDN: `https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css`

**Sizes:**

| Context | Size |
|---|---|
| Navigation icons | 22px |
| Card action icons | 20px |
| Inline / label icons | 18px |
| Metric card icons | 24px |
| Badge/chip icons | 14px |

**Key icon mappings for RiceGuide:**

| Feature | Icon name |
|---|---|
| Dashboard | `ti-layout-dashboard` |
| Farm overview | `ti-map` |
| Crop monitoring | `ti-plant` |
| Farm activities | `ti-list-check` |
| Weather | `ti-cloud` |
| AI Assistant | `ti-brain` |
| Reports & Analytics | `ti-chart-bar` |
| Notifications | `ti-bell` |
| Settings | `ti-settings` |
| User profile | `ti-user-circle` |
| Irrigation | `ti-droplet` |
| Fertilizer | `ti-flask` |
| Pest scouting | `ti-bug` |
| Weed control | `ti-scissors` |
| Harvest | `ti-grain` |
| Field area | `ti-ruler-2` |

**Color rules for icons:**
- Nav: `--neutral-600` (default), `#FFFFFF` (active)
- Metric card icons: match semantic role tint circle
- Never use black (`#000000`) directly; use `--neutral-800` or `--neutral-900`

---

## 9. Responsive Layout

### 9.1 Breakpoints

| Name | Range | Device |
|---|---|---|
| `xs` | 0–479px | Small phones |
| `sm` | 480–767px | Large phones |
| `md` | 768–1023px | Tablets |
| `lg` | 1024–1279px | Small desktops / large tablets landscape |
| `xl` | 1280px+ | Desktop & wide screens |

### 9.2 Desktop Layout (≥ 1024px)

```
┌─────────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌──────────────────────────────────────┐  │
│ │          │ │  [Header: Page title + User info]    │  │
│ │  SIDEBAR │ │──────────────────────────────────────│  │
│ │  220px   │ │                                      │  │
│ │          │ │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │  │
│ │ [Nav     │ │  │ KPI │ │ KPI │ │ KPI │ │ KPI │   │  │  ← 4-col metric row
│ │  items]  │ │  └─────┘ └─────┘ └─────┘ └─────┘   │  │
│ │          │ │                                      │  │
│ │          │ │  ┌────────────┐ ┌─────────────────┐ │  │
│ │          │ │  │  Weather   │ │  Crop Monitor   │ │  │  ← 2-col section
│ │          │ │  └────────────┘ └─────────────────┘ │  │
│ │          │ │                                      │  │
│ │          │ │  ┌──────────────┐ ┌──────────────┐  │  │
│ │          │ │  │  Activities  │ │  Analytics   │  │  │  ← 2-col section
│ │          │ │  └──────────────┘ └──────────────┘  │  │
│ └──────────┘ └──────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

- Sidebar: fixed left, 220px, full height
- Content area: remaining width, scrollable
- Header: fixed top within content area, 64px height
- Content padding: 24px all sides
- Metric cards: `repeat(4, 1fr)`, 16px gap
- Two-col sections: `7fr 5fr` or `1fr 1fr` depending on content
- Max content width: 1280px, centered if viewport wider

### 9.3 Tablet Layout (768–1023px)

```
┌──────────────────────────────────────┐
│ ┌────┐ ┌────────────────────────┐   │
│ │ NV │ │ [Header 64px]          │   │
│ │ 64 │ │────────────────────────│   │
│ │ px │ │                        │   │
│ │    │ │ ┌──────┐ ┌──────┐      │   │
│ │ [i]│ │ │ KPI  │ │ KPI  │      │   │  ← 2-col KPI
│ │ [i]│ │ └──────┘ └──────┘      │   │
│ │ [i]│ │ ┌──────┐ ┌──────┐      │   │
│ │ [i]│ │ │ KPI  │ │ KPI  │      │   │
│ │    │ │ └──────┘ └──────┘      │   │
│ │    │ │ ┌──────────────────┐   │   │
│ │    │ │ │ Weather (full w) │   │   │  ← Single col sections
│ │    │ │ └──────────────────┘   │   │
│ └────┘ └────────────────────────┘   │
└──────────────────────────────────────┘
```

- Sidebar collapses to 64px icon-only rail
- Sidebar expands on hover (overlay, z-index: 200)
- KPI cards: 2-column grid
- Most sections: single column stacked
- Tab bar alternative: optional bottom nav for tablet-first designs
- Content padding: 16px all sides

### 9.4 Mobile Layout (< 768px)

```
┌───────────────────────┐
│ 🌾 RiceGuide    [👤]  │  ← Top bar 52px
├───────────────────────┤
│                       │
│ Welcome back, Juan! 👋│
│ Here's what's         │
│ happening today.      │
│                       │
│ ┌──────┐  ┌────────┐  │
│ │25.6ha│  │12Fields│  │  ← 2-col KPI grid
│ └──────┘  └────────┘  │
│ ┌──────┐  ┌────────┐  │
│ │  68% │  │  Good  │  │
│ └──────┘  └────────┘  │
│                       │
│ ┌───────────────────┐ │
│ │ 28°C Weather      │ │  ← Full width cards
│ └───────────────────┘ │
│ ┌───────────────────┐ │
│ │ Crop Monitoring   │ │
│ └───────────────────┘ │
│                       │
├───────────────────────┤
│ [🏠] [🌾] [+] [📋][📊]│  ← Bottom tab bar 56px
└───────────────────────┘
```

- No sidebar — replaced by bottom tab bar
- Top bar: logo left, user avatar right, optional hamburger for secondary nav
- KPI cards: 2-column grid, full width
- All sections: single column
- Bottom tab bar: 5 primary destinations, 56px height, white bg, `--shadow-md` top
- FAB (floating action button): centered `+` in tab bar at `--green-600`, 56×56px circle
- Content padding: 16px horizontal, 12px vertical
- Bottom safe area: account for device home indicator (env(safe-area-inset-bottom))

---

## 10. Motion & Animation

| Token | Value | Usage |
|---|---|---|
| `--dur-fast` | 100ms | Micro-interactions (toggle, checkbox) |
| `--dur-snap` | 150ms | Button press, badge pop |
| `--dur-base` | 200ms | Default transitions (hover, fade) |
| `--dur-slow` | 300ms | Modal open/close, sidebar expand |
| `--dur-enter` | 400ms | Page transitions, card mounts |
| `--ease-out` | `cubic-bezier(0.0, 0, 0.2, 1)` | Entering elements |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exiting elements |
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | General transitions |

**Rules:**
- All color and background transitions: `--dur-base`
- Transform animations (scale, translate): `--dur-snap` to `--dur-slow`
- Always wrap decorative animations in `@media (prefers-reduced-motion: no-preference)`
- Progress bars animate on mount, not on every render
- Chart series animate in sequentially with 50ms stagger per series

---

## 11. Data Visualization

Used in Reports & Analytics section.

### Color sequence for chart series:

1. `--green-500` (#4A9318) — primary series (yield, production)
2. `--amber-400` (#F0A500) — secondary series (water usage, costs)
3. `#1A6FA8` — tertiary series (fertilizer, third metric)
4. `--neutral-400` — comparison / prior period

### Chart guidelines:

- **Background:** `#FFFFFF`, card wrapper with `--shadow-sm`
- **Grid lines:** `--neutral-100`, 0.5px dashed horizontal only
- **Axis labels:** 11px, `--neutral-600`
- **Tooltips:** white card, `--shadow-md`, 12px/500 value, 11px label
- **Legend:** below chart, horizontal, 12px/500 labels with 10×10px color squares
- **Yield trend line:** `--green-500` stroke 2px, filled area at 15% opacity
- **Bar charts:** `--radius-sm` (4px) top corners only
- No pie charts for data with more than 4 categories — use horizontal bar instead
- All numeric labels on charts: round to 1 decimal maximum

---

## 12. Accessibility

### Standards
All UI must meet **WCAG 2.1 Level AA** as a minimum.

### Color contrast minimums:
- Body text on white: 4.5:1 (all neutral text tokens pass)
- Large text (18px+ regular or 14px+ bold): 3:1
- `--green-600` (#3A7512) on white: 5.8:1 ✓
- `--amber-800` (#624304) on `--amber-50`: 5.2:1 ✓
- White on `--green-600`: 5.8:1 ✓

### Interaction:
- All interactive elements: visible focus ring (2px, `--green-500`, 2px offset)
- Touch targets: minimum 44×44px on mobile
- Keyboard navigation: logical tab order, no keyboard traps
- Skip-to-content link: first focusable element on each page

### Screen readers:
- All icons that convey meaning: `aria-label` required
- Decorative icons: `aria-hidden="true"`
- Status badges: include text, not color alone
- Live regions: use `aria-live="polite"` for AI assistant updates, weather refreshes
- Charts: include data table fallback or `aria-describedby` summary

### Reduced motion:
- All animations wrapped in `@media (prefers-reduced-motion: no-preference)`
- Fallback: instant transitions without animation

---

## 13. Content & Voice

### Tone
Informative, direct, and supportive. RiceGuide speaks as a knowledgeable farm advisor — precise with data, reassuring about concerns, actionable in guidance.

### Writing rules:
- Sentence case everywhere (labels, headings, buttons, tooltips)
- No terminal punctuation on labels, buttons, or headings
- AI insights use plain language: "Apply urea fertilizer in 3 days for better tillering" not "We recommend that you apply..."
- Numbers: use local formatting (e.g., 25,600 m² not 25600 m²)
- Dates: "May 22, 2025" for formal contexts; "May 22" in compact UI; "3 days ago" for recency
- Field names use alphanumeric shorthand: "Field 3A", "Field 5B"
- Metrics always include units: "25.6 ha", "6.2 tons/ha", "1,250 m³"

### Status language:

| State | Label | Color |
|---|---|---|
| Completed | "Completed" | Success green |
| Active / ongoing | "In progress" | Info blue |
| No problems found | "No issues" | Success green |
| Scheduled | "Pending" | Neutral |
| Requires action | "Action needed" | Warning amber |
| Critical | "Alert" | Danger red |

---

## 14. Component States Reference

Every interactive component supports these states consistently:

| State | Visual treatment |
|---|---|
| Default | As specified in component token |
| Hover | Background lightens one step OR border darkens |
| Focus | 2px `--green-500` outline, 2px offset |
| Active / Pressed | Scale 0.97–0.98, slight darken |
| Loading | Skeleton shimmer or spinner at `--green-500` |
| Disabled | 40% opacity, `cursor: not-allowed`, no hover effects |
| Error | `--color-danger` border, helper text, icon |
| Success | `--color-success` brief flash then return to default |

---

## 15. Design Tokens — CSS Custom Properties Reference

```css
:root {
  /* Brand Colors */
  --green-50:  #F0F7E8;
  --green-100: #D4EBBA;
  --green-200: #A8D476;
  --green-400: #5AAF1E;
  --green-500: #4A9318;
  --green-600: #3A7512;
  --green-700: #2D5C0E;
  --green-800: #1E3E09;
  --green-900: #0F2004;

  --amber-50:  #FFF8E8;
  --amber-100: #FDECC4;
  --amber-200: #FBCF7A;
  --amber-400: #F0A500;
  --amber-500: #D4920A;
  --amber-600: #B07908;
  --amber-700: #8A5E06;
  --amber-800: #624304;
  --amber-900: #3A2802;

  /* Neutrals */
  --neutral-0:   #FFFFFF;
  --neutral-50:  #F7F6F2;
  --neutral-100: #EDECEA;
  --neutral-200: #D8D7D2;
  --neutral-400: #9E9D97;
  --neutral-600: #6B6A65;
  --neutral-800: #3A3A36;
  --neutral-900: #1E1E1A;

  /* Semantic Roles */
  --color-success: #3A7512;
  --color-warning: #B07908;
  --color-danger:  #C0392B;
  --color-info:    #1A6FA8;

  /* Surfaces */
  --surface-page:  #F7F6F2;
  --surface-card:  #FFFFFF;
  --surface-panel: #F0F7E8;

  /* Text */
  --text-primary:   #1E1E1A;
  --text-secondary: #6B6A65;
  --text-muted:     #9E9D97;
  --text-disabled:  #C8C7C2;

  /* Borders */
  --border-default: #D8D7D2;
  --border-strong:  #B0AFA9;
  --border-focus:   #4A9318;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.10);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.14);
  --shadow-xl: 0 16px 48px rgba(0,0,0,0.18);

  /* Radii */
  --radius-sm:   4px;
  --radius:      8px;
  --radius-md:   12px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-full: 9999px;

  /* Spacing */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* Motion */
  --dur-fast:     100ms;
  --dur-snap:     150ms;
  --dur-base:     200ms;
  --dur-slow:     300ms;
  --dur-enter:    400ms;
  --ease-out:     cubic-bezier(0.0, 0, 0.2, 1);
  --ease-in:      cubic-bezier(0.4, 0, 1, 1);
  --ease-standard:cubic-bezier(0.4, 0, 0.2, 1);

  /* Typography */
  --font-sans:  "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-mono:  "JetBrains Mono", "Fira Code", monospace;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --surface-page:   #161914;
    --surface-card:   #1E2219;
    --surface-panel:  #252C20;
    --text-primary:   #E8EBE4;
    --text-secondary: #9BA89A;
    --text-muted:     #6B7868;
    --border-default: #323828;
    --border-strong:  #48513E;
    --green-600:      #5AAF1E;
    --color-success:  #A8D476;
    --color-warning:  #FBCF7A;
    --color-danger:   #F08080;
    --color-info:     #7ABDE0;
  }
}
```

---

*RiceGuide Design System — maintained by the RiceGuide product team. Update version number on any breaking token or component change.*
