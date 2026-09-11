import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const reglas = [
  'Usen solo el material de su equipo: hojas + cinta.',
  'La torre debe sostenerse sola — sin apoyos externos.',
  'Tienen 7 minutos. Gana el equipo con la torre más alta.',
]

export default function S22_TorreInstrucciones() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '52px 80px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(69,197,190,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '780px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.8rem', zIndex: 1 }}>

        <motion.div {...fade(0.05)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(69,197,190,0.15)', border: '1px solid rgba(69,197,190,0.4)', borderRadius: '100px', padding: '0.3rem 1.1rem', fontSize: '0.68rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Actividad 3 · La torre — 7 min
          </div>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
            Material: hojas de papel + cinta adhesiva · 4 equipos
          </div>
        </motion.div>

        <motion.h2 {...fade(0.15)} style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: 'white', lineHeight: 1.1, margin: 0 }}>
          Construyan la torre{' '}
          <span style={{ color: '#45C5BE' }}>más alta</span>
        </motion.h2>

        <motion.div {...fade(0.2)}>
          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px' }} />
        </motion.div>

        <motion.div {...fade(0.3)} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {reglas.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(69,197,190,0.12)', border: '1.5px solid rgba(69,197,190,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#45C5BE' }}>{i + 1}</span>
              </div>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.5 }}>{r}</p>
            </div>
          ))}
        </motion.div>

        <motion.div {...fade(0.5)}>
          <div style={{ background: 'rgba(69,197,190,0.1)', border: '1.5px solid rgba(69,197,190,0.3)', borderRadius: '14px', padding: '1.1rem 1.4rem' }}>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
              <strong style={{ color: 'white' }}>Pueden usar las hojas de la actividad anterior</strong> — la forma en que las doblen o enrollen es parte de la estrategia.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
