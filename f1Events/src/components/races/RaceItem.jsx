import React from 'react';

const RaceItem = ({ race }) => (
  <article className=" border border-2 border-primary rounded bg-dark text-light mb-2 p-2 fw-medium">
    <div>GrandPrix: {race.grandPrix}</div>
    <div>Name: {race.winnerName}</div>
    <div>Laps: {race.numberOfLaps}</div>      
    <div>Time: {race.winnerTime}</div>
  </article>
);

export default RaceItem;