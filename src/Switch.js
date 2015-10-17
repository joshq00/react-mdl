import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class Switch extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        id: PropTypes.string.isRequired,
        ripple: PropTypes.bool
    }

    static defaultProps = {
        ripple: true
    }

    render() {
        var { className, id, ripple } = this.props;
        var inputId = 'switch-' + id;

        var classes = classNames('mdl-switch mdl-js-switch', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes} htmlFor={inputId}>
                <input
                    type="checkbox"
                    id={inputId}
                    className="mdl-switch__input"
                />
                <span className="mdl-switch__label">{this.props.children}</span>
            </label>
        );
    }
}

export default mdlUpgrade(Switch);
