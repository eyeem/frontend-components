/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function MailIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 16 16"
    >
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-2655.000000, -369.000000)">
          <g transform="translate(2615.000000, 111.000000)">
            <path d="M40.3737852,260.506536 C40.6485546,260.195921 41.051883,260 41.5052412,260 L54.4947588,260 C54.9437663,260 55.3468561,260.198241 55.6226444,260.509147 L48,266 L40.3737852,260.506536 L40.3737852,260.506536 Z M56,262.117931 L56,270.504455 C56,271.330422 55.3328702,272 54.4947588,272 L41.5052412,272 C40.6739194,272 40,271.320446 40,270.504455 L40,262.111072 L48.0156542,267.94604 L56,262.117931 L56,262.117931 Z" />
          </g>
          <g transform="translate(2615.000000, 111.000000)" />
        </g>
      </g>
    </svg>
  );
}

MailIcon.defaultProps = {
  size: 16
};

export default MailIcon;
