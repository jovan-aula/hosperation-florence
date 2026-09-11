import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const preguntas = [
  { num: '1', texto: '¿Qué estrategia usó tu equipo para construirla? ¿Todos participaron o alguien lideró?' },
  { num: '2', texto: '¿Qué tan sólida quedó la torre? ¿Qué la hizo fuerte o débil?' },
  { num: '3', texto: '¿En qué se parece construir esta torre a trabajar en tu área del hospital?' },
  { num: '4', texto: '¿Qué necesitaría tu equipo para que la experiencia del paciente sea tan sólida como la mejor torre de hoy?' },
]

export default function S23_TorreDebriefing() {
  return (
    <div className="slide" style={{ background: '#EEF2F7', padding: '52px 80px' }}>
      <div className="corner-accent" />
      <div style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.8rem', zIndex: 1 }}>

        <motion.div {...fade(0.05)}>
          <div className="pill" style={{ marginBottom: '0.8rem' }}>Reflexión</div>
          <h2 className="slide-title">¿Qué nos enseñó la torre?</h2>
          <div className="teal-bar" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {preguntas.map((p, i) => (
            <motion.div key={i} {...fade(0.2 + i * 0.1)} style={{
              background: 'white', borderRadius: '16px',
              border: '1.5px solid rgba(69,197,190,0.2)',
              padding: '1.2rem 1.4rem',
              display: 'flex', gap: '1rem', alignItems: 'flex-start',
              boxShadow: '0 2px 10px rgba(12,45,78,0.06)',
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
                background: 'rgba(69,197,190,0.1)', border: '2px solid rgba(69,197,190,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.1rem', color: '#45C5BE', fontWeight: 400 }}>{p.num}</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#2D3748', lineHeight: 1.6, margin: 0 }}>{p.texto}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.65)}>
          <div style={{
            background: '#0C2D4E', borderRadius: '16px',
            padding: '1.2rem 1.8rem',
            display: 'flex', alignItems: 'center', gap: '1rem',
          }}>
            <div style={{ width: '4px', height: '100%', minHeight: '48px', background: '#45C5BE', borderRadius: '2px', flexShrink: 0 }} />
            <p style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              color: 'white', margin: 0, lineHeight: 1.45,
            }}>
              "Cada departamento puede ser excelente por sí solo. Pero el paciente no vive un departamento —{' '}
              <span style={{ color: '#45C5BE' }}>vive el hospital completo.</span>"
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
