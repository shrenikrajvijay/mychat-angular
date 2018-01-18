# mychat
Introduction:
		This application is used for sending/receiving text messages. Just enter your username and start Chatting. Enjoy!
	
Features:

* Send messages to the Chat rooms.
* See how many people are in the chat.
* See how long you are online.
* Scroll through the history of messages.

Technologies Used:

* Front-End: Html, Css, AngularJS, Bootstrap
* Server-Side: Node.js
* Testing: Karma, Jasmine  

Installation:
1. Clone this respository to your local folder,

		git clone https://github.com/shrenikrajvijay/mychat

2. Install nvm to have the latest version of node (version greater than 7.0.0),

		cd ~/
		git clone https://github.com/creationix/nvm.git .nvm
		cd ~/.nvm
		git checkout v0.33.6
		. nvm.sh
		nvm install node
		nvm use node
		
	Now add these lines to your ~/.bashrc, ~/.profile, or ~/.zshrc file to have it automatically sourced upon login,
	
		export NVM_DIR="$HOME/.nvm"
		[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
		[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


3. Run npm install (from the project folder) to install all the dependencies,

		cd mychat (to the project folder)
		npm install

3. Start the server so that requests can be made,

		node ./server.js
	
	If running the above command gives out error, then install the necessary modules using npm install. For example,
		
		npm install express

5. After all the above is set up, issue reques to server by typing in the following inside the web browser,
	- localhost:8080

If everything went well, then you should see the web page.

SCREENSHOTS:

![alt text](https://github.com/shrenikrajvijay/mychat/blob/master/app/images/Screen%20Shot%202017-12-04%20at%201.22.20%20PM.png)
![alt text](https://github.com/shrenikrajvijay/mychat/blob/master/app/images/Screen%20Shot%202017-12-04%20at%201.22.31%20PM.png)
![alt text](https://github.com/shrenikrajvijay/mychat/blob/master/app/images/Screen%20Shot%202017-12-04%20at%201.22.44%20PM.png)







# mychat-angular
