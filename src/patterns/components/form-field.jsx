import React from 'react'
import PropTypes from 'prop-types'

FormField.propTypes = {
    addClassName: PropTypes.string,
    children: PropTypes.any.isRequired
}

FormField.defaultProps = {
    addClassName: '',
    children: {}
}

const FormField = props => (
    <div className={`form-field ${props.addClassName}`}>{props.children}</div>
)

export default FormField
