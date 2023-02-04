import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import  Logo from "../piggy-image/home_page_images/logo 2.svg";
import { NavLinks } from '../data';
import { useState } from 'react';
import {GoThreeBars} from 'react-icons/go'
import {TiTimes} from 'react-icons/ti'

const Layout = () => {
    const [modalVisible, setmodalVisible] = useState(false)
    const [navVisible, setNavVisible] = useState(false)
    const [top, setTop] = useState(false)
    window.addEventListener('scroll',()=>{
        window.scrollY > 5 ? setTop(true) : setTop(false)
    })
  return (
    <>
        <header className={top ? 'scrolled': ' '}>
        <nav className='nav_bar'>
                <div className="nav_bar--logo" >
                    <Link to='/' onClick={()=> setNavVisible(false)}>
                    <img src={Logo} alt=""  />
                    </Link>
                </div>
                <div className={ navVisible ? 'links open': 'links'}>                    
                    <ul className='nav_bar--list'>
                        { NavLinks.map(({id,name,path,modal})=>{
                            return(
                                <li onClick={()=> setNavVisible(false)} onMouseEnter={modal ?  ()=> setmodalVisible(true): null} onMouseLeave={modal ?  ()=> setmodalVisible(false): null} key={id}>
                                    <NavLink  to={path}>{name}</NavLink>
                                    { modal && modalVisible &&
                                        <div className="modal">
                                            { modal.map(({id,name,link,image})=>{
                                                return(
                                        <Link key={id} className="link__img" to={link}>
                                            <img src={image} alt='link icon' />
                                            {name}
                                        </Link>
                                            ) 

                                            })
                                            }
                                    </div>
                                    }
                                </li>
                                )
                        })
                        }
                    </ul>
                    <div className="ctn__container">
                        <div className="sign_in btn">
                            <Link to='login'>Sign in</Link>
                        </div>
                        <div className="create_acct btn">
                            <Link to='signup'>Create free account</Link>
                        </div>
                    </div>
                </div>
                <div className="close" onClick={()=> setNavVisible(prev => !prev)}>
                    {
                        navVisible ? <TiTimes/> : <GoThreeBars/>
                    }
                </div>
            </nav>
        </header>    
            <main>
                <Outlet/>
            </main> 
    </>
  )
}

export default Layout