import ContactType from "@/types/ContactType";

type UseContactsResult = {
  contacts: ContactType[];
  isLoading: boolean;
  isInitialLoading: boolean;
  error: Error | null;
  hasMore: boolean;
  fetchContacts: () => void;
};

export default UseContactsResult;
