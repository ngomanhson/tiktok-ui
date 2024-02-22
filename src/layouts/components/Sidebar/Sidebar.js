import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon, CompassIcon, CompassActiveIcon, UserArrowIcon, UserArrowActiveIcon } from "~/components/Icons";

import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss";
import FollowingAccounts from "~/components/FollowingAccounts";
import * as userService from "~/services/userService";
import Footer from "~/layouts/components/Footer";

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getFollowing({ page: 1 })
            .then((data) => {
                setSuggestedUsers((prevUser) => [...prevUser, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <aside className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Menu>
                    <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                    <MenuItem title="Following" to={config.routes.following} icon={<UserArrowIcon />} activeIcon={<UserArrowActiveIcon />} />
                    <MenuItem title="Friends" to={config.routes.friends} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                    <MenuItem title="Explore" to={config.routes.explore} icon={<CompassIcon />} activeIcon={<CompassActiveIcon />} />
                    <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                    <MenuItem title="Profile" to={config.routes.profile} src="https://i.pinimg.com/564x/9b/a6/cc/9ba6ccf8bd2e353567fe885e6ff99f02.jpg" />
                </Menu>

                <FollowingAccounts label="Following accounts" data={suggestedUsers} />
                <Footer />
            </div>
        </aside>
    );
}

export default Sidebar;
