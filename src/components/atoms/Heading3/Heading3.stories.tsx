import { text } from '@storybook/addon-knobs'
import { Heading3 } from './Heading3'

export default {
  title: 'Atoms/Heading3',
}

export const showHeading3 = (): JSX.Element => (
  <Heading3>{text('テキスト', 'ホット')}</Heading3>
)
