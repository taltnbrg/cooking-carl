import ListGroup from "react-bootstrap/ListGroup"
// import Button from "react-bootstrap/Button";
import { CloseButton } from "react-bootstrap";
import PropTypes from 'prop-types';
import autoAnimate from "@formkit/auto-animate";
import { useRef, useEffect } from "react";

const IngredientDisplay = ({ingredients,handleDelete}) => {
	const parent = useRef(null);
	useEffect(() => {
		autoAnimate(parent.current, { duration: 125 });
	})
	return (
		<>
		{ingredients.filter(i => i.trim().length != 0).length == 0 ? <p className="mt-1 pt-1 ps-3 mb-2 small text-muted">No ingredients added yet</p> : <p className="pt-1 ps-3 mb-1 fw-semibold">Ingredients:</p>}
		<ListGroup as="ul" ref={parent}>
			{ingredients.filter(ingredient => ingredient != '' ).map((ingredient, index) => (
				<ListGroup.Item variant="dark" key={index} as="li">
					<span className="text-black align-middle">
						{ingredient}
						{/* <Button className="p-1 pr-5 float-end" onClick={handleDelete} data-value={ingredient} key={index} variant="danger">X</Button> */}
						<CloseButton className="float-end" onClick={handleDelete} data-value={ingredient} key={index} />
					</span>
				</ListGroup.Item>
			))}
		</ListGroup>
		</>
	);
}

IngredientDisplay.propTypes = {
	ingredients: PropTypes.arrayOf(PropTypes.string), // Adjust according to the expected shape of ingredients
	handleDelete: PropTypes.func.isRequired
}

export default IngredientDisplay;