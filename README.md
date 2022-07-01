# NodeJS Boilerplate

A simple NodeJS boilerplate in order to make it easy to create a website with login, register and cahnge password page !

## 🚀 Installation

Simply open a terminal and:

```
git clone https://github.com/MRK4/nodejs-boilerplate
```

After that, install the packages with:
```
npm install
```

Once it's done, copy the `.env.example` file and name it `.env`.

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

## ⚙️ How to use it

### Start the server

Simply use

```
node .\server.js
```

or

```
nodemon .\server.js
```

or

```
npm run start .\server.js
```

If you have any problem, be sure to install the packages with `npm install`

### Open in browser

Open your browser and type:

Register page: `localhost:9999`

Login page: `localhost:9999/login`

Change password page: `localhost:9999/change-password`

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