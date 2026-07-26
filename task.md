Node.js API Task: Building a CRUD API with Separated Routes & Handlers

Objective

Students will build a RESTful API using Express.js that demonstrates:

✅ HTTP methods (GET, POST, PUT, DELETE)

✅ Separating route logic into dedicated files

✅ Separating handler/controller logic into separate files

✅ Proper file organization and imports

Project Structure

Create this folder structure:

Code

Step 1: Initialize Project

Bash

Step 2: Create server.js

This is your main entry point. It should:

Import Express

Import the routes

Set up the Express app

Start the server on port 3000

Requirements:

Import routes from ./routes/productRoutes.js

Use app.use() to register routes

Listen on port 3000

Log a message when server starts

Example structure:

Javascript

Step 3: Create handlers/productHandlers.js

This file contains all the handler functions. You need to create 4 handlers:

1. getAllProducts (GET handler)

Returns an array of products

Sample data:

Javascript

2. getProductById (GET handler)

Gets a single product by ID from request params

Returns 404 if product not found

3. createProduct (POST handler)

Gets product data from request body

Assigns a new ID (max current ID + 1)

Returns the created product with status 201

4. updateProduct (PUT handler)

Updates a product by ID

Takes data from request body

Returns 404 if product not found

Returns updated product

5. deleteProduct (DELETE handler)

Deletes a product by ID

Returns 404 if product not found

Returns success message

Example handler structure:

Javascript

Step 4: Create routes/productRoutes.js

This file defines the routes and connects them to handlers.

Requirements:

Import Express Router

Import all handlers from ../handlers/productHandlers.js

Define 5 routes using the handlers:

HTTP Method

Route Path

Handler

GET

/

getAllProducts

GET

/:id

getProductById

POST

/

createProduct

PUT

/:id

updateProduct

DELETE

/:id

deleteProduct

Example structure:

Javascript

Testing Your API

Using cURL or Postman:

GET all products:

Bash

GET product by ID:

Bash

CREATE new product:

Bash

UPDATE product:

Bash

DELETE product:

Bash

Deliverables Checklist

✅ server.js - Main server file with routes imported

✅ routes/productRoutes.js - All 5 routes defined

✅ handlers/productHandlers.js - All 5 handlers implemented

✅ Code runs without errors

✅ All CRUD operations work correctly

✅ Proper file organization and clean imports

Key Concepts to Remember

Separation of Concerns - Each file has one responsibility

server.js - Entry point and app setup

routes/ - Defines URL paths

handlers/ - Contains business logic

Express Router - Use express.Router() for modular routes

Module Exports - Use module.exports to share functions between files

HTTP Methods:

GET - Retrieve data

POST - Create new data

PUT - Update existing data

DELETE - Remove data

Request Objects:

req.params - URL parameters (:id)

req.body - Request body (JSON data)

req.query - Query strings

Response Methods:

res.json() - Send JSON response

res.status() - Set HTTP status code

res.send() - Send text response

Challenge Extensions (Optional)

Once students complete the basic task:

Add data validation - Check if product has required fields before creating

Add error handling - Try/catch blocks for safety

Add a second resource - Create routes for users/orders with same structure

Use file storage - Save products to a JSON file instead of memory

Add middleware - Create authentication middleware for POST/PUT/DELETE

Common Mistakes to Avoid

❌ Forgetting to import handlers in routes file

❌ Forgetting to import routes in server.js

❌ Using require() with wrong file paths

❌ Not exporting functions from handlers file

❌ Mixing route definition with handler logic

❌ Not using express.json() middleware for POST/PUT requests

Good luck! Focus on understanding the file organization, not on making it perfect. Errors are learning opportunities!