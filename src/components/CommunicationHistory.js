import { useEffect, useState } from 'react';
import axios from 'axios';

function CommunicationHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get('/api/email/history').then(response => setHistory(response.data));
  }, []);

  return (
    <ul>
      {history.map((comm, index) => (
        <li key={index}>
          {comm.subject} - {comm.message}
        </li>
      ))}
    </ul>
  );
}

export default CommunicationHistory;