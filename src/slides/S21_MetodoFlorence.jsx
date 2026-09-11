import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const pasos = [
  { num: '1', label: 'Escuchar' },
  { num: '2', label: 'Reconocer' },
  { num: '3', label: 'Explicar' },
  { num: '4', label: 'Proponer una solución' },
  { num: '5', label: 'Dar seguimiento' },
]

export default function S21_MetodoFlorence() {
  return (
    <div className="slide" style={{ background: '#EEF2F7' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <div style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 600,
            color: '#2BA8A2', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Cuando el paciente está molesto
          </div>
        </motion.div>

        <motion.div {...fade(0.2)}>
          <h2 className="slide-title">Método Florence</h2>
          <p style={{ fontSize: '1rem', color: '#718096', marginTop: '0.4rem' }}>
            Una disculpa sin solución no recupera la confianza.
          </p>
          <div className="teal-bar" style={{ marginTop: '0.75rem' }} />
        </motion.div>

        {/* Steps */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0', width: '100%' }}>
          {pasos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ display: 'flex', alignItems: 'center', flex: 1 }}
            >
              <div style={{
                flex: 1, background: 'white', borderRadius: '14px',
                padding: '1.5rem 1rem', textAlign: 'center',
                boxShadow: '0 2px 12px rgba(12,45,78,0.08)',
                border: '1.5px solid rgba(69,197,190,0.2)',
                display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'center',
              }}>
                <div style={{
                  fontFamily: 'DM Serif Display, serif', fontSize: '2rem',
                  color: '#45C5BE', lineHeight: 1,
                }}>
                  {p.num}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#0C2D4E', fontWeight: 600, margin: 0, lineHeight: 1.3 }}>
                  {p.label}
                </p>
              </div>
              {i < pasos.length - 1 && (
                <div style={{ width: '24px', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="#45C5BE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
