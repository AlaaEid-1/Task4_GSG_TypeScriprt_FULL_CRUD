import { DbEntity } from "./DbEntity ";
import { BaseRepository } from "./BaseRepository";

export interface Booking extends DbEntity{
    user_id:number;
    Course_id:number;
    booking_date:Date;
}

export class BookingRepository extends BaseRepository<Booking> {
  constructor() {
    super([
      { id: 1, user_id: 1, Course_id: 2, booking_date: new Date ("2025-06-19") },
      { id: 2, user_id: 2, Course_id: 1, booking_date: new Date("2025-06-20") },
      { id: 3, user_id: 3, Course_id: 3, booking_date: new Date("2025-06-25") }
    ]);
  }
}