import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import mdlUpgrade from './utils/mdlUpgrade';

class IconToggle extends React.Component {
    static propTypes = {
        checked: PropTypes.bool,
        className: PropTypes.string,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        ripple: PropTypes.bool
    }

    static defaultProps = {
        ripple: true
    }

    render() {
        var { checked, className, id, name, ripple, ...inputProps } = this.props;
        var inputId = 'icon-toggle-' + id;

        var classes = classNames('mdl-icon-toggle mdl-js-icon-toggle', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes} htmlFor={inputId}>
                <input
                    type="checkbox"
                    id={inputId}
                    className="mdl-icon-toggle__input"
                    value={checked}
                    {...inputProps}
                />
                <Icon className="mdl-icon-toggle__label" name={name} />
            </label>
        );
    }
}

export default mdlUpgrade(IconToggle);
