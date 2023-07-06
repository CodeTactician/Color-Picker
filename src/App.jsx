// First, I import the useState function from React.
// useState is a function in React that allows me to have state variables in my component.
// These are special variables that, when changed, will trigger a re-render of the component.
import { useState } from 'react';

// Here, I define my Color component. It receives props as an argument, which are properties passed from a parent component.
// Specifically, it's receiving a color prop (a string like 'red', 'blue', or 'green') and a setSelectedColor function,
// which it can call to change the selected color. Lastly, it's getting the currently selectedColor for comparison.
const Color = ({color, setSelectedColor, selectedColor}) => {
  // This is the render method of my component. It's returning a <div> with a dynamic className.
  // If this component's color is the selected color, it gets an additional CSS class 'selected'.
  // The onClick prop is set to call setSelectedColor with this color when the div is clicked.
  return (
    <div 
      className={`${color} ${selectedColor === color ? 'selected' : ''}`}
      onClick={() => setSelectedColor(color)} 
     ></div>
  )
}

// This is my App component where I'm using the Color component.
const App = () => {
  // Inside this component, I'm also using useState to keep track of the currently selected color.
  // At the start, no color is selected, so I initialize the selectedColor state to be an empty string.
  const [selectedColor, setSelectedColor] = useState("");

  // Here is the render method of my App component. It's returning a block of JSX, which is like HTML embedded in JavaScript.
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        {/* The currently selected color name is displayed here */}
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {/* Here I'm using the Color component 3 times. */}
        {/* Each time, I'm giving it a different color prop. */}
        {/* I'm also passing the setSelectedColor function to each Color. */}
        {/* Lastly, I'm also passing the current selectedColor. */}
        <Color color="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
      </div>
    </div>
  );
};

// Lastly, I export my App component so I can import it and use it in other files.
export default App;
