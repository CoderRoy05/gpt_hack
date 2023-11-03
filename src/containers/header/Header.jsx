import axios from 'axios';
import React, { useState } from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

function Header() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a message body with the email data
    const body = `email: ${email}`;

    try {
      // Use a fetch or Axios to send a POST request to your server or email service
      const response = await axios.post('/send-email', {
        to: 'royalalawode@gmail.com',
        from: 'royalalawode@gmail.com',
        subject: 'Subscription request- GPT_X',
        body: body,
      });

      if (response.status === 200) {
        // Email sent successfully
        setMessage('Email sent! Thank you for subscribing.');
        setEmail(''); // Clear the input field
      } else {
        // Handle errors if needed
        const errorData = response.data;
        console.error('Error:', errorData);
        setMessage('Oops! Something went wrong while subscribing.');
      }
    } catch (error) {
      // Handle errors if needed
      console.error('Error:', error);
      setMessage('Oops! Something went wrong while subscribing.');
    }
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>


        <form className="gpt3__header-content__input" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Get Started</button>
        </form>
        {message && (
          <div className="success-message">{message}</div>
        )}

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>795,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image" id="fly">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
