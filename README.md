# frontend-components
Shareable React Components for Frontend projects at EyeEm

- Overview of all elements at https://github.com/eyeem/frontend-styleguide
- this assumes you're using https://necolas.github.io/normalize.css/ or something similar in your projects


## Development
This project itself doesn't feature a showcase app, it should be developed together with `frontend-styleguide`
- in `frontend-components`:
- `$ (sudo) npm link` (creates link to eyeem-components)
- `$ npm run watch`


- in `frontend-styleguide`
- `npm link eyeem-components` (adss eyeem-components as symlink into node_modules folder)
- `npm run start`

## Publish new version
- update version number in `package.json`
- `$ npm publish`
