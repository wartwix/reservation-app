import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '15px', background: '#333', display: 'flex', gap: '20px' }}>
      <Link to="/" style={{ color: 'white' }}>Accueil</Link>
      <Link to="/gestion" style={{ color: 'white' }}>Mes Réservations</Link>
    </nav>
  );
}