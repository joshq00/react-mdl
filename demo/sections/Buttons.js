import React from 'react';

import Example from './Example';
import Icon from '../../lib/Icon';
import Button from '../../lib/Button';
import IconButton from '../../lib/IconButton';
import FABButton from '../../lib/FABButton';

let Colored = ( props ) => (
    <Example>
        <FABButton colored>
            <Icon name="add" />
        </FABButton>
        <FABButton colored ripple={ false }>
            <Icon name="add" />
        </FABButton>
    </Example>
);

export default ( props ) => (
    <section { ...props }>
        <h3>Buttons</h3>
        <Colored />

        <Example>
            <FABButton>
                <Icon name="add" />
            </FABButton>
            <FABButton ripple={ false }>
                <Icon name="add" />
            </FABButton>
            <FABButton disabled>
                <Icon name="add" />
            </FABButton>
        </Example>

        <Example>
            <Button raised>Button</Button>
            <Button raised ripple={ false }>Button</Button>
            <Button raised disabled>Button</Button>
        </Example>

        <Example>
            <Button raised colored>Button</Button>
            <Button raised accent>Button</Button>
            <Button raised accent ripple={ false }>Button</Button>
        </Example>

        <Example>
            <Button>Button</Button>
            <Button ripple={ false }>Button</Button>
            <Button disabled>Button</Button>
        </Example>

        <Example>
            <Button primary colored>Button</Button>
            <Button accent>Button</Button>
        </Example>

        <Example>
            <IconButton name="mood" />
            <IconButton colored name="mood" />
        </Example>

        <Example>
            <FABButton mini>
                <Icon name="add" />
            </FABButton>
            <FABButton colored mini>
                <Icon name="add" />
            </FABButton>
        </Example>
    </section>
);