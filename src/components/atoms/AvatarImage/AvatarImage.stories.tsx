import { number, text } from '@storybook/addon-knobs'
import { AvatarImage } from './AvatarImage'

export default {
  title: 'Atoms/AvatarImage',
}

export const showAvatarImage = (): JSX.Element => (
  <AvatarImage
    alt="アバター"
    boxSize={number('サイズ', 7)}
    src={text(
      'アバターURL',
      'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__480.png',
    )}
  />
)
