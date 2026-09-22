import { motion } from 'framer-motion'

const momentos = [
  {
    momento: 'Primera llamada',
    dolor: 'Nadie contesta o la información es confusa',
    diferencia: 'Claridad, calidez y tiempo de respuesta',
  },
  {
    momento: 'Llegada y recepción',
    dolor: 'Nadie saluda, no saben quién eres',
    diferencia: 'Bienvenida activa, reconocimiento inmediato',
  },
  {
    momento: 'Tiempo de espera',
    dolor: 'Sin información, sin estimado de tiempo',
    diferencia: 'Actualizaciones proactivas, presencia visible',
  },
  {
    momento: 'Consulta médica',
    dolor: 'Lenguaje técnico, poco espacio para preguntas',
    diferencia: 'Comunicación clara, validación emocional',
  },
  {
    momento: 'Proceso de alta',
    dolor: 'Instrucciones confusas, sensación de abandono',
    diferencia: 'Cierre cálido, seguimiento comprometido',
  },
]

export default function S12_MomentosVerdad() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '52px 72px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1000px', width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            Momentos de verdad
          </span>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
            fontWeight: 400, color: 'white',
            lineHeight: 1.2, margin: '0.4rem 0 0',
          }}>
            Dónde duele y dónde marcas la diferencia.
          </h2>
          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginTop: '0.8rem' }} />
        </motion.div>

        {/* Tabla */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Encabezado */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1.4fr 2fr 2fr',
            padding: '0.7rem 1.4rem', gap: '1rem',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.04)',
          }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Momento
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#ff8a8a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Punto de dolor
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              La diferencia
            </div>
          </div>

          {/* Filas */}
          {momentos.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              style={{
                display: 'grid', gridTemplateColumns: '1.4fr 2fr 2fr',
                padding: '0.9rem 1.4rem', gap: '1rem',
                borderBottom: i < momentos.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                alignItems: 'center',
              }}
            >
              <div style={{
                fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.4,
              }}>
                {m.momento}
              </div>
              <div style={{
                fontSize: '0.8rem', color: 'rgba(255,100,100,0.75)',
                lineHeight: 1.5, fontStyle: 'italic',
              }}>
                {m.dolor}
              </div>
              <div style={{
                fontSize: '0.8rem', color: 'rgba(69,197,190,0.85)',
                lineHeight: 1.5,
              }}>
                {m.diferencia}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
