import React from 'react';
import './Task/';

const App = () => {
  return (
    <div className="secone">
      <div className="left-section">
        <div className="image-container">
          <img src="your-image-url.jpg" alt="Description" />
        </div>
        <div className="text-content">
          <h1>Find Your Perfect Look.</h1>
          <p>Discover the perfect pieces to complete your wardrobe.</p>
          <button className="explore-button">Explore</button>
        </div>
      </div>
      <div className="right-section">
        <div className="top-right">Top Right</div>
        <div className="bottom-right">Bottom Right</div>
      </div>
      <div className="full-width">Full Width</div>
    </div>
  );
};

export default App;
