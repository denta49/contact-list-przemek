import React, { FunctionComponent } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ContactCardProps from "@/types/ContactCardProps";

const ContactCard: FunctionComponent<ContactCardProps> = ({
  contact,
  onToggle,
  selected,
}) => {
  return (
    <Card
      role={"button"}
      onClick={onToggle}
      className={cn(
        "cursor-pointer border border-slate-800 bg-slate-900/60 transition-all",
        "hover:border-slate-600 hover:bg-slate-900 hover:shadow-sm",
        selected && "border-primary/70 ring-2 ring-primary/60 shadow-md",
      )}
    >
      {/*Tutaj nie sprawdzam, czy zmienne istnieją, bo widze, ze wszedzie w bazie sa ok - gdyby jednak nie byly, to nalezy tu taka walidacje dodac*/}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div>
          <div className="text-sm font-semibold leading-tight">
            {contact.firstNameLastName}
          </div>
          <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
            <span className="truncate">{contact.jobTitle}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <span className="truncate">{contact.emailAddress}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
