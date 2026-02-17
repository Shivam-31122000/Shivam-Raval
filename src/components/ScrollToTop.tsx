import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navType = useNavigationType();

    useEffect(() => {
        // If it's a new navigation (PUSH), scroll to the top
        // If it's a POP (back button), the browser will handle restoration
        if (navType === "PUSH") {
            window.scrollTo(0, 0);
        }
    }, [pathname, navType]);

    return null;
};

export default ScrollToTop;
