import classnames from 'classnames';
import React, { Component } from 'react';
import Button from '../../lib/Button';
import Icon from '../../lib/Icon';

function getJSON ( value ) {
    let json = JSON.stringify( value, 0, 2 );
    return json.replace( /"([^"]+)":/g, '$1:' ).trim();
}

let Prop = ( props ) => {
    let { attr, value } = props;
    attr = ` ${ attr }`;
    if ( value === true ) {
        return <span>{ attr }</span>;
    }
    switch ( typeof value ) {
        case 'string':
            value = `"${ value }"`;
            break;
        case 'object':
            // value = `{${ getJSON( value ) }}`;
            value = <span style={{ whiteSpace: 'pre' }}>{`{`}{ getJSON( value ) }{`}`}</span>;
            break;
        case 'boolean':
        case 'number':
        default:
            value = `{ ${ value } }`;
    }
    return <span>{ attr }={ value }</span>;
};

let Props = ( { el } ) => {
    let { props } = el;
    let { defaultProps } = el.type;
    defaultProps = defaultProps || {};

    let keys = Object
        .keys( props )
        .filter( key => key !== 'children' )
        .filter( key => defaultProps[ key ] !== props[ key ] )
        ;
    return (
        <span>
        { keys.map( key =>
            <Prop
                key={ key }
                attr={ key }
                value={ props[ key ] }
            />
        ) }
        </span>
    );
};
function getTag ( el ) {
    if ( typeof el.type === 'string' ) {
        return el.type;
    }
    return el.type.displayName || el.type.name;
}
function OpenTag ( props ) {
    let child = props.el;
    let tag = getTag( child );
    let childCount = React.Children.count( child.props.children );
    return (
        <code>
            { `<` }{ tag }
            <Props el={ child } />
            { childCount > 0 ? '>' : ' />' }
        </code>
    );
}
function CloseTag ( props ) {
    let child = props.el;
    let tag = getTag( child );
    let childCount = React.Children.count( child.props.children );
    if ( childCount === 0 ) {
        return <span />;
    }

    return (
        <code>
        { `</` }{ tag }{ `>` }
        </code>
    );
}
function Code ( props ) {
    let { el, ...other } = props;

    if ( !React.isValidElement( el ) ) {
        return <code>{ el }</code>;
    }

    let { children } = el.props;
    return (
    <div { ...other }>
        <OpenTag el={ el } />
        { React.Children.map( children, ( child, i ) =>
            <div style={{ marginLeft: '1em' }} key={ i }>
                <Code el={ child } />
            </div>
        ) }
        <CloseTag el={ el } />
    </div>
    );
}

class Example extends Component {
    state = { collapsed: true };
    toggle = ( e ) => {
        this.setState( {
            collapsed: !this.state.collapsed
        } );
        e.preventDefault();
    }
    render () {
        let { children } = this.props;
        let { collapsed } = this.state;
        return (
            <article className="example">
                <section className="components">
                    { children }
                </section>
                <section className="code">
                    <Button
                        className="code-collapse"

                        onClick={ this.toggle }>
                        <Icon
                            name="add"
                            className="collapse-icon"
                            style={{
                                transform: collapsed ? '' : 'rotateZ( 45deg )'
                            }}
                        />
                        Code
                    </Button>
                    <article className={ classnames( { collapsed }, 'code-samples' ) }>
                    { React.Children.map( children, ( child, i ) =>
                        <Code className="code-sample" key={ i } el={ child } />
                    ) }
                    </article>
                </section>
            </article>
        );
    }
}
export default Example;
