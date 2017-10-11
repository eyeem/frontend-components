/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function ContactTumblrIcon(props: {
  size?: number,
  className: string,
  id: string
}) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24"
    >
      <g stroke="none" strokeWidth={1} fillRule="evenodd">
        <g transform="translate(-2762.000000, -199.000000)">
          <g transform="translate(2615.000000, 111.000000)" />
          <path d="M2776.47044,215.926157 C2775.22332,215.959715 2774.98139,215.050518 2775,214.004123 L2775,209.004123 L2778.01266,209.004123 L2778.01266,206.994994 L2775,206.994994 L2775,203.004123 C2774.98217,202.994846 2773,203.004123 2773,203.004123 C2773,203.004123 2770.88699,206.678097 2769,207.530324 L2769,209.004123 L2771,209.004123 L2771,215.004123 C2770.98971,216.403711 2772.27507,218.879225 2775.66837,218.820693 C2776.81325,218.801182 2778.08457,218.322 2778.36552,217.908374 L2777.72693,215.65769 C2777.43739,215.795825 2776.88329,215.916011 2776.47044,215.926157 Z" />
        </g>
      </g>
    </svg>
  );
}

ContactTumblrIcon.defaultProps = {
  size: 24
};

export default ContactTumblrIcon;
