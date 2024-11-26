
## About This Project
It is a TypeScript-based Express application to manage a Car Store, using MongoDB and Mongoose for schema validation and data integrity. The application will support CRUD operations for cars and orders, implement inventory management, and calculate total revenue from orders.

## Technology Used
Typescript,Node,Express,Mongodb,Mongoose

## Feature of the Project
1. Create a Car: Add new cars with detailed information like brand, model, year, price, category, and stock availability.
2. View All Cars: Retrieve a list of all cars with filter options using search terms for brand, model, or category.
3. View Car Details: Fetch detailed information for a specific car by its unique ID.
4. Update Car: Modify details of an existing car, such as price, stock quantity, and description.
5. Delete Car: Remove a car from the database.
6. Place an Order: Customers can place orders by providing the car ID and quantity.
--Automatic inventory adjustment: Reduces stock when an order is placed.
--Insufficient Stock Handling: Prevents orders if the requested quantity exceeds available stock.
7. Calculate Total Revenue: Aggregates the total revenue generated from all orders.

## Steps to Run the Project Locally

1. Clone the Project by **git clone https://github.com/Munna8383/car-project.git***

2. Open in the vs code and install the node modules by **npm install** in the command line.

3. Create **.env** file in the root of your file.

4. create 2 variable with name **PORT** and **DATABASE_URL** and assign a port eg-**3000** or **5000** and put your mongodb uri as value respectively.

5. write **npm run server** in the command line to start the server.

## Live Serve Link

[Visit Car-Project Here](https://assignment-2-car-project.vercel.app/)
