import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import text from './../assets/text'
import reactLogo from '/react.svg'
import reactBootstrapLogo from '/react-bootstrap.svg'
import viteLogo from '/vite.svg'
import PropTypes from 'prop-types'

const About = ({lang}) => {
    const selected_lang = lang || 'en'
    return (
        <Row className="text-center">
            <Col>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="position-relative logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="position-relative logo react" alt="React logo" />
                </a>
                <a href="https://react-bootstrap.netlify.app" target="_blank">
                    <img src={reactBootstrapLogo} className="position-relative logo react-bootstrap" alt="React-Bootstrap logo" />
                </a>
            </Col>
            <h1 className="">{text.vite_react_react_bootstrap[selected_lang]}</h1>
            <p className="read-the-docs mt-1">
                {text.click_the_logos[selected_lang]}
            </p>
        </Row>
    )
}

About.propTypes = {
    lang: PropTypes.string
}

export default About;  