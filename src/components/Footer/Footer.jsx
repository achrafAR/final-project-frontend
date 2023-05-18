import React, { useState } from 'react';
import './footer.css'
import facebook from '../../icons/facebook.png'
import instagram from '../../icons/instagram.png'
import youtube from '../../icons/youtube.png'
import twitter from '../../icons/twitter.png'
import template from '../../icons/template.svg'
import mobile from '../../icons/mobile-phone.png'
import phone from '../../icons/telephone.png'
import pin from '../../icons/pin.png'


function Footer() {

    const navbar = [
        { name: "HOME", link: "/" },
        { name: "OFFERS", link: "/" },
        { name: "ABOUT US", link: "/" },
        { name: "CONTACT US", link: "/" },
        { name: "GALLERY", link: "/" },
    ];
    const socialMedia = [
        { name: "Facebook", link: "/", icon: instagram },
        { name: "Instagram", link: "/", icon: facebook },
        { name: 'twitter', link: '/', icon: youtube },
        { name: 'twitter', link: '/', icon: twitter }

    ]

    return (
        <div className="footer">
            <div className='footer_container'>
                <div className='footer_container_header'>
                    <div className="footer_container_header_nav">
                        {navbar.map((item, index) => (
                            <div key={index} className="footer_container_header_nav_item">
                                <a href={item.link}>{item.name}</a>
                            </div>
                        ))}
                    </div>
                    <nav className="nav">
                        <h4 className="sm-header">Follow us on</h4>
                        <div className="line"></div>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="#" className="nav-link"><img src={instagram} /></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link"><img src={facebook} /></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link"><img src={youtube} /></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link"><img src={twitter} /></a>
                            </li>
                            
                        </ul>
                    </nav>

                </div>

            </div>
            <div className='footer_and_link'>
                <div className='footer_footer'>
                    <div className='footer_footer_column'>
                        <div className='footer_footer_link'>
                            <h5>Rafting Links</h5>
                            <ul>
                                <li><a href='www.google.com'>link</a></li>
                                <li><a href='www.google.com'>link</a></li>
                                <li><a href='www.google.com'>link</a></li>
                            </ul>
                        </div>
                        <div className='achivments'>
                            <h5>Achivments</h5>
                            <p>Massa sed elementum tempus egestas sed sed risus at ultrices mi tempus imperdiet nulla.</p>
                        </div>
                    </div>

                    <div className='footer_footer_column'>
                        <div className='footer_footer_link'>
                            <h5>Rafting Links</h5>
                            <ul>
                                <li><a href='www.google.com'>link</a></li>
                                <li><a href='www.google.com'>link</a></li>
                                <li><a href='www.google.com'>link</a></li>
                            </ul>
                        </div>
                        <div className='achivments'>
                            <h5>Achivments</h5>
                            <p>Massa sed elementum tempus egestas sed sed risus at ultrices mi tempus imperdiet nulla.</p>
                        </div>
                    </div>
                    <div className='footer_footer_column'>
                        <div className='footer_footer_link'>
                            <h5>Rafting Links</h5>
                            <ul>
                                <li><a href='www.google.com'>link</a></li>
                                <li><a href='www.google.com'>link</a></li>
                                <li><a href='www.google.com'>link</a></li>
                            </ul>
                        </div>
                        <div className='achivments'>
                            <h5>Achivments</h5>
                            <p>Massa sed elementum tempus egestas sed sed risus at ultrices mi tempus imperdiet nulla.</p>
                        </div>
                    </div>
                    <div className='footer_footer_column'>
                        <div className='footer_footer_link'>
                            <h5>Contact Info</h5>
                            <p>Nunc lobortis mattis aliquam faucibus purus in massa arcu odio ut sem nulla pharetra diam amet.</p>
                        </div>
                        <div className='contact_info'>
                            <img src={pin} alt='map'/>
                            <div className='contact_info_info'>
                                <div><h5>Address:</h5></div>
                                <div><p>Street Name, NY 38954</p></div>
                            </div>

                        </div>
                        <div className='contact_info'>
                        <img src={phone} alt='map'/>
                            <div className='contact_info_info'>
                                <div><h5>Phone:</h5></div>
                                <div><p>+9613949509</p></div>
                            </div>

                        </div>
                        <div className='contact_info'>
                        <img src={mobile} alt='map'/>
                            <div className='contact_info_info'>
                                <div><h5>Mobile:</h5></div>
                                <div><p>+9618200230</p></div>
                            </div>

                        </div>


                    </div>


                </div>
            </div>

        </div>

    )
}

export default Footer
