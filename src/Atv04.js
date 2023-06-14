import Toolbar from "./components/Toolbar";
import Gallerys from "./components/Gallerys";
import Counter from "./components/Counter";
import Form from "./components/Form";
import MovingDot from "./components/MovingDot";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import List from "./components/List";
import List2 from "./components/List2";
import ShapeEditor from "./components/ShapeEditor";
import CounterList from "./components/CounterList";
import List3 from "./components/List3";
import List4 from "./components/List4";
import BucketList from "./components/BucketList";
import { Link } from "react-router-dom";

export default function Atv04(){
    return (
        <>
          <h2> Atividade 04</h2>
          <Link className="voltar" to="/">Voltar para a página inicial</Link>
          <br></br>
          <br></br>
          <br></br>
          <Toolbar />
          <br></br>
          <br></br>
          <br></br>
          <Gallerys />
          <br></br>
          <Counter />
          <br></br>
          <br></br>
          <Form />
          <br></br>
          <br></br>
          <Form2 />
          <br></br>
          <br></br>
          <Form3 />
          <br></br>
          <br></br>
          <List />
          <List2 />
          <List3 />
          <List4 />
          <CounterList />
          <BucketList />
          <br></br>
          <br></br>
          <br></br>
          <ShapeEditor />
          <MovingDot />
        </>
    );
}