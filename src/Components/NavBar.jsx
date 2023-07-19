import { AiOutlineArrowLeft } from "react-icons/ai";
import { PiNotePencilBold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Popover } from "@mui/material";
import { useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { VscReport } from "react-icons/vsc";
import { IoCallOutline } from "react-icons/io5";
import profileImg from "../Img/profile.jpg";
const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="navBar">
      <div className="navSeaction-1">
        <div className="navHeading">
          <span>
            <AiOutlineArrowLeft />
          </span>
          <h3>Trip 1</h3>
        </div>
        <div className="navRight">
          <PiNotePencilBold />
        </div>
      </div>
      <div className="navSecation-2">
        <div>
          <img src={profileImg} alt="profile image" />
          <p>
            From <span>IGI Airport, T3</span>
            <br />
            To <span>Sector 28</span>
          </p>
        </div>

        <div className="navSection-2">
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <div className="PopOver">
              <div style={{ borderBottom: "1px solid #E5E5E0" }}>
                <span>
                  <AiOutlineUsergroupAdd />
                </span>
                <p>Members</p>
              </div>
              <div style={{ borderBottom: "1px solid #E5E5E0" }}>
                <span>
                  <IoCallOutline />
                </span>
                <p>Share Number</p>
              </div>
              <div>
                <span>
                  <VscReport />
                </span>
                <p>Report</p>
              </div>
            </div>
          </Popover>

          <BsThreeDotsVertical onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
