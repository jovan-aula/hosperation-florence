import { motion } from 'framer-motion'

export default function S19b_PuenteEspera() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
    }}>

      {/* Izquierda — imagen */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=85"
          alt="Sala de espera hospitalaria"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Overlay oscuro */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(8,30,53,0.3) 0%, rgba(8,30,53,0.7) 100%)',
        }} />

        {/* Dato superpuesto */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            position: 'absolute', bottom: '40px', left: '32px', right: '32px',
            background: 'rgba(8,30,53,0.85)',
            border: '1px solid rgba(69,197,190,0.25)',
            borderRadius: '14px', padding: '1.2rem 1.4rem',
            backdropFilter: 'blur(8px)',
          }}
        >
          <p style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem',
          }}>
            Estudio — Journal of Environmental Psychology
          </p>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.55 }}>
            Los pacientes en salas con relojes visibles perciben su espera hasta un <strong style={{ color: 'white' }}>32% más larga</strong> que quienes esperan sin referencia de tiempo.
          </p>
        </motion.div>
      </div>

      {/* Derecha — pregunta */}
      <div style={{
        background: 'linear-gradient(160deg, #081e35 0%, #0C2D4E 100%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '60px 56px', gap: '2rem',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid de fondo */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px', pointerEvents: 'none',
        }} />

        {/* Icono reloj */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '56px', height: '56px', borderRadius: '50%',
            background: 'rgba(69,197,190,0.1)', border: '1.5px solid rgba(69,197,190,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </motion.div>

        {/* Pregunta */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
            fontWeight: 400, color: 'white',
            lineHeight: 1.25, margin: 0,
          }}>
            ¿El reloj en una sala de espera genera una experiencia?
          </h2>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ width: '48px', height: '2px', background: '#45C5BE', borderRadius: '2px' }}
        />

        {/* Reflexión */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.7, margin: 0,
          }}
        >
          Lo que nos rodea habla aunque nadie diga una sola palabra. El entorno también comunica.
        </motion.p>
      </div>

    </div>
  )
}
