import React from 'react';
import { storiesOf } from '@storybook/react';
import { faBan, faCheck, faInfo, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './Button';

storiesOf('Button', module)
    .add('default', () => <div>
            <div className="Flex-row">
                <Button variant={Button.variant.primary}>primary</Button>
                <Button variant={Button.variant.secondary}>secondary</Button>
                <Button variant={Button.variant.tertiary}>tertiary</Button>
                <Button disabled>disabled</Button>
            </div>
            <div className="Flex-row">
                <Button small variant={Button.variant.primary}>
                    <FontAwesomeIcon icon={faCheck}/>
                </Button>
                <Button small variant={Button.variant.secondary}>
                    <FontAwesomeIcon icon={faTimes}/>
                </Button>
                <Button small variant={Button.variant.tertiary}>
                    <FontAwesomeIcon icon={faInfo}/>
                </Button>
                <Button small disabled>
                    <FontAwesomeIcon icon={faBan}/>
                </Button>
            </div>
        </div>
    );