import { text } from '@storybook/addon-knobs'
import { Heading2 } from './Heading2'

export default {
  title: 'Atoms/Heading2',
}

export const showHeading2 = (): JSX.Element => (
  <Heading2>{text('text', '参加しよう！')}</Heading2>
)
