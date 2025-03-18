import { useState, useEffect } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    gsap.from('.contact-form', { opacity: 0, y: 20, duration: 1 });
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      console.log('EmailJS success:', response.text);
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus(`Failed to send message: ${error.text || error}`);
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
  );
};

export default Contact;
