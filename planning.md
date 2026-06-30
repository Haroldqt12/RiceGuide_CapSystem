RICEGUIDE — UI PLANNING (React + Vite PWA)

1. DASHBOARD (existing)
This should be the farmer's home screen. What needs to be here:

This Week's Farm Guide card — the most prominent element. Big card showing the AI-generated weekly guide summary (e.g., "Week 4 – Tillering Stage"). Tap to expand full guide. This is the heart of the system per your proposal.
Crop Stage Progress bar — auto-calculated from planting date. Show current stage name + days elapsed + days until next stage (e.g., "Tillering — Day 28 of 35").
Active Alerts banner — red/orange strip at top if there are risk/pest alerts triggered. Dismissable.
Quick Stats row — 3 cards: Current Stage, Last Log Date, Days Since Planting.
Weather snapshot — small 3-day strip pulled from Open-Meteo, not a full forecast. Just icons + temp + rain chance.
Quick Log button — floating FAB (Floating Action Button) bottom-right. Tap = go to today's log form immediately.


2. WEATHER FORECAST (existing)

Full 7-day forecast from Open-Meteo API.
Show: date, weather icon, min/max temp, rainfall (mm), humidity, wind speed.
Add a Farm Advisory strip at the top — e.g., "Rain expected Day 3–4. Avoid fertilizer application." This is AI-contextual, not just raw weather.
Offline state: show last cached forecast with timestamp.


3. CROP MONITORING (existing — needs major alignment with proposal)
This page covers the farm monitoring module from your proposal. Split it into two tabs:

Tab 1 – Growth Stage — visual rice growth stage timeline (Seedling → Tillering → Panicle Init → Heading → Ripening → Harvest). Highlight current stage. Show stage-specific care reminders pulled from knowledge base.
Tab 2 – Observation Logs — list of all daily logs the farmer has submitted. Each entry shows date, what was observed (pest? yellowing? water level?), and any alert it triggered. Filterable by date.

Also add a Notifications section here or as a badge — crop stage transition alerts ("Your crop has entered Heading stage"), pest risk alerts.

4. CALENDAR (existing)
Map this to the farm activity scheduling context:

Monthly calendar view.
Mark days with: logged activities (green dot), upcoming stage transitions (yellow dot), AI-scheduled tasks (blue dot — e.g., "Fertilizer application due"), weather-risk days (red dot).
Tap a day = see what was logged or what's recommended.
Connect to the weekly farm guide schedule so AI-recommended tasks appear automatically on the calendar.


5. FARM ACTIVITIES (existing)
This is the daily observation & activity log from your proposal. This page is where farmers input what they did and observed:

Form fields: Date (auto), Activity Type (dropdown: Irrigation, Fertilizer, Pesticide, Observation, Harvest Prep, Other), Notes/Description (text area), Observed Issues (checklist: yellowing, pest sighting, lodging, discoloration, water stress, none).
Photo upload optional (for future expansion, stub the button).
Submit → saved to backend, triggers risk pattern matching.
List of past logs below the form (last 7 entries visible, "See all" → goes to Crop Monitoring Tab 2).


6. AI RICE ASSISTANCE (existing)
This is the conversational AI chatbot component + weekly guide viewer:

Tab 1 – Weekly Guide — full AI-generated farm guide for the current week. Formatted with sections: What to Monitor, What to Apply, Weather Advisory, Upcoming Tasks. Downloadable/shareable as text.
Tab 2 – Ask RiceGuide — chat interface. User types question in Filipino/Bisaya/English, system responds using RAG pipeline. Show source label at bottom of each response (e.g., "Source: PhilRice Crop Management Guide"). Keep conversation history in session.
Offline state: show a banner "AI unavailable offline. Showing cached guide." and disable the chat input.

7. NOTIFICATIONS / ALERTS VIEW (can be a slide-in panel or badge modal)

Triggered by: pest/disease log match, crop stage transition, weather risk (heavy rain before heading stage, etc.).
Show notification type, date, which farm/field, action recommended.
Mark as read functionality.


NAV STRUCTURE RECOMMENDATION
Bottom tab bar (mobile-first PWA):
Home (Dashboard) | Monitor (Crop Monitoring) | + Log (Farm Activities FAB) | Weather | AI Guide
Calendar and Extension Dashboard go in a hamburger/side menu or top-right icon since they're secondary.

PRIORITY BUILD ORDER

Crop Profile Setup (blocks everything else)
Dashboard with Weekly Guide card + Stage progress
Farm Activities log form (feeds the AI)
AI Rice Assistance — Weekly Guide tab first, chat second
Crop Monitoring tabs
Weather Forecast
Calendar
Extension Worker Dashboard (last, separate role)