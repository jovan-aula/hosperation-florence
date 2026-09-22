import { motion } from 'framer-motion'

export default function S23_TorreDebriefing() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(160deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '60px 80px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(69,197,190,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '720px', width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.4rem', textAlign: 'center' }}>

        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}
        >
          Reflexión
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
            fontWeight: 400, color: 'white',
            lineHeight: 1.2, margin: 0,
          }}
        >
          ¿Qué estrategia usaron para hacer su torre alta?
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px' }}
        />

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{
            fontSize: '0.95rem', color: 'rgba(255,255,255,0.35)',
            lineHeight: 1.7, margin: 0, maxWidth: '480px',
          }}
        >
          Compartan con el grupo.
        </motion.p>

      </div>
    </div>
  )
}
