import './Footer.scss'
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { Anchor, RouterLink } from '../Buttons'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="upper">
                <div className="info">
                    <Link style={{ textDecoration: "none" }} to="/">
                        <div className="logo">
                            <img src='/Images/Logo.webp' alt='' />
                            <h2>Yonah Aviv</h2>
                        </div>
                    </Link>

                    <p>
                        I craft premium, cinematic web experiences that elevate modern brands. Through a blend of high-end design and creative technology, I transform digital visions into immersive realities.
                    </p>
                </div>
                <div className="links">
                    <h3>Navigation</h3>

                    <RouterLink to='/start' variant='link'>Get Started</RouterLink>
                    <RouterLink to='/portfolio' variant='link'>Portfolio</RouterLink>
                    {/* <RouterLink to='/pricing' variant='link'>Pricing</RouterLink> */}
                    <RouterLink to='/about' variant='link'>About</RouterLink>
                    <RouterLink to='/connect' variant='link'>Connect</RouterLink>
                </div>
                <div className="contacts">
                    <h3>Contact Me</h3>
                    <div className="email">
                        <div className="icon">
                            <MdEmail size={20} color="#ccc" />
                        </div>
                        <div>
                            <h4>Email:</h4>
                            <Anchor href='mailto:avivyonah@gmail.com' variant='link'>avivyonah@gmail.com</Anchor>
                        </div>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <p className='copyright'>Copyright © 2026 Yonah Aviv</p>
        </footer>
    )
}

export default Footer
