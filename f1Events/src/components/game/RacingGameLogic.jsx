import { useState, useEffect } from "react";
import RacingCar from "./RacingCar";
import RacingGoal from "./RacingGoal";
import RacingObstacle from "./RacingObstacle";


const RacingGameLogic = () => {

    const startPosition = { x: 0, y: 0 }; // starting point of the car in x and y coordinates
    const [position, setPosition] = useState(startPosition); 
    const [direction, setDirection] = useState(null);

    const [obstacles, setObstacles] = useState([ // sets the state of the obstacles--> number of obstacles and they're x and y coordinates
        { x: 100, y: 80 },
        { x: 250, y: 100 },
        { x: 350, y: 200 },
        { x: 150, y: 250 },
        { x: 350, y: 300 },
        { x: 450, y: 250 },
        { x: 400, y: 150 },
        { x: 550, y: 200}
    ]);

    const [goalPosition, setGoal] = useState({ x: 550, y: 310 }); // state of the goal and its coordinates
    const [gameOver, setGameOver] = useState(false); //sets the default state of the game to false in both cases
    const [reachedGoal, setReachedGoal] = useState(false);
  
    const handleDirectionKey = ({key}) => { // this code sets the direction of the car based on the direction key pressed
      const directionKey = {
        'ArrowUp': 'up',
        'ArrowDown': 'down',
        'ArrowLeft': 'left',
        'ArrowRight': 'right'
      };
      setDirection(directionKey[key]);
    };
  
    const handleNoKey = () => { // sets the direction to null when no key is pressed
      setDirection(null);
    };
  
    const restartGame = () => { // resets the game to its initial state
      setPosition(startPosition);
      setDirection(null);
      setGameOver(false);
      setReachedGoal(false);
    };
  
    const updateGamePosition = () => { // updates the position of the car
      if (direction && !gameOver && !reachedGoal) {
        const newPosition = { ...position };
        switch (direction) {
          case 'up':
            newPosition.y -= 30;
            break;
          case 'down':
            newPosition.y += 30;
            break;
          case 'left':
            newPosition.x -= 30;
            break;
          case 'right':
            newPosition.x += 30;
            break;
          default:
            break;
        }
  
        // Check collision with obstacles
        const obstacleCrash = obstacles.some(
          (obstacle) =>
            newPosition.x < obstacle.x + 20 &&
            newPosition.x + 20 > obstacle.x &&
            newPosition.y < obstacle.y + 20 &&
            newPosition.y + 20 > obstacle.y
        );
  
        // Check if the goal is reached
        const goalReached =
          newPosition.x < goalPosition.x + 40 &&
          newPosition.x + 40 > goalPosition.x &&
          newPosition.y < goalPosition.y + 40 &&
          newPosition.y + 40 > goalPosition.y;
  
          
        if (obstacleCrash) {
          setGameOver(true);
          alert("Sorry, you lost🥉 Game Over!🙁");
          restartGame();
        } else {
          setPosition(newPosition);
        }
  
        if (goalReached) {
          setReachedGoal(true);
          alert("Congratulations, you made the goal! 🎉 Winner! 🥇");
          restartGame();
        }
      }
    };
  
    useEffect(() => { // event listeners for the direction keys
      window.addEventListener('keydown', handleDirectionKey);
      window.addEventListener('keyup', handleNoKey);
  
      const gameInterval = setInterval(() => {
        updateGamePosition();
      }, 100);
  
      return () => { // removes the event listeners when the game is lost or won
        window.removeEventListener('keydown', handleDirectionKey);
        window.removeEventListener('keyup', handleNoKey);
        clearInterval(gameInterval);
      };
    }, [direction, gameOver, reachedGoal]);

    return {
      position,
      setPosition,
      direction,
      setDirection,
      obstacles,
      setObstacles,
      goalPosition,
      setGoal,
      gameOver,
      setGameOver,
      reachedGoal,
      setReachedGoal,
      handleDirectionKey,
      handleNoKey,
      restartGame,
      updateGamePosition
  };

}

export default RacingGameLogic;