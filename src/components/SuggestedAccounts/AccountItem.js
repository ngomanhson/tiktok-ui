import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview/AccountPreview";
import styles from "./SuggestedAccounts.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx("account-item")}>
                    <img className={cx("avatar")} src="https://i.pinimg.com/564x/9b/a6/cc/9ba6ccf8bd2e353567fe885e6ff99f02.jpg" alt="" />

                    <div className={cx("item-info")}>
                        <p className={cx("nickname")}>
                            <strong>ngomanhson</strong>
                            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                        </p>
                        <p className={cx("name")}>Ngô Mạnh Sơn</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
