import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subcription">
                <p className="footer-subcription-heading">
                    Join the  Adventure newsletter to recive our best vacation deals
                </p>
                <p className="footer-subcription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input tipe="email" name="email" placeholder="Your Email" className="footer-imput" />
                     <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className='footer-link-wrapper'>
                    <div className='foter-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Carrers</Link>
                        <Link to='/'>Investor</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='foter-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destination</Link>
                        <Link to='/'>Sponsorship</Link>
                    </div>
                    <div className='foter-link-items'>
                        <h2>Videos</h2>
                        <Link to='/sign-up'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='foter-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Toutube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                      <Link to='/' className="social-logo">
                          TRVL <i className="fab fa-typo3"></i>
                      </Link>
                    </div>
                    <small className="website-rigths">TRVL 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to='/'
                        targe='_blank'
                        aria-label='Facebook'
                        >
                        <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagrand"
                        to='/'
                        targe='_blank'
                        aria-label='Instagrand'
                        >
                        <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                        to='/'
                        targe='_blank'
                        aria-label='Youtube'
                        >
                        <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to='/'
                        targe='_blank'
                        aria-label='Twitter'
                        >
                        <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkendi"
                        to='/'
                        targe='_blank'
                        aria-label='LinkedIn'
                        >
                        <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
