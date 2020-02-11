import React from "react"
import * as cssLayout from '../css/layout.module.css';

interface SimpleHeroProps {
  children: any
}

const SimpleHero: React.FC<SimpleHeroProps> = ({ children }) => {
  return <header className={cssLayout.defaultHero}>{children}</header>
}
export default SimpleHero
