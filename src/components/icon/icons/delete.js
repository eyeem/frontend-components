/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function DeleteIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 16 16">
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-1493.000000, -369.000000)">
          <g transform="translate(733.000000, 369.000000)">
            <path d="M762.982,5 L762.982,14.0046024 C762.982,14.5543453 763.437664,15 763.977398,15 L771.986602,15 C772.536345,15 772.982,14.5443356 772.982,14.0046024 L772.982,5 L762.982,5 Z M770.969976,2 C770.969976,2 770.969957,1.32958984 770.969976,1.0043335 C770.970009,0.461486816 770.542181,0 770.037603,0 L766.038213,0 C765.473028,0 765.003484,0.435668945 765.003484,1.0043335 L765.003484,2 L762.988111,2 C762.432451,2 761.982,2.44386482 761.982,3 L761.982,4 L773.982,4 L773.982,3 C773.982,2.44771525 773.537565,2 772.97904,2 L770.969976,2 Z" />
          </g>
          <g transform="translate(733.000000, 369.000000)" />
        </g>
      </g>
    </svg>
  );
}

DeleteIcon.defaultProps = {
  size: 16
};

export default DeleteIcon;
