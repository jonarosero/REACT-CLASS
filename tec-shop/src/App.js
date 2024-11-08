import HelloWorld from "./components/HelloWorld";

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
    </div>
  );
}

export default App;
