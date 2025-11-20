"use client";
import React, { FunctionComponent } from "react";

import { Button } from "@/components/ui/button";
import HeaderPropsType from "@/types/HeaderPropsType";

const Header: FunctionComponent<HeaderPropsType> = ({
  title,
  buttonText,
  onButtonClick,
}) => {
  return (
    <header className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
        </div>
        <div className="flex gap-2">
          <Button size="sm" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
