import PropTypes from 'prop-types';
import { Container } from './flexStyle';

export default function Flex({ children, orientation }) {
  return (
    <Container orientation={ orientation } >
      { children }
    </Container>
  );
}

Flex.propTypes = {
  children: PropTypes.node,
  orientation: PropTypes.string,
};
