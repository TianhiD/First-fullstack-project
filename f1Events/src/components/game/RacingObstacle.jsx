import React from "react";

const RacingObstacle = ({ position }) => (
    <div className="obstacle position-absolute fs-4" style={{
        top: `${position.y}px`,
        left: `${position.x}px`
    }}>
        <p>🛑</p>
    </div>
    );

export default RacingObstacle;