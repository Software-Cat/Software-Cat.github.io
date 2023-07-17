import type {Preview} from '@storybook/react';

import {withThemeByClassName} from '@storybook/addon-styling';

import '../app/globals.css';

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
