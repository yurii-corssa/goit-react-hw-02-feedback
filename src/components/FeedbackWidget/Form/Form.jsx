import { Btn, BtnWrapper, Title } from './Form.styled';

export const Form = ({ onIncrementValue }) => {
  return (
    <>
      <Title>Please leave feedback</Title>
      <BtnWrapper>
        <Btn onClick={() => onIncrementValue('good')}>Good</Btn>
        <Btn onClick={() => onIncrementValue('neutral')}>Neutral</Btn>
        <Btn onClick={() => onIncrementValue('bad')}>Bad</Btn>
      </BtnWrapper>
    </>
  );
};
