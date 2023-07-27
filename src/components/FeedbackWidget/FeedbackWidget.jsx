import { Component } from 'react';
import { Container } from './FeedbackWidget.styled';
import { Statistics } from './Statistics/Statistics';
import { Form } from './Form/Form';

export class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementValue = key => {
    this.setState(prevState => ({
      [key]: (prevState[key] += 1),
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const value = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(value);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercent = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Form onIncrementValue={this.incrementValue} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedbackPercent={positiveFeedbackPercent}
        />
      </Container>
    );
  }
}
