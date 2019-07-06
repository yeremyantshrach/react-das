import React from 'react';
import { Button } from "reactstrap";

function Header(props) {
	return (
		<header>
			<Button
				onClick={props.onToggleHandler}
				type="button"
				color="primary"
			>
				burger
			</Button>
		</header>
	)
}

export default Header;
