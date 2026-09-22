import { motion } from 'framer-motion'

const elementos = [
  {
    objeto: 'Radiografías expuestas',
    emocion: 'Angustia anticipatoria',
    detalle: 'Ver imágenes médicas sin contexto activa el miedo antes de cualquier explicación.',
    fuente: 'Ulrich et al. — Health Environments Research & Design Journal, 2008',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
  },
  {
    objeto: 'Instrumental quirúrgico visible',
    emocion: 'Vulnerabilidad',
    detalle: 'Una charola con instrumentos genera tensión aunque el procedimiento sea menor.',
    fuente: 'Campos et al. — Patient Education and Counseling, 2014',
    img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=600&q=80',
  },
  {
    objeto: 'Camilla sin sabana limpia',
    emocion: 'Desconfianza',
    detalle: 'El paciente asocia el desorden con descuido — dentro y fuera del proceso clínico.',
    fuente: 'The Beryl Institute — Patient Experience Report, 2021',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
  },
  {
    objeto: 'Pasillos con equipo abandonado',
    emocion: 'Desorientación',
    detalle: 'Un entorno caótico comunica que nadie está a cargo, aunque sí lo estén.',
    fuente: 'Zimring & Bosch — American Journal of Infection Control, 2008',
    img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80',
  },
]

export default function S19c_EntornoExperiencia() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#EEF2F7',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '40px 72px', position: 'relative', overflow: 'hidden',
    }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '1060px', width: '100%', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#2BA8A2',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            El entorno también comunica
          </span>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
            fontWeight: 400, color: '#0C2D4E',
            lineHeight: 1.2, margin: '0.4rem 0 0',
          }}>
            La infraestructura genera experiencia antes de que alguien hable.
          </h2>
          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginTop: '0.7rem' }} />
        </motion.div>

        {/* Grid 4 tarjetas con imagen */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.9rem' }}>
          {elementos.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(12,45,78,0.09)',
                display: 'flex', flexDirection: 'column',
              }}
            >
              {/* Imagen */}
              <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={e.img}
                  alt={e.objeto}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Overlay con emoción */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(12,45,78,0.75) 0%, transparent 55%)',
                }} />
                <span style={{
                  position: 'absolute', bottom: '10px', left: '12px',
                  fontSize: '0.68rem', fontWeight: 700, color: '#ff9a9a',
                  background: 'rgba(197,48,48,0.25)',
                  border: '1px solid rgba(255,120,120,0.3)',
                  borderRadius: '100px', padding: '2px 10px',
                  backdropFilter: 'blur(4px)',
                }}>
                  {e.emocion}
                </span>
              </div>

              {/* Texto */}
              <div style={{ padding: '1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0C2D4E', margin: 0, lineHeight: 1.3 }}>
                  {e.objeto}
                </p>
                <p style={{ fontSize: '0.75rem', color: '#718096', margin: 0, lineHeight: 1.55 }}>
                  {e.detalle}
                </p>
                <p style={{ fontSize: '0.62rem', color: 'rgba(12,45,78,0.3)', margin: '4px 0 0', lineHeight: 1.4, fontStyle: 'italic' }}>
                  {e.fuente}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cierre */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{
            background: '#0C2D4E', borderRadius: '12px',
            padding: '0.9rem 1.4rem',
            display: 'flex', alignItems: 'center', gap: '1rem',
          }}
        >
          <div style={{ width: '4px', height: '32px', background: '#45C5BE', borderRadius: '2px', flexShrink: 0 }} />
          <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
            El paciente no distingue entre lo clínico y lo ambiental — todo forma parte de la misma experiencia.
          </p>
        </motion.div>

      </div>
    </div>
  )
}
