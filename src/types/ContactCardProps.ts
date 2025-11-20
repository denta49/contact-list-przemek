import ContactType from "@/types/ContactType";

type ContactCardProps = {
  contact: ContactType;
  onToggle: () => void;
  selected: boolean;
};

export default ContactCardProps;
