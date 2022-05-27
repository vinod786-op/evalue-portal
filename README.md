# Project Title

Evalue content portal is the **MERN stack**  Project,  is the website that create to perform various functionality like admin can add new employee in the database using the admin dashboard and also can add new project the project is assign to the employee automatically.
also added functionality that if anyone wants to forgot password then they easily can do if they exists in the database or in the system.


## total modules

1. admin
2. employee
3. publisher

## screen shots




## follow  below 👇steps 

1. first clone repo `https://github.com/vinod786-op/evalue-portal.git`
2. go to `backend/db.js` 
3. change `mongoURI` to your **local MONGO DB string or MONGO DB atlas**
4. go to main folder and run code `npm -i` this will install all the **dependency**
5. go to `backend` run code `npm -i`. > make sure that you go to backend folder first 
6. install any *API client service* i am using **thunder client** in VS code.
7. go to thunder client and paste this URL 

`localhost:5000/api/auth/createuser` request `POST`
 in the header make sure to add `content-type` **application/json**
 
 * **then**
**add this on the body section** 
`{
    "name": "admin",
    "email": "admin@gmail.com",
    "password": "admin@123",
    "role": "admin"
}`

*remember the password because password will not save database in text format. it will save in the encrypted from using algorithm*

**remember that:**  *in order to run project run command `npm start` to start front end, then go to  **`cd backend`** type code `nodemon start index.js`*
in order run both **backend and frontend**  *backend run on `localhost: 5000` frontend: `localhost: 3000`*

8. then login to the admin page go to `/login` and enter the email you entered. select role as **admin**, enter password you entered previous
9. now you can access to the admin dashboard and can add **new user, delete user, edit user, add new project with file uploading** 













## License

The project deploying under public is for the education purpose only. **code can re-useable**,  if you want to use in your local/personl project but it stricly prohibated  to use in **production level** if any found then they should trobule in legal

[MIT](https://choosealicense.com/licenses/mit/)
