import { motion } from 'framer-motion'

export default function S08a_ServicioDistincion() {
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

      <div style={{ maxWidth: '820px', width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2.4rem' }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        >
          <span style={{
            background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)',
            borderRadius: '100px', padding: '0.3rem 1.2rem',
            fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            Una distinción fundamental
          </span>
        </motion.div>

        {/* Las dos definiciones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '1.6rem' }}
          >
            <span style={{
              fontFamily: 'DM Serif Display, serif', fontSize: '1rem',
              color: 'rgba(255,255,255,0.25)', lineHeight: 1, paddingTop: '6px', flexShrink: 0,
            }}>01</span>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Servicio
              </p>
              <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'white', lineHeight: 1.2, margin: 0 }}>
                Lo que hacemos.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            style={{ width: '48px', height: '2px', background: 'rgba(69,197,190,0.3)', marginLeft: '2.8rem' }}
          />

          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '1.6rem' }}
          >
            <span style={{
              fontFamily: 'DM Serif Display, serif', fontSize: '1rem',
              color: 'rgba(69,197,190,0.4)', lineHeight: 1, paddingTop: '6px', flexShrink: 0,
            }}>02</span>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Experiencia
              </p>
              <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#45C5BE', lineHeight: 1.2, margin: 0 }}>
                Lo que el paciente siente<br />mientras lo hacemos.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Línea final */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.85 }}
          style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.4rem', margin: 0 }}
        >
          Puedes hacer todo correctamente y aun así generar una mala experiencia.
        </motion.p>

      </div>
    </div>
  )
}
