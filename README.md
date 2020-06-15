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

### 🎨 Typed

`cogenv` integrates typing to convert your variables to different types from the `.env` file

-  `String`
-  `Boolean`
-  `Number`

```bash
# This will return as type number => 3000
APP_NUMBER=3000
# This will return of type string => "3000"
APP_NUMBER:string=3000

# boolean type => true
APP_LOG=yes
# boolean type => "yes"
APP_LOG:string=yes
# boolean type => false
APP_LOG=false
# string type => "false"
APP_LOG:string=false
# string type => "true"
APP_LOG="true"
# boolean type => true
APP_LOG:boolean="true"

# type number => 8080
APP_PORT=8080
# type string => "8080"
APP_PORT:string=8080
```

### 🎉 Method `env`

the env method allows you to obtain the environment variables; this method uses the [dotfast](https://github.com/yonicalsin/dotfast) package and its functionalities are available in this method

```ts
import { env } from '@cogenv/core';
env('APP_NAME'); //=> Cogenv
env('APP_URL'); //=> http://localhost:3000
```

to obtain from the objects is as follows

```ts
env('DB.dialect'); //=> mysql
env('DB.port'); //=> 336
env('DB.logging'); //=> true
```

from [dotfast](https://github.com/yonicalsin/dotfast), to return some data I need, for example

-  I need the application port and the database name

this will return an object

```ts
env({
   PORT: 'APP_PORT',
   DB_NAME: 'DB.database',
});
/*
{
   PORT: 3000,
   DB_NAME: "cogenv_database"
}
*/
```

let's try an array

```ts
env(['APP_PORT', 'DB.database']);
/*
[
   3000,
   "cogenv_database"
]
*/
```

### Options

-  Path: You may specify a custom path if your file containing environment variables is located elsewhere.
-  default: `path.resolve(process.cwd(), '.env')`

```ts
Config({
   path: '/custom/path/to/.env',
});
```

-  Encoding: You may specify the encoding of your file containing environment variables.
-  default: `utf8`

```ts
Config({
   encoding: 'latin1',
});
```

-  Logging: you can manipulate the messages on the console
-  default: `true`

```ts
Config({
   logging: false,
});
```

-  InterpolatePrefix: allows you to customize the interpolation prefix
-  default: `$`

```ts
Config({
   interpolatePrefix: '#',
});
```

-  TypedOptions: allows you to add typing options, such as mode (`customized`, `auto`)
-  default: `{mode: "auto"}`

```ts
Config({
   typedOptions: {
      mode: 'customized',
   },
});
```

### Parse

The engine that analyzes the content of your file containing the environment variables is available for use. It accepts a string or buffer and returns an object with the analyzed keys and values.

```ts
import { Parse } from '@cogenv/core';
const buf = Buffer.from('BASIC=basic');
const config = Parse(buf); // will return an object
console.log(typeof config, config); // object { BASIC : 'basic' }
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
