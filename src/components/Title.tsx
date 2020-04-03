import React from "react"
import * as css from "../css/title.module.css"

interface TitleProps {
  title: string
  subtitle: string
}
const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className={css.title}>
      <h4>
        <span >{title}</span>
        <span className={css.subTitle}>{subtitle}</span>
      </h4>
    </div>
  )
}
export default Title
