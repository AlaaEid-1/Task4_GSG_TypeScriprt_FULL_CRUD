# Here is the Question formula, Output Code, and Run 
#### Task 4: 🧠 Build a TypeScript Generic Repository System (Full CRUD)
#### 🎯 Objective: Design and implement a generic, type-safe repository pattern in TypeScript to manage static in-memory data. You will apply generics, interfaces, and inheritance, while simulating typical backend logic.

#### 📦 What You'll Build
###### A generic repository interface that supports CRUD + filtering
###### A base repository class that implements this interface
###### Three separate model repositories that inherit from the base
###### Static data for testing each model
###### A script that tests and logs each method

#### 📋 Task Requirements
###### Define these Three Data Models  (User, Course, and Booking)  
###### Each model must include an ID as required and a few relevant properties.
###### Create a Generic Repository Interface. The interface must define the following methods, all returning Promises:
                 Fetch all items
                 Fetch one item by ID
                 Create a new item
                 Update an existing item
                 Delete an item by ID
                 Find items by filter (using partial fields)
####  Implement a Generic Base Repository Class.
#### This class must:
                Accept any model type that includes an ID field 
                Store data in-memory (array)
                Implement all interface methods in a generic, reusable way
#### Implement Model-Specific Repositories. Create one class per model that extends the base repository. Each class:
                Should pass static data to the base class
                May include additional methods (optional)
###### Seed Static Data Each repository instance must be initialized with at least 2–3 sample records. Use this data to simulate real-world behavior in your tests.
###### Test the Full Flow In a separate script:
             Create each repository instance
             Test and log the output of each method defined in the interface
###### Ensure results are type-safe and async-compatible


--------------------------------------------------------------------------------------------------------------------------------------------------
# 🎯 The Code and Run
## This is Three Models (User, Course, and Booking)  
<img width="646" height="69" alt="image" src="https://github.com/user-attachments/assets/952778f4-5d91-483c-a879-6f49f8ea4362" />
<img width="673" height="136" alt="image" src="https://github.com/user-attachments/assets/13440ab0-5981-4f49-a088-ee3df6d3d900" />
<img width="701" height="71" alt="image" src="https://github.com/user-attachments/assets/41f1b9dd-ec44-4289-909f-50f0107c7009" />

-----------------------------------------------------------------------------------------------------------------------------------------------------
# 🎯 The First Model's User:
#### This is user.showAllData:
             console.log("All User:", await user.showAllData());
             
![1](https://github.com/user-attachments/assets/f3c0f8da-6a19-45b0-8f65-17dc8b39a9ea)
         
#### This is user.findById:
               console.log("Find User by ID:", await user.findById(3));
![2](https://github.com/user-attachments/assets/fb308709-0b63-4072-ae22-ab517284c84f)
#### This is user.createItem:
             await user.createItem({ id: 4, name: "soha",country:'Gaza', email: "soha@gmail.com" });
             console.log("User after create:", await user.findById(4));
![3](https://github.com/user-attachments/assets/273e0a45-e635-4c33-9d88-6b985a88675c)
#### This is user.updateItem:
            await user.updateItem(2, { email: "BatoolEid@gmail.com" });
            console.log("User 2 after update:", await user.findById(2));
![4](https://github.com/user-attachments/assets/54ef130a-4b9e-4c2a-91d0-1c343cfa986c)
#### This is user.deleteById:
             await user.deleteById(2);
            console.log("Users after deletion:", await user.showAllData());
![5](https://github.com/user-attachments/assets/54f3ee4e-b9f4-4689-824a-1c9ee38350bf)
#### This is user.findBy:
              console.log("Find user by name:", await user.findBy({ name: "Alaa_Eid" }));
![6](https://github.com/user-attachments/assets/d5509d82-d86b-43a4-9c64-76daf2abaad4)

-------------------------------------------------------------------------------------------------------------------------------------------------

# 🎯 The Second Model's course:
#### This is course.showAllData:
            console.log("All Courses:", await course.showAllData());
![11](https://github.com/user-attachments/assets/23a67ab6-ea47-4a66-a903-811066e4a621)
#### This is course.findById:
           console.log("Find course by ID 3:", await course.findById(3));
![22](https://github.com/user-attachments/assets/835ec060-58d5-45f9-87a3-3e06df0844be)
#### This is course.createItem:
             await course.createItem({ id: 4, Name_Cource: "Laravel",organization:'Gaza Sky Geeks', description: "This Course is Laravel" });
             console.log("The course after creation:", await course.findById(4));
 ![33](https://github.com/user-attachments/assets/dd4d8fdb-2e53-4d45-bf86-b25e02140f1a)
#### This is course.updateItem:
             await course.updateItem(3, { organization:'Gaza Sky Geeks' });
             console.log("course after update:", await course.findById(3));
![44](https://github.com/user-attachments/assets/1a96be50-99ec-4c01-9447-0dee25d451ca)

#### This is course.deleteById:
           await course.deleteById(3);
           console.log("courses after deletion:", await course.showAllData());
 ![55](https://github.com/user-attachments/assets/34fcf79e-e4d7-4d75-bc04-070a86650f34)
#### This is course.findBy:
          console.log("Find course by :", await course.findBy({ Name_Cource: "NodeJS_Developer"}));
![66](https://github.com/user-attachments/assets/c3ec3816-2aa2-4caf-9777-4e6f6c3702d8)

-------------------------------------------------------------------------------------------------------------------------------------------------

# 🎯 The Third Model's booking:
#### This is booking.showAllData:
            console.log("Bookings:", await booking.showAllData());
<img width="396" height="344" alt="image" src="https://github.com/user-attachments/assets/5d0bd544-d5af-4cfd-acd7-d612a920b155" />

#### This is booking.findById:
           console.log("Find booking by ID 3:", await booking.findById(3));
<img width="342" height="104" alt="image" src="https://github.com/user-attachments/assets/abce8267-9969-4f0e-9fc8-325d6447adf0" />

#### This is booking.createItem:
              await booking.createItem({ id: 4, user_id: 4, Course_id: 2, booking_date: new Date ("2025-06-12") });
              console.log("The new booking after creation:", await booking.showAllData());
<img width="330" height="447" alt="image" src="https://github.com/user-attachments/assets/6b128ab8-8726-442b-b604-6bceff18fd99" />

#### This is booking.updateItem:
            await booking.updateItem(4, {Course_id: 3 });
            console.log("booking after update:", await booking.findById(4));
 <img width="322" height="100" alt="image" src="https://github.com/user-attachments/assets/e01cd682-e5e3-4cbf-903f-361bd5e69930" />
 
#### This is booking.deleteById:
           await booking.deleteById(3);
          console.log("booking after deletion:", await booking.showAllData());
 <img width="330" height="340" alt="image" src="https://github.com/user-attachments/assets/f58bbf01-fbf4-49cd-a161-def6710cc456" />
 
#### This is booking.findBy:
            console.log("Find booking :", await booking.findBy({ Course_id: 2 }));
<img width="378" height="137" alt="image" src="https://github.com/user-attachments/assets/ff9db688-0e5a-4998-9f82-750b7dda3340" />





‏
