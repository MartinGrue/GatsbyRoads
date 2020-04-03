import React from "react"
import * as css from "../../css/contact.module.css"
import Layout from "../Layout"
import Title from "../Title"
const ContactForm = () => {
  return (
    <section className={css.contact}>
      <Title title="contact" subtitle="us"></Title>
      <div className={css.center}>
        <form action="https://formspree.io/FORM_ID" method="POST">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={css.formControl}
              placeholder="john"
            ></input>
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={css.formControl}
              placeholder="john@email"
            ></input>
          </div>
          <div>
            <textarea
              name="message"
              id="name"
              rows={10}
              className={css.formControl}
              placeholder="Send us a message"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={css.submit}
            ></input>
          </div>
        </form>
      </div>
    </section>
  )
}
export default ContactForm
