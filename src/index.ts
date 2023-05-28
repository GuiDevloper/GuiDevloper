import fs from 'node:fs'
import DATA from './data'

const DATAtoString = DATA.map(section => {
  return `### ${section.title}

${section.items
  .map(item => {
    const badgeName = `${encodeURI(item.title)}-${item.color}`
    const domain = `https://img.shields.io/badge/${badgeName}`
    const badgeParams = new URLSearchParams({
      style: 'flat-square',
      logo: item.logo || item.title,
      logoColor: item.logoColor || 'white'
    })
    const finalBadge = `![${item.title}](${domain}?${badgeParams})`

    return item.link ? `[${finalBadge}](${item.link})` : finalBadge
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
