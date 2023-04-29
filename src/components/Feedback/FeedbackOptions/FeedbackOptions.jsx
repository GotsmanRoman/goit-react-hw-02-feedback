import React from 'react';
import { NavButtons, Button } from './FeedbackOptions.module';

const FeedbackOptions = ({ options, onLeaveFeedback, countTotalFeedback }) => (
  <NavButtons>
    {options.map(item => {
      return (
        <Button
          key={item}
          onClick={() => {
            onLeaveFeedback(item);
            countTotalFeedback();
          }}
        >
          {item}
        </Button>
      );
    })}
  </NavButtons>
);

export { FeedbackOptions };
