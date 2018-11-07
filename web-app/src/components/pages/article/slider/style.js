import styled from 'styled-components';

export const Container = styled.div`

  img{
    border-radius: 5px;
  }

  .carousel .slide img{
    width: auto;
    height: 400px;
    padding-bottom: 40px;

    @media (max-width: 750px) {
      width: 100%;
      height: auto;
    }

  }

  .carousel .slide{
    background: white;
  }

  .carousel.carousel-slider{
    min-width: none;
  }

  .carousel .control-dots{
    ${
      props => props.numImg < 2 &&
      `display: none;`
    }
  }

  .carousel .control-dots .dot{
    background: var(--dark-green);
    height: 10px;
    width: 10px;
    box-shadow: 2px 2px 4px rgba(49, 77, 48, .9);
  }
`;
