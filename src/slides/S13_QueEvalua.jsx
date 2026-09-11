import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const preguntas = [
  '¿Me escucharon?',
  '¿Me explicaron?',
  '¿Me respetaron?',
  '¿Sabía qué estaba pasando?',
  '¿Sentí que les importaba?',
]

export default function S13_QueEvalua() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1.2fr',
      overflow: 'hidden',
    }}>
      {/* Left */}
      <div style={{
        background: '#EEF2F7', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '60px 56px', gap: '1.5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(69,197,190,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <motion.div {...fade(0.1)} style={{ zIndex: 1 }}>
          <h2 className="slide-title" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', lineHeight: 1.2 }}>
            ¿Qué evalúa realmente un paciente?
          </h2>
        </motion.div>

        <motion.div {...fade(0.2)} style={{ zIndex: 1 }}>
          <div className="teal-bar" />
        </motion.div>

        <motion.p {...fade(0.3)} style={{ fontSize: '1rem', color: '#718096', lineHeight: 1.7, margin: 0, zIndex: 1 }}>
          No solo evalúa la atención médica. También se pregunta...
        </motion.p>

        <motion.div {...fade(0.85)} style={{ zIndex: 1 }}>
          <div style={{
            background: '#0C2D4E', borderRadius: '12px', padding: '1rem 1.25rem',
            borderLeft: '4px solid #45C5BE',
          }}>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>
              "La confianza nace de la claridad y del trato humano."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right */}
      <div style={{
        background: 'white', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '48px 56px', gap: '1rem',
      }}>
        {preguntas.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: '#EEF2F7', borderRadius: '12px',
              padding: '1rem 1.25rem',
              borderLeft: '4px solid #45C5BE',
              display: 'flex', alignItems: 'center', gap: '1rem',
            }}
          >
            <p style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
              color: '#0C2D4E', margin: 0, lineHeight: 1.4, fontStyle: 'italic',
            }}>
              {p}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
