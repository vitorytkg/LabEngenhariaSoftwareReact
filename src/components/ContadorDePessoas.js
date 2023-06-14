import { useState } from 'react';
import './ContadorDePessoas.css';

export default function ContadorDePessoas() {
  const [contadorHomem, contadorTotalHomem] = useState(0);
  const [contadorMulher, contadorTotalMulher] = useState(0);

  const adicionarHomem = () => {
    contadorTotalHomem(contadorHomem + 1);
  };
  const removerHomem = () => {
    if (contadorHomem > 0) {
      contadorTotalHomem(contadorHomem - 1);
    }
  };

  const adicionarMulher = () => {
    contadorTotalMulher(contadorMulher + 1);
  };
  const removerMulher = () => {
    if (contadorMulher > 0) {
      contadorTotalMulher(contadorMulher - 1);
    }
  };

  const resetarContador = () => {
    contadorTotalHomem(0);
    contadorTotalMulher(0);
  };

  const totalPessoas = contadorHomem + contadorMulher;

  return (
    <div className="totalContador">
      <div className="contador">
        <h2>Homens</h2>
        <p>{contadorHomem}</p>
        <button className="botaoadd" onClick={adicionarHomem}>Adicionar</button>
        <button className="botao" onClick={removerHomem}>Remover</button>
      </div>
      <div className="contador">
        <h2>Mulheres</h2>
        <p>{contadorMulher}</p>
        <button className="botaoadd" onClick={adicionarMulher}>Adicionar</button>
        <button className="botao" onClick={removerMulher}>Remover</button>
      </div>
      <p className="total-pessoas">Total de Pessoas: {totalPessoas}</p>
      <button className="botao-reset" onClick={resetarContador}>Resetar</button>
    </div>
  );
}