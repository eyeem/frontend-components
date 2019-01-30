import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { colors } from '../src/theme';

const StyledFlexiContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCircle = styled.div`
  width: 100px;
  height: 100px;
  background: ${props => props.color};
  border-radius: 50%;
`;

const StyledColorContainer = styled.div`
  margin-right: 1rem;
  text-align: center;
`;

storiesOf('UI.all', module)
  // .addDecorator((story, context) => withInfo('')(story)(context))
  .add('Theme', () => {
    const colorCategories = Object.keys(colors);

    const container = (
      <div>
        {colorCategories.map(category => {
          const childColors = Object.keys(colors[category]);
          const colorMap = childColors.map(childColor => ({
            color: childColor,
            hex: colors[category][childColor]
          }));

          const element = (
            <div>
              <h1>{category}</h1>
              <StyledFlexiContainer>
                {colorMap.map(val => (
                  <StyledColorContainer key={`c-${val.color}`}>
                    <StyledCircle color={val.hex} />
                    <p>{val.color}</p>
                    <p>{val.hex}</p>
                  </StyledColorContainer>
                ))}
              </StyledFlexiContainer>
            </div>
          );

          return element;
        })}
      </div>
    );

    return container;
  });
