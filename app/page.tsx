"use client";
import React from "react";

import CardTop from "@/components/CardTop";
import ContactCard from "@/components/ContactCard";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
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
          <CardContent className="pt-4">
            <section className="mb-4 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[0.7rem] font-semibold text-slate-100">
                  {contacts.length}
                </span>
                <span className="text-slate-300">
                  Selected contacts:{" "}
                  <span className="font-semibold text-slate-100">0</span>
                </span>
                {contacts &&
                  contacts.map((contact) => (
                    <ContactCard
                      contact={contact}
                      onToggle={() => {}}
                      selected={false}
                      key={contact.id}
                    />
                  ))}
              </div>
            </section>
          </CardContent>
        </Card>
        <footer className="mt-2 text-xs text-slate-500"></footer>
      </div>
    </main>
  );
};

export default Page;
