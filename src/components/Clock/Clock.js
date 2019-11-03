import React, { Component } from 'react';
import { ClockDiv, Span, ClockValue, Descr } from './style';

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
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const { seconds, minutes, hours } = this.state;
    if (hours < 9 && minutes < 9 && seconds < 9) {
      this.setState({
        hours: '0' + new Date().getHours(),
        minutes: '0' + new Date().getMinutes(),
        seconds: '0' + new Date().getSeconds()
      });
    } else if (minutes < 9 && seconds < 9) {
      this.setState({
        hours: new Date().getHours(),
        minutes: '0' + new Date().getMinutes(),
        seconds: '0' + new Date().getSeconds()
      });
    } else if (seconds === 59 && minutes < 9) {
      this.setState({
        hours: new Date().getHours(),
        minutes: '0' + new Date().getMinutes(),
        seconds: '0' + new Date().getSeconds()
      });
    } else if (seconds === 59) {
      this.setState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: '0' + new Date().getSeconds()
      });
    } else if (seconds < 9) {
      this.setState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: '0' + new Date().getSeconds()
      });
    } else if (minutes === 0) {
      this.setState({
        hours: new Date().getHours(),
        minutes: '0' + new Date().getMinutes(),
        seconds: new Date().getSeconds()
      });
    } else if (minutes < 9) {
      this.setState({
        hours: new Date().getHours(),
        minutes: '0' + new Date().getMinutes(),
        seconds: new Date().getSeconds()
      });
    } else if (hours === 23) {
      this.setState({
        hours: '0' + new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      });
    } else if (hours < 9) {
      this.setState({
        hours: '0' + new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      });
    } else {
      this.setState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      })
    }
  }

  render() {

    const { hours, minutes, seconds, getWeekDay } = this.state;

    return (
      <ClockDiv>
        <ClockValue>
          {getWeekDay(new Date())}
          <Descr>day</Descr>
        </ClockValue>
        <Span>:</Span>
        <ClockValue>
          {hours}
          <Descr>hours</Descr>
        </ClockValue>
        <Span>:</Span>
        <ClockValue>
          {minutes}
          <Descr>minutes</Descr>
        </ClockValue>
        <Span>:</Span>
        <ClockValue>
          {seconds}
          <Descr>seconds</Descr>
        </ClockValue>
      </ClockDiv>
    );
  }
}

export default Clock;
