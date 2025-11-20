import ContactType from "@/types/ContactType";

type CardContentComponentPropsType = {
  availableContacts: ContactType[];
  selectedContacts: ContactType[];
  onToggleContact: (id: string) => void;
  selectedIds: Set<string>;
  isInitialLoading: boolean;
};

export default CardContentComponentPropsType;
