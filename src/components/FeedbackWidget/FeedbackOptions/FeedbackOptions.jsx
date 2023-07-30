import { nanoid } from 'nanoid';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => {
    const id = nanoid();

    return (
      <Btn key={id} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Btn>
    );
  });
