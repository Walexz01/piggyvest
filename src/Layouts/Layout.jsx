import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import  Logo from "../piggy-image/home_page_images/logo 2.svg";
import { NavLinks } from '../data';
import { useState } from 'react';
const Layout = () => {
    const [modalVisible, setmodalVisible] = useState(false)
  return (
    <>
        <header>
        <nav className='nav_bar'>
            <div className="nav_bar--right">
                <div className="nav_bar--logo" >
                    <Link to='/'>
                    <img src={Logo} alt=""  />
                    </Link>
                </div>
                <ul className='nav_bar--list'>
                    { NavLinks.map(({id,name,path,modal})=>{
                        return(
                            <li  onMouseEnter={modal ?  ()=> setmodalVisible(true): null} onMouseLeave={modal ?  ()=> setmodalVisible(false): null} key={id}>
                                <NavLink  to={path}>{name}</NavLink>
                                { modal && modalVisible &&
                                    <div className="modal">
                                        { modal.map(({name,link,image},index)=>{
                                            return(
                                    <Link key={index} className="link__img" to={link}>
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
            </div>

                <div className="nav_bar--left">
                    <div className="sign_in btn">
                        <Link to='login'>Sign in</Link>
                    </div>
                    <div className="create_acct btn">
                        <Link to='signup'>Create free account</Link>
                    </div>
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