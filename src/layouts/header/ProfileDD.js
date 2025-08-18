import React from "react";
import { DropdownItem } from "reactstrap";
import { User, Settings } from "react-feather";
import user1 from "../../assets/images/users/user1.jpg";
import Image from "next/image";

const ProfileDD = () => {
  return (
    <div>
      <div className="d-flex gap-3 p-3 border-bottom pt-2 align-items-center">
        <Image
          src={user1}
          alt="user"
          className="rounded-circle"
          width="60"
          height="60"
        />
        <span>
          <h6 className="mb-0">John Deo</h6>
          <small>info@wrappixel.com</small>
        </span>
      </div>
      <DropdownItem className="px-4 py-3">
        <User size={20} />
        &nbsp; My Profile
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem className="px-4 py-3">
        <Settings size={20} />
        &nbsp; Settings
      </DropdownItem>
      <DropdownItem divider />
    </div>
  );
};

export default ProfileDD;
