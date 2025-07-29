#### Task 4 : 🧠 Build a TypeScript Generic Repository System (Full CRUD)
#### 🎯 ObjectiveDesign and implement a generic, type-safe repository pattern in TypeScript to manage static in-memory data. You will apply generics, interfaces, and inheritance, while simulating typical backend logic.

#### 📦 What You'll Build
###### A generic repository interface that supports CRUD + filtering
###### A base repository class that implements this interface
###### Three separate model repositories that inherit from the base
###### Static data for testing each model
###### A script that tests and logs each method

#### 📋 Task Requirements
###### Define this Three Data Models  (User, Course, and Booking)  
###### Each model must include an id as required and a few relevant properties.
###### Create a Generic Repository Interface , The interface must define the following methods, all returning Promises:
                 Fetch all items
                 Fetch one item by ID
                 Create a new item
                 Update an existing item
                 Delete an item by ID
                 Find items by filter (using partial fields)
####  Implement a Generic Base Repository Class , This class must:
                Accept any model type that includes an id field 
                Store data in-memory (array)
                Implement all interface methods in a generic, reusable way
#### Implement Model-Specific Repositories Create one class per model that extends the base repository , Each class:
                Should pass static data to the base class
                May include additional methods (optional)
###### Seed Static Data Each repository instance must be initialized with at least 2–3 sample records ,Use this data to simulate real-world behavior in your tests.
###### Test the Full Flow In a separate script:
             Create each repository instance
             Test and log the output of each method defined in the interface
###### Ensure results are type-safe and async-compatible


‏
