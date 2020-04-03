import React from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"
import { AnimatePresence, motion } from "framer-motion"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      <AnimatePresence>
        {true && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            <div>{children}</div>
          </motion.div>
        )}
        <Footer></Footer>
      </AnimatePresence>
    </div>
  )
}
export default Layout
