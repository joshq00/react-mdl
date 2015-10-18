import Descriptor from './Descriptor';
import mdl from '../';

const components = Object
	.keys( mdl )
	.map( name => ( {
		name,
		component: mdl[ name ],
	} ) );

export default () => (
	<div>
		{ /* describe mdl components */ }
		{ components.map( ( { name, component } ) =>
			<Descriptor
				key={ name }
				name={ name }
				component={ component }
				style={{ whiteSpace: 'pre-wrap' }}
				/>
		) }
	</div>
);
