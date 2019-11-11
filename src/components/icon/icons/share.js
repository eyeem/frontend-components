/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function ShareIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        d="M9.989 12.882l-.873-.489-.977 1.745.872.489zm3.924 4.49l.872.49.977-1.746-.872-.489zm-4.844-7.72l-.848.53 1.06 1.696.847-.53zm5.862-1.304l.848-.53-1.06-1.696-.847.53zM7 16a4 4 0 004-4H9a2 2 0 01-2 2zm4-4a4 4 0 00-4-4v2a2 2 0 012 2zM7 8a4 4 0 00-4 4h2a2 2 0 012-2zm-4 4a4 4 0 004 4v-2a2 2 0 01-2-2zm14 10a4 4 0 004-4h-2a2 2 0 01-2 2zm4-4a4 4 0 00-4-4v2a2 2 0 012 2zm-4-4a4 4 0 00-4 4h2a2 2 0 012-2zm-4 4a4 4 0 004 4v-2a2 2 0 01-2-2zm4-8a4 4 0 004-4h-2a2 2 0 01-2 2zm4-4a4 4 0 00-4-4v2a2 2 0 012 2zm-4-4a4 4 0 00-4 4h2a2 2 0 012-2zm-4 4a4 4 0 004 4V8a2 2 0 01-2-2zm-3.989 8.627l4.902 2.745.977-1.744-4.901-2.746zm1.117-3.279l4.803-3-1.06-1.696-4.802 3z"
        fill="inherit"
      />
    </svg>
  );
}

ShareIcon.defaultProps = {
  size: 16
};

export default ShareIcon;
