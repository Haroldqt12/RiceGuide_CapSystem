import React from 'react'

export interface GuideTask {
  type: 'water' | 'fertilizer' | 'plant' | 'pest' | 'disease' | 'observation' | 'log'
  title: string
  description: string
  priority?: 'low' | 'medium' | 'high'
}

export interface GuideSource {
  name: string
}

export interface WeeklyGuideData {
  week_number: number
  stage: string
  generated_at: string
  tasks: GuideTask[]
  sources: string[]
}

interface WeeklyGuideCardProps {
  guide: WeeklyGuideData | null
  loading: boolean
  error: string | null
  onRetry: () => void
}

const TYPE_META: Record<string, { icon: string; cls: string }> = {
  water: { icon: 'fa-solid fa-droplet', cls: 'rag-guide-task__icon--amber' },
  fertilizer: { icon: 'fa-solid fa-flask', cls: 'rag-guide-task__icon--green' },
  plant: { icon: 'fa-solid fa-seedling', cls: 'rag-guide-task__icon--green' },
  pest: { icon: 'fa-solid fa-bug', cls: 'rag-guide-task__icon--red' },
  disease: { icon: 'fa-solid fa-virus', cls: 'rag-guide-task__icon--red' },
  observation: { icon: 'fa-solid fa-eye', cls: 'rag-guide-task__icon--blue' },
  log: { icon: 'fa-solid fa-clipboard-list', cls: 'rag-guide-task__icon--blue' },
}

const Skeleton = () => (
  <div className="rag-guide-tasks" aria-busy="true">
    {[0, 1, 2].map((i) => (
      <div className="rag-guide-skeleton-task" key={i}>
        <div className="rag-guide-skeleton-icon rag-skeleton"></div>
        <div className="rag-guide-skeleton-lines">
          <div className="rag-guide-skeleton-line short rag-skeleton"></div>
          <div className="rag-guide-skeleton-line long rag-skeleton"></div>
        </div>
      </div>
    ))}
  </div>
)

export const WeeklyGuideCard: React.FC<WeeklyGuideCardProps> = ({
  guide,
  loading,
  error,
  onRetry,
}) => {
  return (
    <div className="rag-guide-card">
      <div className="rag-guide-card__head">
        <span className="rag-guide-card__icon">
          <i className="fa-solid fa-robot"></i>
        </span>
        <div className="rag-guide-card__title-block">
          <h3 className="rag-guide-card__title">This week's farm guide</h3>
          {guide?.generated_at && (
            <p className="rag-guide-card__updated">
              Updated {guide.generated_at}
            </p>
          )}
        </div>
      </div>

      <div className="rag-guide-section-label">Unsa ang buhaton (What to do)</div>

      {loading && <Skeleton />}

      {!loading && error && (
        <div className="rag-guide-error">
          <i className="fa-solid fa-circle-exclamation rag-guide-error__icon"></i>
          <p className="rag-guide-error__msg">{error}</p>
          <button
            type="button"
            className="rag-guide-error__retry"
            onClick={onRetry}
          >
            <i className="fa-solid fa-rotate-right"></i> Retry
          </button>
        </div>
      )}

      {!loading && !error && guide && (
        <>
          <div className="rag-guide-tasks">
            {guide.tasks.map((task, idx) => {
              const meta = TYPE_META[task.type] || TYPE_META.observation
              return (
                <div className="rag-guide-task" key={idx}>
                  <span className={`rag-guide-task__icon ${meta.cls}`}>
                    <i className={meta.icon}></i>
                  </span>
                  <div className="rag-guide-task__body">
                    <p className="rag-guide-task__title">{task.title}</p>
                    <p className="rag-guide-task__desc">{task.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {guide.sources && guide.sources.length > 0 && (
            <div className="rag-guide-sources">
              Grounded in: {guide.sources.join(' · ')}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default WeeklyGuideCard