import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const preguntas = [
  '¿Qué departamento fue más difícil de integrar?',
  '¿Qué pasó cuando un eslabón quedó flojo o desconectado?',
  '¿De quién es la responsabilidad de que el puente aguante?',
  '¿En tu hospital, cuál sientes que a veces queda desconectado?',
]

export default function S23_PuenteDebriefing() {
  return (
    <div className="slide" style={{ background: '#EEF2F7' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '860px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <div style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 600,
            color: '#2BA8A2', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Reflexión
          </div>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title">
          ¿Qué nos enseñó el puente?
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div className="teal-bar" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {preguntas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'white', borderRadius: '16px', padding: '1.5rem',
                boxShadow: '0 2px 12px rgba(12,45,78,0.08)',
                border: '1.5px solid rgba(69,197,190,0.2)',
                display: 'flex', gap: '1rem',
              }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: '#0C2D4E',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'DM Serif Display, serif', fontSize: '1rem',
                color: 'white', flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <p style={{ fontSize: '0.92rem', color: '#2D3748', margin: 0, lineHeight: 1.55 }}>
                {p}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer grande */}
        <motion.div {...fade(0.75)}>
          <div style={{
            background: '#0C2D4E', borderRadius: '14px', padding: '1.25rem 1.75rem',
            borderLeft: '5px solid #45C5BE', textAlign: 'center',
          }}>
            <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'white', margin: 0, lineHeight: 1.45 }}>
              "La experiencia del paciente es tan sólida como su eslabón más débil."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
