import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput } from './TextInput';

storiesOf('Form', module)
    .add('TextInput', () => <div>
        <div className="Flex-column">
            <TextInput label="First name" required/>
            <TextInput label="Last name" required/>
            <TextInput label="email" type="email" required/>
            <TextInput label="Long long long very long label" required/>
        </div>
    </div>);