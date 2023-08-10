import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import './counter.scss';

function Counter(props) {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div
        className={`counter ${props.themeColor || ''} ${props.className || ''}`}
      >
        <ScrollTrigger
          className="counter-inner"
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          {props?.countIcon && (
            <div className="counter-icon">
              <i className={props.countIcon}></i>
            </div>
          )}
          <div className="counter-content">
            {counterOn && (
              <div className={`counter-info ${props.countSize || ''}`}>
              <CountUp
                className="timer"
                start={props.countStart}
                end={props.countEnd}
                duration={3}
              />
              {props?.separator && <label>{props.separator}</label>}
              </div>
            )}
            {props?.countTitle && <label>{props.countTitle}</label>}
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

export default Counter;
