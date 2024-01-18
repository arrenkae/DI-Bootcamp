import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';

// Exercise 1: with JSX
// 1. In the App.js file, display a “Hello World!” message in a paragraph.
// 2. Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
// 3. Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"

const myelement = <h1>I Love JSX!</h1>
const sum = 5+5;

// Exercise 2 : Object
// Using the following object:

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

// 1. In the App.js file, render the first name and the last name of the user in two <h3>.
// 2. In a separate Javascript file named UserFavoriteAnimals.js, create a new Class Component called UserFavoriteAnimals. Use props to pass the favAnimals array to the UserFavoriteAnimals component.
// 3. In the UserFavoriteAnimals component, use the map method to create <li> tags in a <ul> tag.
//   - Each <li> corresponds to one animal from the favAnimals array.
//   - Display the <li> tags. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          {myelement}
          <p>Hello World!</p>
          <p>React is {sum} times better with JSX</p>
          <h3>{user.firstName} {user.lastName}</h3>
          <UserFavoriteAnimals favAnimals={user.favAnimals} />
        </>
      </header>
    </div>
  );
}

export default App;
