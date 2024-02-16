import classNames from "classnames/bind";

import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from "~/components/Icons";
import styles from "./Sidebar.module.scss";
import SuggestedAccounts from "~/components/SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
