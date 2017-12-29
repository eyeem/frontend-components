/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function Trophy(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 15 15">
      <path d="M10.273 2c.437-.7 1.34-1 2.23-1h1.07C14.35 1 15 1.598 15 2.333v2.334C15 5.957 13.858 7 12.502 7h-.356c-.432 0-.825-.105-1.153-.285C10.89 8.382 9.63 9.732 8 9.965V13h3v1H4v-1h3V9.965c-1.624-.232-2.89-1.576-2.993-3.25-.328.18-.72.285-1.153.285h-.356C1.142 7 0 5.956 0 4.667V2.333C0 1.598.65 1 1.427 1h1.07c.89 0 1.793.3 2.23 1h5.546zM12.5 2c-.74 0-1.497.387-1.497 1.333v1.334c-.05.717.515 1.333 1.284 1.333h.214c.815 0 1.5-.696 1.5-1.556V2.89c0-.49-.39-.89-.856-.89H12.5zm-10 0h-.644C1.39 2 1 2.4 1 2.89v1.554C1 5.304 1.685 6 2.5 6h.213c.77 0 1.333-.616 1.284-1.333V3.333C3.997 2.387 3.24 2 2.5 2z" />
    </svg>
  );
}

Trophy.defaultProps = {
  size: 15
};

export default Trophy;
