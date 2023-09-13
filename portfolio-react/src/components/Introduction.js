import { useEffect, useRef, useState } from 'react';
import './design.css';

function Introduction({ id }) {

  const [points, setPoints] = useState([])
  // const [itrTitle, setItrTitle] = useState()
  const itrTitleRef = useRef(null)
  const itrParRef = useRef(null)
  const introContentRef = useRef(null)

  useEffect(() => {

    const pointsLenght = Math.round(Math.random() * (35 - 30) + 30)
    const newPoints = []

    for (let i = 0; i < pointsLenght; i++) {

      const delay = (Math.random() * (1000 - 700) + 700)
      const number = (Math.random() * 7) + 1
      const randomCoordX = Math.random() * 100
      const randomCoordY = Math.random() * 100

      newPoints.push({
        delay: delay,
        width: number,
        coordX: randomCoordX,
        coordY: randomCoordY
      })

    }

    setPoints(newPoints)

    const itrTitle = itrTitleRef.current
    const parTitle = itrParRef.current
    const introContent = introContentRef.current

    // console.log(itrTitle.offsetTop)

    const handleIntro = () => {
      const scrollIndex = window.scrollY

      const titleOS = -((scrollIndex / itrTitle.offsetTop) - 1)
      const parOS = -((scrollIndex / parTitle.offsetTop) - 1)
      const contentOS =  -((scrollIndex / parTitle.offsetTop) - 1)

      // console.log(scrollIndex, titleOS)

      itrTitle.style.opacity = titleOS
      parTitle.style.opacity = parOS
      introContent.style.opacity = contentOS

      // console.log(titleOS)
    }

    window.addEventListener('scroll', handleIntro)

  }, [])


  return (
    <>
      <div id={id} className='div-padding'>
        {
          points.map(point => {
            return (
              <>
                <div className='pop-points' style={{
                  width: point.width + 'px',
                  height: point.width + 'px',
                  top: point.coordY + 'dvh',
                  left: point.coordX + 'dvw',
                  animationDuration: point.delay + 'ms'
                }}></div>
              </>
            )
          })
        }
        <div className='intro-div div-width'>
          <section className='intro-content' ref={introContentRef}>
            <h1 className='itr-title' ref={itrTitleRef}>Hola, soy Miguel Ruz</h1>
            <p className='itr-par' ref={itrParRef}>Persiguiendo el sueño de ser front-end developer.</p>
          </section>
          <section className='intro-photo'>
            <figure>
              <img></img>
            </figure>
          </section>
        </div>
      </div>
    </>
  );
}

export default Introduction;