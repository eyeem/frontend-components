import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import { icons as iconsRaw } from '../src/styleConfig';
import { knobPropsFactory } from './knobs/helpers';
import { knobs, getKnobTypeForProp } from './knobs/icon';

import Icon from '../src/components/icon';

storiesOf('Icon', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(withKnobs)
  .add('with controllable props', () => {
    const props = knobPropsFactory(knobs, getKnobTypeForProp);

    return <Icon {...props} />;
  })
  .add('all icons', () => {
    const props = knobPropsFactory(knobs, getKnobTypeForProp);
    const icons = {
      buttons: iconsRaw.buttons.reduce((acc, curr) => [...acc, curr], []),
      eyeconfont: iconsRaw.eyeconfont.reduce((acc, curr) => [...acc, curr], []),
      services: iconsRaw.services.reduce((acc, curr) => [...acc, curr], []),
      uncategorized: iconsRaw.uncategorized.reduce(
        (acc, curr) => [...acc, curr],
        []
      )
    };
    const getIcon = type => (
      <span title={type} key={type} style={{ padding: '3px' }}>
        <Icon {...props} type={type} />
      </span>
    );
    return (
      <div style={{ background: 'black', padding: '20px' }}>
        <div style={{ padding: '20px' }}>
          {icons.buttons.map(type => getIcon(type))}
        </div>
        <div style={{ padding: '20px' }}>
          {icons.eyeconfont.map(type => getIcon(type))}
        </div>
        <div style={{ padding: '20px' }}>
          {icons.services.map(type => getIcon(type))}
        </div>
        <div style={{ padding: '20px' }}>
          {icons.uncategorized.map(type => getIcon(type))}
        </div>
      </div>
    );
  });
