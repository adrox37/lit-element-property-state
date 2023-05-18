import { Address } from "./model";
import { User } from "./model";

export const users: User[] = [
  {
    id: 0,
    name: "Donald Mayfield"
  },
  {
    id: 1,
    name: "Jill J. Fritz"
  },
  {
    id: 2,
    name: "Terry Buttram"
  }
];

export const address: Address[] = [
  {
    street: "2180 BELLFLOWER",
    country: "USA",
    state: "AL",
    city: "Madison",
    zipCode: 35064
  },
  {
    street: "845 ODOM ROAD, SUITE 200",
    country: "USA",
    state: "CA",
    city: "Los Angeles",
    zipCode: 90720
  },
  {
    street: "9025 QUEENS BLVD",
    country: "USA",
    state: "NY",
    city: "Queens",
    zipCode: 11355
  }
];
