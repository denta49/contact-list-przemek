"use client";
import React, { useCallback, useMemo, useState } from "react";

import CardContentComponent from "@/components/CardContentComponent";
import CardTop from "@/components/CardTop";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import useContacts from "@/hooks/useContacts";
import ContactType from "@/types/ContactType";

const Page: React.FC = () => {
  const { contacts, fetchContacts, isInitialLoading, isLoading } =
    useContacts();
  const [selectedContactsId, setSelectedContactsId] = useState<Set<string>>(
    () => new Set(),
  );
  const resetSelection = useCallback(() => {
    setSelectedContactsId(new Set());
  }, []);

  const handleToggleContactSelection = useCallback((contactId: string) => {
    setSelectedContactsId((prevSelected) => {
      const next = new Set(prevSelected);
      if (next.has(contactId)) {
        next.delete(contactId);
      } else {
        next.add(contactId);
      }
      return next;
    });
  }, []);

  const { availableContacts, selectedContacts } = useMemo(() => {
    const available: ContactType[] = [];
    const selected: ContactType[] = [];

    for (const contact of contacts) {
      if (selectedContactsId.has(contact.id)) {
        selected.push(contact);
      } else {
        available.push(contact);
      }
    }

    return { availableContacts: available, selectedContacts: selected };
  }, [contacts, selectedContactsId]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10">
        <Header
          title={"Contact picker"}
          buttonText={"Reset selection"}
          onButtonClick={resetSelection}
        />
        <Card className="border-slate-800/70 bg-slate-900/60 shadow-xl shadow-black/40 backdrop-blur">
          <CardTop title={"Contacts"} description={"Pick Your contacts"} />
          <CardContentComponent
            availableContacts={availableContacts}
            selectedContacts={selectedContacts}
            onToggleContact={handleToggleContactSelection}
            selectedIds={selectedContactsId}
            isInitialLoading={isInitialLoading}
            loadMoreContacts={fetchContacts}
            loading={isLoading}
          />
        </Card>
        <footer className="mt-2 text-xs text-slate-500"></footer>
      </div>
    </main>
  );
};

export default Page;
