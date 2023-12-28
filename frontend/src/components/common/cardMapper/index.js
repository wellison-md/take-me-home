import { Container } from "./cardmapperStyle";
import Card from "../card";
import PropTypes from 'prop-types';

export default function CardMapper({ list }) {
  return (
    <Container>
      {
        list.length === 0
        ? <p>Carregando...</p>
        : list.map((p) => (<Card key={ p.id } { ...p } />))
      }
    </Container>
  );
}

CardMapper.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()),
}

CardMapper.defaultProps = {
  list: [],
}
