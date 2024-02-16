import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <img className={cx("avatar")} src="https://i.pinimg.com/564x/9b/a6/cc/9ba6ccf8bd2e353567fe885e6ff99f02.jpg" alt="" />

                <div>
                    <Button primary small className={cx("follow-btn")}>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx("body")}>
                <p className={cx("nickname")}>
                    <strong>ngomanhson</strong>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </p>
                <p className={cx("name")}>Ngô Mạnh Sơn</p>
                <p className={cx("analytics")}>
                    <strong className={cx("value")}>2.3M </strong>
                    <span className={cx("label")}>Followers</span>
                    <strong className={cx("value")}>1.4M </strong>
                    <span className={cx("label")}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
