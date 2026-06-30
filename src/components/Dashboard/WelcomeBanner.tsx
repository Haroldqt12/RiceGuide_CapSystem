import React from 'react'

const WelcomeBanner: React.FC = () => {
  return (
    <section className="welcome-banner px-6 py-6 md:px-7 md:py-8">
      <div>
        <h2 className="text-lg md:text-xl lg:text-2xl">Welcome back, Juan 👋</h2>
        <p className="text-xs md:text-sm text-[var(--color-text-secondary)]">
          Here's what's happening on your farm today.
        </p>
      </div>
    </section>
  )
}

export default WelcomeBanner  