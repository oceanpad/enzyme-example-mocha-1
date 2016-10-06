import React, { PropTypes } from 'react';
import Button from 'react-onsenui';

const propTypes = {};

const defaultProps = {};

class Foo2 extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Button>large</Button>
		);
	}
}

Foo2.propTypes = propTypes;
Foo2.defaultProps = defaultProps;

export default Foo2;
