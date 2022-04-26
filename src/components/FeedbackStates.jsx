import React from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStates({}) {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1);

  return (
    <div className="feedbacl-states">
      <h4>{feedback.length} Reviews</h4>
      <h4> Averge Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStates;
