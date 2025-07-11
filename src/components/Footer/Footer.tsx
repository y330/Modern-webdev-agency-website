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
                            <h2>World Peace Web Services</h2>
                        </div>
                    </Link>

                    <p>
                        We help your business thrive digitally. We will build you a website that enhances your presence on Google Maps and helps your business stand out locally.
                    </p>
                </div>
                <div className="links">
                    <h3>Navigation</h3>
                    <RouterLink to='/portfolio' variant='link'>Portfolio</RouterLink>
                    <RouterLink to='/pricing' variant='link'>Pricing</RouterLink>
                    <RouterLink to='/about' variant='link'>About Us</RouterLink>
                    <RouterLink to='/contact' variant='link'>Contact</RouterLink>
                </div>
                <div className="contacts">
                    <h3>Contact Us</h3>
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
            <p className='copyright'>Copyright © 2022 World Peace Web Services</p>
        </footer>
    )
}

export default Footer
