import React from 'react';

const storyWrapper = (props) => (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
        {props.children}
    </div>
)

export default storyWrapper;