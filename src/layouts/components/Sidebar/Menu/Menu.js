import PropTypes from "prop-types";

function Menu({ children }) {
    return <nav style={{ paddingTop: 20 }}>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
