# Project training-codeceptjs
This is a project to training the usage of the CodeceptJs framework. It is automating the site https://automacaocombatista.herokuapp.com/, that is a site was developed to training automation of tests. 

## Using sellenium
Before start the test we should start the selenium server. 

### Installing (Ubuntu)
* `sudo npm install -g selenium-standalone`
### Starting Selenium
* `selenium-standalone start`
## Using the Allure Reporter
Allure is a framework to generate a test report tool.
### Building and Starting with docker
In this project you can use:
* `npm run allure:build` (only on the first time to use)
* `npm run allure:start` (to start the container)
* `npm run allure:stop` (to stop the container)
## Run the test
* `npm run codeceptJs:test`

