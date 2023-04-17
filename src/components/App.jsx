import React, { Component } from "react";

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  }

  countPositiveFeedbackPercentage() {
    const good = this.state.good;
    const totalFeedback = this.countTotalFeedback();
    return Math.round((good * 100) / totalFeedback);
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    const { good, bad, neutral } = this.state;
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className='feedback'>

        <Section  title = 'Please leave feedback'>
        <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
           
        <Section title="Statistics">
          {totalFeedback === 0 ?
            (
              <Notification message="No feedback given" />
            ) :
            (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positiveFeedbackPercentage}
              />
            )}
        </Section>
       
      </div>
    );
  }
}