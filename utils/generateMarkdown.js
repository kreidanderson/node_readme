// function to generate markdown for README
// The only thing that is off is that the grab badge function comes up with an undefined but if I change anything relating to the grab badge part in the template literal then nothing happens.
function generateMarkdown(response) {
  return ` # ${response.title}
  
  ${grabBadge(response)}
  ${newArr}
 
  By: ${response.name}
  
  ## Description
  ${response.description}
  
  ## Table of Contents
  1. [Installation Instructions](#Installation-Instructions)
  2. [Usage Information](#Usage-Information)
  3. [Contribution Guidelines](#Contribution-Guidelines)
  4. [Test Instructions](#Test-Instructions)
  5. [Repository Information](#Repository-Information)
  
  ## Installation
  ${response.installation}
  
  ## Usage Information
  ${response.usage}
  
  ## Contributing
   ${response.contribution}
  
  ## Tests
   ${response.testInst}
  
   ## Questions?
  - Link to the repository: ${response.repo}
  - Link to my GitHub Profile: https://github.com/${response.username}/
  - Contact Me: ${response.email}
`;
}

// instead of adding another file, I'm just going to add the licensing array and information here:

const licensesArr=[{'Apache 2.0 License':'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
{'Boost Software License 1.0':'[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'},
{'BSD 3-Clause License':'[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
{'BSD 2-Clause License':'[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'},
{'The MIT License':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},];



var newArr = [];
function grabBadge(response){                
 
if(response.license === "The MIT License") {
      newArr.push(`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`)
  }
  else if (response.license === "Apache 2.0 License") {
    newArr.push(`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`)
  }
  else if (response.license=== "BSD 3-Clause License") {
    newArr.push(`[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`)
  }
  else if (response.license=== "BSD 2-Clause License") {
    newArr.push(`[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`)
}
else if (response.license=== "Boost Software License 1.0") {
  newArr.push(`[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`);
}

  }


// const grabLicense = (license) => {
    
//   if(license === "The MIT License") {
//       return `\r[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//   }
//   else if (license === "Apache 2.0 License") {
//       return `\r[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
//   }
//   else if (license === "BSD 3-Clause License") {
//       return `\r[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      
//   }
//   else if (license === "BSD 2-Clause License") {
//     return `\r[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
// }
// else if (license === "Boost Software License 1.0") {
//   return `\r[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  
// }
// }


  







module.exports = generateMarkdown;

