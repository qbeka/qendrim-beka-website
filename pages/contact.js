import { useState, useEffect } from 'react'
import Head from 'next/head'
import { gsap } from 'gsap'
import { init, send } from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  useEffect(() => {
    gsap.from('.contact-form', { opacity: 0, y: 20, duration: 1 })
    // Initialize EmailJS
    if (typeof window !== 'undefined') {
      init('YOUR_USER_ID')
    }
  }, [])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('Sending...')
    send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
      .then(response => {
        setStatus('Message sent!')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch(err => {
        setStatus('Failed to send message.')
      })
  }

  return (
    <>
      <Head>
        <title>Qendrim Beka | Contact</title>
      </Head>
      <section className="contact">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
          <p>{status}</p>
        </form>
      </section>
    </>
  )
}

export default Contact
