import React from 'react';

const storyWrapper = props => (
  <div
    style={{ marginTop: '100px', paddingLeft: '40px', paddingRight: '40px' }}>
    {props.children}
  </div>
);

export default storyWrapper;
