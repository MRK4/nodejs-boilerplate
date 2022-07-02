# NodeJS Boilerplate

A simple NodeJS boilerplate in order to make it easy to create a website with login, register and change password page !

## Requirements

- [NodeJS](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community). 
_Make sure MongoDB is launched when you're working on this._

I recommend you to use Visual Studio Code.

## 🚀 Installation

### Clone and Install

Simply open a terminal and:

```
git clone https://github.com/MRK4/nodejs-boilerplate
```

After that, install the packages with:
```
npm install
```

### Creating and editing the .env file

Once it's done, copy the `.env.example` file and name it `.env`.

#### Password Hash

In order to hash the passwords, you will need to change the line in the file by whatever you want,

for exemple:

You have this

```
JWT_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

You can write this

```
JWT_SECRET=4z{*KC~!mPHrXag&7tS[$L7?:7P}h9[Mhm]WNwyXt+n<]N#<+Y
```

This line is really important, it must be secret !

#### Change the MongoDB URL

You'll have this line:

```
MONGODB_URL=mongodb://localhost:27017/name-of-your-project
```

Simply change `name-of-your-project` by the name of your project, Mongo will create it automatically !

#### Changing the Ports

You'll have this line:
```
PORTS=9999
```

If there's any problem with thath, you can change `9999` by whatever you want.

## ⚙️ How to use it

Do not forget the `npm install` :)

### Start everything in one command

This is perfect for simultaneous Front-End and Back-End development

Simply use

```
npm run dev
```

A new browser should open, now you can write your code and the windows will refresh without doing anything !

### Only launch Front-End

Open an new terminal and write:

```
npm run watch
```

You should have a new browser, same as abobe you don't have to F5 to see the modifications that you make.

### Only launch Back-End

Open an new terminal and write:

```
npm run dev
```

or

```
nodemon .\server.js
```

or

```
node .\server.js
```

### Build command

```
npm run build
```

## 🚧 Routes

Register page: `localhost:9999`

Login page: `localhost:9999/login`

Change password page: `localhost:9999/change-password`

_If you changed the default ports, change `9999` by the ports you have chosen._

## 📜 MIT License

Copyright (c) 2022 Clément Poudrée

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
