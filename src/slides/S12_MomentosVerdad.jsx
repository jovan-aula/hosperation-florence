import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const momentos = [
  'Primera llamada',
  'Llegada',
  'Registro',
  'Espera',
  'Consulta médica',
  'Habitación',
  'Alta',
  'Seguimiento',
]

export default function S12_MomentosVerdad() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
    }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <div style={{ maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <h2 className="slide-title slide-title--white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}>
            Los momentos de la verdad
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>
            Cada contacto crea una percepción
          </p>
          <div style={{ width: '50px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginTop: '1rem' }} />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'absolute', top: '24px', left: '24px', right: '24px',
              height: '2px', background: 'linear-gradient(90deg, #45C5BE, rgba(69,197,190,0.4))',
              transformOrigin: 'left', borderRadius: '2px',
            }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            {momentos.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}
              >
                {/* Dot */}
                <div style={{
                  width: '12px', height: '12px', borderRadius: '50%',
                  background: '#45C5BE', border: '2px solid #0C2D4E',
                  boxShadow: '0 0 8px rgba(69,197,190,0.6)',
                  zIndex: 1, position: 'relative',
                }} />
                {/* Label */}
                <div style={{
                  background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(69,197,190,0.2)',
                  borderRadius: '8px', padding: '0.5rem 0.6rem',
                  fontSize: 'clamp(0.62rem, 0.9vw, 0.78rem)', color: 'rgba(255,255,255,0.8)',
                  fontWeight: 500, textAlign: 'center', lineHeight: 1.35,
                }}>
                  {m}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div {...fade(0.9)}>
          <div style={{
            background: 'rgba(69,197,190,0.1)', border: '1px solid rgba(69,197,190,0.25)',
            borderRadius: '12px', padding: '1rem 1.5rem', textAlign: 'center',
          }}>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', margin: 0, fontStyle: 'italic' }}>
              "Cada interacción es una oportunidad para generar confianza."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
