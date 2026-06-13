import { useNavigate } from 'react-router-dom';

const TABLES = [
  { id: 1, type: "Table Fenêtre", prix: "Libre" },
  { id: 2, type: "Table Terrasse", prix: "Libre" },
  { id: 3, type: "Carré VIP", prix: "Libre" }
];

export default function Accueil() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bienvenue au Restaurant</h1>
      <p>Consultez nos tables disponibles :</p>
      <div style={{ display: 'flex', gap: '15px' }}>
        {TABLES.map(t => (
          <div key={t.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h3>{t.type}</h3>
            <button onClick={() => navigate('/gestion')}>Réserver cette table</button>
          </div>
        ))}
      </div>
    </div>
  );
}