# RABIT TECH - FRONTEND


### Related repositories

This repo contain the front functionality of Rabit Tech web application. If you would like to run all, please go to [https://github.com/omarftt/rabit-front]https://github.com/omarftt/rabit-back and run it too.

### Installing dependencies

To install the project in local execute the next line in terminal:

```
npm install
```

### Previous instructions

The PORTS used for demo are:
 3000: for front end repo
 4000: for back end repo


### Run instructions

To run the project execute the next line:
```
npm start
```


### Register instructions

To create a user of diferent roles , follow the next instructions:
```
Provide User Code begin with 'S20' to create a student user. Example: 'S20169921'
Provide User Code begin with 'T50' to create a teacher user. Example: 'T50142921'
Provide User Code begin with 'A90' to create a admin user. Example: 'A9010921'
```

### Virtual Classroom Principal Process

The virtual classroom process used for admin, teachers and student are going to be:
```
- Admin creates 'talleres' and 'products'
- Teacher can see 'talleres' created by admin and enroll in which he/she decides.
- Teacher can create/delete classrooms in the 'talleres' in which he/she is enrolled.
- Teacher can create/delete homeworks in the classroom that he/she created.
- Student can enroll a classroom providing the classroom code (During the demo, the classroom code is the Classroom ID from MongoDB).
- Student can see the homeworks created by the teacher of the classroom in which he/she enrolled.  
```
