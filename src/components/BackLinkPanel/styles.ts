import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLinkPanel = styled.div`
  margin: auto;
  width: 100px;
`

export const BackLink = styled(Link)`
  text-decoration: none;
`

export const BackButton = styled.button`
  width: 100%;
  background-color: #a537fd;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'bold';
  border: none;
  cursor: pointer;
`
