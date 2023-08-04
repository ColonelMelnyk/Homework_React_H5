import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoreInfo = styled.div`
  border-top: black solid 1px;
  border-bottom: black solid 1px;
  padding: 10px;
`;
export const ReviewList = styled.div`
list-style-type: none;
`
export const ReviewBlock = styled.div`
border-bottom: 1px solid #000000;
`

export const BackButton = styled(Link)`
  display: block;
  width: 60px;
  text-align: center;
  border: 1px black solid;
  border-radius: 4px;
  text-decoration: none;
  margin-bottom: 5px;
  color: #000000;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`;

export const MovieDetail = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px;
`;
