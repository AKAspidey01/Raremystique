import React from "react";
import "./ProfileSideBar.scss";
import ProfileBg from "../../../assets/images/profile-bg.png";
import { NavLink } from "react-router-dom";

// SideBar Icons
import LogoutIcon from "../../../assets/images/logout.svg";
import ProfileIcon from "../../../assets/images/profile.svg";
import OrderIcon from "../../../assets/images/orders.svg";
import ChatIcon from "../../../assets/images/chatwithus.svg";
import Address from "../../../assets/images/address.svg";

const MobileTopBar = () => {
  return (
    <div className="mobiletopbar-section">
      <div className="inner-profile-sidebar rounded-3xl overflow-hidden bg-white">
        <div className="top-image-section-prof relative">
          <img src={ProfileBg} className="max-h-40 object-cover" alt="" />
          <div className="inner-profile-section absolute bottom-6 left-6">
            <h2 className="text-white font-semibold text-3xl">
              Hi, Mr. Sai Ganesh
            </h2>
            <p className="text-white italic">
              Your outfit speaks before you do
            </p>
          </div>
        </div>
        <div className="bottom-menu-section top-menu-grid-section-outer">
          <ul className="grid grid-cols-12 ">
            <li className="col-span-3">
              <NavLink
                className={"w-full bg-white duration-500 hover:bg-gray-200"}
                to={"/profile"}
              >
                <div className="inner-single-nav flex items-center px-4 py-4 gap-4">
                  <div className="left-logo-sec">
                    <img src={ProfileIcon} className="w-5 h-5" alt="" />
                  </div>
                  <div className="right-nav-text">
                    <h6 className="font-medium font-Poppins text-Primary">
                      My Profile
                    </h6>
                  </div>
                </div>
              </NavLink>
            </li>
            <li className="col-span-3">
              <NavLink
                className={"w-full bg-white duration-500 hover:bg-gray-200"}
                to={"/orders"}
              >
                <div className="inner-single-nav flex items-center px-4 py-4 gap-4 ">
                  <div className="left-logo-sec">
                    <img src={OrderIcon} className="w-5 h-5" alt="" />
                  </div>
                  <div className="right-nav-text">
                    <h6 className="font-medium font-Poppins text-Primary">
                      My Orders
                    </h6>
                  </div>
                </div>
              </NavLink>
            </li>
            <li className="col-span-3">
              <NavLink
                className={"w-full bg-white duration-500 hover:bg-gray-200"}
                to={"/address"}
              >
                <div className="inner-single-nav flex items-center px-4 py-4 gap-4 ">
                  <div className="left-logo-sec">
                    <img src={Address} className="w-5 h-5" alt="" />
                  </div>
                  <div className="right-nav-text">
                    <h6 className="font-medium font-Poppins text-Primary">
                      My Addresses
                    </h6>
                  </div>
                </div>
              </NavLink>
            </li>
            <li className="col-span-3 h-full">
              <button
                type="button"
                className={"w-full bg-white duration-500 hover:bg-gray-200 h-full"}
              >
                <div className="inner-single-nav button-whatsapp-chat flex items-center px-4 py-2 gap-4 ">
                  <div className="left-logo-sec">
                    <img src={ChatIcon} className="w-5 h-5" alt="" />
                  </div>
                  <div className="right-nav-text">
                    <h6 className="font-medium font-Poppins text-left text-Primary">
                      Chat with us
                    </h6>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileTopBar;
