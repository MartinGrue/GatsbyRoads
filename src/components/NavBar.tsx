import React, { useState } from "react"
import { withStyles, createStyles, WithStyles } from "@material-ui/styles"
import svg from '../images/logo.svg';
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import { Link } from "gatsby"
import { sizes } from "./utils/sizes"
import socialIcons from "../constants/socialIcons"
import * as css from '../css/navbar.module.css'

const styles = createStyles({
  navBar: {
    [sizes.up("xs")]: {
      padding: "0 2rem",
    },
  },
  navCenter: {
    [sizes.up("m")]: {
      maxWidth: "1170px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  navHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 1.25rem",
  },
  logoBtn: {
    background: "transparent",
    border: "none",
    outline: "none",
    "&:hover": { cursor: "pointer" },
    [sizes.up("m")]: { display: "none" },
  },
  logoIcon: {
    color: "var(--primaryColor)",
    fontSize: "1.5rem",
  },
  navLinks: {
    listStyleType: "none",
    transition: "var(--mainTransition)",
    height: "0",
    overflow: "hidden",
    "& a": {
      display: "block",
      padding: "1rem 1.25rem",
      textDecoration: "none",
      textTransform: "capitalize",
      color: "var(--mainBlack)",
      transition: "var(--mainTransition)",
      fontWeight: "bold",
      letterSpacing: "var(--mainSpacing)",
    },
    "& a:hover": { color: "var(--primaryColor)" },
    [sizes.up("m")]: {
      height: "auto",
      display: "flex",
    },
  },
  showNav: { height: "216px" },
  navSocialLinks: {
    display: "none",
    "& a": {
      [sizes.up("m")]: {
        color: "var(--primaryColor)",
        margin: "0 0.5rem",
        fontSize: "1.2rem",
        transition: "var(--mainTransition)",
      },
    },
    "& a:hover": {
      color: "var(--primaryColor)",
      [sizes.up("xs")]: {
        color: "var(--mainBlack)",
        transform: "translateY(-5px)",
      },
    },
    [sizes.up("m")]: {
      display: "flex",
      lineHeight: "0",
    },
  },
})
interface NavBarProps extends WithStyles<typeof styles> {}
const NavBar: React.FC<NavBarProps> = ({ classes }) => {
  const [NavIsOpen, setNavIsOpen] = useState(false)
  const toogleNavIsOpen = () => {
    setNavIsOpen(!NavIsOpen)
  }

  return (
    <div className={css.navbar}>
      <div className={css.navCenter}>
        <div className={classes.navHeader}>
          <img src={svg}></img>
          <button
            type="button"
            className={classes.logoBtn}
            onClick={toogleNavIsOpen}
          >
            <FaAlignRight className={classes.logoIcon}></FaAlignRight>
          </button>
        </div>
        <ul
          className={
            NavIsOpen
              ? `${classes.navLinks} ${classes.showNav}`
              : `${classes.navLinks}`
          }
        >
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            )
          })}
        </ul>
        <ul
          className={
            NavIsOpen
              ? `${classes.navSocialLinks} ${classes.showNav}`
              : `${classes.navSocialLinks}`
          }
        >
          {socialIcons.map((item, index) => {
            return <a key={index} href={item.url}>
              {item.icon}
            </a>
          })}
        </ul>
      </div>
    </div>
  )
}
export default withStyles(styles)(NavBar)
