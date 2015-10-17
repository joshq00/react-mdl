import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Checkbox extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        ripple: PropTypes.bool
    }

    static defaultProps = {
        ripple: true
    }

    render() {
        var { id, label, ripple, ...inputProps } = this.props;

        var inputId = 'checkbox-' + (label || id).replace(/\s+/g, '');
        var classes = classNames('mdl-checkbox mdl-js-checkbox', {
            'mdl-js-ripple-effect': ripple
        });

        return (
            <label className={classes} htmlFor={id}>
                <input
                    type="checkbox"
                    id={inputId}
                    className="mdl-checkbox__input"
                    {...inputProps}
                />
                {label ? <span className="mdl-checkbox__label">{label}</span> : null}
            </label>
        );
    }
}

export default mdlUpgrade(Checkbox);
