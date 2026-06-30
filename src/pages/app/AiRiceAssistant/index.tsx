import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AppShell from '../../../layouts/AppShell'
import '../../../styles/AiRiceAssistant/AiRiceAssistant.css'

interface ChatMsg {
  role: 'user' | 'assistant'
  text: string
  source?: string
}

interface LocationState {
  initialPrompt?: string
}

const WEEKLY_GUIDE = {
  week: 'Week 8 — Panicle Init',
  sections: [
    { title: 'What to Monitor', body: 'Watch for leaf color, tiller count, and any yellowing. Spider mites and brown planthoppers are common this week.' },
    { title: 'What to Apply', body: 'Apply 25 kg/ha of complete fertilizer (14-14-14) within 3 days. Maintain 2–3 cm standing water.' },
    { title: 'Weather Advisory', body: 'Heavy rain expected Jul 2–3. Hold off on pesticide spraying and ensure drainage is clear.' },
    { title: 'Upcoming Tasks', body: 'Pest scouting on Jul 4. Schedule water level check daily at 6 AM and 5 PM.' },
  ],
}

const AiRiceAssistant: React.FC = () => {
  const location = useLocation()
  const state = (location.state as LocationState) || {}

  const [tab, setTab] = useState<number>(0)
  const [input, setInput] = useState<string>('')
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: 'assistant', text: 'Magandang araw! I\'m your AI rice assistant. Ask me anything about your farm.', source: 'RiceGuide Knowledge Base' },
  ])

  // When opened from the BottomNav popup with an initial prompt,
  // switch to the chat tab and pre-fill the input.
  useEffect(() => {
    if (state.initialPrompt) {
      setTab(1)
      setInput(state.initialPrompt)
      // Clear the state so re-navigations don't re-trigger
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
    // Stub response — wire to RAG pipeline later
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          text: `(stub) I received: "${text}". RAG pipeline integration is pending.`,
          source: 'Stub',
        },
      ])
    }, 400)
  }

  return (
    <AppShell pageTitle="AI Rice Assistant">
      <section className="page-section">
        <div className="section-heading">
          <h3><i className="fa-solid fa-robot"></i> {WEEKLY_GUIDE.week}</h3>
        </div>

        <div className="tabs">
          <span className={tab === 0 ? 'active' : ''} onClick={() => setTab(0)}>Weekly Guide</span>
          <span className={tab === 1 ? 'active' : ''} onClick={() => setTab(1)}>Ask RiceGuide</span>
        </div>

        {tab === 0 && (
          <div className="guide-list">
            {WEEKLY_GUIDE.sections.map((s) => (
              <div className="card guide-card" key={s.title}>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
            <div className="guide-actions">
              <button className="btn-ghost"><i className="fa-solid fa-download"></i> Download</button>
              <button className="btn-ghost"><i className="fa-solid fa-share"></i> Share</button>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div className="chat-wrap">
            <div className="chat-stream">
              {messages.map((m, idx) => (
                <div key={idx} className={`chat-bubble chat-${m.role}`}>
                  <div className="chat-text">{m.text}</div>
                  {m.source && <div className="chat-source">Source: {m.source}</div>}
                </div>
              ))}
            </div>
            <form className="chat-input-row" onSubmit={send}>
              <input
                type="text"
                placeholder="Type a question in English, Filipino, or Bisaya..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="btn-primary"><i className="fa-solid fa-paper-plane"></i></button>
            </form>
          </div>
        )}
      </section>
    </AppShell>
  )
}

export default AiRiceAssistant