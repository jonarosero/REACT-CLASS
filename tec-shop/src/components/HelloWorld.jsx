const HelloWorld = (props) => {
    console.log(props);

    const person = props.person;

    return <div>
        <h1>{props.greeting}, {person.name}</h1>
        <h2>{person.title}</h2>
        <p>{person.job}</p>
        <p>{person.age}</p>
    </div>
}

export default HelloWorld