import React, { useState } from 'react';
import './App.css';

function App() {
  const [valor, setValor] = useState(0);
  const [moeda, setMoeda] = useState('dolar')
  const [resultado, setResultado] = useState(0);
  async function handleCalcular(e) {
    e.preventDefault();
    if(moeda == 'dolar'){
      setResultado(valor * 5.38)
    }
    else{
      setResultado(valor * 6.06)
    }
  }

  return (
    <div className="container">
      <h1>Conversor de Moedas BRL</h1>
      <div className="content">

        <form onSubmit={handleCalcular}>
          <label htmlFor="">Digite um valor: *</label>
          <input type="number"
            value={valor}
            onChange={e => setValor(e.target.value)} />

            <label htmlFor="">Escolha em qual moeda quer converter: *</label>
            <select name="moedas" id="moeda" value={moeda} onChange={e => setMoeda(e.target.value)} >
              <option value="dolar">Dolar</option>
              <option value="euro">Euro</option>
            </select>
          <div className="botoes">
            <button type="submit" >Calcular</button>
          </div>
        </form>

      {
        resultado > 0 &&
      <strong>O valor convertindo em {moeda} e de: R$ {resultado}</strong>
      }
      </div>
    </div>
  );
}

export default App;
