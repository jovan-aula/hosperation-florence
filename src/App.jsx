import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import SlideWrapper from './components/SlideWrapper'
import Navigation from './components/Navigation'
import './index.css'

import S01 from './slides/S01_Portada'
import S03 from './slides/S03_ReglaDelJuego'
import S04 from './slides/S04_Objetivos'
import S05 from './slides/S05_QRRestaurante'
import S06 from './slides/S06_LluviaDisplay'
import S06b from './slides/S06b_QuePasaSiFalla'
import S07 from './slides/S07_PivotPaciente'
import S08a from './slides/S08a_ServicioDistincion'
import S08b from './slides/S08b_ServicioEmociones'
import S08c from './slides/S08c_ServicioEjemplos'
import S09 from './slides/S09_VulnerabilidadPaciente'
import S10 from './slides/S10_QuienesSon'
import S11b from './slides/S11b_PatientJourneyConcepto'
import S11 from './slides/S11_ViajeDelPaciente'
import S12 from './slides/S12_MomentosVerdad'
import S13 from './slides/S13_QueEvalua'
import S14 from './slides/S14_GuiaCiegaInstrucciones'
import S15 from './slides/S15_GuiaCiegaDebriefing'
import S15b from './slides/S15b_PuenteEmpatia'
import S16 from './slides/S16_EmpatiaClinica'
import S17 from './slides/S17_PoderPalabras'
import S18 from './slides/S18_InformarVsComunicar'
import S19 from './slides/S19_Regla3Pasos'
import S19b from './slides/S19b_PuenteEspera'
import S19c from './slides/S19c_EntornoExperiencia'
import S20 from './slides/S20_EsperaExperiencia'
import S21b from './slides/S21b_PuenteTorre'
import S22 from './slides/S22_TorreInstrucciones'
import S23 from './slides/S23_TorreDebriefing'
import S24 from './slides/S24_Cierre'

const slides = [
  S01, S03, S04,
  S05, S06, S06b, S07,
  S08a, S08b, S08c, S09, S10, S11b, S11, S12, S13,
  S14, S15, S15b,
  S16, S17, S18, S19, S19b, S20, S19c,
  S21b, S22, S23,
  S24,
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goNext = useCallback(() => {
    if (current < slides.length - 1) { setDirection(1); setCurrent(c => c + 1) }
  }, [current])

  const goPrev = useCallback(() => {
    if (current > 0) { setDirection(-1); setCurrent(c => c - 1) }
  }, [current])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); goNext() }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); goPrev() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev])

  const SlideComponent = slides[current]

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', background: '#0C2D4E' }}>
      <AnimatePresence mode="wait" custom={direction}>
        <SlideWrapper key={current} direction={direction}>
          <SlideComponent />
        </SlideWrapper>
      </AnimatePresence>
      <Navigation current={current} total={slides.length} onPrev={goPrev} onNext={goNext} />
    </div>
  )
}
