import ContactType from "@/types/ContactType";

type ContactsListPropsType = {
  contacts: ContactType[];
  onToggleContact: (id: string) => void;
  selectedIds: Set<string>;
};

export default ContactsListPropsType;
