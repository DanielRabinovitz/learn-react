import { useState } from 'react';
import { sculptureList } from '../../data/data.js';

export default function Gallery() {

  //For a hook, we define an array that gives us a getter and setter method.
  //useState is the function for setting a hook, creates a state controller
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  //setIndex and index are used again over here.
  function handleNextClick() {
    if(index === sculptureList.length-1){
      setIndex(0);
    } else{
      setIndex(index + 1);
    }
     //using a hook tells React to rerender the component
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}