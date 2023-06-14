import Gallery from "./components/Gallery";
import ToDoList from "./components/ToDoList";
import { Link } from "react-router-dom";

export default function Atv03(){
    return (
        <>
          <h2> Atividade 03</h2>
          <Link className="voltar" to="/">Voltar para a página inicial</Link>
          <Gallery />
          <ToDoList />
        </>
    );
}