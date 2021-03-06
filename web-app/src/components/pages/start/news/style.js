import styled from 'styled-components';

export const Container = styled.div`

`;

export const ArticleButton = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 15% 100px 15%;
  width: 70%;
  height: 30px;
  a{
    position: relative;
    color: #314D30;
    text-decoration: none;
    font-family: 'niramit bold';
  }
  a:after{
    content: '';
    position: absolute;
    top: calc(50% - 5px);
    right: -25px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-left: 16px solid #314D30;
    border-bottom: 8px solid transparent;
  }

  @media (max-width: 750px) {
    margin: 25px 15% 50px 15%;
  }
`;
