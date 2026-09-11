import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S28_Encuesta() {
  const url = 'https://hosperation-florence.vercel.app/encuesta.html'
  const qr = 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&color=45C5BE&bgcolor=081e35&data=' + encodeURIComponent(url)

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(160deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 80px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: '860px', width: '100%', display: 'flex', alignItems: 'center', gap: '80px' }}>

        <motion.div {...fade(0.1)} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          <div style={{ background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px', padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase', width: 'fit-content' }}>
            Antes de salir
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: 'white', lineHeight: 1.15, margin: 0 }}>
            Evalúa la sesión
          </h2>

          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px' }} />

          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
            Tu retroalimentación nos ayuda a mejorar cada sesión. Son 6 preguntas, toma menos de 2 minutos.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {['Escanea el código QR con tu celular', 'Responde las 6 preguntas de forma anónima', 'Envía antes de salir del salón'].map((paso, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(69,197,190,0.15)', border: '1.5px solid rgba(69,197,190,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#45C5BE' }}>{i + 1}</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', margin: 0 }}>{paso}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(69,197,190,0.25)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <img src={qr} alt="QR Encuesta" width={220} height={220} style={{ borderRadius: '8px', display: 'block' }} />
            <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0, textAlign: 'center' }}>
              hosperation-florence.vercel.app
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
