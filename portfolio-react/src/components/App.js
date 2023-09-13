import Description from './Description';
import Contact from './Contact';
import Navbar from './Navbar';
import Introduction from './Introduction';

function App() {

    const handleScroll = (sectionid) => {
        const section = document.getElementById(sectionid)
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            })
        }
    }

    return (
        <>
            <div className='mesh-container'>
                <div className='mesh-properties'></div>
                <Navbar handleScroll={handleScroll} />
                <Introduction id='introduction' />
                <Description id='description' />
            </div>
            <Contact id='contact' />
        </>
    )
}

export default App