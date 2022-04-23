// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let string = '';

  // Badges obtained from:  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  const objBadge = {
    Apache: '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    GNUGPL3: '[(https://img.shields.io/badge/License-GPLv3-blue.svg)',
    MIT: '(https://img.shields.io/badge/License-MIT-yellow.svg)',
    BSD2: '(https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)',
    BSD3: '(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
    Boost: '(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)',
    Creative: '(https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)',
    Eclipse: '(https://img.shields.io/badge/License-EPL_1.0-red.svg)',
    GNUAffero: '(https://img.shields.io/badge/License-AGPL_v3-blue.svg)',
    GNUGPL2: '(https://img.shields.io/badge/License-GPL_v2-blue.svg)',
    GNULesser: '(https://img.shields.io/badge/License-LGPL_v3-blue.svg)',
    Mozilla: '(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
    Unilicense: '(https://img.shields.io/badge/License-Unlicense-blue.svg)'
  }

  // Pulls only matching key value inside object
  for (const k in objBadge) {
    if (license === k) {
      string = objBadge[k];
    }
  }

  return string;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let string = '';

  // Badge links obtained from:  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  const objBadge = {
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
  for (const k in objBadge) {
    if (license === k) {
      string = objBadge[k];
    }
  }
  return string;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let string = '';

  // Badges obtained from:  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  const objBadge = {
    Apache: '[License]',
    GNUGPL3: '[License: GPL v3]',
    MIT: '[License: MIT]',
    BSD2: '[License]',
    BSD3: '[License]',
    Boost: '[License]',
    Creative: '[License: CC0-1.0]',
    Eclipse: '[License]',
    GNUAffero: '[License: AGPL v3]',
    GNUGPL2: '[License: GPL v2]',
    GNULesser: '[License: LGPL v3]',
    Mozilla: '[License: MPL 2.0]',
    Unilicense: '[Unlicense]'
  }

  // Pulls only matching key value inside object
  for (const k in objBadge) {
    if (license === k) {
      string = objBadge[k];
    }
  }

  return string;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Gets badge, link, and section of license
  let badge = renderLicenseBadge(data);
  let link = renderLicenseLink(data);
  let section = renderLicenseSection(data);

  // combines all aspects into a single markdown
  return `[!${section}${badge}]${link}`;
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
