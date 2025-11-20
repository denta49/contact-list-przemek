"use client";
import { useEffect, useEffectEvent, useState } from "react";

import apiData from "@/api/api";
import ContactType from "@/types/ContactType";

const useContacts = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);

  const fetchContacts = useEffectEvent(async () => {
    try {
      const batch = await apiData();
      setContacts((prevContacts) => [...prevContacts, ...batch]);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  });
  useEffect(() => {
    fetchContacts();
  }, []);
  return { contacts };
};

export default useContacts;
