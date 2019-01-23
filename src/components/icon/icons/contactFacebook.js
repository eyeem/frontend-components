/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function ContactFacebookIcon(props: {
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
      viewBox="0 0 24 24">
      <g stroke="none" strokeWidth={1} fillRule="evenodd">
        <g transform="translate(-2666.000000, -199.000000)">
          <g transform="translate(2615.000000, 111.000000)" />
          <g transform="translate(2615.000000, 111.000000)" />
          <path d="M2679,220.004123 L2679,212.004123 L2681.69527,212.004123 L2682.09254,209.008701 L2679,209.008701 L2679,207.381592 C2679.04172,206.489608 2679.28939,205.881694 2680.56855,205.881694 L2682,205.881006 L2682,203.125507 C2681.91777,203.088029 2680.94937,203.004123 2679.82273,203.004123 C2677.47062,203.004123 2676,204.446872 2676,207.074123 L2676,209.008701 L2673,209.008701 L2673,212.004123 L2676,212.004123 L2676,220.004123 L2679,220.004123 Z" />
        </g>
      </g>
    </svg>
  );
}

ContactFacebookIcon.defaultProps = {
  size: 24
};

export default ContactFacebookIcon;
