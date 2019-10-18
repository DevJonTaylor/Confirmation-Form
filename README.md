# Molly Bears Confirmation Form ![](https://img.shields.io/badge/Confirmation_Form_v2-8e53a3?style=plastic) 
![](https://img.shields.io/badge/VueJS-v2.6.10-41b883?style=plastic&logo=vue.js) ![NodeJS Version 12.12.0](https://img.shields.io/badge/NodeJS-v12.12.0-43853d?logo=node.js&style=plastic) ![](https://img.shields.io/badge/PHP-v7.3.10-88d?style=plastic&logo=php) ![](https://img.shields.io/badge/MySQL-v10.2.27-88d?style=plastic&logo=mysql) ![](https://img.shields.io/badge/Joomla!-v3.9.13-f27042?style=plastic&logo=Joomla) ![](https://img.shields.io/badge/Babel-v10.0.1-eeda7c?style=plastic&logo=babel) 
This is a complete overhaul of the confirmation form for Molly Bears.  The form itself is being completely rehauled, the emails are being processed different for better control and less third party involvement.
## Development setup
You will want to either clone or download the zip for this repo.
```
git clone https://github.com/DevJonTaylor/Confirmation-Form.git
```
You will want to ensure that you have [NodeJS](https://nodejs.org) installed.
If the above two are setup and working then you simply open up a cmd/terminal and follow the command below.  Normally the process takes around 2-5 minutes depending on the bandwidth of the repos.
```
npm install
```
Once the install is done and you have no errors you can start the local server with the serve
```
npm run serve
```
You'll be able to access the form using developer options from **[here](http://localhost:3000)**
## Deployment
You can access the deployment files on Molly Bears server located @
```
/public_html/plugins/system/mmb/confirmation
```
 and loaded into Joomla! here
```
API code is located
/public/plugins/system/mmb/mmb.php:897
/public/plugins/system/mmb/mmb.php:908

The form is loaded
/public/plugins/system/mmb/mmb.php:1023
```

There are two other PHP files that are loaded for the API their location is in between the two line number provided.

```
/public/plugins/system/mmb/mmb.php:1029
$article->text .= '<div id="App"></div>';
```
The above line is required for the form to render and load onto the page.

## Release History
* v1.0.0
	* Released
* v2.0.0
    * Form is rebuilt
    * The entire page is less than 200kb after minified
    * Faster load times
    * Less errors
    * Fit for mobile
    * Fit for Tablet
    * Fit for larger devices
    * No Errors
    * VueJS/Sentry is installed to the production release and is active.

## Developer
**[Jonathan Taylor](mailto:jonnytest1101@icloud.com)** -- jonnytest1101@icloud.com
