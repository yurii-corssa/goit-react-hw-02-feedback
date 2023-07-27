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

  incrementValue = elem => {
    this.setState(prevState => ({
      [elem]: (prevState[elem] += 1),
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Form onIncrementValue={this.incrementValue} />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </Container>
    );
  }
}
