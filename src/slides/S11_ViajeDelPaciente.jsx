import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const fases = [
  {
    titulo: 'ANTES',
    color: 'rgba(12,45,78,0.08)',
    border: 'rgba(12,45,78,0.2)',
    textColor: '#0C2D4E',
    etapas: ['Agenda', 'Información', 'Preparación'],
    flex: 1,
  },
  {
    titulo: 'DURANTE',
    color: 'rgba(69,197,190,0.12)',
    border: 'rgba(69,197,190,0.4)',
    textColor: '#0C2D4E',
    etapas: ['Recepción', 'Consulta', 'Estudios', 'Hospitalización'],
    flex: 1.5,
  },
  {
    titulo: 'DESPUÉS',
    color: 'rgba(167,105,250,0.12)',
    border: 'rgba(167,105,250,0.3)',
    textColor: '#0C2D4E',
    etapas: ['Proceso de alta', 'Seguimiento', 'Recuperación'],
    flex: 1,
  },
]

export default function S11_ViajeDelPaciente() {
  return (
    <div className="slide" style={{ background: '#EEF2F7' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)} style={{ textAlign: 'center' }}>
          <h2 className="slide-title">El viaje del paciente</h2>
          <div style={{ width: '60px', height: '3px', background: '#45C5BE', borderRadius: '2px', margin: '1rem auto 0' }} />
        </motion.div>

        {/* Phases */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'stretch' }}>
          {fases.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                flex: f.flex, background: f.color, borderRadius: '16px',
                border: `2px solid ${f.border}`, padding: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: '1rem',
              }}
            >
              <div style={{
                fontSize: '0.68rem', fontWeight: 800, color: f.textColor,
                letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6,
              }}>
                {f.titulo}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {f.etapas.map((e, j) => (
                  <div key={j} style={{
                    background: 'rgba(255,255,255,0.7)', borderRadius: '8px',
                    padding: '0.5rem 0.75rem', fontSize: '0.85rem',
                    color: '#2D3748', fontWeight: 500,
                  }}>
                    {e}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div {...fade(0.6)} style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)',
            color: '#718096', fontStyle: 'italic', margin: 0, lineHeight: 1.6,
          }}>
            "La experiencia comienza antes de llegar y continúa mucho después de salir del hospital."
          </p>
        </motion.div>
      </div>
    </div>
  )
}
