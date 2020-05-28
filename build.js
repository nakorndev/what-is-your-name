const yaml = require('yaml')
const { resolve } = require('path')
const { readdirSync, writeFileSync, readFileSync } = require('fs')

const build = async () => {
  console.log('Bundling...')
  const profiles = await readdirSync(resolve(__dirname, './data'))
  const jsons = []
  for (const profile of profiles) {
    console.log(`- ${profile}`)
    const yml = await readFileSync(resolve(__dirname, './data', profile), { encoding: 'utf-8' })
    const json = yaml.parse(yml)
    jsons.push(json[0])
  }
  await writeFileSync(resolve(__dirname, './profiles.json'), JSON.stringify(jsons))
  console.log(`Bundled total of ${profiles.length} files.`)
}

build()
