import { configure } from '@storybook/react';
import './../src/styles/app.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.tsx$/), module);
