import { useState } from 'react';
import axios from 'axios';

function ComposeEmail() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/email/send', { email, subject, message })
      .then(() => alert('Email sent'))
      .catch(() => alert('Error sending email'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Recipient" required />
      <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" required />
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
  );
}
export default ComposeEmail;