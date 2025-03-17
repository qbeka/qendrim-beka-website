import { useState, useEffect } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import { init, send } from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    gsap.from('.contact-form', { opacity: 0, y: 20, duration: 1 });

    // Initialize EmailJS with public key
    if (typeof window !== 'undefined') {
      init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData
      );
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('Failed to send message.');
    }
  };

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
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            required
          />
          <button type="submit">Send Message</button>
          <p>{status}</p>
        </form>
      </section>
    </>
  );
};

export default Contact;
