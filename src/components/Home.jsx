import logo from '../assets/Davidson ECM Logo.png'
import Background from './Background'
import Typewriter from 'typewriter-effect'
import Services from './Services'

export default function Home() {
    return (
        <>
        <div style={{zIndex: 1000,top: '150px', position: 'absolute', color:'black', fontSize: '70px', backgroundColor: 'white', width: '100%', textAlign: 'center'}}>
            <p style={{margin: '0'}}>Spring-IT Can Help You</p>
            <Typewriter 
            options={{
                strings: ['Build a Website', 'Example Service 2', 'Example Service 3'],
                autoStart: true,
                loop: true,
            }}
            />
        </div>
        <div style={{zIndex: 1, position: 'absolute'}}>
            <Background/>
        </div>
            <Services/>
        </>
    )
}