import ContactType from "@/types/ContactType";

type CardContentComponentPropsType = {
  availableContacts: ContactType[];
  selectedContacts: ContactType[];
  onToggleContact: (id: string) => void;
  selectedIds: string[];
};

export default CardContentComponentPropsType;
