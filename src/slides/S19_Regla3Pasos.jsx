import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const pasos = [
  {
    num: '1',
    titulo: 'Escuchar',
    desc: 'Comprender la necesidad antes de responder.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    ),
  },
  {
    num: '2',
    titulo: 'Explicar',
    desc: 'Hablar con claridad y sencillez, sin tecnicismos.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    num: '3',
    titulo: 'Confirmar',
    desc: '"¿Hay algo que quisiera volver a revisar?"',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
]

export default function S19_Regla3Pasos() {
  return (
    <div className="slide" style={{ background: '#EEF2F7' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '920px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)} style={{ textAlign: 'center' }}>
          <h2 className="slide-title">La regla de los 3 pasos</h2>
          <div style={{ width: '60px', height: '3px', background: '#45C5BE', borderRadius: '2px', margin: '1rem auto 0' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.25rem' }}>
          {pasos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'white', borderRadius: '20px', padding: '2rem 1.75rem',
                boxShadow: '0 4px 20px rgba(12,45,78,0.1)',
                border: '1.5px solid rgba(69,197,190,0.2)',
                display: 'flex', flexDirection: 'column', gap: '1.25rem',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '80px', height: '80px',
                background: 'rgba(69,197,190,0.06)', borderRadius: '50%',
                pointerEvents: 'none',
              }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: 'rgba(69,197,190,0.1)', border: '1px solid rgba(69,197,190,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {p.icon}
                </div>
                <div style={{
                  fontFamily: 'DM Serif Display, serif', fontSize: '2rem',
                  color: '#45C5BE', lineHeight: 1,
                }}>
                  {p.num}
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.4rem', color: '#0C2D4E', fontWeight: 400, margin: '0 0 0.5rem' }}>
                  {p.titulo}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#718096', margin: 0, lineHeight: 1.55 }}>
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
