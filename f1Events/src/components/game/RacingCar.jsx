import React from "react";

const RacingCar = ({ position }) => (
    <div className="car position-absolute fs-1" style={{ 
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: "scale(-1, 1)"
    }}>
        <p>🏎️</p>
    </div>
);

export default RacingCar;