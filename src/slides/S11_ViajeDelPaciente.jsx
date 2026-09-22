import { motion } from 'framer-motion'

const fases = [
  {
    titulo: 'ANTES',
    color: 'rgba(12,45,78,0.08)',
    border: 'rgba(12,45,78,0.2)',
    flex: 1,
    momentos: ['Primera llamada', 'Información previa', 'Preparación para el procedimiento'],
  },
  {
    titulo: 'DURANTE',
    color: 'rgba(69,197,190,0.12)',
    border: 'rgba(69,197,190,0.4)',
    flex: 1.5,
    momentos: ['Llegada y recepción', 'Espera', 'Consulta médica', 'Estudios / Hospitalización'],
  },
  {
    titulo: 'DESPUÉS',
    color: 'rgba(167,105,250,0.12)',
    border: 'rgba(167,105,250,0.3)',
    flex: 1,
    momentos: ['Proceso de alta', 'Seguimiento', 'Recuperación en casa'],
  },
]

export default function S11_ViajeDelPaciente() {
  return (
    <div className="slide" style={{ background: '#EEF2F7' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '980px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.8rem', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#2BA8A2',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            El viaje del paciente
          </span>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 400, color: '#0C2D4E',
            lineHeight: 1.2, margin: '0.4rem 0 0',
          }}>
            Momentos de verdad en cada etapa.
          </h2>
          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginTop: '0.8rem' }} />
        </motion.div>

        {/* Fases */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'stretch' }}>
          {fases.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.12 }}
              style={{
                flex: f.flex, background: f.color, borderRadius: '16px',
                border: `2px solid ${f.border}`, padding: '1.4rem 1.2rem',
                display: 'flex', flexDirection: 'column', gap: '0.9rem',
              }}
            >
              <div style={{
                fontSize: '0.68rem', fontWeight: 800, color: '#0C2D4E',
                letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.5,
              }}>
                {f.titulo}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {f.momentos.map((m, j) => (
                  <div key={j} style={{
                    background: 'rgba(255,255,255,0.75)', borderRadius: '8px',
                    padding: '0.55rem 0.85rem',
                    display: 'flex', alignItems: 'center', gap: '8px',
                  }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#45C5BE', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.82rem', color: '#2D3748', fontWeight: 500, lineHeight: 1.35 }}>{m}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(0.88rem, 1.5vw, 1rem)',
            color: '#718096', fontStyle: 'italic',
            margin: 0, lineHeight: 1.6, textAlign: 'center',
          }}
        >
          "La experiencia comienza antes de llegar y continúa mucho después de salir."
        </motion.p>

      </div>
    </div>
  )
}
