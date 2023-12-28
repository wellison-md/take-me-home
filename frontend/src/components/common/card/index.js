import { useState } from "react";
import { CardContainer } from "./cardStyle";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import placeholderimg2 from '../../../assets/placeholderimg2.png';

export default function Card({ title, image, id }) {
  const [cardname, setCardname] = useState(false);
  const BASE_ROUTE = '/petprofile';
  const navigate = useNavigate();

  return (
    <CardContainer
      onMouseEnter={ () => setCardname(!cardname) }
      onMouseLeave={ () => setCardname(!cardname) }
      onClick={ () => navigate(`${BASE_ROUTE}/${id}`) }
    >
      <img src={ image } alt={ title } />
      { cardname && <p>{ title }</p> }
    </CardContainer>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
}

Card.defaultProps = {
  id: '',
  image: placeholderimg2,
  title: 'Card-name',
}
