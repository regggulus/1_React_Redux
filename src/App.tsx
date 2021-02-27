import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            This is App component
            <div>
                <Rating/>
                <Accordion/>
            </div>

        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}
function Star() {
    return (
        <div>
            <div>star</div>
        </div>
    )
}

function Accordion() {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </ul>
        </div>
    )
}

export default App;
