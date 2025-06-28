import AppHeader from "../AppHeader.jsx";
import AppFooter from "../AppFooter";
import {Outlet} from "react-router-dom"


const GuestLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
};

export default GuestLayout;