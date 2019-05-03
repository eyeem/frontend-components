import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import StoryWrapper from '../src/Layout/StoryWrapper';
import Inputv2 from '../src/components/inputv2';

import Themer from './themer';

const themeDecorator = storyFn => <Themer>{storyFn()}</Themer>;

class Wrapper extends React.Component {
  state = { value: '' };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <Inputv2
        isValidated={this.props.isValidated}
        errorMessage={this.props.errorMessage}
        inputProps={{
          placeholder: 'Name',
          name: 'name',
          value: this.state.value,
          onChange: this.onChange,
          disabled: this.props.disabled,
          type: this.props.type
        }}
      />
    );
  }
}

storiesOf('Inputv2', module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(themeDecorator)
  .add('default', () => <Wrapper />)
  .add('validated', () => <Wrapper isValidated />)
  .add('invalid', () => <Wrapper errorMessage="This is the error message." />)
  .add('disabled', () => <Wrapper disabled />)
  .add('password', () => <Wrapper type="password" />);
