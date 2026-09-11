import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const instrucciones = [
  { label: 'Material', value: 'Hojas de papel + cinta adhesiva' },
  { label: 'Cada hoja =', value: 'Un departamento del hospital (Recepción, Enfermería, Caja, Médico, Laboratorio, Limpieza)' },
  { label: 'La cinta =', value: 'Comunicación entre departamentos' },
  { label: 'Objetivo', value: 'Construir un puente que sostenga un celular' },
  { label: 'Regla', value: 'Deben usar TODOS los departamentos. Ninguno puede quedar fuera.' },
  { label: 'Tiempo', value: '7 minutos' },
]

export default function S22_PuenteInstrucciones() {
  return (
    <div className="slide slide--dark bg-dots--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <div style={{ maxWidth: '860px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <div style={{
            display: 'inline-block', background: 'linear-gradient(135deg, #45C5BE, #2BA8A2)',
            borderRadius: '100px', padding: '0.4rem 1.4rem', fontSize: '0.78rem', fontWeight: 700,
            color: 'white', letterSpacing: '0.12em', textTransform: 'uppercase',
            boxShadow: '0 4px 15px rgba(69,197,190,0.3)',
          }}>
            Actividad 3 · El puente — 20 min
          </div>
        </motion.div>

        <motion.h2 {...fade(0.2)} className="slide-title slide-title--white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
          Construyan el puente de Florence
        </motion.h2>

        <motion.div {...fade(0.3)}>
          <div style={{ width: '50px', height: '3px', background: '#45C5BE', borderRadius: '2px' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
          {instrucciones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.35 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(69,197,190,0.2)',
                borderRadius: '12px', padding: '0.9rem 1.1rem',
              }}
            >
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                {item.label}
              </div>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5 }}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
