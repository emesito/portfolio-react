import { useState } from 'react'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './design.css'

function Description({ id }) {
    

    const handleAnimation = () => {

        const dsTitle = document.querySelector('.ds-title')
        const fsContainerHeight = document.querySelector('.fs-container').offsetTop

        const scrollY = window.scrollY

        const fsHeightScale = fsContainerHeight * 0.25
        const fsHeightScaleOpacity = fsContainerHeight * 0.55

        const maxTop = 15

        // const scrollValue = scrollY / fsHeightScale

        const scrollValueScaledDown = (scrollY / fsHeightScaleOpacity) - 0.5

        const scrollValueScaled = (scrollY / fsHeightScale) * 5

        const calcScroll = maxTop - scrollValueScaled

        dsTitle.style.top = `${Math.max(calcScroll, 0)}rem`
        dsTitle.style.opacity = scrollValueScaledDown

        // const initialOffset = fsContainerHeight

        // const scaleFactor = 0.05
        // const offsetScale = scrollY - (scrollY * scaleFactor)

        // // console.log(scrollY, offsetScale)

        // const minHeight = 30 // Change this to the minimum height you want for fs-container in vh units

        // const newHeight = Math.max(initialOffset - scrollY, minHeight);
        // fsContainer.style.height = `${newHeight}dvh`;

        // dsTitle.style.animation = `${newFontSize}rem`;

        // console.log(scrollY, fsContainerHeight)

        // console.log(`scroll Y: ${scrollY}, Container Height: ${fsHeightScaleOpacity}, scroll value: ${scrollValueScaledDown}`)

    }

    window.addEventListener('scroll', handleAnimation)

    return (
        <div id={id}>
            <div className='fs-container'>
                <h2 className='ds-title'>Acerca de Mí</h2>
            </div>
            <div className='ds-container div-width'>
                <section className='ds-fds ds-padding'>
                    <p>Mi nombre es Miguel Ruz, soy egresado de Analista Programador en INACAP la cual
                        me brindo habilidades sólidas de fundamentos de programación, en donde me incline
                        por el desarrollo de front-end en donde constantemente estoy mejorando mis habilidades
                        en esta área.
                    </p>
                </section>
                <section className='ds-skls ds-padding'>
                    <article className='ds-ls sft-ls'>
                        <h4>Habilidades <code>Blandas</code></h4>
                        <ul>
                            <li>Comunicación</li>
                            <li>Autodidacta</li>
                            <li>Colaborador</li>
                        </ul>
                    </article>
                    <article className='ds-ls hrd-ls'>
                        <h4>Habilidades <code>Duras</code></h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Django</li>
                        </ul>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Description