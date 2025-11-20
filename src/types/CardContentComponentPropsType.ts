import ContactType from "@/types/ContactType";

type CardContentComponentPropsType = {
  availableContacts: ContactType[];
  selectedContacts: ContactType[];
  onToggleContact: (id: string) => void;
  selectedIds: Set<string>;
  isInitialLoading: boolean;
  loadMoreContacts: () => void;
  loading: boolean;
  error: Error | null;
};

export default CardContentComponentPropsType;
