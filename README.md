Mongol 1.0  [![Join the chat at https://gitter.im/msavin/Mongol](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/msavin/Mongol?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
==================

Meet Mongol, the insanely handy development package for Meteor. Starting today, you'll never have to enter the console to play with your collections again. Mongol allows you to view and modify your client side documents visually.

How to Install
--------------

Mongol configures automatically. To get started, simply run:

	$ meteor add msavin:mongol

After installation, press <strong>Control + M</strong> to toggle it.<br>If you'd prefer to see a demo first, go to http://mongol.meteor.com.

Your Documents, At a Glance
----------------------------
Mongol will automatically detect your collections and display your client-side documents. You can always see how many documents you are subscribing to, and browsing them is just a click away.

<a href="http://mongol.meteor.com"><img src="https://raw.githubusercontent.com/msavin/Mongol/master/documentation/screenshots/1.png"></a>

 
Easily View & Modify Documents
------------------------------
Mongol is able to insert, update and/or remove any document in your database, regardless if you have `insecure` or the permissions to allow it. Read the <a href="https://github.com/msavin/Mongol/blob/master/SECURITY.md">security</a> post to learn how this works. 

<a href="http://mongol.meteor.com"><img src="https://raw.githubusercontent.com/msavin/Mongol/master/documentation/screenshots/2.png"></a>

Watch Your Subscriptions
------------------------
Mongol allows you to view all of your data subscriptions, along with their details. You can turn any subscription off by pressing the X button.

<a href="http://mongol.meteor.com"><img src="https://raw.githubusercontent.com/msavin/Mongol/master/documentation/screenshots/3.png"></a>

Only There When You Want It
---------------------------
Mongol won't render into the DOM until you activate it. You can activate by pressing <strong>Control + M</strong>, or with `Session.set("MeteorToys_display", true)`.

<a href="http://mongol.meteor.com"><img src="https://raw.githubusercontent.com/msavin/Mongol/master/documentation/screenshots/4.png"></a>


Additional Information
----------------------
 - <a href="https://github.com/msavin/Mongol/blob/master/documentation/SECURITY.md">Mongol & Security</a> (Must Read)
 - <a href="https://github.com/msavin/Mongol/blob/master/documentation/COMPATIBILITY.md">Mongol & Package Compatibility</a>
 - <a href="https://github.com/msavin/Mongol/blob/master/documentation/CHANGELOG.md">Mongol Changelog</a>
 - <a href="https://atmospherejs.com/msavin/mongol">On Atmosphere</a>
 - <a href="https://github.com/msavin/Mongol/">On GitHub</a>
 - <a href="https://github.com/msavin/Mongol/blob/master/documentation/LICENSE.md">Licensed under MIT</a>
 - Designed to work with <a href="https://github.com/msavin/JetSetter">JetSetter</a>