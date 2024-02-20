import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from "~/components/Icons";

import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss";
import SuggestedAccounts from "~/components/SuggestedAccounts";
import * as userService from "~/services/userService";

const cx = classNames.bind(styles);

const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, PER_PAGE: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUser) => [...prevUser, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
