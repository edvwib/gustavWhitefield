[![StyleCI](https://styleci.io/repos/7548986/shield)](https://github.styleci.io/repos/153169588)

# Installation
## WordPress API (wp-api)
Note: The [WordPress API](./wp-api/) requires the paid version 
of the plugin [ACF (Advanced Custom Fields)](https://www.advancedcustomfields.com/).
Open the [composer.json](./wp-api/composer.json) file in the [wp-api](./wp-api/) 
folder, and locate this snippet inside 'repositories':
```json
{
    "type": "package",
    "package": {
        "name": "wpackagist-plugin/advanced-custom-fields-pro",
        "type": "wordpress-muplugin",
        "version": "5.7.10",
        "dist": {
            "url": "https://connect.advancedcustomfields.com/index.php?v=5.7.10&p=pro&a=download&k=YOUR-KEY",
            "type": "zip"
        }
    }
}
```
Replace 'YOUR-KEY' with the [ACF](https://www.advancedcustomfields.com/) PRO 
key from your [ACF account page](https://www.advancedcustomfields.com/my-account/).

Check the [README.md](./docker/README.md) inside the docker folder to quickly 
start developing.
<hr>

## Frontend (web-app)
Copy/rename the [.env.example](./web-app/.env.example) file located in the 
web-app folder to .env.

*Skip the following if you're using Docker.*<br>
Next, run the following commands inside the [web-app](./web-app) folder:
```sh
npm install 
npm start
```
