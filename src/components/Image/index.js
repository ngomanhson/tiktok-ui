import { useState, forwardRef } from "react";
import classNames from "classnames";
import images from "~/assets/images";
import styles from "./Images.module.scss";

const Image = ({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
        setFallback(customFallback);
    };

    return <img className={classNames(styles.wrapper, className)} ref={ref} src={fallback || src} {...props} alt={alt} onError={handleError} />;
};

export default forwardRef(Image);