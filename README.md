# php-page-builder
A modular page builder built with GrapesJS and vanilla PHP.

## Features
- No dependencies (*if you don't count CDNs*)
- Plug-n-play, works out of the box 
- Dynamic internal routing
- Customizable config

## Quick Start
- `$ git clone https://github.com/stealingudc/php-page-builder.git` or [download the .zip file](https://github.com/stealingudc/php-page-builder/archive/refs/heads/main.zip).
- Start your Apache server and navigate to `http://localhost:[port]/php-page-builder/index.php`.
- Enjoy.
- (Optional) Do your own [routing](https://phprouter.com/) or [.htaccess](https://httpd.apache.org/docs/2.4/howto/htaccess.html). Make sure you `RewriteRule` everything inside of the `php-page-builder` directory.

## Caveats
- (Unix only) For security reasons, you should set up your own write access rules. By default, php-page-builder uses `chmod -R 777` on its base dir. If you don't set up permissions, you will encounter "Permission denied" PHP warnings and no files will be saved.
- Since this is a HTML/CSS-first page-builder, no output of any `<script>` tags in your components will show up in the editor, for obvious reasons. Conversely, no JS-modified DOM elements will be "compiled" as such. JavaScript components will only run on the exported page. **What you see is what you get.**
#
Creating your own components is a manual process, since they're built with JS and trying to make `eval()` secure is out of the scope of this project. 

Following the structure of this project, you should be able to find and create your components in `src/js/plugins`. You can choose to store them and create them in any place, but don't blame me if you make a mess of your codebase :)

Refer to the GrapesJS [docs](https://grapesjs.com/docs/) and [API Reference](https://grapesjs.com/docs/api/) for more.

## TODO
- Save page templates on the filesystem (for now, they're saved in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)).
- ...other stuff (open an issue pls :3)

## License
[GNU General Public License v3.0](https://github.com/stealingudc/php-page-builder/blob/main/LICENSE).
