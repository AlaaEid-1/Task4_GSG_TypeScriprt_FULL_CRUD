import { BaseRepository } from "./BaseRepository";
export class BookingRepository extends BaseRepository {
    constructor() {
        super([
            { id: 1, user_id: 1, Course_id: 2, booking_date: new Date("2025-06-19") },
            { id: 2, user_id: 2, Course_id: 1, booking_date: new Date("2025-06-20") }
        ]);
    }
}
