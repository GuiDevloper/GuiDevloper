import fs from 'node:fs'
import DATA from './data'

const DATAtoString = DATA.map(section => {
  return `### ${section.title}

${section.items
  .map(item => {
    const urlTitle = encodeURI(item.title)
    return `[![${item.title}](https://img.shields.io/badge/${urlTitle}-${
      item.color
    }?${new URLSearchParams({
      style: 'flat-square',
      logo: item.logo || urlTitle,
      logoColor: item.logoColor || 'white'
    })})](${item.link || ''})`
  })
  .join('\n')}`
}).join('\n\n')

const source = fs.readFileSync('./src/source.md', {
  encoding: 'utf8'
})

fs.writeFileSync(
  './README.md',
  source.replace('<!-- SECTIONS -->', DATAtoString)
)
