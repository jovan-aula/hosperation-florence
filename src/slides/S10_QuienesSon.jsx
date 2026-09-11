import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S10_QuienesSon() {
  return (
    <div className="slide" style={{ background: '#EEF2F7' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '920px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)} style={{ textAlign: 'center' }}>
          <h2 className="slide-title">¿Quién vive la experiencia Florence?</h2>
          <div style={{ width: '60px', height: '3px', background: '#45C5BE', borderRadius: '2px', margin: '1rem auto 0' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {/* Internos */}
          <motion.div {...fade(0.25)} style={{
            background: '#0C2D4E', borderRadius: '20px', padding: '2rem',
            display: 'flex', flexDirection: 'column', gap: '1.25rem',
          }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Clientes internos
            </div>
            <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.3rem', color: 'white', fontWeight: 400, margin: 0 }}>
              Nuestro equipo
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Enfermería', 'Médicos', 'Recepción', 'Caja', 'Mantenimiento', 'Limpieza', 'Administración'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#45C5BE', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Externos */}
          <motion.div {...fade(0.35)} style={{
            background: 'rgba(69,197,190,0.12)', borderRadius: '20px', padding: '2rem',
            border: '2px solid rgba(69,197,190,0.35)',
            display: 'flex', flexDirection: 'column', gap: '1.25rem',
          }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#2BA8A2', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Clientes externos
            </div>
            <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.3rem', color: '#0C2D4E', fontWeight: 400, margin: 0 }}>
              Quienes nos visitan
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {['Paciente', 'Familiar', 'Acompañante', 'Visitante'].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.6)', borderRadius: '10px',
                  padding: '0.65rem 1rem', display: 'flex', alignItems: 'center', gap: '10px',
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0C2D4E', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', color: '#0C2D4E', fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer quote */}
        <motion.div {...fade(0.5)} style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', background: 'white', borderRadius: '12px',
            padding: '0.9rem 2rem', boxShadow: '0 2px 12px rgba(12,45,78,0.1)',
          }}>
            <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.1rem', color: '#0C2D4E', margin: 0, fontStyle: 'italic' }}>
              "Todos construimos una sola experiencia."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
