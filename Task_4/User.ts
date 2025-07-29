import { DbEntity } from "./DbEntity ";
import { BaseRepository } from "./BaseRepository";

export interface User extends DbEntity{
    name: string;
    country:string;
    email:string
}

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super([
      { id: 1, name: "Alaa_Eid",country:'Gaza', email: "AlaaEid@gmail.com" },
      { id: 2, name: "Batool",country:'Gaza', email: "Batool@gmail.com" },
      { id: 3, name: "Menna",country:'Gaza', email: "Menna@gmail.com" }
    ]);
  }
}
