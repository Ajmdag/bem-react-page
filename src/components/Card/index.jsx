import { compose } from '@bem-react/core'

import { Card as Base } from './Card'
import { cardSmall } from './_size/Card_small'
import { cardMedium } from './_size/Card_medium'
import { cardLarge } from './_size/Card_large'

export const Card = compose(
  cardSmall,
  cardMedium,
  cardLarge
)(Base)
