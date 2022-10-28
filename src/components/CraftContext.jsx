import { createContext, ReactNode } from "react";

const craft = [
  {
    id: 1,
    name: "FIVE SEVEN",
    type: "BODY",
    time: 60,
    perm: true,
    resources: [
      {
        name: "METAL REFINADO 1",
        amount: 1,
        isSufficient: true,
      },
      {
        name: "AÇO REFINADO 2",
        amount: 4,
        isSufficient: true,
      },
      {
        name: "METAL REFINADO 3",
        amount: 140,
        isSufficient: false,
      },
      {
        name: "FERRO REFINADO 4",
        amount: 10,
        isSufficient: false,
      },
    ],
  },
  {
    id: 2,
    name: "AK",
    type: "AMMO",
    time: 10,
    perm: true,
    resources: [
      {
        name: "AÇO REFINADO 1",
        amount: 140,
        isSufficient: true,
      },
      {
        name: "METAL REFINADO 2",
        amount: 4,
        isSufficient: true,
      },
      {
        name: "BRONZE REFINADO 3",
        amount: 1,
        isSufficient: false,
      },
      {
        name: "METAL REFINADO 4",
        amount: 1400,
        isSufficient: false,
      },
    ],
  },
  {
    id: 3,
    name: "M4",
    type: "BODY",
    time: 20,
    perm: true,
    resources: [
      {
        name: "METAL REFINADO 1",
        amount: 14,
        isSufficient: true,
      },
      {
        name: "METAL REFINADO 2",
        amount: 14,
        isSufficient: true,
      },
      {
        name: "METAL REFINADO 3",
        amount: 14,
        isSufficient: false,
      },
      {
        name: "METAL REFINADO 4",
        amount: 14,
        isSufficient: false,
      },
    ],
  },
  {
    id: 4,
    name: "G3",
    type: "AMMO",
    time: 40,
    perm: true,
    resources: [
      {
        name: "METAL REFINADO 1",
        amount: 14,
        isSufficient: true,
      },
      {
        name: "METAL REFINADO 2",
        amount: 14,
        isSufficient: true,
      },
      {
        name: "METAL REFINADO 3",
        amount: 14,
        isSufficient: false,
      },
      {
        name: "METAL REFINADO 4",
        amount: 14,
        isSufficient: false,
      },
    ],
  },
  {
    id: 5,
    name: "AWP",
    type: "BODY",
    time: 4,
    perm: true,
    resources: [
      {
        name: "METAL REFINADO 1",
        amount: 14,
        isSufficient: true,
      },
      {
        name: "METAL REFINADO 2",
        amount: 14,
        isSufficient: true,
      },
      {
        name: "METAL REFINADO 3",
        amount: 14,
        isSufficient: false,
      },
      {
        name: "METAL REFINADO 4",
        amount: 14,
        isSufficient: false,
      },
    ],
  },
];

export const CraftContext = createContext(craft);

function CraftProvider({ children }) {
  return (
    <CraftContext.Provider value={craft}>{children}</CraftContext.Provider>
  );
}

export default CraftProvider;
