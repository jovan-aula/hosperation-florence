import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const objetivos = [
  'Comprender qué es la experiencia del paciente',
  'Identificar los momentos que generan confianza o frustración',
  'Aplicar herramientas de comunicación, empatía y orientación',
  'Contribuir a una cultura centrada en el paciente',
]

export default function S04_Objetivos() {
  return (
    <div className="slide" style={{ background: '#EEF2F7' }}>
      <div className="corner-accent" style={{ background: 'radial-gradient(circle, rgba(69,197,190,0.1) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: '860px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <div style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 600,
            color: '#2BA8A2', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Propósito del módulo
          </div>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title">
          Al finalizar serás capaz de...
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div className="teal-bar" />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {objetivos.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'white', borderRadius: '14px',
                padding: '1.2rem 1.5rem',
                boxShadow: '0 2px 12px rgba(12,45,78,0.07)',
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                border: '1.5px solid rgba(69,197,190,0.15)',
              }}
            >
              <div style={{
                width: '42px', height: '42px', borderRadius: '50%',
                background: 'rgba(69,197,190,0.12)', border: '2px solid rgba(69,197,190,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'DM Serif Display, serif', fontSize: '1.1rem',
                color: '#45C5BE', fontWeight: 400, flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.08rem)', color: '#2D3748', margin: 0, lineHeight: 1.5, fontWeight: 400 }}>
                {obj}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
