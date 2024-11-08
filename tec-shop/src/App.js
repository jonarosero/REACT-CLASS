import ButtonHook from "./components/ButtonHook";
import HelloWorld from "./components/HelloWorld";
import Producto from "./components/Producto";

function App() {

  const hello = "Saludos";

  const person = {
    name: "Jonathan Rosero",
    age: 28,
    title: "Msc. Ingeniería de Software",
    job: "Especialista TI / FULLSTACK DEVELOPER",
  }
  return (
    <div>
      <HelloWorld greeting={hello} person={person}/>
      <ButtonHook/>
      
    </div>
  );
}

export default App;
