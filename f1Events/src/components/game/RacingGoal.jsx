import React from "react";

const RacingGoal = ({ position }) => (  
    <div className="goal position-absolute fs-4" style={{
        top: `${position.y}px`,
        left: `${position.x}px`
    }}>
        <p>🏁</p>
    </div>
);

export default RacingGoal;