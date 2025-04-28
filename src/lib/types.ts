type AboutSectionType = 'skills' | 'family'

export interface AboutSection {
  slug: AboutSectionType
  title: string
  description: string
  tools?: string[]
}
