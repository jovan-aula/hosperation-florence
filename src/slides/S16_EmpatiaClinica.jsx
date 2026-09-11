import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S16_EmpatiaClinica() {
  return (
    <div className="slide" style={{ background: '#EEF2F7' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '920px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)} style={{ textAlign: 'center' }}>
          <h2 className="slide-title">Empatía clínica</h2>
          <div style={{ width: '60px', height: '3px', background: '#45C5BE', borderRadius: '2px', margin: '1rem auto 0' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {/* NO es */}
          <motion.div {...fade(0.25)} style={{
            background: 'rgba(229,62,62,0.07)', borderRadius: '20px', padding: '2rem',
            border: '2px solid rgba(229,62,62,0.2)',
            display: 'flex', flexDirection: 'column', gap: '1rem',
          }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(229,62,62,0.8)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Empatía NO es
            </div>
            {['Sentir lástima', 'Dar siempre la razón', 'Prometer lo imposible'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(229,62,62,0.15)', border: '1.5px solid rgba(229,62,62,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="rgba(229,62,62,0.8)" strokeWidth="2.5" strokeLinecap="round"/></svg>
                </div>
                <span style={{ fontSize: '0.95rem', color: '#2D3748' }}>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* SI es */}
          <motion.div {...fade(0.35)} style={{
            background: 'rgba(69,197,190,0.1)', borderRadius: '20px', padding: '2rem',
            border: '2px solid rgba(69,197,190,0.35)',
            display: 'flex', flexDirection: 'column', gap: '1rem',
          }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#2BA8A2', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Empatía SI es
            </div>
            {['Comprender', 'Reconocer emociones', 'Comunicar con respeto', 'Acompañar con claridad'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(69,197,190,0.2)', border: '1.5px solid rgba(69,197,190,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="#45C5BE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ fontSize: '0.95rem', color: '#0C2D4E', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
