import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import StoryWrapper from '../src/Layout/StoryWrapper';
import Selectv2 from '../src/components/selectv2';

import Themer from './themer';

const themeDecorator = storyFn => <Themer>{storyFn()}</Themer>;

class Wrapper extends React.Component {
  state = { value: '' };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const options = [
      {
        value: ''
      },
      {
        label: 'Cats',
        value: 'cats'
      },
      {
        label: 'Koalas',
        value: 'koalas'
      },
      {
        label: 'Dogs',
        value: 'dogs'
      }
    ];

    return (
      <Selectv2
        isValidated={this.props.isValidated}
        errorMessage={this.props.errorMessage}
        selectProps={{
          name: 'name',
          label: 'Pick your favorite',
          value: this.state.value,
          onChange: this.onChange,
          disabled: this.props.disabled,
          options
        }}
      />
    );
  }
}

storiesOf('Selectv2', module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(themeDecorator)
  .add('default', () => <Wrapper />)
  .add('validated', () => <Wrapper isValidated />)
  .add('invalid', () => <Wrapper errorMessage="This is the error message." />)
  .add('disabled', () => <Wrapper disabled />)
  .add('password', () => <Wrapper type="password" />);
