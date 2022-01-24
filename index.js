const fs = require('fs')
const path = require('path')
const Papa = require('papaparse')
const _ = require('lodash')
const config = require('./config')


// put the paths to the repos you want to aggregate data from here.
// must be absolute path to the root of the package.json location
const paths = config.repositories 

const packages = paths.map((p) => {
  const data = fs.readFileSync(`${p}/package.json`, 'utf-8') 

  const {dependencies = {}, devDependencies = {}} = JSON.parse(data)

  const packageNames = Object.keys(dependencies)
    .concat(Object.keys(devDependencies))
    .filter(name => name.indexOf('@deep6ai') === -1)

  const node_modules = packageNames.map(pn => {
    const data = fs.readFileSync(`${p}/node_modules/${pn}/package.json`) 
    const {name = '', license = '', version = '', description = '', repository = {} } = JSON.parse(data)
    return {
      OSS: name,
      Version: version,
      License: license,
      Notes: description,
      URL: repository.url ?? '' 
    }
  })

  return node_modules 
});

const combinedPackages = _.flatMap(packages)

const combinedPackagesCsv = Papa.unparse(combinedPackages)

try {
  fs.writeFileSync('out.csv', combinedPackagesCsv)
} catch (err) {
  console.error(err)
}
