import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S26_ReflexionFinal() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      textAlign: 'center',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '840px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem', zIndex: 1, alignItems: 'center' }}>
        <motion.div {...fade(0.1)}>
          <div style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px',
            padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 600,
            color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Reflexión final
          </div>
        </motion.div>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: 400, color: 'white', lineHeight: 1.2, margin: 0,
        }}>
          Si mañana tú fueras el paciente...
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
          {[
            '¿Qué te gustaría encontrar en Hospital Florence?',
            '¿Qué puedes empezar a hacer hoy para que eso suceda?',
          ].map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(69,197,190,0.25)',
                borderRadius: '16px', padding: '1.5rem 2rem',
              }}
            >
              <p style={{
                fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                color: 'white', margin: 0, lineHeight: 1.4, fontStyle: 'italic',
              }}>
                "{q}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.7)} style={{ maxWidth: '620px' }}>
          <p style={{
            fontSize: 'clamp(0.82rem, 1.3vw, 0.95rem)', color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.7, margin: 0, fontStyle: 'italic',
          }}>
            "La experiencia del paciente no pertenece a un solo departamento. Pertenece a cada uno de nosotros."
            <br />
            <span style={{ color: 'rgba(69,197,190,0.7)', fontSize: '0.82em' }}>— Filosofía de Servicio Hospital Florence</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
