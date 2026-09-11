import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const contactos = [
  { num: '1', label: 'Primera llamada o búsqueda en internet' },
  { num: '2', label: 'Llegada al hospital' },
  { num: '3', label: 'Registro y admisión' },
  { num: '4', label: 'Sala de espera' },
  { num: '5', label: 'Consulta o procedimiento médico' },
  { num: '6', label: 'Enfermería y estudios' },
  { num: '7', label: 'Caja y trámites' },
  { num: '8', label: 'Alta y despedida' },
  { num: '9', label: 'Seguimiento post-atención' },
]

export default function S11b_PatientJourneyConcepto() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1.4fr',
      overflow: 'hidden',
    }}>
      {/* Left — dark, definición */}
      <div style={{
        background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '56px 52px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(69,197,190,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', zIndex: 1 }}>
          <motion.div {...fade(0.1)}>
            <div style={{ background: 'rgba(69,197,190,0.15)', border: '1px solid rgba(69,197,190,0.4)', borderRadius: '100px', padding: '0.3rem 1.1rem', fontSize: '0.68rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase', width: 'fit-content' }}>
              Concepto clave
            </div>
          </motion.div>

          <motion.h2 {...fade(0.2)} style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, color: 'white', lineHeight: 1.15, margin: 0 }}>
            ¿Qué es el{' '}
            <span style={{ color: '#45C5BE' }}>Patient Journey?</span>
          </motion.h2>

          <motion.div {...fade(0.3)}>
            <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px' }} />
          </motion.div>

          <motion.p {...fade(0.4)} style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
            Es el <strong style={{ color: 'white' }}>recorrido completo</strong> que vive un paciente desde el primer contacto con el hospital hasta después de recibir atención.
          </motion.p>

          <motion.p {...fade(0.5)} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
            No es solo "lo que hacemos" — es <strong style={{ color: '#45C5BE' }}>todo lo que el paciente siente, piensa y recuerda</strong> en cada punto de contacto con nosotros.
          </motion.p>

          <motion.div {...fade(0.65)}>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '0.9rem 1.2rem' }}>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>
                "La experiencia comienza antes de llegar y continúa mucho después de salir del hospital."
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right — light, puntos de contacto */}
      <div style={{ background: '#EEF2F7', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '48px 52px', gap: '1.4rem' }}>
        <div className="corner-accent" style={{ opacity: 0.5 }} />

        <motion.div {...fade(0.2)}>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Puntos de contacto
          </div>
          <p style={{ fontSize: '0.88rem', color: '#718096', margin: 0 }}>
            Cada uno es una oportunidad para generar confianza — o perderla.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
          {contactos.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'white', borderRadius: '10px',
                border: '1.5px solid rgba(69,197,190,0.2)',
                padding: '0.65rem 0.9rem',
                display: 'flex', alignItems: 'center', gap: '10px',
                boxShadow: '0 1px 6px rgba(12,45,78,0.06)',
              }}
            >
              <div style={{
                width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0,
                background: 'rgba(69,197,190,0.12)', border: '1.5px solid rgba(69,197,190,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE' }}>{c.num}</span>
              </div>
              <span style={{ fontSize: '0.78rem', color: '#2D3748', lineHeight: 1.35, fontWeight: 500 }}>{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
