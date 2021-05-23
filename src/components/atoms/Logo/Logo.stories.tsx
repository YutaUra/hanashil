import { number } from '@storybook/addon-knobs'
import { Logo } from './Logo'

export default {
  title: 'Atoms/Logo',
}

export const showLogo = (): JSX.Element => (
  <Logo boxSize={number('boxSize', 4)} />
)
