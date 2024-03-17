import React from 'react';
import './App.css';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <div className="Card">
                <button className="Button">Palyginti</button>
                <img src="src/assets/pc1.jpg" alt="Lenovo" className="Photo" />
                <div className="Details">
                    <h2 style={{ fontFamily: 'Arial' }}>Lenovo</h2>
                    <p style={{ fontFamily: 'Arial' }}>Nesiojamas Kompiuteris</p>
                    <p className="Price">
                        <span className="MonthlyPrice">€100 mėn.</span>
                        <span className="FullPrice">€1200</span>
                    </p>
                </div>
            </div>
            <div className="Card">
                <button className="Button">Palyginti</button>
                <img src="src/assets/pc2.jpg" alt="HP" className="Photo" />
                <div className="Details">
                    <h2 style={{ fontFamily: 'Arial' }}>HP</h2>
                    <p style={{ fontFamily: 'Arial' }}>Nesiojamas Kompiuteris</p>
                    <p className="Price">
                        <span className="MonthlyPrice">€90 mėn.</span>
                        <span className="FullPrice">€1100</span>
                    </p>
                </div>
            </div>
            <div className="Card">
                <button className="Button">Palyginti</button>
                <img src="src/assets/pc3.jpg" alt="Acer" className="Photo" />
                <div className="Details">
                    <h2 style={{ fontFamily: 'Arial' }}>Acer</h2>
                    <p style={{ fontFamily: 'Arial' }}>Nesiojamas Kompiuteris</p>
                    <p className="Price">
                        <span className="MonthlyPrice">€80 mėn.</span>
                        <span className="FullPrice">€1000</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
