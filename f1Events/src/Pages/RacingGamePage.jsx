import { useState, useEffect } from 'react';
import RacingCar from '../components/game/RacingCar';
import RacingGoal from '../components/game/RacingGoal';
import RacingObstacle from '../components/game/RacingObstacle';
import RacingGameLogic from '../components/game/RacingGameLogic';

const RacingGamePage = () => {

  const {
        position,
        obstacles,
        goalPosition,
        gameOver,
        reachedGoal
    } = RacingGameLogic(); // setting the state based on the RacingGameLogic 
  
    return (
        <section className='container mt-4 p-4 w-50 bg-dark border rounded'>
          <h2 className='text-light'>Racing Game 🎲</h2>
            <section className=" game-container m-6 p-4">
            <RacingCar position={position} />
              {obstacles.map((obstacle, index) => (
                <RacingObstacle key={index} position={obstacle} />
              ))}
              <RacingGoal position={goalPosition} />
            </section>
        </section>
      );
  };


export default RacingGamePage;



