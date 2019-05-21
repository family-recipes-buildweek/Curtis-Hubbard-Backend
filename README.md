# ** Back End - Secret-Family-Recipes**
---
## What is secret-family-recipes?

#### Search and find recipes that you would like to cook that old grandma sally used to cook when you were young. 
#### Search by categories, by maker, or by recipe. With Secret-Family-Recipes you can organize and find recipes with ease . 

---
##### Heroku Deployment Link : `https://devcenter.heroku.com/articles/heroku-cli`
---

Used for register and login
```js
{
  "username": "userName",
  "password": "password"
}
```
---

Used for Posting a recipe
```js
{ 
  "Title": "title",
  "instructions": "instruction"
}
```
---

Used for Posting a Source
```js
{
  "nameOfSource": "nameOfSource",
}
```
---

Used for Posting a Category
```js
{
  "Category": "Category",
}
```
---
Used for Posting a Ingredients
```js
{
  "Ingredients": "Ingredients",
}
```
---
### Login

| Method | URL                | Description                                                                                                                                                                      |
| ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/register          | Creates a new User to the users table in the database.                                                                                                                           |
| POST   | /api/login             | Checks whether the payload from the body matches with the user from the database. Returns a message and JWT token on successful login.                                           |
| POST    | /api/logout             | Allows users to sign out when they are done                                                                                                                   |
---

### Recipe

| Method | URL                | Description                                                                                                                                                                      |
| ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/recipe             | Protected Route. Returns an array of recipes                                                                                                                   |
| GET    | /api/recipe/:id         |  Returns an objects for the recipe by ID
| GET    | /api/recipe/:id/ingredient | Returns an array of recipe ingredients (`not working yet`)         |
| DELETE | /api/recipe/:id         | Deletes a recipe by specific ID.                                                                                                                                  |
---

### category

| Method | URL                | Description                                                                                                                                                                      |
| ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/category             | Allows for a new category to be created. payload shown above what is expected
| GET    | /api/category             | Returns an array of categories                                                                         
| GET    | /api/category/:id         | Returns a specific category based of its id 
| GET    | /api/category/:id/recipe  | Returns an array showing all recipes within a category  
| DELETE | /api/category/:id         | Deletes a category by specific ID.                                                                                                                                  |
---

### Source

| Method | URL                | Description                                                                                                                                                                      |
| ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/source             | Checks whether the payload from the body matches with the Source from the database
| GET    | /api/source             | Protected Route. Returns an array of categories                                                                                                                  
| GET    | /api/source/:id         |  Returns an objects based off the Source id 
| GET    | /api/source/:id/recipe  |  Returns an array all recipes from a given source                                                                                                                  
| DELETE | /api/source/:id         | Deletes a Source by specific ID.                                                                                                                                  |

### Ingredient

| Method | URL                | Description                                                                                                                                                                      |
| ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/ingredient             | Checks whether the payload from the body matches with the Ingredients from the database
| GET    | /api/ingredient             | Protected Route. Returns an array of Ingredients                                                                                                                  
| GET    | /api/ingredient/:id         |  Returns an object for a specific Ingredient ID                                                                                                                
| DELETE | /api/ingredient/:id         |  Deletes an Ingredient by specific ID.                                                                                                                                  |
