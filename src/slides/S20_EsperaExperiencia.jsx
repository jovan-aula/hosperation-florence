import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S20_EsperaExperiencia() {
  return (
    <div className="slide" style={{ background: '#EEF2F7' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '840px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem', zIndex: 1, textAlign: 'center' }}>
        <motion.div {...fade(0.1)}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#2BA8A2', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Otro momento de verdad
          </span>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#0C2D4E', lineHeight: 1.2, margin: '0.4rem 0 0' }}>
            La espera también es experiencia.
          </h2>
          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px', margin: '0.8rem auto 0' }} />
        </motion.div>

        {/* Ecuaciones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <motion.div
            {...fade(0.3)}
            style={{
              background: 'rgba(197,48,48,0.07)', border: '2px solid rgba(197,48,48,0.2)',
              borderRadius: '16px', padding: '1.25rem 2rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
            }}
          >
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#2D3748' }}>Espera</span>
            <span style={{ fontSize: '1.5rem', color: 'rgba(0,0,0,0.2)' }}>+</span>
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#2D3748' }}>Silencio</span>
            <span style={{ fontSize: '1.5rem', color: 'rgba(0,0,0,0.2)' }}>=</span>
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#C53030', fontWeight: 600 }}>Frustración</span>
          </motion.div>

          <motion.div
            {...fade(0.45)}
            style={{
              background: 'rgba(69,197,190,0.1)', border: '2px solid rgba(69,197,190,0.3)',
              borderRadius: '16px', padding: '1.25rem 2rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
            }}
          >
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#2D3748' }}>Espera</span>
            <span style={{ fontSize: '1.5rem', color: 'rgba(0,0,0,0.2)' }}>+</span>
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#2BA8A2' }}>Comunicación</span>
            <span style={{ fontSize: '1.5rem', color: 'rgba(0,0,0,0.2)' }}>=</span>
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#2BA8A2', fontWeight: 600 }}>Tranquilidad</span>
          </motion.div>
        </div>

        {/* Frase cierre */}
        <motion.div {...fade(0.65)}>
          <div style={{
            background: '#0C2D4E', borderRadius: '14px', padding: '1.25rem 2rem',
            borderLeft: '4px solid #45C5BE',
            textAlign: 'left',
          }}>
            <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'white', margin: 0, lineHeight: 1.5 }}>
              "El problema no siempre es esperar. El problema es esperar{' '}
              <span style={{ color: '#45C5BE' }}>sin información.</span>"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
