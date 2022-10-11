import React from "react"; // importanting React to use JSX syntax
import RecipeTitle from "./RecipeTitle";
import './index.css'
// Creating a function named App
function App(){
    return (  // must have a root element and the article element is the root element
        <article>
            <h1>Recipe Manager</h1> 
            <RecipeTitle />
        </article> // with a h1 element nested inside article lement
    )
}
export default App; // exporting the function