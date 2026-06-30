Overhaul my RiceGuide PWA dashboard page (Dashboard.tsx) in React + Vite. Replace the current layout with a new design that includes a RAG-powered weekly farm guide UI. Here's exactly what to build:
Tech context: React + Vite PWA, Tailwind CSS (or plain CSS modules if Tailwind isn't set up), Flask backend with RAG pipeline using Qwen 2.5 + ChromaDB/pgvector. The backend returns a weekly guide JSON from a /api/weekly-guide endpoint.

LAYOUT STRUCTURE (top to bottom):
1. Header row

Left: greeting text "Maayong buntag, {farmer_name}" + subtext "Week {X} of your cropping season"
Right: crop stage pill (green badge showing current stage e.g. "Tillering") + notification bell icon with red dot badge showing alert count

2. Stats row — 3 cards side by side

Card 1: Days since planting (calculated from planting_date in crop profile)
Card 2: Tomorrow's rainfall in mm (from Open-Meteo API, already fetched)
Card 3: Active alert count (red number if > 0)

3. Crop growth progress bar card

Title: "{rice_variety} — Crop growth"
Right side: "{N} days to {next_stage}"
Progress bar: 6 segments for stages: Seedling, Vegetative, Tillering, Panicle Init, Heading, Harvest. Fill done stages solid green, active stage lighter green, future stages gray.
Labels below each segment

4. Alert banner (conditional — only show if alerts exist)

Amber/yellow background, warning icon on left
Short alert message in Bisaya/Filipino describing the risk
Only render this div when alerts.length > 0

5. Weekly Farm Guide card — this is the RAG output

Card header: robot icon + "This week's farm guide" title + "Updated {date}" muted text on right
Section label: "Unsa ang buhaton (What to do)"
Task list: render each task as a row with:

Colored icon box (green for fertilizer/plant, blue for observation, amber for water, red for pest)
Bold task title in Filipino/Bisaya
Short 1–2 sentence description below


Bottom of card: source attribution row "Grounded in: PhilRice Crop Mgmt Guide · IRRI Rice Knowledge Bank"
Show a skeleton loader while the guide is fetching
Show an error state with a retry button if fetch fails

6. Footer action buttons — 3 buttons full width

"Full guide" → navigate to /ai-assistance tab
"Log today" → navigate to /farm-activities tab
"Ask AI" → navigate to /ai-assistance?mode=chat


DATA / API:
The weekly guide comes from GET /api/weekly-guide?farmer_id={id}. It returns this JSON shape:
json{
  "week_number": 5,
  "stage": "Tillering",
  "generated_at": "2026-06-30",
  "tasks": [
    {
      "type": "water",
      "title": "Bantayan ang tubig sa uma",
      "description": "Ipadayon ang 5cm nga tubig...",
      "priority": "high"
    },
    {
      "type": "fertilizer",
      "title": "Ika-2 nga paabono",
      "description": "Ibutang ang 40 kg/ha Urea...",
      "priority": "medium"
    }
  ],
  "alerts": [
    {
      "type": "pest",
      "message": "Ang imong log kagahapon nagpakita og..."
    }
  ],
  "sources": ["PhilRice Crop Mgmt Guide", "IRRI Rice Knowledge Bank"]
}
Task type values and their icon colors:

"water" → amber
"fertilizer" or "plant" → green
"pest" or "disease" → red
"observation" or "log" → blue


STATE TO MANAGE:

guideData — the fetched weekly guide object
loading — boolean, show skeleton cards while true
error — string or null
cropProfile — pulled from context or localStorage ({ farmer_name, planting_date, rice_variety })
weatherData — tomorrow's rainfall mm (already available from weather hook/context)
daysSincePlanting — computed from planting_date using dayjs or date-fns


STYLE RULES:

Brand green: #2E7D32 (primary buttons, active stage)
Light green: #EAF3DE (green icon backgrounds)
Amber alert bg: #FAEEDA, border: #EF9F27, text: #633806
Card: white bg, border-radius: 12px, border: 0.5px solid #e5e5e5, padding 1.25rem
Stat cards: light gray bg (#f5f5f5), no border, border-radius: 8px
Font: Inter
All advice text in Bisaya/Filipino
Mobile-first layout, single column, max-width 480px centered


COMPONENT FILE STRUCTURE:

location: src/components/Dashboard/....
Dashboard.tsx — main page, handles fetch + state
WeeklyGuideCard.tsx — the RAG guide card, accepts guide prop
CropProgressBar.tsx — the stage progress bar, accepts stage and daysSincePlanting props
AlertBanner.tsx — conditional alert, accepts alerts array prop
StatCards.tsx — the 3 stat cards row

Use useEffect to fetch on mount. Use AbortController for cleanup. Export all components as named exports. Add // TODO: connect to Flask /api/weekly-guide comment above the fetch call.

That prompt gives Claude Code (or any coding AI) everything it needs — the structure, the data shape, the colors, the component split, and the Filipino/Bisaya language requirement. Paste it directly into Claude Code or your IDE AI.