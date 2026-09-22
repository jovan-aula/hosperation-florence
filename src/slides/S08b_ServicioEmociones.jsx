import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const emociones = [
  { accion: 'Un saludo al llegar',        emocion: 'Seguridad',    icon: '→' },
  { accion: 'Una explicación clara',      emocion: 'Confianza',    icon: '→' },
  { accion: 'Una espera sin información', emocion: 'Angustia',     icon: '→' },
  { accion: 'Una mirada de indiferencia', emocion: 'Abandono',     icon: '→' },
]

export default function S08b_ServicioEmociones() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#EEF2F7',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '52px 80px', position: 'relative', overflow: 'hidden',
    }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '920px', width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* Header */}
        <motion.div {...fade(0.05)}>
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#2BA8A2',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            La experiencia no se diseña — se genera
          </span>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
            fontWeight: 400, color: '#0C2D4E',
            lineHeight: 1.2, margin: '0.5rem 0 0',
          }}>
            Al final, estamos hablando de experiencias.
          </h2>
          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginTop: '0.8rem' }} />
        </motion.div>

        {/* Grid acción → emoción */}
        <motion.div {...fade(0.2)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {emociones.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              style={{
                background: 'white',
                borderRadius: '14px',
                padding: '1.2rem 1.4rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
                boxShadow: '0 2px 12px rgba(12,45,78,0.06)',
              }}
            >
              <div style={{
                flex: 1,
                fontSize: '0.88rem', color: '#4A5568', fontWeight: 500, lineHeight: 1.4,
              }}>
                {e.accion}
              </div>
              <div style={{
                fontSize: '0.8rem', color: 'rgba(12,45,78,0.25)',
                flexShrink: 0,
              }}>
                →
              </div>
              <div style={{
                fontSize: '0.88rem', fontWeight: 700,
                color: i < 2 ? '#2BA8A2' : '#C53030',
                textAlign: 'right', flexShrink: 0, minWidth: '80px',
              }}>
                {e.emocion}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Conclusión */}
        <motion.div
          {...fade(0.75)}
          style={{
            background: '#0C2D4E',
            borderRadius: '14px',
            padding: '1.2rem 1.6rem',
            display: 'flex', alignItems: 'center', gap: '1.2rem',
          }}
        >
          <div style={{ width: '4px', height: '40px', background: '#45C5BE', borderRadius: '2px', flexShrink: 0 }} />
          <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0 }}>
            No controlamos las emociones del paciente, pero sí controlamos las acciones que las generan.
          </p>
        </motion.div>

      </div>
    </div>
  )
}
