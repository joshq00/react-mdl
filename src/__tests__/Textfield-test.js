import test from 'tape';
import Textfield from '../Textfield';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument
} from 'react/lib/ReactTestUtils';

function render( component ) {
    return renderIntoDocument( component );
}
function find( node ) {
    return ReactDOM.findDOMNode( node );
}
test( 'no props', t => {
    t.plan( 1 );
    t.ok( find( render( <Textfield /> ) ), 'render' );
} );

test( 'with label', t => {
    let field = <Textfield label="Field" />;
    let node = render( field );
    let el = find( node );
    t.plan( 2 );
    t.ok( el, 'renders' );
    t.is( el.innerText, 'Field' );
} );

test( 'floating label', t => {
    let field = <Textfield floatingLabel={true} />;
    let node = render( field );
    let el = find( node );
    t.plan( 1 );
    t.ok( el, 'renders' );
} );

test( 'input attributes', t => {
    t.test( 'defaultValue', t => {
        let node = render( <Textfield label="Field" defaultValue="hi" /> );
        let el = find( node );
        let input = el.querySelector( 'input' );

        t.plan( 2 );
        t.ok( node, 'renders' );
        t.equal( input.value, 'hi', 'value matches' );
    } );

    t.test( 'native', t => {
        let validAttributes = {
            disabled: true,
            max: 5,
            maxLength: 10,
            min: 4,
            pattern: 'abcd',
            placeholder: 'enter text here',
            readOnly: true,
            size: 10,
            step: 1,
            value: 'abcd'
        };

        let node = render( <Textfield { ...validAttributes } /> );
        let el = find( node );
        let input = el.querySelector( 'input' );
        let attributes = Object.keys( validAttributes );

        t.plan( attributes.length );
        // check that each attribute was set on the input element
        attributes.forEach( attribute =>
            t.equal(
                '' + input[ attribute ],
                '' + validAttributes[ attribute ],
                attribute )
        );
    } );
} );

