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
        {/* The CDN script is optional when using the npm package, but can be kept for fallback */}
        <script 
          type="text/javascript" 
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
        </script>
      </Head>
      
      <motion.section
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="contact-title">Contact Me</h2>
        <motion.form 
          ref={formRef} 
          id="contact-form" 
          className="contact-form" 
          onSubmit={handleSubmit}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="form-group">
            <input type="text" name="from_name" placeholder="Your Name" required className="contact-input" />
          </div>
          <div className="form-group">
            <input type="email" name="from_email" placeholder="Your Email" required className="contact-input" />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" required className="contact-textarea" />
          </div>
          <motion.button 
            type="submit" 
            className="contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
          <p className={`status-message ${status.includes('Failed') ? 'error' : 'success'}`}>{status}</p>
        </motion.form>
      </motion.section>
    </>
  );
};

export default Contact;
