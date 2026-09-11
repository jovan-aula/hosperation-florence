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
import S07 from './slides/S07_PivotPaciente'
import S08 from './slides/S08_ServicioVsExperiencia'
import S09 from './slides/S09_VulnerabilidadPaciente'
import S10 from './slides/S10_QuienesSon'
import S11b from './slides/S11b_PatientJourneyConcepto'
import S11 from './slides/S11_ViajeDelPaciente'
import S12 from './slides/S12_MomentosVerdad'
import S13 from './slides/S13_QueEvalua'
import S14 from './slides/S14_GuiaCiegaInstrucciones'
import S15 from './slides/S15_GuiaCiegaDebriefing'
import S16 from './slides/S16_EmpatiaClinica'
import S17 from './slides/S17_PoderPalabras'
import S18 from './slides/S18_InformarVsComunicar'
import S19 from './slides/S19_Regla3Pasos'
import S20 from './slides/S20_EsperaExperiencia'
import S21 from './slides/S21_MetodoFlorence'
import S22 from './slides/S22_TorreInstrucciones'
import S23 from './slides/S23_TorreDebriefing'
import S24 from './slides/S24_PatientCentric'
import S25 from './slides/S25_PequenosDetalles'
import S26 from './slides/S26_ReflexionFinal'
import S27 from './slides/S27_PortadaCierre'

const slides = [
  S01, S03, S04,
  S05, S06, S07,
  S08, S09, S10, S11b, S11, S12, S13,
  S14, S15,
  S16, S17, S18, S19, S20, S21,
  S22, S23,
  S24, S25, S26, S27,
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
