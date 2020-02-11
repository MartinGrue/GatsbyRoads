import React from "react"

import * as css from "../css/footer.module.css"
import links from "../constants/links"
import { Link } from "gatsby"
import socialIcons from "../constants/socialIcons"

const Footer: React.FC = () => {
  return (
    <footer className={css.footer}>
      <div className={css.links}>
        {links.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className={css.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
    </footer>
  )
}
export default Footer
