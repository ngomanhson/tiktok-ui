import PropTypes from "prop-types";
import classNames from "classnames/bind";

import AccountItem from "./AccountItem";
import styles from "./FollowingAccounts.module.scss";

const cx = classNames.bind(styles);

function FollowingAccounts({ label, data = [] }) {
    return (
        <div className={cx("wrapper")}>
            <p className={cx("label")}>{label}</p>

            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}

            <p className={cx("more-btn")}>See more</p>
        </div>
    );
}

FollowingAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default FollowingAccounts;
