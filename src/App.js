import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GoogleAuth from './components/GoogleAuth';
import CommunicationHistory from './components/CommunicationHistory';
import ComposeEmail from './components/ComposeEmail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<GoogleAuth />} />
          <Route path="/history" element={<CommunicationHistory />} />
          <Route path="/compose" element={<ComposeEmail />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;