import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import send from ".././images/send.png";
import "./ContactMe.css";

function ContactMe() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_0porjrq",
        "template_dofsbbl",
        form.current,
        "GZMwJaV9Gliwt4JNR"
      );
      setStatus("Email Sent Successfully! Thank you ...");
      console.log(result.text);
      e.target.reset();
    } catch (error) {
      setStatus("Something went wrong!");
      console.log(error.text);
    }
  };

  return (
    <section id="contact" className="contact">
      <form data-aos="fade-in" className="form" ref={form} onSubmit={sendEmail}>
        <h1>Contact me</h1>
        <span id="status">
          <h3>
            {status ||
              "Please fill out the below form to discuss any work opportunities."}
          </h3>
        </span>
        <input
          required
          type="text"
          className="name"
          autoComplete="off"
          name="to_name"
          placeholder="enter your name..."
        />
        <input
          required
          type="email"
          className="email"
          autoComplete="off"
          name="from_name"
          placeholder="enter your email..."
        />
        <textarea
          required
          className="msg"
          autoComplete="off"
          name="message"
          placeholder="message..."
        ></textarea>
        <div className="send">
          <button type="submit">
            Send <img src={send}></img>
          </button>
          <button type="reset">Reset</button>
        </div>
      </form>
      <div className="footer">
        <p>Copyrights &#169; 2024 Madhu Damodhar, All Rights reserved</p>
      </div>
    </section>
  );
}

export default ContactMe;
