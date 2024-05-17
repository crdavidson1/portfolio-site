import logo from '../assets/Davidson ECM Logo.png'
import Background from './Background'
import Typewriter from 'typewriter-effect'

export default function Home() {
    return (
        <>
        <div style={{zIndex: '1000', position: 'relative', color:'black'}}>
            <Typewriter options={{
                string: ['Hello', 'World', '123',],
                autoStart: true,
                loop: true,
                delay: 100
            }}
            />
        </div>
        <div style={{paddingTop: '500px', zIndex: '1', position: 'absolute'}}>
        <Background></Background>
        </div>
        </>
    )
}