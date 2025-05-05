import type { AboutSection } from '@/lib/types'

export const baseData = {
  title: 'Kiiyuru\'s Space',
  description: `A software developer turning pixels into immersive playgrounds`,
  image: {
    src: '/profile.png',
    alt: 'Imla website',
  },
}

export const socialData = [
  {
    href: 'https://github.com/skiiyuru',
    icon: 'github',
    title: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/skiiyuru/',
    icon: 'linkedin',
    title: 'Linked In',
  },
  // {
  //   href: 'https://twitter.com/snkiiyuru',
  //   icon: 'twitter',
  //   title: 'Twitter',
  // },
  {
    href: '/rss.xml',
    icon: 'rss',
    title: 'RSS Feed',
  },
]

export const RESUME_LINK
  = 'https://rzei8mczw5.ufs.sh/f/v9xa1lyXWM8uzuuIBn9N28rmSJ5BEuAkwPpiOjMXavQlyT9Z'
export const EMAIL = 'steveknganga@gmail.com'

export const about_sections: AboutSection[] = [
  {
    slug: 'skills',
    title: 'Crafting Tools',
    description: 'I design and build across the stack to create experiences that are both elegant and dependable.',
    tools: ['TypeScript', 'Python', 'Next.js', 'Astro', 'Three.js', 'Express.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    slug: 'family',
    title: 'Foundation',
    description: `'At the heart of everything is my wife Tabitha and the life we’re shaping together
    —anchored in love, strengthened by faith, and devoted to Christ, our salvation.`,
  },
]
