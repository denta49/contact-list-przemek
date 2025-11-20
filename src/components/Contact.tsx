import React, { FunctionComponent } from "react";

import ContactType from "@/types/ContactType";

const Contact: FunctionComponent<ContactType> = ({
  id,
  jobTitle,
  emailAddress,
  firstNameLastName,
}) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100px",
        justifyContent: "center",
        flexDirection: "column",
        padding: "32px",
        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
        margin: "10px 0",
        background: "#fff",
        cursor: "pointer",
      }}
      className="person-info"
    >
      <div className="firstNameLastName">{firstNameLastName}</div>
      <div className="jobTitle">{jobTitle}</div>
      <div className="emailAddress">{emailAddress}</div>
    </div>
  );
};

export default Contact;
