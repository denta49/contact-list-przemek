import React, { FunctionComponent } from "react";

import ContactCard from "@/components/ContactCard";
import ContactsListPropsType from "@/types/ContactsListPropsType";

const ContactsList: FunctionComponent<ContactsListPropsType> = ({
  contacts,
}) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          selected={false}
          onToggle={() => {}}
        />
      ))}
    </div>
  );
};
export default ContactsList;
