import PropTypes from 'prop-types';
import { List, Item, Title, ItemLabel, ItemValue } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <Title>Statistics</Title>
      <List>
        <Item>
          <ItemLabel>good</ItemLabel>
          <ItemValue>{good} </ItemValue>
        </Item>
        <Item>
          <ItemLabel>neutral</ItemLabel>
          <ItemValue>{neutral} </ItemValue>
        </Item>
        <Item>
          <ItemLabel>bad</ItemLabel>
          <ItemValue>{bad} </ItemValue>
        </Item>
      </List>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
