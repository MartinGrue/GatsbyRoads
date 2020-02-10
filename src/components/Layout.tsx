import React from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"


interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </div>
  )
}
export default Layout
