import React, { FunctionComponent } from "react";

import CardContentDetails from "@/components/CardContentDetails";
import ContactsList from "@/components/ContactsList";
import { CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CardContentComponentPropsType from "@/types/CardContentComponentPropsType";

const CardContentComponent: FunctionComponent<
  CardContentComponentPropsType
> = ({ availableContacts, selectedContacts, onToggleContact, selectedIds }) => {
  return (
    <CardContent className="pt-4 space-y-6">
      <section className="space-y-3">
        <CardContentDetails
          count={selectedContacts.length}
          title={"Selected contacts"}
        />
        {selectedContacts.length === 0 ? (
          <div className="rounded-md border border-dashed border-slate-800 bg-slate-900/40 px-3 py-4 text-xs text-slate-400">
            No contacts selected yet. Click on a card below to add it here.
          </div>
        ) : (
          <ContactsList
            contacts={selectedContacts}
            onToggleContact={onToggleContact}
            selectedIds={selectedIds}
          />
        )}
      </section>
      <Separator className="bg-slate-800/70" />
      <section className="space-y-3">
        <CardContentDetails
          count={availableContacts.length}
          title={"All contacts"}
        />
        {availableContacts.length === 0 ? (
          <div className="rounded-md border border-dashed border-slate-800 bg-slate-900/40 px-3 py-4 text-xs text-slate-400">
            No contacts loaded yet. Use the button above to fetch a batch from
            the API.
          </div>
        ) : (
          <ContactsList
            contacts={availableContacts}
            onToggleContact={onToggleContact}
            selectedIds={selectedIds}
          />
        )}
      </section>
    </CardContent>
  );
};

export default CardContentComponent;
