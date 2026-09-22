import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const ejemplos = [
  {
    accion: 'El paciente llega y nadie lo saluda',
    negativa: '"Siento que no le importo a nadie."',
    positiva: '"Me recibieron, saben que estoy aquí."',
  },
  {
    accion: 'Le dicen "tiene que esperar" sin más',
    negativa: '"No sé cuánto voy a estar aquí, me siento ignorado."',
    positiva: '"Me avisarán cuando sea mi turno, puedo estar tranquilo."',
  },
  {
    accion: 'Le señalan dónde está el área de rayos X',
    negativa: '"¿Por allá? No sé a dónde ir, me siento solo."',
    positiva: '"Me acompañaron, me hicieron sentir en buenas manos."',
  },
]

export default function S08c_ServicioEjemplos() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#EEF2F7',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '52px 80px', position: 'relative', overflow: 'hidden',
    }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '980px', width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>

        {/* Header */}
        <motion.div {...fade(0.05)}>
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#2BA8A2',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            La misma acción, dos experiencias distintas
          </span>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
            fontWeight: 400, color: '#0C2D4E',
            lineHeight: 1.2, margin: '0.5rem 0 0',
          }}>
            Cómo vive el paciente lo que hacemos.
          </h2>
          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginTop: '0.8rem' }} />
        </motion.div>

        {/* Tabla */}
        <motion.div {...fade(0.2)} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(12,45,78,0.08)' }}>
          {/* Encabezado */}
          <div style={{
            display: 'grid', gridTemplateColumns: '2fr 2.2fr 2.2fr',
            background: '#0C2D4E', padding: '0.7rem 1.4rem', gap: '1rem',
          }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Acción del colaborador
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#ff8a8a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Experiencia negativa
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Experiencia positiva
            </div>
          </div>

          {/* Filas */}
          {ejemplos.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.35 + i * 0.12 }}
              style={{
                display: 'grid', gridTemplateColumns: '2fr 2.2fr 2.2fr',
                padding: '1rem 1.4rem', gap: '1rem',
                borderBottom: i < ejemplos.length - 1 ? '1px solid #EEF2F7' : 'none',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '0.85rem', color: '#2D3748', fontWeight: 500, lineHeight: 1.45 }}>{e.accion}</div>
              <div style={{ fontSize: '0.82rem', color: '#C53030', lineHeight: 1.5, fontStyle: 'italic' }}>{e.negativa}</div>
              <div style={{ fontSize: '0.82rem', color: '#2BA8A2', lineHeight: 1.5, fontStyle: 'italic' }}>{e.positiva}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
