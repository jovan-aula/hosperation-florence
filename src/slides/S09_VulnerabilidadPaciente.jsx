import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const puntos = [
  {
    label: 'Dolor físico',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    label: 'Preocupación económica',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
  },
  {
    label: 'Desinformación',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    label: 'Ansiedad',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    label: 'Incertidumbre',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    label: 'Miedo',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function S09_VulnerabilidadPaciente() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
    }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.75rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <h2 className="slide-title slide-title--white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            El paciente llega en situación de vulnerabilidad
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.5rem' }}>
            Un paciente puede llegar con:
          </p>
        </motion.div>

        <motion.div {...fade(0.2)}>
          <div style={{ width: '50px', height: '3px', background: '#45C5BE', borderRadius: '2px' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          {puntos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'rgba(255,255,255,0.05)', borderRadius: '14px',
                border: '1.5px solid rgba(69,197,190,0.25)', padding: '1.25rem',
                display: 'flex', alignItems: 'center', gap: '1rem',
              }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '10px',
                background: 'rgba(69,197,190,0.1)', border: '1px solid rgba(69,197,190,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {p.icon}
              </div>
              <span style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500, lineHeight: 1.35 }}>
                {p.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.8)}>
          <div style={{
            background: 'rgba(69,197,190,0.1)', border: '1px solid rgba(69,197,190,0.3)',
            borderRadius: '12px', padding: '1rem 1.4rem',
          }}>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>
              Nuestra actitud y empatía puede disminuir esa vulnerabilidad desde el primer contacto.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
