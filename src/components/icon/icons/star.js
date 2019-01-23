/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function StarIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 14 14">
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-2997.000000, -452.000000)">
          <g transform="translate(2998.000000, 453.000000)">
            <polygon points="6 8.7 2.47328849 10.854102 3.43214741 6.83434588 0.293660902 4.14589803 4.41297982 3.81565412 6 0 7.58702018 3.81565412 11.7063391 4.14589803 8.56785259 6.83434588 9.52671151 10.854102 " />
          </g>
          <g transform="translate(2997.000000, 452.000000)" />
        </g>
      </g>
    </svg>
  );
}

StarIcon.defaultProps = {
  size: 14
};

export default StarIcon;
