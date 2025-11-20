import ContactType from "@/types/ContactType";

type ContactsListPropsType = {
  contacts: ContactType[];
  onToggleContact: (id: string) => void;
  selectedIds: string[];
};

export default ContactsListPropsType;
