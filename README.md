## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing
First thing please make sure you have nodejs runtime in you machine
Or you can install by download from this site
```
https://nodejs.org/en/download/
```
After install nodejs runtime. Run this command in terminal to make sure nodejs is working fine
```
node -v
output should look like this --> v10.16.3
npm -v
output should look like this --> 6.13.6
```
If everything working fine clone this repo into you machine by this command
```
git clone https://github.com/HakiBoy/puppeteer_git_login-.git
```

and run this command inside root of project
```
npm install
```
it should take a little bit time to install dependency on your machine

## Before running server
change file name .env_sample to .env
replace PUT_USER_NAME_HERE and PUT_PASSWORD_HERE with your github username and password

## Running the server
Put this command to you terminal at root of project
```
node index.js
```