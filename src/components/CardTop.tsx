import React, { FunctionComponent } from "react";

import { CardDescription, CardTitle, CardHeader } from "@/components/ui/card";
import CardTopPropsType from "@/types/CardTopPropsType";

const CardTop: FunctionComponent<CardTopPropsType> = ({
  title,
  description,
}) => {
  return (
    <CardHeader className="border-b border-slate-800/70 pb-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle className="text-lg text-slate-200">{title}</CardTitle>
          <CardDescription className="mt-1 text-xs text-slate-400">
            {description}
          </CardDescription>
        </div>
      </div>
    </CardHeader>
  );
};

export default CardTop;
