import React from "react"
import Title from "../Title"
import * as styles from "../css/about.module.css"
import img from "../images/defaultBcg.jpeg"
import { btnPrimary } from "../css/layout.module.css"
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="us"></Title>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company"></img>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explrore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            ratione harum id fugit odit beatae nostrum ducimus nesciunt
            quibusdam e xplicabo rem porro voluptas amet architecto quam
            accusantium, itaque autem sit?
          </p>
          <button type="button" className={btnPrimary}>Read More</button>
        </article>
      </div>
    </section>
  )
}
export default About
