import logo from './logo.svg';
import React, {useEffect, useState, createContext} from "react"
import './App.css';
import home1 from "./img/home1.png"
import home2 from "./img/home2.png"
import new1 from "./img/new1.png"
import new2 from "./img/new2.png"
import stream from "./img/stream.jpg"
import dgame from "./img/dgame.jpg"
import virtual1 from "./img/virtual1.jpg"
import virtual2 from "./img/virtual2.jpg"
import basket from "./img/basket.jpg"
import ma from "./img/ma.jpg"
import tour from "./img/tour.mp4"
import pad2 from "./img/pad2.jpg"
import pad1 from "./img/pad1.jpg"
import germany from "./img/germany.jpg"
import logo3 from "./img/logo3.png"
import collection1 from "./img/collection1.png"
import collection2 from "./img/collection2.png"
import useLocalStorage from 'use-local-storage';
import Fade from 'react-reveal/Fade';

import {MdOutlineSportsEsports} from 'react-icons/md';

import { AiOutlineHome, AiOutlineSearch ,AiOutlineMoneyCollect, AiOutlineArrowRight, AiOutlineTwitter} from 'react-icons/ai';

import { BsFillMoonFill, BsTwitch, BsInstagram, BsSun} from 'react-icons/bs';


import { GiHeavyCollar, GiPriceTag} from 'react-icons/gi';
import { type } from '@testing-library/user-event/dist/type';

export const ThemeContext = createContext(null)

function App() {


  const [small, setSmall] = useState(false)

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  

  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light")

  const switchTheme = () => {
    const newTheme = theme ==="light" ? "dark" : "light"
    setTheme(newTheme)
  }

  useEffect(() => {
    if (typeof window!== "undefined"){
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 50))
    }
  }, [])
  
  

  return (
    <div data-theme={theme}>
      <header className={`header ${small ? "scroll-header" : ""}`} id='header'> 
         <nav className='nav container'>
              <a href='s' className='nav__logo'>
                  E- <MdOutlineSportsEsports className='esports'/>
              </a>


              <a href='s' className='home-home nav__logo'>
                 Home
              </a>

              <div className="nav__menu" >
                  <ul className="nav__list">
                   

                    <li className="nav__item">
                         <form className='search'>
                            <div>
                              <input type="text" placeholder='Search latest...' />
                            </div>
                            <div className='radio'>
                              <button type="submit"><AiOutlineSearch className="icon" /></button>
                            </div>
                         </form>
                    </li>

                    

                   
                  </ul>
              </div>

            {
              theme==="light"?   <BsFillMoonFill onClick={switchTheme}/> : <BsSun onClick={switchTheme} className="react-icons"/>
            }
          
         </nav>
      </header>

    <main className="main">
       <section className='home section' id='home'>
            <div className='home__container container grid'>
              <div className='home__data'>

                <Fade top>
                 <h1 className='home__title'>
                    E-Sports Players <br/> Platform
                </h1>

                <p className='home__description'>
                    Join pro gamers from all  <br/>
                    over the world and connect
                </p>

                <a href='' className='button__link'>
                     Explore <AiOutlineArrowRight/>
                </a>

                </Fade>
              </div>
               
                <div className='home__images'>
                <Fade top>
                  <div>
                  <img src={virtual1}  alt=""/>
                  <img src={ma}  alt=""/>
                  </div>
                  </Fade>
                </div>
            </div>
       </section>

       <section className='new section' id='new'>
       <Fade top>
            <h2 className='section__title'>
                New Categories
            </h2>

            <div className='new__container container grid'>
        
                <article className="new__card">
                    <img  src={pad1} alt="new image" className='new__img' />

                     <a href='#' className='new__link'> 
                           <div className="new__data">
                           <h2 className="new__title">eTournaments</h2>
                           <span>
                            Discover gamers
                           </span>
                           </div>
                           <AiOutlineArrowRight/>
                     </a>
                </article>
             

                <article className="new__card">
                    <img  src={basket} alt="new image" className='new__img' />

                     <a href='#' className='new__link'> 
                           <div className="new__data">
                           <h2 className="new__title">Streaming</h2>
                           <span>
                         Merchandise
                           </span>
                           </div>
                           <AiOutlineArrowRight/>
                     </a>
                </article>


                <article className="new__card">
                    <img  src={pad2} alt="new image" className='new__img' />

                     <a href='#' className='new__link'> 
                           <div className="new__data">
                           <h2 className="new__title">Discover</h2>
                           <span>
                         Play & Earn
                           </span>
                           </div>
                           <AiOutlineArrowRight/>
                     </a>
                </article>
            </div>
            </Fade>
       </section>
       

       <section className="collection section " id='collection'>
           <div className='collection__container container'>
           <Fade left>
                <div className='collection__explore'>
                    <div className='collection__data-men'>
                        <h2 className='collection__title'>
                        Men <br/> Women
                        </h2>
                        <a href="" className='button__link'>
                        Explore <AiOutlineArrowRight/>
                        </a>
                    </div>

                   <img src={germany} alt="" />
                </div>
                </Fade>


              <Fade left>
                <div className='collection__explore'>
                <img src={virtual2} alt="" />
                    <div className='collection__data-women'>
                        <h2 className='collection__title'>
                            Men  <br/> Women
                        </h2>
                        <a href="" className='button__link'>
                        Explore <AiOutlineArrowRight/>
                        </a>
                    </div>

                 
                </div>
                </Fade>
           </div>
       </section>


       <section className='section product'>
              <div className='product__container container'>
              <Fade top>
                   <h1>LATEST BLOG POSTS</h1>
                    <div className='articles'>
                        <video loop autoplay>
                          <source
                            src={tour}
                            type="video/mp4"
                          />
                        </video>
                      <div className='articles__text'>
                        <h4>Gaming are possible</h4>
                        <p>Join sports players from all over the world </p>
                      </div>
                        
                    </div>

                     <div className='articles'><img src={stream} alt=""/>
                      <div className='articles__text'>
                        <h4>Gaming are possible</h4>
                        <p>Join sports players from all over the world </p>
                      </div>
                        
                    </div>

                     <div className='articles'><img src={dgame} alt=""/>
                      <div className='articles__text'>
                        <h4>Gaming are possible</h4>
                        <p>Join sports players from all over the world </p>
                      </div>
                        
                    </div>


                     <div className='articles'><img src={pad2} alt=""/>
                      <div className='articles__text'>
                        <h4>Gaming are possible</h4>
                        <p>Join sports players from all over the world </p>
                      </div>
                        
                    </div>
                    </Fade>
              </div>
       </section>
    </main>

       <footer className='footer section'>
                <div className='footer__container container grid'>
                    <div>
                       <a href='#' className="footer__logo">
                          Shop
                        </a>

                        <p className="footer__description articles__text">
                            Bringing the best esports <br/>
                            players from all over the world<br/>
                            for exciting competition
                        </p>
                    </div>
                    
                    <div className='footer__content'>
                    <div>
                          <h3 className='footer__title'>
                              Company
                          </h3>

                          <ul className='footer__links'>
                            <li>
                                 <a href='#' className="footer__link">Shop</a>
                            </li>
                            <li>
                                 <a href='#' className="footer__link">Pricing</a>
                            </li>
                            <li>
                                 <a href='#' className="footer__link">Products</a>
                            </li>
                            <li>
                                 <a href='#' className="footer__link"></a>
                            </li>
                          </ul>
                       </div>



                       <div>
                          <h3 className='footer__title'>
                              Blog
                          </h3>

                          <ul className='footer__links'>
                            <li>
                                 <a href='#' className="footer__link">Latest</a>
                            </li>
                            <li>
                                 <a href='#' className="footer__link">Buzz</a>
                            </li>
                            <li>
                                 <a href='#' className="footer__link">Players</a>
                            </li>
                           
                          </ul>
                       </div>



                       <div>
                          <h3 className='footer__title'>
                              Careers
                          </h3>

                          <ul className='footer__linkss'>
                              <a href="" className='footer__social-link'>
                                  <BsTwitch/>
                              </a>

                              <a href="" className='footer__social-link'>
                                <AiOutlineTwitter/>
                              </a>

                              <a href="" className='footer__social-link'>
                                <BsInstagram/>
                              </a>
                          </ul>
                       </div>
                    </div>
                </div>

                <div className='footer__info container'>
                    <span className='footer__copy articles__text'>
                        E-Sports. All rights reserved
                    </span>

                    <a href="" className='footer__privacy articles__text'>
                        Terms & Condition
                    </a>
                </div>
       </footer>
    </div>
  );
}

export default App;
