import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const fases = [
  {
    num: '1',
    titulo: 'Fase individual — 7 min',
    desc: 'Cada equipo construye la torre más alta posible con sus hojas y cinta. Nadie puede usar las hojas del otro equipo.',
    color: '#45C5BE',
    borderColor: 'rgba(69,197,190,0.35)',
    bg: 'rgba(69,197,190,0.08)',
  },
  {
    num: '2',
    titulo: 'Fase colectiva — 5 min',
    desc: '¡Alto! Ahora únanlas. Deben construir UNA SOLA TORRE con las cuatro. Sin desarmar lo que ya tienen — solo conectar.',
    color: '#a769fa',
    borderColor: 'rgba(167,105,250,0.35)',
    bg: 'rgba(167,105,250,0.08)',
  },
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
      <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(167,105,250,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.6rem', zIndex: 1 }}>

        <motion.div {...fade(0.05)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(69,197,190,0.15)', border: '1px solid rgba(69,197,190,0.4)', borderRadius: '100px', padding: '0.3rem 1.1rem', fontSize: '0.68rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Actividad 3 · La torre — 15 min
          </div>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
            Material: hojas de papel + cinta adhesiva · 4 equipos
          </div>
        </motion.div>

        <motion.h2 {...fade(0.15)} style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, color: 'white', lineHeight: 1.15, margin: 0 }}>
          Construyan la torre{' '}
          <span style={{ color: '#45C5BE' }}>más alta</span>
        </motion.h2>

        <motion.div {...fade(0.2)}>
          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {fases.map((f, i) => (
            <motion.div key={i} {...fade(0.3 + i * 0.12)} style={{ background: f.bg, border: `1.5px solid ${f.borderColor}`, borderRadius: '16px', padding: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: `1.5px solid ${f.borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: f.color }}>{f.num}</span>
                </div>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: f.color }}>{f.titulo}</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.55)}>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem 1.4rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Regla de oro</div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
              No pueden dejar fuera a ningún equipo. <strong style={{ color: 'white' }}>Todos los departamentos deben ser parte de la torre final.</strong> Ninguno vale más que otro.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
