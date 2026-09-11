import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S18_InformarVsComunicar() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
    }}>
      {/* Left — Informar */}
      <motion.div
        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', padding: '60px 56px', gap: '1.5rem',
          position: 'relative', overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

        <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px',
            padding: '0.3rem 1rem', fontSize: '0.72rem', fontWeight: 700,
            color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase',
            width: 'fit-content',
          }}>
            Informar
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '14px', padding: '1.25rem 1.5rem',
          }}>
            <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.4rem', color: 'white', margin: 0, lineHeight: 1.4 }}>
              "Su médico llega a las 5."
            </p>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.65 }}>
            Solo transmite un dato. No genera certeza ni reduce la ansiedad.
          </p>
        </div>
      </motion.div>

      {/* Right — Comunicar */}
      <motion.div
        initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: '#EEF2F7',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', padding: '60px 56px', gap: '1.5rem',
          position: 'relative', overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(69,197,190,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(69,197,190,0.15)',
            border: '1px solid rgba(69,197,190,0.4)', borderRadius: '100px',
            padding: '0.3rem 1rem', fontSize: '0.72rem', fontWeight: 700,
            color: '#2BA8A2', letterSpacing: '0.1em', textTransform: 'uppercase',
            width: 'fit-content',
          }}>
            Comunicar
          </div>

          <div style={{
            background: 'white', borderRadius: '14px', padding: '1.25rem 1.5rem',
            boxShadow: '0 4px 20px rgba(12,45,78,0.1)',
            borderLeft: '4px solid #45C5BE',
          }}>
            <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.15rem', color: '#0C2D4E', margin: 0, lineHeight: 1.5, fontStyle: 'italic' }}>
              "Su médico tiene prevista su visita alrededor de las 5. Si existe algún cambio, se lo haremos saber de inmediato."
            </p>
          </div>

          <p style={{ fontSize: '0.92rem', color: '#45C5BE', margin: 0, lineHeight: 1.5, fontWeight: 600 }}>
            Comunicar genera certeza y acompañamiento.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
