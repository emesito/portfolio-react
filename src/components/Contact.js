import { createElement, useEffect, useState } from 'react'
import './design.css'

function Contact({ id }) {

    const [circles, setCircles] = useState([])
    const [linkText, setLinkText] = useState('')

    const handleClick = (e) => {
        // console.log(e)
        // console.log(e.pageY)
        // console.log(e.pageX)

        setCircles([...circles, {
            x: e.clientX,
            y: e.clientY
        }])
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (circles.length > 0) {
                const newCircles = [...circles]
                newCircles.shift()
                setCircles(newCircles)
            }
        }, 3000)

        return () => clearInterval(interval)

    }, [circles])

    function testElement(event) {

        const htmlElement = event.target
        const htmlText = event.target.innerHTML
        setLinkText(htmlText)
        const textArray = htmlText.split('')

        // console.log(htmlText.length)

        // console.log(textArray)

        htmlElement.innerHTML = ''

        for (let i = 0; i < htmlText.length; i++) {

            const randX = (Math.random() * (5 - 25) + 5)
            const randY = (Math.random() * (5 - 25) + 5)
            const randDeg = (Math.random() * (-8 - 8) + 8)

            const span = document.createElement('span')
            span.innerHTML = textArray[i]

            // span.classList.add(`transform-${i}`)

            span.style.transform = `translate(${randX}%, ${randY}%) rotate(${randDeg}deg)`

            event.target.appendChild(span)

        }

    }

    function revertEffect(event) {
        // console.log(linkText)
        const htmlElement = event.target
        htmlElement.innerHTML = linkText
    }

    // console.log(circles)

    return (
        <div id={id} className='div-padding border-thingy grn-fx'>
            <div className='carousel-container'>
                <div className='carousel-content'>
                    <div className='infinite-carousel'>
                        <h1>Contacto</h1>
                        <h1>Contacto</h1>
                        <h1>Contacto</h1>
                        <h1>Contacto</h1>
                    </div>
                    <div className='infinite-carousel'>
                        <h1>Contacto</h1>
                        <h1>Contacto</h1>
                        <h1>Contacto</h1>
                        <h1>Contacto</h1>
                    </div>
                    <div className='infinite-carousel'>
                        <h1>Contacto</h1>
                        <h1>Contacto</h1>
                        <h1>Contacto</h1>
                        <h1>Contacto</h1>
                    </div>
                </div>
            </div>
            <div className='contact-container' onClick={handleClick}>
                <div className='div-padding'>
                    {circles.map(circle => {
                        return (
                            <>
                                <div className='circle-circlely' style={{
                                    left: (circle.x) + 'px',
                                    top: (circle.y) + 'px',
                                    position: 'absolute'
                                }}></div>
                            </>
                        )
                    })}
                    <div className='ct-cta'>
                        <div className='ct-text'>
                            <h3>Pongámonos en contacto!</h3>
                        </div>
                        <div className='ct-links'>
                            <div className='flex-space ct-links-name'>
                                <p className='word'>Miguel</p>
                                <p className='word'>Ruz</p>
                            </div>
                            <div className='flex-space ct-links-socials'>
                                <p className='word'>Links</p>
                                <p className='word'>Contacto</p>
                            </div>
                            <div className='flex-space ct-links-word'>
                                <a id='mail' onMouseEnter={testElement} onMouseLeave={revertEffect} className='word fancy mail' href='mailto:mi.ruzbaez@gmail.com'>Email</a>
                                <a id='linkedin' onMouseEnter={testElement} onMouseLeave={revertEffect} className='word fancy linkedin' href='https://www.linkedin.com/in/miguel-ruz-baez-a0148b286'>Linkedin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;