import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const tabla = [
  {
    evita: 'No sé',
    mejor: 'Permítame verificarlo de inmediato con el área correspondiente.',
  },
  {
    evita: 'Tiene que esperar',
    mejor: 'En cuanto tengamos información se la compartiré.',
  },
  {
    evita: 'Eso no me corresponde',
    mejor: 'Con gusto lo canalizo directamente con la persona indicada.',
  },
  {
    evita: 'Ya le expliqué',
    mejor: 'Permítame explicarlo de otra manera para asegurar que todo quede claro.',
  },
]

export default function S17_PoderPalabras() {
  return (
    <div className="slide" style={{ background: '#EEF2F7' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '920px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.75rem', zIndex: 1 }}>
        <motion.div {...fade(0.1)}>
          <h2 className="slide-title">El poder de las palabras</h2>
          <p style={{ fontSize: '1rem', color: '#718096', marginTop: '0.4rem' }}>
            La comunicación puede reducir la ansiedad.
          </p>
          <div className="teal-bar" style={{ marginTop: '0.75rem' }} />
        </motion.div>

        {/* Table header */}
        <motion.div {...fade(0.2)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{
            background: 'rgba(229,62,62,0.08)', borderRadius: '10px',
            padding: '0.6rem 1rem', textAlign: 'center',
            fontSize: '0.72rem', fontWeight: 700, color: 'rgba(229,62,62,0.8)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Evita decir
          </div>
          <div style={{
            background: 'rgba(69,197,190,0.1)', borderRadius: '10px',
            padding: '0.6rem 1rem', textAlign: 'center',
            fontSize: '0.72rem', fontWeight: 700, color: '#2BA8A2',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Mejor di
          </div>
        </motion.div>

        {/* Table rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {tabla.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'stretch' }}
            >
              <div style={{
                background: 'rgba(229,62,62,0.06)', borderRadius: '12px',
                padding: '0.9rem 1.1rem', border: '1px solid rgba(229,62,62,0.15)',
                fontSize: '0.92rem', color: '#2D3748', lineHeight: 1.5, fontStyle: 'italic',
              }}>
                "{row.evita}"
              </div>
              <div style={{
                background: 'rgba(69,197,190,0.08)', borderRadius: '12px',
                padding: '0.9rem 1.1rem', border: '1px solid rgba(69,197,190,0.2)',
                fontSize: '0.92rem', color: '#0C2D4E', lineHeight: 1.5, fontWeight: 500,
              }}>
                "{row.mejor}"
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
