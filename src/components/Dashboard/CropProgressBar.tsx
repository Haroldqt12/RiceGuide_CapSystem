import React from 'react'

export type CropStage =
  | 'Seedling'
  | 'Vegetative'
  | 'Tillering'
  | 'Panicle Init'
  | 'Heading'
  | 'Harvest'

interface CropProgressBarProps {
  variety: string
  currentStage: CropStage | string
  daysSincePlanting: number
}

const STAGES: CropStage[] = [
  'Seedling',
  'Vegetative',
  'Tillering',
  'Panicle Init',
  'Heading',
  'Harvest',
]

const NEXT_STAGE_DAYS: Record<string, number> = {
  Seedling: 14,
  Vegetative: 30,
  Tillering: 45,
  'Panicle Init': 65,
  Heading: 85,
  Harvest: 110,
}

export const CropProgressBar: React.FC<CropProgressBarProps> = ({
  variety,
  currentStage,
  daysSincePlanting,
}) => {
  const currentIdx = STAGES.findIndex(
    (s) => s.toLowerCase() === currentStage.toLowerCase()
  )
  const safeIdx = currentIdx === -1 ? 0 : currentIdx
  const nextStage = STAGES[safeIdx + 1]
  const daysToNext = nextStage
    ? Math.max(0, NEXT_STAGE_DAYS[nextStage] - daysSincePlanting)
    : 0

  return (
    <div className="rag-progress-card">
      <div className="rag-progress-card__head">
        <h3 className="rag-progress-card__title">
          {variety} — Crop growth
        </h3>
        {nextStage && (
          <span className="rag-progress-card__next">
            {daysToNext} days to {nextStage}
          </span>
        )}
      </div>

      <div className="rag-progress-segments">
        {STAGES.map((s, idx) => {
          const cls =
            idx < safeIdx ? 'done' : idx === safeIdx ? 'active' : 'future'
          return (
            <div key={s} className={`rag-progress-seg ${cls}`}></div>
          )
        })}
      </div>

      <div className="rag-progress-labels">
        {STAGES.map((s, idx) => (
          <div
            key={s}
            className={`rag-progress-label ${idx === safeIdx ? 'active' : ''}`}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CropProgressBar