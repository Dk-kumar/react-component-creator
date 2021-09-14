const fileSystem = require("file-system")
const prompt = require('prompt')

prompt.start()

prompt.get('componentName', (err, res) => {
    if (err) { console.log(err) }
    createFolder(res.componentName)
})

const createFolder = (componentName) => {
    fileSystem.mkdirSync(componentName, 0o776)
    createFiles(componentName)
}

const createFiles = (componentName) => {
    fileSystem.writeFileSync(`${componentName}/${componentName}.component.js`)
    console.log(`\x1b[32m%s\x1b[0m`, `${componentName}.component.js successfully created!`)
    fileSystem.writeFileSync(`${componentName}/${componentName}.container.js`)
    console.log(`\x1b[32m%s\x1b[0m`, `${componentName}.container.js successfully created!`)
    fileSystem.writeFileSync(`${componentName}/index.js`)
    console.log(`\x1b[32m%s\x1b[0m`, `index.js successfully created!`)
    fileSystem.writeFileSync(`${componentName}/${componentName}.style.scss`)
    console.log(`\x1b[32m%s\x1b[0m`, `${componentName}.style.scss successfully created!`)
}