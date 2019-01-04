import React from 'react';

import { render } from 'react-testing-library';

import Select from './index';

test('it renders default select with 2 options', () => {
    const testingOptions = [{text: 'firstText',value: 'firstValue'}, {text: 'secondText',value: 'secondValue'}];
    const { container } = render(<Select options={testingOptions}/>);
    const component = container.firstChild;
    expect(component).toBeTruthy();
    expect(component).toMatchSnapshot();
});
