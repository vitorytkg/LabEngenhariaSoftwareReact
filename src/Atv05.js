import FormQuiz from "./components/FormQuiz";
import FormTicket from "./components/FormTicket";
import Accordion from "./components/Accordion";
import Messenger from "./components/Messenger";
import { Link } from "react-router-dom";


export default function Atv05(){
    return (
        <>
          <h2> Atividade 05</h2>
          <Link className="voltar" to="/">Voltar para a página inicial</Link>
          <FormQuiz />
          <FormTicket />
          <Accordion />
          <Messenger />
        </>
    );
}