import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const bullets = [
  'Diseñar procesos pensando en él',
  'Hablar en un lenguaje comprensible',
  'Evitar repetir información innecesaria',
  'Facilitar su recorrido',
  'Hacer que cada decisión mejore su experiencia',
]

export default function S24_PatientCentric() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <div style={{ maxWidth: '860px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <h2 className="slide-title slide-title--white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Patient Centric
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.4rem' }}>
            Poner al paciente en el centro significa...
          </p>
          <div style={{ width: '50px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginTop: '0.75rem' }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(69,197,190,0.2)',
                borderRadius: '12px', padding: '1rem 1.4rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
              }}
            >
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#45C5BE', flexShrink: 0 }} />
              <span style={{ fontSize: 'clamp(0.88rem, 1.5vw, 1rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.4 }}>{b}</span>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.85)}>
          <div style={{
            background: 'rgba(69,197,190,0.1)', border: '1px solid rgba(69,197,190,0.25)',
            borderRadius: '12px', padding: '1rem 1.5rem',
          }}>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>
              "No hacemos lo más cómodo para nosotros; hacemos lo más valioso para el paciente."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
