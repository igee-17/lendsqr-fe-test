import {
  userFriends,
  users,
  sack,
  handshake,
  piggyBank,
  loan,
  userCheck,
  userTimes,
  request,
  briefcaseTwo,
  bank,
  coinsSolid,
  transaction,
  galaxy,
  scroll,
  chartBar,
  userCog,
  usersPink,
  userBlue,
  moneyPink,
  slidersS,
  tire,
  badgePercent,
  clipboardList,
} from "../assets/icons";

type Item = {
  id: number;
  image: object;
  text: string;
};

type UserInfo = {
  id: number;
  image: object;
  text: string;
  count: string;
};

export const sideNavCustomers: Item[] = [
  {
    id: 1,
    image: userFriends,
    text: "users",
  },
  {
    id: 2,
    image: users,
    text: "guarantors",
  },
  {
    id: 3,
    image: sack,
    text: "loans",
  },
  {
    id: 4,
    image: handshake,
    text: "decision models",
  },
  {
    id: 5,
    image: piggyBank,
    text: "savings",
  },
  {
    id: 6,
    image: request,
    text: "loan requests",
  },
  {
    id: 7,
    image: userCheck,
    text: "whitelist",
  },
  {
    id: 8,
    image: userTimes,
    text: "karma",
  },
];

export const sideNavBusinesses: Item[] = [
  {
    id: 1,
    image: briefcaseTwo,
    text: "organisation",
  },
  {
    id: 2,
    image: request,
    text: "loan products",
  },
  {
    id: 3,
    image: bank,
    text: "savings products",
  },
  {
    id: 4,
    image: coinsSolid,
    text: "fees and charges",
  },
  {
    id: 5,
    image: transaction,
    text: "transactions",
  },
  {
    id: 6,
    image: galaxy,
    text: "services",
  },
  {
    id: 7,
    image: userCog,
    text: "service amount",
  },
  {
    id: 8,
    image: scroll,
    text: "settlements",
  },
  {
    id: 9,
    image: chartBar,
    text: "reports",
  },
];
export const sideNavSettings: Item[] = [
  {
    id: 1,
    image: slidersS,
    text: "preferences",
  },
  {
    id: 2,
    image: badgePercent,
    text: "Fees and Pricing",
  },
  {
    id: 3,
    image: clipboardList,
    text: "Audit Logs",
  },
  {
    id: 4,
    image: tire,
    text: "Systems Messages",
  },
];

export const usersInfo: UserInfo[] = [
  {
    id: 1,
    image: usersPink,
    text: "users",
    count: "2,453",
  },
  {
    id: 2,
    image: userBlue,
    text: "active users",
    count: "2,453",
  },
  {
    id: 3,
    image: loan,
    text: "users with loans",
    count: "12,453",
  },
  {
    id: 4,
    image: moneyPink,
    text: "users with savings",
    count: "102,453",
  },
];
