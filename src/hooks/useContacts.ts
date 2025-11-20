"use client";
import { useCallback, useEffect, useRef, useState } from "react";

import apiData from "@/api/api";
import ContactType from "@/types/ContactType";
import UseContactsResultType from "@/types/UseContactsResultType";

const useContacts = (): UseContactsResultType => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const requestInFlightRef = useRef(false);

  const fetchContacts = useCallback(async () => {
    if (requestInFlightRef.current || !hasMore) return;

    requestInFlightRef.current = true;
    setIsLoading(true);
    setError(null);

    try {
      const batch = await apiData();
      if (batch.length === 0) {
        setHasMore(false);
      } else {
        setContacts((prevContacts) => [...batch, ...prevContacts]);
      }
    } catch (err) {
      const e = err instanceof Error ? err : new Error("Unknown error");
      setError(e);
    } finally {
      setIsLoading(false);
      requestInFlightRef.current = false;
    }
  }, [hasMore]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);
  return {
    contacts,
    isLoading,
    isInitialLoading: contacts.length === 0 && isLoading,
    error,
    hasMore,
    fetchContacts: fetchContacts,
  };
};

export default useContacts;
