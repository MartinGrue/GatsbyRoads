import React from "react"
import * as css from "../css/banner.module.css"
interface BannerProps {
  title: string
  info?: string
  children?: any
}
const Banner: React.FC<BannerProps> = ({ title, info, children }) => {
  return (
    <div className={css.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}
export default Banner
