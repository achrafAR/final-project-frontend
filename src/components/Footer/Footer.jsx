import React, { useState } from 'react';
import './footer.css'
import socialIcon from '../../icons/map.png'
import template from '../../icons/template.svg'


function Footer() {

    const navbar = [
        { name: "HOME", link: "/" },
        { name: "OFFERS", link: "/" },
        { name: "ABOUT US", link: "/" },
        { name: "CONTACT US", link: "/" },
        { name: "GALLERY", link: "/" },
    ];
    const socialMedia = [
        { name: "Facebook", link: "/", icon: socialIcon },
        { name: "Instagram", link: "/", icon: socialIcon },
        { name: 'twitter', link: '/', icon: socialIcon }
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
                                <a href="#" className="nav-link"><img src={socialIcon} /></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link"><img src={socialIcon} /></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link"><img src={socialIcon} /></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link"><img src={socialIcon} /></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link"><img src='{socialIcon}' /></a>
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


                </div>
            </div>

        </div>

    )
}

export default Footer
