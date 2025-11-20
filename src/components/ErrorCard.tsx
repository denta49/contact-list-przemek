"use client";

import { FunctionComponent } from "react";

import ErrorCardProps from "@/types/ErrorCardPropsType";

const ErrorCard: FunctionComponent<ErrorCardProps> = ({
  title = "Something went wrong",
  description = "Failed to load the data. Please try again.",
  errorMessage,
}) => {
  return (
    <div
      role="alert"
      className="w-full rounded-2xl border border-red-500/30 bg-red-950/40 px-5 py-4 text-sm text-red-50 shadow-sm"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-red-500/15">
          <span className="text-lg">⚠️</span>
        </div>
        <div className="flex-1 space-y-1">
          <p className="text-sm font-semibold text-red-100">{title}</p>
          <p className="text-xs text-red-100/80">{description}</p>
          {errorMessage && (
            <pre className="mt-2 max-h-20 overflow-auto rounded bg-black/30 px-3 py-2 text-[11px] leading-snug text-red-200/80">
              {errorMessage}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};
export default ErrorCard;
