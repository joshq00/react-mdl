import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Radio extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        name: PropTypes.string,
        ripple: PropTypes.bool,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired
    }

    static defaultProps = {
        ripple: true
    }

    render() {
        var { className, name, ripple, value, ...inputProps } = this.props;
        var inputId = 'radio-' + name.replace(/\s+/g, '') + '-' + value.replace(/\s+/g, '');

        var classes = classNames('mdl-radio mdl-js-radio', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes} htmlFor={inputId}>
                <input
                    type="radio"
                    id={inputId}
                    className="mdl-radio__button"
                    name={name}
                    value={value}
                    {...inputProps}
                />
                <span className="mdl-radio__label">{this.props.children}</span>
            </label>
        );
    }
}

export default mdlUpgrade(Radio);
