import React from 'react';
import { storiesOf } from '@storybook/react';
import { faCheck, faInfo, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <FontAwesomeIcon icon={faCheck}/>
            </Button>
            <Button small className={ButtonClassName.secondary}>
                <FontAwesomeIcon icon={faTimes}/>
            </Button>
            <Button small className={ButtonClassName.tertiary}>
                <FontAwesomeIcon icon={faInfo}/>
            </Button>
        </div>
    </div>);