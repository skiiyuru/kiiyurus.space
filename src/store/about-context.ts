import type { AboutSectionsProps } from '@/lib/types'
import { createContext } from 'react'

const state: AboutSectionsProps = { sections: [], tools: [] }

export const AboutContext = createContext(state)
