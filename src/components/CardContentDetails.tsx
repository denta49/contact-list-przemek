import React, { FunctionComponent } from "react";

import CardContentDetailsPropsType from "@/types/CardContentDetailsPropsType";

const CardContentDetails: FunctionComponent<CardContentDetailsPropsType> = ({
  contacts,
  title,
}) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-sm font-semibold text-slate-100">{title}</h2>
      {contacts.length > 0 && (
        <span className="text-[0.7rem] uppercase tracking-wide text-slate-500">
          {contacts.length} contacts
        </span>
      )}
    </div>
  );
};

export default CardContentDetails;
