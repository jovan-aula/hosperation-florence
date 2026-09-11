import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S20_EsperaExperiencia() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <div style={{ maxWidth: '840px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem', zIndex: 1, textAlign: 'center' }}>
        <motion.div {...fade(0.1)}>
          <h2 className="slide-title slide-title--white" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            La espera también es experiencia
          </h2>
          <div style={{ width: '60px', height: '3px', background: '#45C5BE', borderRadius: '2px', margin: '1rem auto 0' }} />
        </motion.div>

        {/* Ecuaciones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <motion.div
            {...fade(0.3)}
            style={{
              background: 'rgba(229,62,62,0.1)', border: '2px solid rgba(229,62,62,0.25)',
              borderRadius: '16px', padding: '1.25rem 2rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
            }}
          >
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'rgba(255,255,255,0.8)' }}>
              Espera
            </span>
            <span style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.3)' }}>+</span>
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'rgba(255,255,255,0.8)' }}>
              Silencio
            </span>
            <span style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.3)' }}>=</span>
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'rgba(229,62,62,0.9)', fontWeight: 600 }}>
              Frustración
            </span>
          </motion.div>

          <motion.div
            {...fade(0.45)}
            style={{
              background: 'rgba(69,197,190,0.12)', border: '2px solid rgba(69,197,190,0.35)',
              borderRadius: '16px', padding: '1.25rem 2rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
            }}
          >
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'rgba(255,255,255,0.8)' }}>
              Espera
            </span>
            <span style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.3)' }}>+</span>
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#45C5BE' }}>
              Comunicación
            </span>
            <span style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.3)' }}>=</span>
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#45C5BE', fontWeight: 600 }}>
              Tranquilidad
            </span>
          </motion.div>
        </div>

        {/* Central text */}
        <motion.div {...fade(0.65)}>
          <div style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '14px', padding: '1.25rem 2rem',
          }}>
            <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1rem, 2vw, 1.35rem)', color: 'white', margin: 0, lineHeight: 1.45 }}>
              "El problema no siempre es esperar. El problema es esperar{' '}
              <span style={{ color: '#45C5BE' }}>SIN INFORMACIÓN</span>."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
