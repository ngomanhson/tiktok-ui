import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/260de89fe998372c5d7f21f845abe6cd.jpeg?lk3s=a5d48078&x-expires=1707994800&x-signature=PA0nzSS2ml3YQ4A%2BhBWXA4GbQno%3D"
                alt=""
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Ngo Manh Son</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </h4>
                <span className={cx("username")}>ngomanhson</span>
            </div>
        </div>
    );
}

export default AccountItem;
