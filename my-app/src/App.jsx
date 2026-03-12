import { useState } from "react";

function App() {

  const [nome, setNome] = useState("");
  const [lista, setLista] = useState([]);

  const adicionarNome = () => {
    if (nome.trim() === "") return;

    setLista([...lista, nome]);
    setNome("");
  };

  const removerNome = (index) => {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  };

  
  return (
    <div>
      <h2>Lista Dinâmica</h2>

      <input
        type="text"
        placeholder="Digite um nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button onClick={adicionarNome}>Adicionar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removerNome(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;