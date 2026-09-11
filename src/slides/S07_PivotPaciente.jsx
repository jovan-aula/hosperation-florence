import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const analogias = [
  { restaurante: 'Que te saluden al entrar', hospital: 'Bienvenida en admisión' },
  { restaurante: 'Que no tardes en ser atendido', hospital: 'Tiempos de espera' },
  { restaurante: 'Que te expliquen el menú', hospital: 'Comunicación del diagnóstico' },
  { restaurante: 'Que el mesero sea amable', hospital: 'Empatía bajo presión' },
  { restaurante: 'Que resuelvan si algo salió mal', hospital: 'Manejo de quejas' },
]

export default function S07_PivotPaciente() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1.2fr',
      overflow: 'hidden',
    }}>
      {/* Left — light */}
      <div style={{
        background: '#EEF2F7', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '60px 56px', gap: '1.5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(69,197,190,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <motion.h2 {...fade(0.1)} className="slide-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', zIndex: 1 }}>
          Todo lo que mencionaron...
        </motion.h2>

        <motion.div {...fade(0.2)} style={{ zIndex: 1 }}>
          <div className="teal-bar" />
        </motion.div>

        <motion.p {...fade(0.3)} style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', color: '#2D3748', lineHeight: 1.7, margin: 0, zIndex: 1 }}>
          El paciente lo vive también. Pero con una diferencia crucial:
        </motion.p>

        <motion.div {...fade(0.45)} style={{ zIndex: 1 }}>
          <div style={{
            background: '#0C2D4E', borderRadius: '14px', padding: '1.25rem 1.5rem',
            borderLeft: '4px solid #45C5BE',
          }}>
            <p style={{
              fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'white', margin: 0, lineHeight: 1.5, fontStyle: 'italic',
            }}>
              "Él no llega a pasarla bien — llega con{' '}
              <span style={{ color: '#45C5BE' }}>miedo, dolor</span> o preocupación por dinero."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right — analogy table */}
      <div style={{
        background: 'white', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '48px 56px', gap: '1rem',
      }}>
        <motion.div {...fade(0.2)} style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
          <div style={{ flex: 1, textAlign: 'center', padding: '0.5rem', background: 'rgba(12,45,78,0.06)', borderRadius: '8px', fontSize: '0.72rem', fontWeight: 700, color: '#0C2D4E', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Restaurante</div>
          <div style={{ width: '32px', flexShrink: 0 }} />
          <div style={{ flex: 1, textAlign: 'center', padding: '0.5rem', background: 'rgba(69,197,190,0.1)', borderRadius: '8px', fontSize: '0.72rem', fontWeight: 700, color: '#2BA8A2', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Hospital Florence</div>
        </motion.div>

        {analogias.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
          >
            <div style={{
              flex: 1, background: 'rgba(12,45,78,0.04)', borderRadius: '10px',
              padding: '0.8rem 1rem', fontSize: '0.88rem', color: '#2D3748', lineHeight: 1.4,
            }}>
              {a.restaurante}
            </div>
            <div style={{ width: '32px', flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#45C5BE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{
              flex: 1, background: 'rgba(69,197,190,0.08)', borderRadius: '10px',
              padding: '0.8rem 1rem', fontSize: '0.88rem', color: '#0C2D4E',
              fontWeight: 500, lineHeight: 1.4, borderLeft: '3px solid rgba(69,197,190,0.5)',
            }}>
              {a.hospital}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
