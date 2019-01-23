/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function TimingIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 13 13">
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-4450.000000, -314.000000)">
          <path d="M4457,315.022422 L4457,314 L4456,314 L4456,315.022422 C4453.19675,315.275036 4451,317.630979 4451,320.5 C4451,323.537566 4453.46243,326 4456.5,326 C4459.53757,326 4462,323.537566 4462,320.5 C4462,318.937579 4461.34851,317.527322 4460.30236,316.526067 L4461.12132,315.707107 L4460.41421,315 L4459.51496,315.899254 C4458.78023,315.416796 4457.92299,315.105597 4457,315.022422 Z M4456,317 L4457,317 L4457,321 L4456,321 L4456,317 Z" />
        </g>
      </g>
    </svg>
  );
}

TimingIcon.defaultProps = {
  size: 12
};

export default TimingIcon;
