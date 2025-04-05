import { useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";


export default function FooterWrapper() {
    const location = useLocation();
    const shouldShowSideMenu = location.pathname.replace(/\/$/, '') !== '/login';
    
    return (
        shouldShowSideMenu ? <Footer/> : null
    );

};
  