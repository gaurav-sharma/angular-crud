Demo
====

http://www.gauravsharma.io/angular-crud

Description
===========

This a single page application. It uses AngularJs and Firebase for the backend. So, the items added will be stored in Firebase. 

All the relevant code is in the app folder. Everything else is for Yeoman to do it's thing. 

Features
========

1. Items displayed in tabular format. Table can be sorted by column.
2. HTML5 validation when adding an item.
3. Firebase is used to store items added in the admin section. Since Firebase data is synced in realtime across apps, 
adding an item in the admin panel will make the item show up in the Store Front without any intervention on the users part.
4. Use of Yeoman to generate and manage the application.
5. Use of Bootstrap for basic UI themeing.

Instructions to get started
============================

There is nothing to install here if you already have a web server set up. All the code is plain HTML, CSS and JavaScript.

1. Via Grunt (preferred)

If you have Grunt installed, you can just navigate to the base folder and run grunt serve. This will serve up the app. on http://localhost:9010/#/

2. Via Xampp

Drop the application folder into the xampp/htdocs folder. The application should now be accessible at http://localhost/angular-crud

