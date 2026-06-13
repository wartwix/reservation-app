import { useState, useEffect } from 'react';

export default function GestionReservations() {
  // 1. Charger les données au démarrage
  const [resas, setResas] = useState(() => {
    const localData = localStorage.getItem('reservations');
    return localData ? JSON.parse(localData) : [];
  });

  const [form, setForm] = useState({ id: null, nom: '', date: '', table: 'Table Standard' });

  // 2. Sauvegarder à chaque modification de la liste
  useEffect(() => {
    localStorage.setItem('reservations', JSON.stringify(resas));
  }, [resas]);

  const sauvegarder = () => {
    if (!form.nom || !form.date) return alert("Remplissez tout !");
    if (form.id) {
      setResas(resas.map(r => r.id === form.id ? form : r));
    } else {
      setResas([...resas, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, nom: '', date: '', table: 'Table Standard' });
  };

  const preparerModif = (r) => setForm(r);
  const annuler = (id) => setResas(resas.filter(r => r.id !== id));

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gestion des Réservations</h2>
      
      <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <input style={s.input} placeholder="Nom" value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} />
        <input style={s.input} type="datetime-local" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
        
        <select style={s.input} value={form.table} onChange={e => setForm({...form, table: e.target.value})}>
          <option value="Table Fenêtre">Table Fenêtre</option>
          <option value="Table Terrasse">Table Terrasse</option>
          <option value="Carré VIP">Carré VIP</option>
        </select>

        <button style={s.btn} onClick={sauvegarder}>
          {form.id ? " Enregistrer" : "Réserver"}
        </button>
      </div>

      <div style={{ display: 'grid', gap: '10px' }}>
        {resas.map(r => (
          <div key={r.id} style={s.card}>
            <div>
              <strong>{r.nom.toUpperCase()}</strong> - {r.table}
              <br /><small>{new Date(r.date).toLocaleString()}</small>
            </div>
            <div>
              <button onClick={() => preparerModif(r)} style={s.editBtn}>Modifier</button>
              <button onClick={() => annuler(r.id)} style={s.delBtn}>Annuler</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const s = {
  input: { margin: '5px', padding: '10px' },
  btn: { padding: '10px', background: '#27ae60', color: 'white', border: 'none', cursor: 'pointer' },
  card: { display: 'flex', justifyContent: 'space-between', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' },
  editBtn: { background: '#3498db', color: 'white', border: 'none', padding: '5px', marginRight: '5px' },
  delBtn: { background: '#e74c3c', color: 'white', border: 'none', padding: '5px' }
};