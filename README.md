# React Class: Ejercicios para practicar React

En este repositorio, los estudiantes encontrarán ejercicios prácticos para aprender y mejorar sus habilidades en React. A lo largo de los ejercicios, trabajaremos con componentes, `props`, `state`, y más, para construir aplicaciones interactivas y dinámicas.

---

## Ejercicio 1: Refactorización de la Aplicación

Vamos a comenzar trabajando con la estructura básica de una aplicación React. Modifica el archivo `App.jsx` para que el código se vea de la siguiente forma:

```jsx
import React from 'react';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
      <p>Total exercises: {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
```

### Ejercicio 1.2: Crear Componentes Modulares

La aplicación que tenemos actualmente está contenida en un solo componente. Refactoriza el código para dividir la funcionalidad en tres componentes: `Header`, `Content` y `Total`.

La estructura del componente `App` debería verse así:

```jsx
import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content parts={[{name: part1, exercises: exercises1}, {name: part2, exercises: exercises2}, {name: part3, exercises: exercises3}]} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
```
## Ejercicio 2: Trabajando con Objetos y Arrays

Vamos a modificar las variables para que sean objetos y arrays. Esto hará que la aplicación sea más flexible y fácil de mantener.

Refactoriza el componente `App` de esta manera:

```jsx
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  );
};
```
## Ejercicio 3: Anécdotas
### Ejercicio 3.1: Introducción de Funciones de Generación Aleatoria

Ahora, vamos a expandir la aplicación con un botón para mostrar una anécdota aleatoria de la ingeniería de software:

```jsx
import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...',
    'Any fool can write code that a computer can understand...',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place...',
    'Programming without an extremely heavy use of console.log is same as a doctor refusing to use x-rays...',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleClick}>Next Anecdote</button>
    </div>
  );
};

export default App;
```
### Ejercicio 3.2: Votación de Anécdotas
En este ejercicio, expandimos la aplicación para que los usuarios puedan votar por las anécdotas mostradas. Usaremos un array para almacenar los votos:
```jsx
import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...',
    'Any fool can write code that a computer can understand...',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place...',
    'Programming without an extremely heavy use of console.log is same as a doctor refusing to use x-rays...',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next Anecdote</button>
    </div>
  );
};

export default App;

```
### Ejercicio 3.3: Mostrar la Anécdota Más Votada
Finalmente, implementa una versión de la aplicación que muestre la anécdota con el mayor número de votos:
```jsx
import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...',
    'Any fool can write code that a computer can understand...',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place...',
    'Programming without an extremely heavy use of console.log is same as a doctor refusing to use x-rays...',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const maxVotes = Math.max(...votes);
  const mostVotedIndex = votes.indexOf(maxVotes);

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next Anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotedIndex]} has {maxVotes} votes</p>
    </div>
  );
};

export default App;
```
