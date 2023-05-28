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
import whatsApp from '../../icons/whatsapp.png'


function Footer() {

    const navbar = [
        { name: "HOME", link: "/" },
        { name: "OFFERS", link: "/offers" },
        { name: "ABOUT US", link: "/aboutUs" },
        { name: "CONTACT US", link: "/contactUs" },
        { name: "GALLERY", link: "/gallery" },
    ];
    const socialMedia = [
        { name: "Facebook", link: "/", icon: instagram },
        { name: "Instagram", link: "/", icon: facebook },
        { name: 'twitter', link: '/', icon: youtube },
        { name: 'twitter', link: '/', icon: twitter }

    ]

    const whatsappNumber = '009613949509'; // Replace with your WhatsApp number

    const openWhatsApp = () => {
        const url = `https://wa.me/${whatsappNumber}`;
        window.open(url, '_blank');
    };

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
                    <div className="footer_container_header_social">
                        <div className='footer_container_header_social_images'>
                            <img src={instagram} alt="instagram" />
                            <img src={facebook} alt="instagram" />
                            <img src={youtube} alt="instagram" />
                            <img src={twitter} alt="instagram" />
                            <img onclick={openWhatsApp} src={whatsApp} alt="instagram" />
                        </div>
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
                                <li><a href='https://en.wikipedia.org/wiki/Rafting'>Rafting Wikipedia</a></li>
                                <li><a href='https://www.rei.com/learn/expert-advice/what-to-wear-whitewater-rafting.html'>What wo wear</a></li>
                                <li><a href='https://www.topendsports.com/sport/list/rafting.htm'>Rafting overview</a></li>
                            </ul>
                        </div>
                        <div className='achivments'>
                            <h5>Achivments</h5>
                            <p>Massa sed elementum tempus egestas sed sed risus at ultrices mi tempus imperdiet nulla.</p>
                        </div>
                    </div>

                    <div className='footer_footer_column'>
                        <div className='footer_footer_link'>
                            <h5>Kayak links Links</h5>
                            <ul>
                                <li><a href='www.canoeicf.com'>International Canoe</a></li>
                                <li><a href='www.paddle.org.au'>Paddle Australia</a></li>
                                <li><a href='www.iwhof.org'>International Whitewater</a></li>
                            </ul>
                        </div>
                        <div className='achivments'>
                            <h5>Achivments</h5>
                            <p>Massa sed elementum tempus egestas sed sed risus at ultrices mi tempus imperdiet nulla.</p>
                        </div>
                    </div>
                    <div className='footer_footer_column'>
                        <div className='footer_footer_link'>
                            <h5>Hermel Links</h5>
                            <ul>
                                <li><a href='https://en.wikipedia.org/wiki/Orontes_River'>Orontes River
                                </a></li>
                                <li><a href='https://www.lbcgroup.tv/news/news-bulletin-reports/651107/hermel-as-never-seen-before-report/en'>Hermel By LBC</a></li>
                                <li><a href='https://en.wikipedia.org/wiki/Hermel'>Hermel Wikipedia</a></li>
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
                            <img src={pin} alt='map' />
                            <div className='contact_info_info'>
                                <div><h5>Address:</h5></div>
                                <div><p>Lebanon-Bekaa-Hermel</p></div>
                            </div>

                        </div>
                        <div className='contact_info'>
                            <img src={phone} alt='map' />
                            <div className='contact_info_info'>
                                <div><h5>Phone:</h5></div>
                                <div><p>+9613949509</p></div>
                            </div>

                        </div>
                        <div className='contact_info'>
                            <img src={mobile} alt='map' />
                            <div className='contact_info_info'>
                                <div><h5>Mobile:</h5></div>
                                <div><p>+9618200230</p></div>
                            </div>


                        </div>

                        <div className='whatsapp_info'>
                            <img src={whatsApp} alt='map' onClick={openWhatsApp} />



                        </div>


                    </div>


                </div>
            </div>

        </div>

    )
}

export default Footer
