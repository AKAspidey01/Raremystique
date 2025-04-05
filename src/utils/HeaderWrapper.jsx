import { useLocation } from "react-router-dom";
import Header from "../Shared/Header/Header";


export default function HeaderWrapper() {
    const location = useLocation();
    const shouldShowSideMenu = location.pathname.replace(/\/$/, '') !== '/login';
    
    return (
        shouldShowSideMenu ? <Header/> : null
    );

};
  