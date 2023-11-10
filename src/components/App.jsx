import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
 
  const [good, setGood] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);



  const handleClick = option => {
  
  switch (option) {
    case 'good': {
      setGood(prevGood => prevGood + 1);
      return;
    }
      case 'neutral': {
      setNeutral(prevNeutral => prevNeutral + 1);
      return;
    }
      case 'bad': {
      setBad(prevBad => prevBad + 1);
      return;
    }
    default: {
      return;
      }
    };
  
  
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  
    return (
      <div>
       <Section title="Please leave feedback"/>
        <Section>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
          />
        </Section>
        <Section>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
           ) : (<Notification message="There is no feedback" />)}</Section>
         
      </div>
      
    );
  
  
  }
