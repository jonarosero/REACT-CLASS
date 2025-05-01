const HelloWorld = (props) => {
    console.log(props);
    const person = props.person;
    return(
        <div>
            {/* <h1>{props.greeting}</h1> */}
            <h2>{person.name}</h2>
            <p>Edad: {person.age}</p>
            <p>Profesión: {person.job}</p>
        </div>
    )
}

export default HelloWorld
