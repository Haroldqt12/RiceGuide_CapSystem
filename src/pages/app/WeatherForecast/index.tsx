import React from 'react'
import AppShell from '../../../layouts/AppShell'
import '../../../styles/WeatherForecast/WeatherForecast.css'

interface Day {
  d: string
  icon: string
  hi: number
  lo: number
  rain: number
  humidity: number
  wind: number
}

const WEEK: Day[] = [
  { d: 'Tue Jun 30', icon: 'fa-solid fa-cloud-sun', hi: 31, lo: 24, rain: 20, humidity: 72, wind: 10 },
  { d: 'Wed Jul 01', icon: 'fa-solid fa-cloud', hi: 30, lo: 24, rain: 45, humidity: 78, wind: 12 },
  { d: 'Thu Jul 02', icon: 'fa-solid fa-cloud-rain', hi: 28, lo: 23, rain: 78, humidity: 88, wind: 18 },
  { d: 'Fri Jul 03', icon: 'fa-solid fa-cloud-rain', hi: 27, lo: 23, rain: 85, humidity: 90, wind: 20 },
  { d: 'Sat Jul 04', icon: 'fa-solid fa-cloud-sun', hi: 30, lo: 24, rain: 30, humidity: 75, wind: 11 },
  { d: 'Sun Jul 05', icon: 'fa-solid fa-sun', hi: 32, lo: 25, rain: 10, humidity: 65, wind: 8 },
  { d: 'Mon Jul 06', icon: 'fa-solid fa-sun', hi: 33, lo: 25, rain: 5, humidity: 60, wind: 7 },
]

const WeatherForecast: React.FC = () => {
  return (
    <AppShell pageTitle="Weather Forecast">
      <section className="page-section flex flex-col gap-4">
        {/* Farm Advisory — full width on all viewports */}
        <div className="weather-advisory flex items-start gap-3 p-3.5 md:p-4 text-xs md:text-sm leading-relaxed">
          <i className="fa-solid fa-circle-info text-base md:text-lg shrink-0 mt-0.5"></i>
          <div>
            <strong>Farm Advisory:</strong> Heavy rain expected Jul 2–3. Avoid fertilizer application; check field drainage today.
          </div>
        </div>

        <div className="section-heading">
          <h3 className="text-base md:text-lg flex items-center gap-2">
            <i className="fa-solid fa-cloud-sun-rain"></i> 7-Day Forecast
          </h3>
        </div>

        {/* Top row: Current Weather (full width on mobile/tablet, 1 of 2 cols on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Current Weather card */}
          <div className="weather-card p-4 md:p-5">
            <div className="weather-now flex items-center justify-between gap-4 mb-3.5">
              <div className="min-w-0">
                <div className="weather-now__temp text-3xl md:text-4xl font-bold">28°C</div>
                <div className="weather-now__desc text-xs md:text-sm">Partly Cloudy · Feels like 30°C</div>
                <div className="weather-meta mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1 text-xs md:text-sm">
                  <span><i className="fa-solid fa-droplet"></i> Rain: 37%</span>
                  <span><i className="fa-solid fa-water"></i> Humidity: 78%</span>
                  <span><i className="fa-solid fa-wind"></i> Wind: 12 km/h</span>
                </div>
              </div>
              <div className="weather-now__icon shrink-0 text-3xl md:text-5xl">
                <i className="fa-solid fa-cloud-sun"></i>
              </div>
            </div>
          </div>

          {/* Hourly snapshot / quick stats card (desktop only — placeholder for future chart) */}
          <div className="weather-card weather-card--secondary hidden lg:block">
            <h4 className="weather-card__title text-base font-semibold mb-3">Today's Outlook</h4>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="weather-card__stat">
                <i className="fa-solid fa-temperature-high text-amber-500 text-lg"></i>
                <div className="text-xl font-bold">31°</div>
                <div className="text-xs text-[var(--color-text-secondary)]">High</div>
              </div>
              <div className="weather-card__stat">
                <i className="fa-solid fa-temperature-low text-sky-500 text-lg"></i>
                <div className="text-xl font-bold">24°</div>
                <div className="text-xs text-[var(--color-text-secondary)]">Low</div>
              </div>
              <div className="weather-card__stat">
                <i className="fa-solid fa-umbrella text-blue-500 text-lg"></i>
                <div className="text-xl font-bold">37%</div>
                <div className="text-xs text-[var(--color-text-secondary)]">Rain</div>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Forecast List — full width */}
        <div className="forecast-list p-2 md:p-4">
          {WEEK.map((day, idx) => (
            <div
              className={`forecast-row ${idx === 0 ? 'forecast-row--today' : ''}`}
              key={day.d}
            >
              <div className="forecast-day">
                <div className="forecast-day__name text-sm md:text-base font-semibold">{day.d}</div>
                {idx === 0 && <span className="forecast-day__badge">Today</span>}
              </div>
              <div className="forecast-icon text-lg md:text-2xl">
                <i className={day.icon}></i>
              </div>
              <div className="forecast-temp text-sm md:text-base font-semibold whitespace-nowrap">
                {day.hi}° / {day.lo}°
              </div>
              <div className="forecast-meta flex flex-wrap gap-x-3 gap-y-1 text-[11px] md:text-xs">
                <span><i className="fa-solid fa-droplet"></i> {day.rain}%</span>
                <span><i className="fa-solid fa-water"></i> {day.humidity}%</span>
                <span><i className="fa-solid fa-wind"></i> {day.wind} km/h</span>
              </div>
            </div>
          ))}
        </div>

        <div className="cache-note flex items-center justify-end gap-1.5 text-[11px] mt-1">
          <i className="fa-regular fa-clock"></i> Last updated: Jun 30, 2026 · 08:00 AM
        </div>
      </section>
    </AppShell>
  )
}

export default WeatherForecast
