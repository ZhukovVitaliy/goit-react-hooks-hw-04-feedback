import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Section } from 'components/Section/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackBtns = { good, neutral, bad };
  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = (good * 100) / totalFeedback;

  const handleIncrement = e => {
    const { name } = e.currentTarget;
    console.log(name);

    if (name === 'good') {
      setGood(state => state + 1);
    }
    if (name === 'neutral') {
      setNeutral(state => state + 1);
    }
    if (name === 'bad') {
      setBad(state => state + 1);
    }

    // this.setState(prevState => {
    //   return {
    //     [name]: prevState[name] + 1,
    //   };
    // });
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackBtns)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage.toFixed()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
