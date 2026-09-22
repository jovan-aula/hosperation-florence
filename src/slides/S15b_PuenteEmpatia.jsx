import { motion } from 'framer-motion'

export default function S15b_PuenteEmpatia() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(160deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '60px 80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid de fondo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(69,197,190,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '720px', width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 400, color: 'white',
            lineHeight: 1.25, margin: 0,
          }}>
            El paciente no solo necesita
            ser atendido.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px' }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 400, color: '#45C5BE',
            lineHeight: 1.25, margin: 0,
          }}
        >
          Necesita sentirse comprendido.
        </motion.h2>

      </div>
    </div>
  )
}
