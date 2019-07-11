import React from 'react';
import { Button, Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";

function Header(props) {
	return (
		<Navbar color="light" light expand="md">
			<NavbarBrand>
				<Button
					onClick={props.onToggleHandler}
					type="button"
					color="primary"
				>
					burger
					</Button>
			</NavbarBrand>
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink to="/" exact activeClassName="active">
						Home -
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/about" activeClassName="active">
						about -
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/contact" activeClassName="active">
						contact
					</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	)
}

export default withRouter(Header);
