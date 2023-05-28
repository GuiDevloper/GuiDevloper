import { readFileSync } from 'node:fs'

type Section = {
  title: string
  items: Item[]
}

type Item = {
  title: string
  color: string
  logo?: string
  logoColor?: string
  link: string
}

const NULLSTACK_LOGO = `data:image/png;base64,${readFileSync(
  './src/logos/nullstack.png',
  { encoding: 'base64' }
)}`

export default [
  {
    title: 'Languages and Their Docs',
    items: [
      {
        title: 'TypeScript',
        color: '007ACC',
        link: 'https://typescriptlang.org'
      },
      {
        title: 'JavaScript',
        color: '323330',
        logoColor: 'F7DF1E',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
        title: 'Python',
        color: '3670A0',
        logoColor: 'ffdd54',
        link: 'https://python.org/'
      },
      {
        title: 'YAML',
        color: '008000',
        link: 'https://yaml.org/'
      },
      {
        title: 'Markdown',
        color: '000000',
        link: 'https://en.wikipedia.org/wiki/Markdown'
      },
      {
        title: 'GraphQL',
        color: 'E10098',
        link: 'https://graphql.org/'
      },
      {
        title: 'HTML5',
        color: 'E34F26',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
      },
      {
        title: 'CSS3',
        color: '1572B6',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      },
      {
        title: 'SASS',
        color: 'CC6699',
        link: 'https://sass-lang.com/'
      },
      {
        title: 'Stylus',
        color: '333333',
        logoColor: '86b91a',
        link: 'https://stylus-lang.com/'
      },
      {
        title: 'PHP',
        color: '7478AE',
        link: 'https://php.net/'
      },
      {
        title: 'C Sharp',
        color: '4427a8'
      }
    ]
  },
  {
    title: 'Programming Tools',
    items: [
      {
        title: 'Nullstack',
        color: '2d3748',
        logo: NULLSTACK_LOGO
      },
      {
        title: 'Vue.js',
        color: '35495e',
        logoColor: '4FC08D'
      },
      {
        title: 'Node.JS',
        color: '6DA55F',
        link: 'https://nodejs.org/'
      },
      {
        title: 'Express',
        color: '404d59',
        logoColor: '61DAFB'
      },
      {
        title: 'Tailwind CSS',
        color: '06B6D4',
        link: 'https://tailwindcss.com/'
      },
      {
        title: 'Bootstrap',
        color: '563D7C',
        link: 'https://getbootstrap.com'
      },
      {
        title: 'React',
        color: '20232a',
        logoColor: '61DAFB',
        link: 'https://react.dev/'
      },
      {
        title: 'Angular',
        color: 'DD0031'
      },
      {
        title: 'Astro',
        color: 'FF5D01',
        link: 'https://astro.build/'
      },
      {
        title: 'Axios',
        color: '5A29E4',
        link: 'https://axios-http.com/'
      },
      {
        title: 'Socket.io',
        color: 'black'
      },
      {
        title: 'JWT',
        color: 'black',
        logo: 'jsonwebtokens'
      },
      {
        title: 'PWA',
        color: '5A0FC8'
      },
      {
        title: 'GreenSock',
        color: '88CE02'
      },
      {
        title: 'jQuery',
        color: '0769AD'
      }
    ]
  },
  {
    title: 'Cloud & Databases',
    items: [
      {
        title: 'Vercel',
        color: 'black',
        link: 'https://vercel.com/'
      },
      {
        title: 'Netlify',
        color: 'black',
        logoColor: '00C7B7',
        link: 'https://netlify.com/'
      },
      {
        title: 'GitHub Pages',
        color: '222222',
        link: 'https://pages.github.com/'
      },
      {
        title: 'Heroku',
        color: '430098',
        link: 'https://heroku.com/'
      },
      {
        title: 'MySQL',
        color: '00f'
      },
      {
        title: 'MongoDB',
        color: '4ea94b'
      }
    ]
  },
  {
    title: 'Version Control & Build',
    items: [
      {
        title: 'Git',
        color: 'F05033'
      },
      {
        title: 'GitHub',
        color: '121011'
      },
      {
        title: 'GitHub Actions',
        color: '2671E5'
      },
      {
        title: 'Webpack',
        color: '8DD6F9',
        logoColor: 'black'
      },
      {
        title: 'Babel',
        color: 'F9DC3e',
        logoColor: 'black'
      },
      {
        title: 'SWC',
        color: 'f7b36c',
        link: 'https://swc.rs/'
      },
      {
        title: 'Vite',
        color: '646CFF',
        logoColor: 'gold'
      },
      {
        title: 'Gulp',
        color: 'CF4647'
      },
      {
        title: 'GitLab',
        color: '181717'
      }
    ]
  },
  {
    title: 'Format & Test',
    items: [
      {
        title: 'Prettier',
        color: 'F7B93E'
      },
      {
        title: 'ESLint',
        color: '4B3263'
      },
      {
        title: 'Jest',
        color: 'C21325'
      },
      {
        title: 'Cypress',
        color: '17202C'
      },
      {
        title: 'Puppeteer',
        color: '40B5A4'
      },
      {
        title: 'Vitest',
        color: '6E9F18'
      }
    ]
  },
  {
    title: 'Other Tools',
    items: [
      {
        title: 'Visual Studio Code',
        color: '0078d7'
      },
      {
        title: 'pnpm',
        color: 'F69220',
        link: 'https://pnpm.io'
      },
      {
        title: 'npm',
        color: 'CB3837',
        link: 'https://npmjs.com'
      },
      {
        title: 'Yarn',
        color: '2C8EBB',
        link: 'https://yarnpkg.com/'
      },
      {
        title: 'Trello',
        color: '0052CC'
      },
      {
        title: 'Windows',
        color: '0078D6',
        logo: 'windows',
        link: 'https://microsoft.com/windows'
      },
      {
        title: 'Linux Mint',
        color: '87CF3E',
        logo: 'windows',
        link: 'https://linuxmint.com'
      }
    ]
  }
] as Section[]
