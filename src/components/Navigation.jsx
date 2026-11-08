import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink> |
            <NavLink to="/elections">Elections</NavLink> |
            <NavLink to="/results">Results</NavLink> |
            <NavLink to="/voters">Voters</NavLink>
        </nav>
    );
}

export default Navigation;