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

  const productsList = [
    {
      "id": 1,
      "title": "Handmade Fresh Table",
      "price": 687,
      "description": "Andy shoes are designed to keeping in...",
      "image": "https://i.etsystatic.com/24690085/r/il/d97094/5671995378/il_570xN.5671995378_lf4m.jpg"
    },
    {
      "id": 2,
      "title": "Sleek Wireless Computer Mouse",
      "price": 10.50,
      "description": "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
      "image": "https://m.media-amazon.com/images/I/517Z7K7hkpL._AC_UF1000,1000_QL80_.jpg"
    },
  ]
  return (
    <div>
      <HelloWorld greeting={hello} person={person}/>
      <h2>Compras Recientes</h2>
      {productsList.map((product)=>(
        <div key={product.id}>
        <Producto  product={product}/>
        <hr/></div>
      ))}
    </div>
  );
}

export default App;
