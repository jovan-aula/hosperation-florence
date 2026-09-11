import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S14_GuiaCiegaInstrucciones() {
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

      <div style={{ maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.6rem', zIndex: 1 }}>

        {/* Header */}
        <motion.div {...fade(0.05)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(69,197,190,0.15)', border: '1px solid rgba(69,197,190,0.4)', borderRadius: '100px', padding: '0.3rem 1.1rem', fontSize: '0.68rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Actividad 2 · Guía ciega — 20 min
          </div>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>
            Material: vendas o pañuelos + vasos de plástico con agua
          </div>
        </motion.div>

        <motion.h2 {...fade(0.15)} style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, color: 'white', lineHeight: 1.15, margin: 0 }}>
          Ponerse en los zapatos{' '}
          <span style={{ color: '#45C5BE' }}>del paciente</span>
        </motion.h2>

        <motion.div {...fade(0.2)}>
          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px' }} />
        </motion.div>

        {/* Dos rondas */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

          <motion.div {...fade(0.3)} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,100,100,0.3)', borderRadius: '16px', padding: '1.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,100,100,0.15)', border: '1.5px solid rgba(255,100,100,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ff8a8a' }}>1</span>
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ff8a8a' }}>Ronda — comunicación robótica</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
              El guía <strong style={{ color: 'white' }}>solo puede usar 3 palabras:</strong> "camina", "para", "gira" + izquierda/derecha. Sin contexto, sin advertencias, sin empatía.
            </p>
            <div style={{ marginTop: '0.9rem', background: 'rgba(255,100,100,0.08)', borderRadius: '8px', padding: '0.6rem 0.9rem' }}>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', margin: 0, fontStyle: 'italic' }}>
                Observen cuánta agua se derrama.
              </p>
            </div>
          </motion.div>

          <motion.div {...fade(0.4)} style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(69,197,190,0.35)', borderRadius: '16px', padding: '1.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(69,197,190,0.15)', border: '1.5px solid rgba(69,197,190,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#45C5BE' }}>2</span>
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#45C5BE' }}>Ronda — comunicación empática</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
              El guía habla libremente. Describe lo que viene, avisa obstáculos, usa el nombre. Ej: <em style={{ color: 'rgba(255,255,255,0.75)' }}>"Hay una silla a tu izquierda, voy a poner mi mano en tu hombro, ya casi llegamos."</em>
            </p>
            <div style={{ marginTop: '0.9rem', background: 'rgba(69,197,190,0.08)', borderRadius: '8px', padding: '0.6rem 0.9rem' }}>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', margin: 0, fontStyle: 'italic' }}>
                Comparen el agua derramada con la ronda 1.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Setup pasos */}
        <motion.div {...fade(0.5)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[
            'Formen parejas. Uno = paciente (ojos cerrados + vaso con agua). Otro = colaborador del hospital.',
            'El paciente sostiene el vaso todo el tiempo. Agua derramada = ansiedad del paciente.',
            'Misma ruta, dos rondas. Al final comparen los vasos y reflexionen.',
          ].map((paso, i) => (
            <div key={i} style={{ flex: '1 1 260px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#45C5BE' }}>{i + 1}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.6 }}>{paso}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
