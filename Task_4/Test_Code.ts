import { User,UserRepository} from "./User";
import { Course , CourseRepository} from "./Course";
import { Booking, BookingRepository } from "./Booking";

async function Test_Function() {
  const user = new UserRepository();
  const course= new CourseRepository();
  const booking = new BookingRepository();

  console.log("All User:", await user.showAllData());
  console.log("Find User by ID:", await user.findById(3));
  await user.createItem({ id: 4, name: "soha",country:'Gaza', email: "soha@gmail.com" });
    console.log("User after create:", await user.findById(4));
  await user.updateItem(2, { email: "BatoolEid@gmail.com" });
  console.log("User 2 after update:", await user.findById(2));
  await user.deleteById(2);
  console.log("Users after deletion:", await user.showAllData());
  console.log("Find user by name:", await user.findBy({ name: "Alaa_Eid" }));


  console.log("All Courses:", await course.showAllData());
  console.log("Find course by ID 3:", await course.findById(3));
  await course.createItem({ id: 4, Name_Cource: "Laravel",organization:'Gaza Sky Geeks', description: "This Course is Laravel" });
  console.log("The course after creation:", await course.findById(4));
  await course.updateItem(3, { organization:'Gaza Sky Geeks' });
  console.log("course after update:", await course.findById(3));
  await course.deleteById(3);
  console.log("courses after deletion:", await course.showAllData());
  console.log("Find course by :", await course.findBy({ Name_Cource: "NodeJS_Developer"}));



  console.log("Bookings:", await booking.showAllData());
  console.log("Find booking by ID 3:", await booking.findById(3));
  await booking.createItem({ id: 4, user_id: 4, Course_id: 2, booking_date: new Date ("2025-06-12") });
  console.log("The new booking after creation:", await booking.showAllData());
  await booking.updateItem(4, {Course_id: 3 });
  console.log("booking after update:", await booking.findById(4));
  await booking.deleteById(3);
  console.log("booking after deletion:", await booking.showAllData());
  console.log("Find booking :", await booking.findBy({ Course_id: 2 }));

}

Test_Function();