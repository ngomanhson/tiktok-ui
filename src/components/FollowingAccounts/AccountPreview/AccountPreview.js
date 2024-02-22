import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <img className={cx("avatar")} src={data.avatar} alt={data.nickname} />

                <div>
                    <Button primary small className={cx("follow-btn")}>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx("body")}>
                <p className={cx("nickname")}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />}
                </p>
                <p className={cx("name")}>{`${data.first_name} ${data.last_name}`}</p>
                <p className={cx("analytics")}>
                    <strong className={cx("value")}>{data.followings_count} </strong>
                    <span className={cx("label")}>Followers</span>
                    <strong className={cx("value")}>{data.likes_count} </strong>
                    <span className={cx("label")}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
