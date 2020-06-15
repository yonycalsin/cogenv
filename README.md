# cogenv

An efficient and flexible JavaScript library to manage environment variables

<a href="https://github.com/yonicalsin/cogenv"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/cogenv" target="_blank">
<img src="https://img.shields.io/npm/v/cogenv" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/cogenv" target="_blank">
<img src="https://img.shields.io/npm/l/cogenv" alt="Package License" /></a>
<a href="https://www.npmjs.com/cogenv" target="_blank">
<img src="https://img.shields.io/npm/dm/cogenv" alt="NPM Downloads" /></a>
<a href="https://github.com/yonicalsin/cogenv" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yonicalsin/cogenv"><img src="https://img.shields.io/badge/Github%20Page-cogenv-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yonicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yonicalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yonicalsin.svg?style=social&label=Follow"></a>

## 📦 Installation

```bash
# For npm
npm install --save cogenv
# For yarn
yarn add cogenv
```

## 🚀 Get Started

Create an `.env` file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example, NAME=VALUE:

```bash
APP_NAME=Cogenv
APP_PORT:string=3000
APP_PORT_NUMBER:number=3000
APP_URL=http://localhost:${APP_PORT}

# For Database
DB->dialect=mysql
DB->port=336
DB->port_string:string=336
DB->localhost=localhost
DB->user=root
DB->password=cogenv_password
DB->logging=true
DB->database=cogenv_database
DB->URL=http://localhost:${DB.port}
```

`cogenv` will magically transform into the following

```json
{
   "APP_NAME": "Cogenv",
   "APP_PORT": "3000",
   "APP_PORT_NUMBER": 3000,
   "APP_URL": "http://localhost:3000",
   "DB": {
      "dialect": "mysql",
      "port": 336,
      "port_string": "336",
      "localhost": "localhost",
      "user": "root",
      "password": "cogenv_password",
      "logging": true,
      "database": "cogenv_database",
      "URL": "http://localhost:336"
   }
}
```

As soon as possible in your application, require and configure the cogenv.

```ts
// Javascript
require('cogenv').Config();

// ES6+ / Typescript
import Config from 'cogenv';
// Initializing
Config();
```

cogenv now has the keys and values you defined in your `cog.env` file.

```ts
import { env } from '@cogenv/core';

env('DB');
// or
cog.env.DB;
```

```json
{
   "dialect": "mysql",
   "port": 336,
   "localhost": "localhost",
   "user": "root",
   "password": "cogenv_password",
   "logging": true,
   "database": "cogenv_database",
   "URL": "http://localhost:336",
   "port_string": "336"
}
```

## ⭐ Support for

`cogenv` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Github [@yonicalsin](https://github.com/yonicalsin)
-  Twitter [@yonicalsin](https://twitter.com/yonicalsin)
-  Instagram [@yoni_calsin](https://instagram.com/yoni_calsin)
-  Medium [@yonicalsin](https://medium.com/yonicalsin)

## Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`cogenv` under [License MIT.](LICENSE)
