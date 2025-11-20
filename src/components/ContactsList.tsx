import React, { FunctionComponent } from "react";

import ContactCard from "@/components/ContactCard";
import ContactsListPropsType from "@/types/ContactsListPropsType";

const ContactsList: FunctionComponent<ContactsListPropsType> = ({
  contacts,
  selectedIds,
  onToggleContact,
}) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          selected={selectedIds.includes(contact.id)}
          onToggle={() => onToggleContact(contact.id)}
        />
      ))}
    </div>
  );
};
export default ContactsList;
