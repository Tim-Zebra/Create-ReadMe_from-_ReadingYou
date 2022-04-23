// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let string = '';

  // Badges obtained from:  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  const objBadges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
    GNUGPL3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    BSD2: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]',
    BSD3: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]',
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]',
    Creative: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]',
    Eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]',
    GNUAffero: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]',
    GNUGPL2: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]',
    GNULesser: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]',
    Unilicense: '[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)]'
  }

  // Pulls only matching key value inside object
  for (const k in objBadges) {
    if (license === k) {
      string = objBadges[k];
    }
  }

  return string;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let string = '';

  // Badge links obtained from:  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  const objLinks = {
    Apache: '(https://opensource.org/licenses/Apache-2.0)',
    GNUGPL3: '(https://www.gnu.org/licenses/gpl-3.0)',
    MIT: '(https://opensource.org/licenses/MIT)',
    BSD2: '(https://opensource.org/licenses/BSD-2-Clause)',
    BSD3: '(https://opensource.org/licenses/BSD-3-Clause)',
    Boost: '(https://www.boost.org/LICENSE_1_0.txt)',
    Creative: '(http://creativecommons.org/publicdomain/zero/1.0/)',
    Eclipse: '(https://opensource.org/licenses/EPL-1.0)',
    GNUAffero: '(https://www.gnu.org/licenses/agpl-3.0)',
    GNUGPL2: '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    GNULesser: '(https://www.gnu.org/licenses/lgpl-3.0)',
    Mozilla: '(https://opensource.org/licenses/MPL-2.0)',
    Unilicense: '(https://unlicense.org/)'
  }

  // Pulls only matching key value inside object
  for (const k in objLinks) {
    if (license === k) {
      string = objLinks[k];
    }
  }
  return string;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let string = '';
  const time = new Date();
  const year = time.getFullYear();
  // Badges obtained from:  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  const objLicenses = {
    Apache: `
    Apache License
    
    Copyright ${year} ${data.username}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`,
    GNUGPL3: ``,
    MIT: `
    MIT License

    Copyright (c) ${year} ${data.username}

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
    `,
    BSD2: ``,
    BSD3: ``,
    Boost: ``,
    Creative: ``,
    Eclipse: ``,
    GNUAffero: ``,
    GNUGPL2: ``,
    GNULesser: ``,
    Mozilla: ``,
    Unilicense: ``
  }

  // Pulls only matching key value inside object
  for (const k in objLicenses) {
    if (data.license === k) {
      string = objLicenses[k];
    }
  }

  return string;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Gets badge, link, and section of license
  let badge = renderLicenseBadge(data.license);
  let link = renderLicenseLink(data.license);
  let section = renderLicenseSection(data);
  // combines all parts of license into a single markdown
  let license = `${badge}${link}`;


  return `# ${data.title}

  ## Description 

  ${data.description}
  ${license}

  ## Table of Contents:

  ## Installation

  ## Usage

  ## Contributing

  ## Tests

  ## License
  ${section}

  `;
}
module.exports = generateMarkdown;

  // Backup 100% markdown object.
  // Badges obtained from:  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  // const objBadge = {
  //   Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  //   GNUGPL3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  //   MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  //   BSD2: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
  //   BSD3: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  //   Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  //   Creative: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
  //   Eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
  //   GNUAffero: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
  //   GNUGPL2: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
  //   GNULesser: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
  //   Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  //   Unilicense: '[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)'
  // }
