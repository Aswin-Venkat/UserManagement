import React from 'react'
import PropTypes from 'prop-types'


const FormField = props => (
    <div className={`form-field ${props.addClassName}`}>{props.children}</div>
)


FormField.propTypes = {
    addClassName: PropTypes.string,
    children: PropTypes.any.isRequired
}

FormField.defaultProps = {
    addClassName: '',
    children: {}
}
export default FormField
