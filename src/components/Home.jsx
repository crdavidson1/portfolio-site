import logo from '../assets/Davidson ECM Logo.png'
import Background from './Background'
import Typewriter from 'typewriter-effect'

export default function Home() {
    return (
        <>
        <div style={{zIndex: '1000', position: 'relative', color:'black', fontSize: '70px'}}>
            <p>Spring-IT Can Help You</p>
            <Typewriter 
            options={{
                strings: ['Build a Website', 'Example Service 2', 'Example Service 3'],
                autoStart: true,
                loop: true,
            }}
            />
        </div>
        <div style={{paddingTop: '500px', zIndex: '1', position: 'absolute'}}>
        <Background></Background>
        </div>
        </>
    )
}