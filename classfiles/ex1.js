import React from 'react'; // required React for JSX (JS+HTML) statements
import ReactDOM from 'react-dom';



// we are using html statements so react module importing is must
ReactDOM.render(<h2>HELLO KAVYA</h2>, document.getElementById('root'));



// render() with multiple statements -> parent tag is must (<div>)
ReactDOM.render(<div>

    <h4> WELCOME TO REACT </h4>
    <p>
    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
    </p>
    
    </div>, document.getElementById('root1')
);



//javascript Function 
function Home() 
{
    return(
        <div>
            <p>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p> 
        </div> );
}

// for function calling with html statement
ReactDOM.render(<Home />, document.getElementById('root2'));

