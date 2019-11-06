import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonClassName } from './Button';

storiesOf('Button', module)
    .add('default', () => <div>
        <div className="Flex-row">
            <Button className={ButtonClassName.primary}>primary</Button>
            <Button className={ButtonClassName.secondary}>secondary</Button>
            <Button className={ButtonClassName.tertiary}>tertiary</Button>
        </div>
        <div className="Flex-row">
            <Button small className={ButtonClassName.primary}>
                <i className="fa fa-check"/>
            </Button>
            <Button small className={ButtonClassName.secondary}>
                <i className="fa fa-times"/>
            </Button>
            <Button small className={ButtonClassName.tertiary}>
                <i className="fa fa-info"/>
            </Button>
        </div>
    </div>);