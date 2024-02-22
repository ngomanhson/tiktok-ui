import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import config from "~/config";
import images from "~/assets/images";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner")}>
                <div className={cx("item")}>
                    <Link to={config.routes.explore} className={cx("link-effect")}>
                        <img src={images.effectImage} alt="" className={cx("img-effect")} />
                        <div className={cx("text-container")}>
                            <h4 className={cx("title")}>Create TikTok effects, get a reward</h4>
                        </div>
                    </Link>
                </div>
            </div>

            <div className={cx("link-container")}>
                <Link to="#!" className={cx("action-link")}>
                    About
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    Newsroom
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    Contact
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    Careers
                </Link>
            </div>

            <div className={cx("link-container")}>
                <Link to="#!" className={cx("action-link")}>
                    TikTok for Good
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    Advertise
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    TikTok LIVE Creator Networks
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    Developers
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    Transparency
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    TikTok Rewards
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    TikTok Embeds
                </Link>
            </div>

            <div className={cx("link-container")}>
                <Link to="#!" className={cx("action-link")}>
                    Help
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    Safety
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    Terms
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    Privacy Policy
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    Privacy Center
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    Creator Portal
                </Link>
                <Link to="#!" className={cx("action-link")}>
                    Community Guidelines
                </Link>
            </div>
            <span className={cx("copyright")}>© 2024 TikTok</span>
        </div>
    );
}

export default Footer;
