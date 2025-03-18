import { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Initialize EmailJS using the public key from environment variables
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current
      );
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('FAILED...', error);
      setStatus(`Failed to send message: ${error.text || 'Unknown error'}`);
    }
  };

  return (
    <>
      <Head>
        <title>Qendrim Beka | Contact</title>
        {/* The CDN script is optional when using the npm package, 
            but can be kept for fallback if needed */}
        <script 
          type="text/javascript" 
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
        </script>
      </Head>
      <motion.section
        className="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Contact Me</h2>
        <form 
          ref={formRef} 
          id="contact-form" 
          className="contact-form" 
          onSubmit={handleSubmit}
        >
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
          <p>{status}</p>
        </form>
      </motion.section>
    </>
  );
};

export default Contact;
