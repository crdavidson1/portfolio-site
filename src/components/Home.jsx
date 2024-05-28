import logo from '../assets/Davidson ECM Logo.png'
import Background from './Background'
import Typewriter from 'typewriter-effect'
import Services from './Services'
import Portfolio from './Portfolio'
import Header from './Header'
import '../css/Home.css'
import { useRef } from 'react'
import About from './About'


export default function Home() {
    const services = useRef()
    const portfolio = useRef()
    const about = useRef()

    const scrollHandler = (elmRef) => {
        window.scrollTo({top: elmRef.current.offsetTop, behavior: "smooth"})
    }

    return (
        <>
        <Header services={services} portfolio={portfolio} about={about}/>
        <div className='typewriter' style={{zIndex: 1000,top: '250px', position: 'absolute', color:'black', fontSize: '70px', width: '100%', textAlign: 'center'}}>
            <p style={{margin: '0'}}>Spring-IT Can Help You</p>
            <Typewriter 
            options={{
                strings: ['Build a Website', 'Example Service 2', 'Example Service 3'],
                autoStart: true,
                loop: true,
            }}
            />
        </div>
        <div style={{zIndex: 1}}>
            <Background/>
        </div>
        <div>
            <Services/>
            <Portfolio/>
            <About/>
        </div>
        </>
    )
}