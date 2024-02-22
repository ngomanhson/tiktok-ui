import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon, src }) {
    return (
        <NavLink to={to} className={(nav) => cx("menu-item", { active: nav.isActive })}>
            <span className={cx("icon")}>{icon}</span>
            <span className={cx("active-icon")}>{activeIcon}</span>
            {src && <img src={src} alt="" className={cx("avatar")} />}
            <span className={cx("title")}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    activeIcon: PropTypes.node,
    src: PropTypes.string,
};

export default MenuItem;
