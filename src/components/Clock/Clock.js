import React, { Component } from 'react';
import moment from 'moment';
import { ClockDiv, Span, ClockValue, Descr } from './style';

export default class Clock extends Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds()
    })
  }

  render() {
    return (
      <ClockDiv>
        <ClockValue>
          {moment().format('dd')}
          <Descr>day</Descr>
        </ClockValue>
        <Span>:</Span>
        <ClockValue>
          {moment().format('HH')}
          <Descr>hours</Descr>
        </ClockValue>
        <Span>:</Span>
        <ClockValue>
          {moment().format('mm')}
          <Descr>minutes</Descr>
        </ClockValue>
        <Span>:</Span>
        <ClockValue>
          {moment().format('ss')}
          <Descr>seconds</Descr>
        </ClockValue>
      </ClockDiv>
    );
  }
}
