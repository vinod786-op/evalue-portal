# Project Title

Evalue content portal is the **MERN stack**  Project,  is the website that create to perform various functionality like admin can add new employee in the database using the admin dashboard and also can add new project the project is assign to the employee automatically.
also added functionality that if anyone wants to forgot password then they easily can do if they exists in the database or in the system.


## total modules

1. admin
2. employee
3. publisher

## screen shots
![website demo ](https://user-images.githubusercontent.com/84795184/170821603-d7afdac9-5715-42af-b632-33579f00d8f1.gif)
## contact US page 
![contact us page ](https://user-images.githubusercontent.com/84795184/170821735-5b0c0f31-354a-443e-be56-4aef875a47a1.png)






## follow  below 👇steps 

1. first clone repo
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
![add data into thunder client](https://user-images.githubusercontent.com/84795184/170821935-fd0d14e3-802f-442d-8d1c-99908071fb56.png)


*remember the password because password will not save database in text format. it will save in the encrypted from using algorithm*

**remember that:**  *in order to run project run command `npm start` to start front end, then go to  **`cd backend`** type code `nodemon start index.js`*
in order run both **backend and frontend**  *backend run on `localhost: 5000` frontend: `localhost: 3000`*

8. then login to the admin page go to `/login` and enter the email you entered. select role as **admin**, enter password you entered previous
 ![login page](https://user-images.githubusercontent.com/84795184/170821837-1f48a56d-6d5a-40e4-88c6-dd7c5cd6d8cc.png)
10. now you can access to the admin dashboard and can add **new user, delete user, edit user, add new project with file uploading** 


## admin Dashboard 
![admin dashboard ](https://user-images.githubusercontent.com/84795184/170822104-581220b5-4acf-4f97-b988-dc705b9baa84.png)

## Publisher dashboard 
![publisher dashboard ](https://user-images.githubusercontent.com/84795184/170822122-040171a5-2929-4f84-8ddc-33ac66ab6d7e.png)

## Employee dashboard 
![employee dashboard ](https://user-images.githubusercontent.com/84795184/170822136-f58ecc7e-e1d3-4891-87c6-47f7874a3a5e.png)


## License

The project deploying under public is for the education purpose only. **code can re-useable**,  if you want to use in your local/personl project but it stricly prohibated  to use in **production level** if any found then they should trobule in legal

[MIT](https://choosealicense.com/licenses/mit/)
