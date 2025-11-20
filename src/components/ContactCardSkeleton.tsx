import React, { FunctionComponent } from "react";

const ContactCardSkeleton: FunctionComponent = () => {
  return (
    <div className={"rounded-2xl border border-white/5 bg-slate-900 px-5 py-4"}>
      <div className="space-y-2 animate-pulse">
        <div className="h-4 w-40 rounded bg-white/15" />
        <div className="h-3 w-32 rounded bg-white/10" />
        <div className="h-3 w-60 rounded bg-white/10" />
      </div>
    </div>
  );
};

export default ContactCardSkeleton;
