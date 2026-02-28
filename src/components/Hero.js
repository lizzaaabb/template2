'use client'
import { useEffect, useRef } from 'react'
import '../styles/Hero.css'


export default function Hero() {
  const orbRef  = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  /* Mouse parallax on orb */
  useEffect(() => {
    const onMove = (e) => {
      const orb = orbRef.current
      if (!orb) return
      const x = (e.clientX / window.innerWidth  - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30
      orb.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  /* Entrance */
  useEffect(() => {
    const l = leftRef.current
    const r = rightRef.current
    if (l) setTimeout(() => l.classList.add('t2h-left--in'), 80)
    if (r) setTimeout(() => r.classList.add('t2h-right--in'), 320)
  }, [])

  return (
    <section className="t2h-outer" id="home" aria-label="მთავარი სექცია">

      <div className="t2h-grid-bg" aria-hidden="true" />

      {/* ──────── LEFT ──────── */}
      <div className="t2h-left" ref={leftRef}>

        <p className="t2h-eyebrow">
          <span className="t2h-eyebrow-dot" />
          პროფესიონალური სერვისი{/* შეცვალე */}
        </p>

        <h1 className="t2h-title">
          <span className="t2h-title-line t2h-tl-1">თქვენი</span>
          <span className="t2h-title-line t2h-tl-2">ბიზნესი</span>
          <span className="t2h-title-line t2h-tl-3">
            <span className="t2h-grad">ახალ დონეზე</span>
          </span>
        </h1>

        <p className="t2h-sub">
          პროფესიონალური გადაწყვეტილებები თქვენი ბიზნესისთვის —{/* შეცვალე */}
          სწრაფად, საიმედოდ, შედეგზე ორიენტირებულად.
        </p>

        <div className="t2h-btns">
          <a href="tel:+995500000000" className="t2h-btn-p">{/* შეცვალე */}
            დაგვირეკეთ
          </a>
          <a
            href="https://wa.me/995500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="t2h-btn-s"
          >
            მოგვწერეთ{/* შეცვალე */}
          </a>
        </div>

        {/* stats row */}
        <div className="t2h-stats">
          <div className="t2h-stat">
            <p className="t2h-stat-val">200+</p>{/* შეცვალე */}
            <p className="t2h-stat-lbl">კლიენტი</p>
          </div>
          <div className="t2h-stat-sep" />
          <div className="t2h-stat">
            <p className="t2h-stat-val">5+</p>{/* შეცვალე */}
            <p className="t2h-stat-lbl">წელი</p>
          </div>
          <div className="t2h-stat-sep" />
          <div className="t2h-stat">
            <p className="t2h-stat-val">98%</p>{/* შეცვალე */}
            <p className="t2h-stat-lbl">შედეგი</p>
          </div>
        </div>

      </div>

      {/* ──────── RIGHT — orb ──────── */}
      <div className="t2h-right" ref={rightRef} aria-hidden="true">

        <div className="t2h-ring t2h-ring-1" />
        <div className="t2h-ring t2h-ring-2" />
        <div className="t2h-ring t2h-ring-3" />

        <div className="t2h-orb" ref={orbRef}>
          <div className="t2h-orb-core" />
        </div>

        {/* floating card top-left */}
        <div className="t2h-fc t2h-fc-tl">
          <span className="t2h-fc-icon">★</span>
          <div>
            <p className="t2h-fc-val">5.0</p>
            <p className="t2h-fc-lbl">შეფასება</p>
          </div>
        </div>

        {/* floating card bottom-right */}
        <div className="t2h-fc t2h-fc-br">
          <span className="t2h-fc-icon">✦</span>
          <div>
            <p className="t2h-fc-val">24/7</p>
            <p className="t2h-fc-lbl">მხარდაჭერა</p>
          </div>
        </div>

      </div>

      {/* scroll */}
      <div className="t2h-scroll">
        <div className="t2h-scroll-line" />
        <p className="t2h-scroll-lbl">scroll</p>
      </div>

      <div className="t2h-bottom-fade" />

    </section>
  )
}