# APIs
Following categories and subcategories are used in the data.
For full list refer to api-product.json
* cat [spelling, vocab]
* scat [grade, scripps, nsf, sasb]

### Authentication
* POST /auth/authenticate
  ```
  admin - sucess
  admin1 - failure
  ```
* GET /auth/currentuser

### MyAccount
* GET /api/myaccount/info
* GET /api/myaccount/personal

### Shop
* GET /api/shop/products?cat=:cat&scat=:scat
  ```
  Get list of products along with user subscription information 
  ```
* GET /api/shop/cart/items
  ```
  Get Current shopping cart items.
  ```
* PUT /api/shop/cart/items
  ```
  Add new product to Cart. Update Qty if product exists.
  ```
* POST /api/shop/cart/items
  ```
  Update product qty of existing item in Cart.
  ```
* DELETE /api/shop/cart/items
  ```
  Remote product from cart
  ```
    
### Product/Categories
* GET /api/products/categories
  ```
  Get All product categories and subcategories in Json 
  for use in shopping cart and other places 
  ```

### Subscriptions
* GET /api/subscriptions/categories?cat=:cat&scat=:scat
  ```
  Get Categories & Subcategories for which 
  user has atleast subscribed to some products.
  ```
* GET /api/subscriptions/lists?cat=:cat&scat=:scat
  ```
  Get Lists for which user Subscribed in a give Category/Subcateogry
  ```  

### MyLists
* GET /api/mylists/:id/unitstats
  ```
  Get Unitstats for a user subscribed list. This gets all Units for the list merged with user progress.
  Ex. /api/mylists/2344-23424-23232-2323/unitstats
  ```
* GET /api/mylists/:id/unitstats/:unitId
  ```
  Get Unit level stats for a Unit in the list for the User.
  Ex. /api/mylists/2344-23424-23232-2323/unitstats/0
  ```  
