"use client";
import React from "react";

import CardContentComponent from "@/components/CardContentComponent";
import CardTop from "@/components/CardTop";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import useContacts from "@/hooks/useContacts";

const Page: React.FC = () => {
  const { contacts } = useContacts();
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10">
        <Header
          title={"Contact picker"}
          buttonText={"Reset selection"}
          onButtonClick={() => {}}
        />
        <Card className="border-slate-800/70 bg-slate-900/60 shadow-xl shadow-black/40 backdrop-blur">
          <CardTop title={"Contacts"} description={"Pick Your contacts"} />
          <CardContentComponent contacts={contacts} selectedContacts={[]} />
        </Card>
        <footer className="mt-2 text-xs text-slate-500"></footer>
      </div>
    </main>
  );
};

export default Page;
