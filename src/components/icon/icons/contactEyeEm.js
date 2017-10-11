/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function ContactEyeEmIcon(props: {
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
        <g transform="translate(-2618.000000, -199.000000)">
          <g transform="translate(2615.000000, 111.000000)" />
          <g transform="translate(2615.000000, 111.000000)" />
          <path d="M2634,210.004123 L2634,213.004123 L2628,213.004123 L2628,216.004123 L2634,216.004123 L2634,219.004123 L2625,219.004123 L2625,204.004123 L2634,204.004123 L2634,207.004123 L2628,207.004123 L2628,210.004123 L2634,210.004123 Z" />
        </g>
      </g>
    </svg>
  );
}

ContactEyeEmIcon.defaultProps = {
  size: 24
};

export default ContactEyeEmIcon;
