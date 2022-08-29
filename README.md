# LDSchur.ch

## Church & Family Friendly URL Shortening Service

---

### Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
  <br/>

### Introduction

the site is live now at [http://ldschur.ch](http://ldschur.ch)

<br/>

**DISCLAIMER:**

<em>This is a personal project. I am not affiliated with the Church of Latter-Day Saints in any way. </em>

<br>

LDSchur.ch is a URL shortening service that allows you to shorten long and cumbersome website links into a shorter version better fit for sharing on social media platforms. The main difference of this platform compared to other shortening services is that it has a custom built filter to prevent nefarious and non-family friendly links from being shortened.

While I am not an active member of the Church of Latter-Day Saints, this repository could be easily transformed for other Church-based projects, or secular, school/family based platforms.

The custom filter package I created is entitled "family-safe-link", which you can incorporate into your projects! See below for instructions on how to do so.

### Installation

Setup is simple:

```
git clone https://github.com/infiniteoo/LDSchur.ch.git
```

```
npm install
```

```
npm run dev
```

### family-safe-link setup

https://github.com/infiniteoo/family-safe-link

```
npm install family-safe-link
```

Execution:

```
const { familySafeLink } = require("family-safe-link");

const websiteURL = "https://www.pornhub.com"

if (familySafeLink(websiteURL)) {
  console.log("safe");
} else {
  console.log("unsafe");
}
```

### Usage

check out the live site:
http://ldschur.ch

Using the site is simple. Find a link you want to shorten, and copy it into the input field. Click the "Shorten" button. The link is sent to the server to deem whether it is safe. If so, it is written to the database and then returned to the front end.

The shortened link will be displayed in the output field.

Click the 'Copy to Clipboard' button to copy the shortened link to your clipboard.

![example gif](/example_gifs/example_gif_1.gif)

If you enter a link that has been deemed not safe for sharing via the "family-safe-link" package, an error message will display.

![example gif](/example_gifs/example_gif_2.gif)

Here's a quick tour of the various sections of the site:

![example gif](/example_gifs/example_gif_3.gif)

The site is also mobile-responsive:
![example gif](/example_gifs/example_gif_4.gif)

### License

Copyright (c) 2022 LDSchur.ch

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
