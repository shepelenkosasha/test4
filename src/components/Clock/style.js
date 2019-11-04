import styled from 'styled-components';

const ClockDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60vw;
  height: 15vh;
  background-color: #000000;
  color: #ffffff;
  margin: 0 auto;
  margin-top: 35vh;
  padding: 7vw 5vh;
`;

const Span = styled.span`
  color: #787878;
  font-size: 10vh;
`;

const ClockValue = styled.div`
  font-size: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const Descr = styled.span`
  color: #787878;
  font-size: 2vh;
  text-transform: uppercase;
`;

export { ClockDiv, Span, ClockValue, Descr };