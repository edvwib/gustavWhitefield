import styled from 'styled-components';

export const Container = styled.div`


`;

export const ArtBtn = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 15% 100px 15%;
  width: 70%;
  height: 30px;
a{
  position: relative;
  color: var(--dark-green);
  text-decoration: none;
  font-family: 'niramit bold';
}
a:after{
  content: '';
  position: absolute;
  top: calc(50% - 6px);
  right: -20px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 16px solid var(--another-green);
  border-bottom: 8px solid transparent;
}

@media (max-width: 750px) {
  margin: 25px 15% 50px 15%;
}
`;
