import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import GestionReservations from './pages/GestionReservations';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* La page Accueil est obligatoire */}
        <Route path="/" element={<Accueil />} />
        {/* Vérifiez que le path ici est bien "/gestion" */}
        <Route path="/gestion" element={<GestionReservations />} />
      </Routes>
    </Router>
  );
}