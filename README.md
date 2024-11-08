# React Class

Este repositorio, **React Class**, contiene ejemplos básicos para entender el uso de React en el desarrollo de aplicaciones. Cada rama (`branch`) explora un aspecto diferente de React, desde el uso básico de props y componentes hasta el manejo de listas, hooks, y llamadas a una API. A continuación, se detalla lo que puedes encontrar en cada una de las ramas principales.

## Ramas disponibles

### 1. `hello-world`
Esta rama contiene los fundamentos de React, incluyendo:
- Ejemplo básico de cómo pasar y renderizar `props` en componentes.
- Creación de componentes funcionales para mostrar información estática.
  
Esta rama es ideal para quienes están comenzando con React y quieren entender cómo funcionan los props y la estructura básica de un componente.

### 2. `products-list`
En la rama `products-list`, exploramos cómo manejar listas y renderizar múltiples componentes usando la función `map`. Incluye:
- Ejemplo de mapeo de listas de productos.
- Paso de props a componentes especializados para que cada uno renderice la información de un producto en particular.

Esta rama es útil para comprender cómo manejar y renderizar listas dinámicas en React.

### 3. `hooks`
La rama `hooks` introduce los hooks de React, específicamente `useState` y `useEffect`, aplicados a un contador simple. En esta rama verás:
- Uso de `useState` para manejar el estado de un contador.
- Ejemplo de `useEffect` para realizar acciones en respuesta a cambios en el estado del contador.
- Manejo de estado para mostrar alertas cuando el contador alcanza ciertos valores.

Esta rama es excelente para aprender los conceptos básicos de hooks y cómo gestionar el estado y efectos secundarios en React.

### 4. `api`
La rama `api` expone un ejemplo práctico de cómo integrar una API externa usando `async` y `await` para realizar un CRUD de productos. Incluye:
- Uso de `fetch` con `async/await` para realizar llamadas a una API.
- Implementación de `useState`, `useEffect`, `props` y `map` para manejar la lista de productos y operaciones CRUD.
- Ejemplo de cómo renderizar y actualizar datos en la interfaz de usuario en respuesta a cambios en la API.

Esta rama es ideal para aprender cómo hacer llamadas a API en React y cómo manipular datos externos en la aplicación.

## Cómo explorar este repositorio

Para ver el código en una rama específica, usa el siguiente comando para cambiarte a la rama que deseas explorar:

```bash
git checkout <nombre-de-la-rama>
