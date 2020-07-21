
// Save for TOC : ${data.TOC}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# **${data.Title}**
---

## Table of Contents 

| [Description](#description) |
| [Usage](#usage)|
| [Installation](#installation) |
| [Contributing](#contributing) |
| [Test](#test) |
| [License](#license) |
| [Author Info](#author-info) |

---

## Description 
${data.Description}

### Usage 
> ${data.Usage}

[Back to the top](#table-of-contents)
---

## How To Use

#### Installation
> ${data.Installation}

#### Contributing
> ${data.Contributing}


[Back to the top](#table-of-contents)

---

## License
${data.License}

---

## Author Info
${data.Authors}

- [Github:](${data.Github})
- [Email:](https://${data.Email})


[Back to the top](#table-of-contents)

---

MIT License

Copyright (c) [2020] [Osborn]

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

`;
}

module.exports = generateMarkdown;

