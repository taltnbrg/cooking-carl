import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

const AlertMessage = ({variant, message}) => {
  return (
    <>
        <Alert key={variant} variant={variant}>
            {message}
        </Alert>
    </>
  )
}

AlertMessage.propTypes = {
    variant: PropTypes.string,
    message: PropTypes.string
}

export default AlertMessage;