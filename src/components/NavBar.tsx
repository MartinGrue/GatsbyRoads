import React, { useState } from "react"
import svg from "../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import { Link } from "gatsby"
import socialIcons from "../constants/socialIcons"
import * as css from "../css/navbar.module.css"


const NavBar: React.FC = () => {
  const [NavIsOpen, setNavIsOpen] = useState(false)
  const toogleNavIsOpen = () => {
    setNavIsOpen(!NavIsOpen)
  }

  return (
    <div className={css.navbar}>
      <div className={css.navCenter}>
        <div className={css.navHeader}>
          <img src={svg}></img>
          <button
            type="button"
            className={css.logoBtn}
            onClick={toogleNavIsOpen}
          >
            <FaAlignRight className={css.logoIcon}></FaAlignRight>
          </button>
        </div>
        <ul
          className={css.navLinks}
          // style={NavIsOpen ? { height: "216px" } : {}}
        >
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            )
          })}
        </ul>
        <ul className={css.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href={item.url}>
                {item.icon}
              </a>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default NavBar
