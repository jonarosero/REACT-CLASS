import HelloWorld from "./components/HelloWorld";
import ButtonHook from "./components/ButtonHook";
function App() {
  const hello = "SALUDOS";
  // const person = {
  //   name: "Jonathan Rosero",
  //   age: 29,
  //   job: "Ing. Sistemas",
  // };

  const persons = [
    { name: "Jonathan Rosero", age: 29, job: "Ing. Sistemas" },
    { name: "Jorge Hurtado", age: 30, job: "Florista" },
    { name: "Jessica Condoy", age: 25, job: "Médico", hobbie: "Leer" },
    {
      name: "Matilde Ramón",
      age: 25,
      job: "Electrónico",
      address: "Loja, Loja, Las Pitas",
    },
    {
      name: "Matilde Ramón",
      age: 25,
      job: "Electrónico",
      address: "Loja, Loja, Las Pitas",
    },
  ];

  // console.log(persons)
  return (
    <div>
      <h1>{hello}</h1>
      {/* {hello} {person.name} tu edad es: {person.age} */}
      {/* <HelloWorld greeting={hello} person={person}/> */}
      {persons.map((persona) => (
        <div key={persona.name}>
          <HelloWorld person={persona}/>
        </div>
      ))}
      <ButtonHook></ButtonHook>
    </div>
  );
}

export default App;
