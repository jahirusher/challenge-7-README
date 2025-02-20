// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GNU") {
    return `![Static Badge](https://img.shields.io/badge/License-GNU-brightblue)`
  }
  else if (license === "MIT") {
    return `![Static Badge](https://img.shields.io/badge/License-MIT-brightblue)`
  }
  else if (license === "Apache") {
    return `![Static Badge](https://img.shields.io/badge/License-Apache-brightblue)`
  }
  else if (license === "none") {
    return ("none")
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU") {
    return `"https://www.gnu.org/license/gpl-3.0"`
  }
  else if (license === "MIT") {
    return `"https://opensource.org/licenses/MIT"`
  }
  else if (license === "Apache") {
    return `"https://opensource.org/licenses/Apache -2.0"`
  }
  else {
    return "none"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "GNU") {
    return "This challenge is licensed under GNU license."
  }
  else if (license === "MIT") {
    return "This challenge is licensed under MIT license."
  }
  else if (license === "Apache") {
    return "This challenge is licensed under Apache license"
  }
  else {
    return "none"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions, please reach out to me at ${data.email} or visit my Github profile at [${data.github}](
`;
}

export default generateMarkdown;
