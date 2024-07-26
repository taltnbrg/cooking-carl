import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import text from './../assets/text';
// import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';

const Header = ({ lang, handleHome, handleAbout, handleAssistant }) => {
  const selectedLang = lang || 'en';

  return (
    <>
      <Navbar
        collapseOnSelect
        className="position-absolute rounded-bottom-2 z-dropdown-menu p-2 glass-background w-100 align-items-end text-end flex-row-reverse"
        bg="light-dark"
        expand="sm"
      >
        <Navbar.Brand className="h1 pb-0" href="#home">
          {text.site_title[selectedLang]}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="w-fit-content align-self-end" onClick={handleHome} href="#home">
              {text.nav_home[selectedLang]}
            </Nav.Link>
            <Nav.Link className="w-fit-content align-self-end" onClick={handleAssistant} href="#chat">
              {text.nav_assistant[selectedLang]}
            </Nav.Link>
            <Nav.Link className="w-fit-content align-self-end" onClick={handleAbout} href="#about">
              {text.nav_about[selectedLang]}
            </Nav.Link>
            {/* <Nav.Item className="w-fit-content align-self-end">
                            <LanguageToggle lang={lang} />
                        </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="invisible">
        <Navbar.Brand className="h1 pb-0">{text.site_title[selectedLang]}</Navbar.Brand>
      </Navbar>
    </>
  );
};

Header.propTypes = {
  lang: PropTypes.string,
  handleHome: PropTypes.func.isRequired,
  handleAbout: PropTypes.func.isRequired,
  handleAssistant: PropTypes.func.isRequired,
};

export default Header;
