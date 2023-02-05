import { filterResultsButton } from "../assets/icons";

type Head = {
  id: number;
  text: string;
  image: object;
};

export const tableHeadData: Head[] = [
  {
    id: 1,
    text: "organisation",
    image: filterResultsButton,
  },
  {
    id: 2,
    text: "username",
    image: filterResultsButton,
  },
  {
    id: 3,
    text: "email",
    image: filterResultsButton,
  },
  {
    id: 4,
    text: "phone number",
    image: filterResultsButton,
  },
  {
    id: 5,
    text: "date joined",
    image: filterResultsButton,
  },
  {
    id: 6,
    text: "status",
    image: filterResultsButton,
  },
  {
    id: 7,
    text: "",
    image: null,
  },
];
