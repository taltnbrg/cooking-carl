import { useState } from "react"
import { Container, ListGroup, Collapse } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import text from "../assets/text"
import PropTypes from 'prop-types'

const AssistantIntroduction = ({lang}) => {
    const [openInstructions, setOpenInstructions] = useState(false)
    const selectedLang = lang || 'en'
    const steps = [
        text.chat_instructions_step_1[selectedLang],
        text.chat_instructions_step_2[selectedLang],
        text.chat_instructions_step_3[selectedLang],
        text.chat_instructions_step_4[selectedLang],
        text.chat_instructions_step_5[selectedLang],
    ]
    const collapseInstructionsText = openInstructions ? "chat_instructions_hide" : "chat_instructions_show"
    const textToShow = text[collapseInstructionsText][selectedLang]
    return (
        <>
            <h3>{text.chat_instructions_intro[selectedLang]}</h3>
            <div className="cursor-pointer p-0 m-0 ">
                <Button size="sm" variant="link" as="a" onClick={() => setOpenInstructions(!openInstructions)} className="p-0 m-0 fs-6 text-muted text-decoration-none">{textToShow}</Button>
            </div>
            <Collapse in={openInstructions}>
                <Container className="p-0 m-0 pt-2 mt-2">        
                    <ListGroup as="ol" numbered>
                        {steps.filter(step => step != '' ).map((step, index) => (
                            <ListGroup.Item variant="wtf" key={index} as="li">
                                {step}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Container>
            </Collapse>
        </>
    )
}

AssistantIntroduction.propTypes = {
    lang: PropTypes.string
}

export default AssistantIntroduction;