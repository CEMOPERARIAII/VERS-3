import React, { useState } from 'react';

export default function App() {
  const [areaSelecionada, setAreaSelecionada] = useState(null);
  const areas = ['Matemática','Linguagens','Natureza','Humanas','Diversificada','Técnica'];

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1 style={{ color: '#004080' }}>📘 GuiaEdu COC II</h1>
      <h3>Escolha uma área:</h3>
      <ul>
        {areas.map(area => (
          <li key={area}>
            <button onClick={() => setAreaSelecionada(area)}>{area}</button>
          </li>
        ))}
      </ul>
      {areaSelecionada && (
        <div>
          <h2>📂 {areaSelecionada}</h2>
          <p>Aqui ficarão os guias em PDF por disciplina e bimestre.</p>
        </div>
      )}
    </div>
  );
}
