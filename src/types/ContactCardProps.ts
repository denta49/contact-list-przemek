import ContactType from "@/types/ContactType";

type ContactCardProps = {
  contact: ContactType;
  onToggle: (id: string) => void;
  selected: boolean;
};

export default ContactCardProps;
