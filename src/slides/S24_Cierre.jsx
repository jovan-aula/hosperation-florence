import { motion } from 'framer-motion'

export default function S24_Cierre() {
  const url = 'https://hosperation-florence.vercel.app/encuesta.html'
  const qr = 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&color=45C5BE&bgcolor=081e35&data=' + encodeURIComponent(url)

  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
    }}>

      {/* Izquierda — reflexión */}
      <div style={{
        background: 'linear-gradient(160deg, #081e35 0%, #0C2D4E 100%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '60px 56px', gap: '2.4rem',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid de fondo */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px', pointerEvents: 'none',
        }} />

        {/* Logo o label */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            Experiencia del paciente
          </span>
        </motion.div>

        {/* Frase principal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 400, color: 'white',
            lineHeight: 1.25, margin: 0,
          }}>
            La experiencia del paciente<br />
            no la construye una persona.
          </h2>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px' }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 400, color: '#45C5BE',
            lineHeight: 1.25, margin: 0,
          }}
        >
          La construye un equipo<br />
          que decidió hacerlo bien.
        </motion.h2>

        {/* Crédito taller */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          style={{
            fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)',
            lineHeight: 1.6, margin: 0,
          }}
        >
          Taller de Experiencia del Paciente · Hospital Florence · Hosperation
        </motion.p>
      </div>

      {/* Derecha — QR evaluación */}
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        borderLeft: '1px solid rgba(69,197,190,0.1)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '60px 56px', gap: '2rem',
        background: 'linear-gradient(160deg, #0a1f35 0%, #0e2d4a 100%)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.6rem' }}
        >
          <span style={{
            background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)',
            borderRadius: '100px', padding: '0.3rem 1.2rem',
            fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            Antes de salir
          </span>

          <div>
            <h3 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 400, color: 'white',
              lineHeight: 1.2, margin: '0 0 0.5rem',
            }}>
              Evalúa la sesión
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>
              6 preguntas · menos de 2 minutos · anónimo
            </p>
          </div>

          {/* QR */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1.5px solid rgba(69,197,190,0.25)',
            borderRadius: '20px', padding: '24px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px',
          }}>
            <img src={qr} alt="QR Encuesta" width={200} height={200} style={{ borderRadius: '8px', display: 'block' }} />
            <p style={{
              fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              margin: 0, textAlign: 'center',
            }}>
              hosperation-florence.vercel.app
            </p>
          </div>

          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            Gracias por participar.
          </p>
        </motion.div>
      </div>

    </div>
  )
}
