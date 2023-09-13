import { useEffect, useState } from "react"

function Navbar({ handleScroll }) {

    const [isExpanded, setIsExpanded] = useState(false)
    const [squareNav, setSquareNav] = useState()
    const [ulElement, setUlElement] = useState()
    const [rectNav, setRectNav] = useState()


    // console.log(squareNav)

    // const squareNav = document.getElementsByTagName('nav')[0]
    // const squareContainer = document.querySelector('.nav-container')
    // const ulElement = document.getElementsByTagName('ul')[0]
    // const hamburgerContainer = document.querySelector('.hamburger-icon')
    // const rectNav = document.querySelectorAll('.rect-dimensions')

    useEffect(() => {
        setSquareNav(document.getElementsByTagName('nav')[0])
        setUlElement(document.getElementsByTagName('ul')[0])
        setRectNav(document.querySelectorAll('.rect-dimensions'))
    }, [])

    const clickedNav = () => {

        setIsExpanded((isExpanded) => !isExpanded)


        if (isExpanded) {

            ulElement.classList.toggle('hidden')

            squareNav.classList.toggle('nav-expanded')

            rectNav[0].classList.toggle('rotation-top')
            rectNav[1].classList.toggle('hidden')
            rectNav[2].classList.toggle('rotation-bottom')
        }
        else {
            setTimeout(() => {
                ulElement.classList.toggle('hidden')
            }, 200)

            squareNav.classList.toggle('nav-expanded')

            rectNav[0].classList.toggle('rotation-top')
            rectNav[1].classList.toggle('hidden')
            rectNav[2].classList.toggle('rotation-bottom')
        }

    }

    document.addEventListener('DOMContentLoaded', () => {
        const mouseCustom = document.querySelector('.custom-cursor')

        const mouseHandler = (e) => {
            const mouseX = e.pageX
            const mouseY = e.pageY

            mouseCustom.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`
        }

        window.addEventListener('mousemove', mouseHandler)

        const growCustom = () => {
            mouseCustom.classList.toggle('cursor-grow')
        }
        
    })

    const growCustom = () => {
        
    }

    return (<>
        <div className='custom-cursor'></div>
        <nav className="hover-thing">
            <div className="hamburger-icon" onMouseEnter={growCustom} onMouseLeave={growCustom} onClick={clickedNav}>
                <div className="rect-dimensions"></div>
                <div className="rect-dimensions"></div>
                <div className="rect-dimensions"></div>
            </div>
            <ul className="hidden">
                <li className="mn-lst" onMouseEnter={growCustom} onMouseLeave={growCustom} onClick={() => handleScroll('introduction')}>Home</li>
                <li className="mn-lst" onMouseEnter={growCustom} onMouseLeave={growCustom} onClick={() => handleScroll('description')}>Description</li>
                <li className="mn-lst" onMouseEnter={growCustom} onMouseLeave={growCustom} onClick={() => handleScroll('contact')}>Contact</li>
            </ul>
        </nav>
    </>
    )
}

export default Navbar