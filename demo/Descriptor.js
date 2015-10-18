import React from 'react';

export default class Descriptor extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
		component: React.PropTypes.func,
	};
	render () {
		let { component, ...other } = this.props;
		let { name, propTypes } = component;
		if ( this.props.name ) {
			name = this.props.name;
		}
		let props = getProps( propTypes );
		return (
			<pre { ...other }>
				&lt;<span style={{ color: 'blue' }}>{ name }</span>{ props } /&gt;
			</pre>
		);
	}
}
const types = new Map();
Object.keys( React.PropTypes ).forEach( key => {
	let type = React.PropTypes[ key ];
	types.set( type, key );
} );
function getType ( prop ) {
	return types.get( prop ) || '';
}
function getProps ( propTypes ) {
	if ( propTypes == null ) {
		return '';
	}
	return Object
		.keys( propTypes )
		.sort()
		.map( key =>
			<span>
				{ '\n    ' }
				<span style={{ color: 'green' }}>{ key }</span>
				={ `{${ getType( propTypes[ key ] ) }}` }
			</span>
		)
		;
}
