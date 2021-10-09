// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `![GitHub license](https://img.shields.io/badge/license-${data.license}-Black.svg)
  
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  This application is licensed under the ${data.license} license.
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.testing}
  ## Questions
  <a href="https://github.com/${data.github}">GitHub Profile</a>
  <br>
  For further questions, please contact me at: ${data.email}
`;

}

module.exports = generateMarkdown;
