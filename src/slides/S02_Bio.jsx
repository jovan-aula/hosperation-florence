import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S02_Bio() {
  const highlights = [
    { num: '17+', label: 'años de experiencia' },
    { num: '', label: 'Fundador de Hosperation', icon: true },
    { num: '', label: 'Turismo de salud Tijuana', icon: true },
  ]

  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1.4fr',
      overflow: 'hidden',
    }}>
      {/* Left — navy panel */}
      <div style={{
        background: 'linear-gradient(160deg, #081e35 0%, #0C2D4E 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '52px 48px', gap: '1.5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px', pointerEvents: 'none',
        }} />

        {/* Photo circle */}
        <motion.div {...fade(0.2)} style={{ zIndex: 1 }}>
          <div style={{
            width: '160px', height: '160px', borderRadius: '50%',
            border: '3px solid rgba(69,197,190,0.5)',
            overflow: 'hidden', flexShrink: 0,
            boxShadow: '0 0 40px rgba(69,197,190,0.2)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop"
              alt="Mtro. Edrick Reyes"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </motion.div>

        <motion.div {...fade(0.35)} style={{ zIndex: 1, textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
            fontWeight: 400, color: 'white', margin: '0 0 0.5rem', lineHeight: 1.2,
          }}>
            Mtro. Edrick Reyes
          </h2>
          <div style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.15)',
            border: '1px solid rgba(69,197,190,0.35)', borderRadius: '100px',
            padding: '0.3rem 1rem', fontSize: '0.72rem', fontWeight: 600,
            color: '#45C5BE', letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            Consultor Especializado en Hospitalidad
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div {...fade(0.5)} style={{ zIndex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
          {[
            { label: '17+ años de experiencia' },
            { label: 'Fundador de Hosperation' },
            { label: 'Turismo de salud Tijuana' },
          ].map((h, i) => (
            <div key={i} style={{
              background: 'rgba(69,197,190,0.08)', border: '1px solid rgba(69,197,190,0.2)',
              borderRadius: '10px', padding: '0.65rem 1rem',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#45C5BE', flexShrink: 0 }} />
              <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{h.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — light panel */}
      <div style={{
        background: '#EEF2F7', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '60px 64px', gap: '1.8rem',
      }}>
        <motion.div {...fade(0.15)}>
          <div style={{
            display: 'inline-block', background: 'rgba(12,45,78,0.08)',
            color: '#0C2D4E', borderRadius: '100px', padding: '0.3rem 1rem',
            fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            Tu facilitador
          </div>
        </motion.div>

        <motion.div {...fade(0.25)}>
          <div style={{ width: '50px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginBottom: '1rem' }} />
          <p style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: '#2D3748',
            lineHeight: 1.75, margin: 0,
          }}>
            Licenciado en Turismo por UABC y Maestro en Administración de Empresas por Pacífico Universidad.
            Instructor y Consultor Especializado en Hospitalidad con más de 17 años de experiencia en roles
            operativos y directivos en el turismo. Fundador de Hosperation.
          </p>
        </motion.div>

        {/* Three highlight cards */}
        <motion.div {...fade(0.4)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          {[
            { title: '17+ años', sub: 'de experiencia' },
            { title: 'Hosperation', sub: 'Fundador' },
            { title: 'Turismo', sub: 'de salud Tijuana' },
          ].map((c, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: '12px', padding: '1rem 1.1rem',
              boxShadow: '0 2px 12px rgba(12,45,78,0.08)',
              borderTop: '3px solid #45C5BE',
            }}>
              <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.15rem', color: '#0C2D4E', fontWeight: 400 }}>{c.title}</div>
              <div style={{ fontSize: '0.75rem', color: '#718096', marginTop: '2px' }}>{c.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
