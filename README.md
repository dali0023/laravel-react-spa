<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

**Create Project:**
composer create-project --prefer-dist laravel/laravel blog
composer require laravel/ui

**Generate basic scaffolding:**
php artisan ui react

**Build All:**
npm install
npm run dev

**Install React with auth if need:**
•	php artisan ui react --auth

**React Router 6:**
npm / yarn add history react-router-dom@next --save


**For working with react state:**
**Just add to package.json:**

"babel": {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        "plugins": [
            "@babel/plugin-proposal-class-properties"
        ]
    }

