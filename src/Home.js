import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="container">
      <h1>Laboratório de Engenharia de Software</h1>
      <h2>Atividades React</h2>
      <h2>Página Inicial</h2>
      <nav>
        <ul>
          <li>
            <Link to="/Atv01">Atividade 01</Link>
          </li>
           <li>
            <Link to="/Atv02">Atividade 02</Link>
          </li>
          <li>
            <Link to="/Atv03">Atividade 03</Link>
          </li>
          <li>
            <Link to="/Atv04">Atividade 04</Link>
          </li>
          <li>
            <Link to="/Atv05">Atividade 05</Link>
          </li>    
        </ul>
      </nav>
    </div>
  );
}

export default Home;