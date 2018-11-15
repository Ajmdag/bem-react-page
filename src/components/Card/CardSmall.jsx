import * as React from 'react'
import { withBemMod } from '@bem-react/core'

const CardSmall = () => (
  <a href="https://google.com/" >1</a>
)

export const cardSmall = withBemMod(
  'Link',
  { size: 's' },
  CardSmall
)
