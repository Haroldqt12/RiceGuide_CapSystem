import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AppShell from '../../../layouts/AppShell'
import { useFarming } from '../../../context/FarmingContext'
import '../../../styles/AiRiceAssistant/AiRiceAssistant.css'

interface ChatMsg {
  role: 'user' | 'assistant'
  text: string
  source?: string
}

interface LocationState {
  initialPrompt?: string
}

const AiRiceAssistant: React.FC = () => {
  const location = useLocation()
  const state = (location.state as LocationState) || {}

  const { currentTask, getWeeklyGuide } = useFarming()
  const guide = getWeeklyGuide()

  const [tab, setTab] = useState<number>(0)
  const [input, setInput] = useState<string>('')
  
  const initialGreeting = currentTask 
    ? `Magandang araw! We are currently on the "${currentTask.name}" stage. Ask me anything about your farm or this specific task.`
    : `Magandang araw! I'm your AI rice assistant. You haven't started a crop cycle yet. Ask me how to get started!`;

  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: 'assistant', text: initialGreeting, source: 'RiceGuide Knowledge Base' },
  ])

  // When opened from the BottomNav popup with an initial prompt,
  // switch to the chat tab and pre-fill the input.
  useEffect(() => {
    if (state.initialPrompt) {
      setTab(1)
      setInput(state.initialPrompt)
      window.history.replaceState({}, '')
    }
  }, [state.initialPrompt])

  const send = (e: React.FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    const userMsg: ChatMsg = { role: 'user', text }
    setMessages((m) => [...m, userMsg])
    setInput('')
    
    // Context-aware stub response
    setTimeout(() => {
      let responseText = `(stub) I received: "${text}". RAG pipeline integration is pending.`;
      if (currentTask && text.toLowerCase().includes('what to do')) {
        responseText = `Since we are in the ${currentTask.name} stage, you should: ${currentTask.description}`;
      }

      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          text: responseText,
          source: 'RiceGuide AI Context',
        },
      ])
    }, 400)
  }

  return (
    <AppShell pageTitle="AI Rice Assistant">
      <section className="page-section">
        <div className="section-heading">
          <h3><i className="fa-solid fa-robot"></i> Week {guide.week_number} — {guide.stage}</h3>
        </div>

        <div className="tabs">
          <span className={tab === 0 ? 'active' : ''} onClick={() => setTab(0)}>Weekly Guide</span>
        </div>

        {tab === 0 && (
          <div className="guide-list">
            {guide.tasks.map((task, idx) => (
              <div className="card guide-card" key={idx} style={{ borderLeft: task.priority === 'high' ? '4px solid var(--color-danger)' : task.priority === 'low' ? '4px solid var(--color-info)' : '4px solid var(--color-primary-500)' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {task.type === 'water' && <i className="fa-solid fa-droplet" style={{ color: 'var(--color-info)' }}></i>}
                  {task.type === 'pest' && <i className="fa-solid fa-bug" style={{ color: 'var(--color-danger)' }}></i>}
                  {task.type === 'log' && <i className="fa-solid fa-clipboard-list" style={{ color: 'var(--color-primary-500)' }}></i>}
                  {task.type === 'observation' && <i className="fa-solid fa-eye" style={{ color: 'var(--color-accent-gold)' }}></i>}
                  {task.title}
                </h4>
                <p style={{ marginTop: '8px', lineHeight: 1.5 }}>{task.description}</p>
              </div>
            ))}

          
          </div>
        )}

        
      </section>
    </AppShell>
  )
}

export default AiRiceAssistant