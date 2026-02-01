/* TITLE: Program for making use of React Hooks that displays four buttons namely, 
         "Red", "Blue", "Green", "Yellow". On clicking any of these buttons, 
         the code displays the message that you have selected that particular color.
  NAME: Mirza Sumaiya Shakil Ahmed
  BRANCH: AI & Data Science (2nd Year)
*/

import React, { useState } from 'react';

function ColorSelector() {
    // React Hook: useState to manage the selected color state
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
            <h2>Select a Color:</h2>
            
            {/* Color Buttons */}
            <button 
                onClick={() => handleColorClick('Red')} 
                style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', margin: '5px', cursor: 'pointer', border: 'none', borderRadius: '5px' }}>
                Red
            </button>

            <button 
                onClick={() => handleColorClick('Blue')} 
                style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', margin: '5px', cursor: 'pointer', border: 'none', borderRadius: '5px' }}>
                Blue
            </button>

            <button 
                onClick={() => handleColorClick('Green')} 
                style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', margin: '5px', cursor: 'pointer', border: 'none', borderRadius: '5px' }}>
                Green
            </button>

            <button 
                onClick={() => handleColorClick('Yellow')} 
                style={{ backgroundColor: 'gold', color: 'black', padding: '10px 20px', margin: '5px', cursor: 'pointer', border: 'none', borderRadius: '5px' }}>
                Yellow
            </button>

            {/* Conditional Rendering for Message */}
            {selectedColor && (
                <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
                    <p>You have selected <span style={{ color: selectedColor.toLowerCase() === 'yellow' ? 'orange' : selectedColor }}>{selectedColor}</span>.</p>
                </div>
            )}
        </div>
    );
}

export default ColorSelector;
