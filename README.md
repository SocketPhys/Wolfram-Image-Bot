# Wolfram-Image-Bot

IMPORTANT: Set up the Npm module called "forever". It will allow this script to restart if it suddenly stops due to some error in the input parsing or json parsing.


You set this up on your computer and give your facebook credentials to the program. Then you run the program. It will allow you to connect to your computer from facbook chat. Credentials mean that in the bot.js , you need to input the facebook email and password for the bot. You can set it up with your own facebook account or you can make one for the bot.

To set this up: clone this repository and install the necessary npm modules from the package.json . Lastly register for an API account with wolfram-alpha. Then in bot.js fill in the API code with the code given.

In bot.js fill in the account you want to use for your bot. Then go to your terminal and after setting up all the files type node bot.js. Then if you chat the account you used for the bot you can communicate with your own computer.

Commands: 
This can be added to a group chat so in order to trigger the bot your message must start with /wolf . Your request must be in the same message as the /wolf . Wait a couple of seconds and images will be sent to the chat answering your query.

Examples: 
          
          /wolf H2O
          
          /wolf integrate x(sin x^2)

          /wolf size of the sun
