//import PropTypes from 'prop-types';
import React from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import { Container } from './Main.styled';

export class Feedback extends React.Component {
  static defaultProps = {
    defaultValue: 0,
  };

  state = {
    good: this.props.defaultValue,
    neutral: this.props.defaultValue,
    bad: this.props.defaultValue,
  };
  makeVote = key => {
    this.setState(prevValue => ({
      [key]: prevValue[key] + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section
          title={'Please leave feedback'}
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.makeVote}
              countTotalFeedback={() => {
                this.countTotalFeedback();
              }}
            />
          }
        />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section
            title={'Statistic'}
            children={
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positive}
              />
            }
          />
        )}
      </Container>
    );
  }
}
