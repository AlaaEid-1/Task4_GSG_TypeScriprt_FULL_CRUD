import { UserRepository } from "./User";
import { CourseRepository } from "./Course";
import { BookingRepository } from "./Booking";
async function Test_Function() {
    const user = new UserRepository();
    const course = new CourseRepository();
    const booking = new BookingRepository();
    console.log("Fetch all User:", await user.showAllData());
    console.log("User with ID 2:", await user.findById(2));
    console.log("Find user by name:", await user.findBy({ name: "Alaa_Eid" }));
    await user.createItem({ id: 4, name: "soha", country: 'Gaza', email: "soha@gmail.com" });
    console.log("Users after creation:", await user.showAllData());
    await user.updateItem(2, { email: "BatoolEid@gmail.com" });
    console.log("User 2 after update:", await user.findById(2));
    await user.deleteById(2);
    console.log("Users after deletion:", await user.showAllData());
    console.log("Courses:", await course.showAllData());
    console.log("Bookings:", await booking.showAllData());
}
Test_Function();
