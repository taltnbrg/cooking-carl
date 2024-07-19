import { Dropdown } from 'react-bootstrap';

const LanguageToggle = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">De</Dropdown.Item>
        <Dropdown.Item href="#/action-2">En</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageToggle;
