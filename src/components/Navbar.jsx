import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { styles } from '../styles'
import { StarsCanvas } from './canvas' // Importamos el fondo de estrellas

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            <span className="sm:block hidden"> Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Menu hamburguesa desplegado */}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } fixed top-0 left-0 w-full h-full z-50 flex-col justify-center items-center`}
          >
            {/* Fondo oscuro detrás de las estrellas */}
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(5,8,22,1)] z-0"></div>

            {/* Fondo de estrellas */}
            <div className="absolute top-0 left-0 w-full h-full z-10">
              <StarsCanvas /> {/* Aquí usaríamos el fondo de estrellas */}
            </div>

            {/* Ícono para cerrar el menú */}
            <img
              src={close}
              alt="close"
              className="w-[28px] h-[28px] object-contain absolute top-5 right-5 cursor-pointer z-50"
              onClick={() => setToggle(false)}
            />

            {/* Enlaces del menú */}
            <ul className="list-none flex justify-center items-center flex-col gap-8 relative z-50">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="font-poppins font-medium cursor-pointer text-[24px] text-white"
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
