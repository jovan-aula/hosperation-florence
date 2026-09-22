import { motion } from 'framer-motion'

const pasos = [
  {
    letra: 'P',
    titulo: 'Pregunto',
    desc: 'Antes de asumir, pregunto. Entiendo qué necesita el paciente en este momento.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    letra: 'E',
    titulo: 'Escucho',
    desc: 'Escucho de verdad. No solo las palabras — también la emoción detrás de ellas.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    ),
  },
  {
    letra: 'C',
    titulo: 'Confirmo',
    desc: 'Me aseguro de que lo que comuniqué fue entendido. Cierro el ciclo de la conversación.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
  {
    letra: 'P',
    titulo: 'Personalizo',
    desc: 'Cada paciente es diferente. Adapto mi respuesta a su contexto, no a un protocolo genérico.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
]

export default function S19_Regla3Pasos() {
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
            Una herramienta para cada momento
          </span>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 400, color: '#0C2D4E',
            lineHeight: 1.2, margin: '0.4rem 0 0',
          }}>
            El método PECP.
          </h2>
          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginTop: '0.8rem' }} />
        </motion.div>

        {/* 4 tarjetas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {pasos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'white', borderRadius: '18px', padding: '1.6rem 1.4rem',
                boxShadow: '0 4px 20px rgba(12,45,78,0.08)',
                border: '1.5px solid rgba(69,197,190,0.15)',
                display: 'flex', flexDirection: 'column', gap: '1rem',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Letra grande de fondo */}
              <div style={{
                position: 'absolute', top: '-12px', right: '12px',
                fontFamily: 'DM Serif Display, serif',
                fontSize: '5rem', fontWeight: 400,
                color: 'rgba(69,197,190,0.07)', lineHeight: 1,
                pointerEvents: 'none', userSelect: 'none',
              }}>
                {p.letra}
              </div>

              {/* Icono */}
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: 'rgba(69,197,190,0.1)', border: '1px solid rgba(69,197,190,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                {p.icon}
              </div>

              {/* Título */}
              <h3 style={{
                fontFamily: 'DM Serif Display, serif', fontSize: '1.3rem',
                color: '#0C2D4E', fontWeight: 400, margin: 0,
              }}>
                {p.titulo}
              </h3>

              {/* Descripción */}
              <p style={{ fontSize: '0.82rem', color: '#718096', margin: 0, lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Nota final */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          style={{
            background: '#0C2D4E', borderRadius: '12px',
            padding: '1rem 1.4rem',
            display: 'flex', alignItems: 'center', gap: '1rem',
          }}
        >
          <div style={{ width: '4px', height: '36px', background: '#45C5BE', borderRadius: '2px', flexShrink: 0 }} />
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
            No es una regla nueva — es una guía que ya aplica en cada conversación con el paciente, desde la primera llamada hasta el alta.
          </p>
        </motion.div>

      </div>
    </div>
  )
}
