import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S27_PortadaCierre() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden', position: 'relative',
    }}>
      {/* Left panel */}
      <div style={{
        background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 60%, #0f3660 100%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', padding: '52px 60px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', right: '-80px',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(69,197,190,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Logo */}
        <motion.div {...fade(0.1)} style={{ zIndex: 1 }}>
          <img
            src="/logo-sin-fondo.png"
            alt="Hosperation"
            style={{ height: '80px', objectFit: 'contain', objectPosition: 'left center' }}
          />
        </motion.div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', zIndex: 1 }}>
          <motion.div {...fade(0.3)}>
            <div style={{
              display: 'inline-block', background: 'rgba(69,197,190,0.15)',
              border: '1px solid rgba(69,197,190,0.4)', borderRadius: '100px',
              padding: '0.35rem 1.2rem', fontSize: '0.72rem', fontWeight: 600,
              color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              Gracias
            </div>
          </motion.div>

          <motion.h1 {...fade(0.45)} style={{
            fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2rem, 4vw, 3.4rem)',
            fontWeight: 400, color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0,
          }}>
            Experiencia del{' '}
            <span style={{ color: '#45C5BE' }}>Paciente</span>
          </motion.h1>

          <motion.div {...fade(0.6)}>
            <div style={{ width: '70px', height: '3px', background: 'linear-gradient(90deg, #45C5BE, transparent)', borderRadius: '2px' }} />
          </motion.div>

          <motion.p {...fade(0.7)} style={{
            fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
            color: 'rgba(255,255,255,0.65)', fontWeight: 300, letterSpacing: '0.02em', margin: 0, lineHeight: 1.6,
          }}>
            De la atención al acompañamiento
          </motion.p>
        </div>

        {/* Facilitador badge */}
        <motion.div {...fade(0.9)} style={{ zIndex: 1 }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(69,197,190,0.2), rgba(43,168,162,0.15))',
            border: '1px solid rgba(69,197,190,0.35)', borderRadius: '12px',
            padding: '0.8rem 1.4rem',
            display: 'inline-flex', alignItems: 'center', gap: '12px',
          }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #45C5BE, #2BA8A2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.8rem', fontWeight: 700, color: 'white', flexShrink: 0,
            }}>
              ER
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Facilitado por</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'white' }}>Mtro. Edrick Reyes</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right panel — dark with dots + quote */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: 'linear-gradient(160deg, #0C2D4E 0%, #081e35 100%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '60px', position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Dots */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px', pointerEvents: 'none',
        }} />
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '-60px', left: '-60px',
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(69,197,190,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{ zIndex: 1, textAlign: 'center', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}
        >
          {/* Teal bar */}
          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px' }} />

          <p style={{
            fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
            color: 'white', lineHeight: 1.4, fontStyle: 'italic', margin: 0,
          }}>
            "En Hospital Florence no solo tratamos enfermedades;{' '}
            <span style={{ color: '#45C5BE' }}>acompañamos personas</span>{' '}
            en uno de los momentos más importantes de su vida."
          </p>

          <div style={{ width: '48px', height: '3px', background: 'rgba(69,197,190,0.3)', borderRadius: '2px' }} />

          {/* Logo badge */}
          <div style={{
            background: 'rgba(69,197,190,0.1)', border: '1px solid rgba(69,197,190,0.25)',
            borderRadius: '100px', padding: '0.5rem 1.5rem',
          }}>
            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
              Hospital Florence · Módulo 3
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
