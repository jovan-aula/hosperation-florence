import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
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

export default function S08_ServicioVsExperiencia() {
  return (
    <div className="slide" style={{ background: '#EEF2F7', padding: '48px 72px' }}>
      <div className="corner-accent" />
      <div style={{ maxWidth: '980px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.6rem', zIndex: 1 }}>

        {/* Header */}
        <motion.div {...fade(0.05)}>
          <h2 className="slide-title">Servicio vs. Experiencia</h2>
          <p style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.4rem' }}>
            La misma acción puede generar una experiencia muy diferente.
          </p>
          <div style={{ width: '60px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginTop: '0.8rem' }} />
        </motion.div>

        {/* Two columns — condensed */}
        <motion.div {...fade(0.15)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ background: '#0C2D4E', borderRadius: '14px', padding: '1.2rem 1.6rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Servicio — lo que hacemos</div>
            {['Procedimientos clínicos', 'Procesos internos', 'Atención técnica'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#45C5BE', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: '#45C5BE', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(69,197,190,0.1)', borderRadius: '14px', padding: '1.2rem 1.6rem', border: '2px solid rgba(69,197,190,0.3)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#2BA8A2', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Experiencia — lo que el paciente vive</div>
            {['Emociones', 'Percepciones', 'Recuerdos'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0C2D4E', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: '#0C2D4E', fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Examples table */}
        <motion.div {...fade(0.3)} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(12,45,78,0.08)' }}>
          {/* Table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 2.2fr 2.2fr', background: '#0C2D4E', padding: '0.6rem 1.2rem', gap: '1rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Acción del colaborador</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#ff8a8a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Experiencia negativa</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Experiencia positiva</div>
          </div>
          {ejemplos.map((e, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '2fr 2.2fr 2.2fr',
              padding: '0.85rem 1.2rem', gap: '1rem',
              borderBottom: i < ejemplos.length - 1 ? '1px solid #EEF2F7' : 'none',
              alignItems: 'center',
            }}>
              <div style={{ fontSize: '0.82rem', color: '#2D3748', fontWeight: 500, lineHeight: 1.4 }}>{e.accion}</div>
              <div style={{ fontSize: '0.8rem', color: '#C53030', lineHeight: 1.45, fontStyle: 'italic' }}>{e.negativa}</div>
              <div style={{ fontSize: '0.8rem', color: '#2BA8A2', lineHeight: 1.45, fontStyle: 'italic' }}>{e.positiva}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
