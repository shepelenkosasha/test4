import React, { Component } from 'react';
import styled from 'styled-components';

const ClockDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60vw;
  heigth: 15vh;
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
`;

const Descr = styled.span`
  color: #787878;
  font-size: 2vh;
  text-transform: uppercase;
`;

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getWeekDay(date) {
        const days = ['SU', 'MO', 'TY', 'WE', 'TH', 'FR', 'SA'];
      
        return days[date.getDay()];
      },
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    });
  }

  render() {
    return (
      <ClockDiv>
        <ClockValue>
          {this.state.getWeekDay(new Date())}
          <Descr>day</Descr>
        </ClockValue>
        <Span>:</Span>
        <ClockValue>
          {this.state.hours}
          <Descr>hours</Descr>
        </ClockValue>
        <Span>:</Span>
        <ClockValue>
          {this.state.minutes}
          <Descr>minutes</Descr>
        </ClockValue>
        <Span>:</Span>
        <ClockValue>
          {this.state.seconds}
          <Descr>seconds</Descr>
        </ClockValue>
      </ClockDiv>
    );
  }
}

export default Clock;
