import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import Tippy from "@tippyjs/react/headless";

import Image from "~/components/Image";
// import { Wrapper as PopperWrapper } from "~/components/Popper";
// import AccountPreview from "./AccountPreview/AccountPreview";
import styles from "./FollowingAccounts.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    // const renderPreview = (props) => {
    //     return (
    //         <div tabIndex="-1" {...props}>
    //             <PopperWrapper>
    //                 <AccountPreview data={data} />
    //             </PopperWrapper>
    //         </div>
    //     );
    // };

    return (
        <div>
            {/* <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}> */}
            <Link to={`/@${data.nickname}`} className={cx("account-item")}>
                <Image className={cx("avatar")} src={data.avatar} alt={data.nickname} />

                <div className={cx("item-info")}>
                    <p className={cx("nickname-wrapper")}>
                        <span className={cx("nickname")}>{data.nickname}</span>
                        {data.tick && <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />}
                    </p>
                    <p className={cx("name")}>{`${data.first_name} ${data.last_name}`}</p>
                </div>
            </Link>
            {/* </Tippy> */}
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
