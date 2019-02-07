import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme as parentTheme } from '../src';

const WrappedButton = styled.span`
  padding: 0.5rem;
  margin-left: 1rem;
  cursor: pointer;
`;

const THEMES = ['dark', 'light'];

class Themer extends Component {
  state = {
    theme: THEMES[0]
  };

  setTheme = theme => this.setState({ theme });

  render() {
    return (
      <div style={{ marginTop: '1rem' }}>
        <span style={{ fontWeight: 600 }}>Theme:</span>
        {THEMES.map(theme => (
          <WrappedButton
            type="button"
            style={{
              borderBottom:
                this.state.theme === theme
                  ? '1px solid black'
                  : '1px solid transparent'
            }}
            key={theme}
            onClick={() => this.setTheme(theme)}>
            {theme}
          </WrappedButton>
        ))}

        <ThemeProvider theme={{ mode: this.state.theme, ...parentTheme }}>
          {this.props.children}
        </ThemeProvider>
      </div>
    );
  }
}

export default Themer;
