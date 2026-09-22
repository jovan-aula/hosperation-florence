import { motion } from 'framer-motion'

const pilares = [
  {
    titulo: 'Comunicación',
    desc: 'Lo que un área no comunica, el paciente lo vive como caos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    titulo: 'Coordinación',
    desc: 'Cuando los equipos se sincronizan, el paciente lo siente como fluidez.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/>
        <line x1="12" y1="8" x2="5.5" y2="16.5"/><line x1="12" y1="8" x2="18.5" y2="16.5"/>
      </svg>
    ),
  },
  {
    titulo: 'Responsabilidad compartida',
    desc: 'La experiencia del paciente no depende de una sola persona — depende de todos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
]

export default function S21b_PuenteTorre() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(160deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '52px 80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid de fondo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '920px', width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            Experiencia del paciente
          </span>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.7rem, 3.2vw, 2.6rem)',
            fontWeight: 400, color: 'white',
            lineHeight: 1.2, margin: '0.4rem 0 0',
          }}>
            Ningún colaborador brinda la experiencia solo.
          </h2>
          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginTop: '0.8rem' }} />
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0, maxWidth: '620px' }}
        >
          Lo que el paciente vive es el resultado de un equipo que trabaja en sincronía. Cada área, cada turno, cada interacción forma parte de la misma experiencia.
        </motion.p>

        {/* 3 pilares */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {pilares.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(69,197,190,0.15)',
                borderRadius: '16px', padding: '1.6rem 1.4rem',
                display: 'flex', flexDirection: 'column', gap: '0.9rem',
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: 'rgba(69,197,190,0.1)', border: '1px solid rgba(69,197,190,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {p.icon}
              </div>
              <h3 style={{
                fontFamily: 'DM Serif Display, serif', fontSize: '1.15rem',
                color: 'white', fontWeight: 400, margin: 0,
              }}>
                {p.titulo}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Nota de transición al ejercicio */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            background: 'rgba(69,197,190,0.07)',
            border: '1px solid rgba(69,197,190,0.2)',
            borderRadius: '12px', padding: '1rem 1.4rem',
          }}
        >
          <div style={{ width: '4px', height: '36px', background: '#45C5BE', borderRadius: '2px', flexShrink: 0 }} />
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>
            Ahora vamos a ponerlo a prueba — porque trabajar en equipo bajo presión también es una habilidad que se entrena.
          </p>
        </motion.div>

      </div>
    </div>
  )
}
