import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${ (props) => props.orientation ?
    props.orientation : 'row' };
  flex-wrap: wrap;
  justify-content: center;
`;