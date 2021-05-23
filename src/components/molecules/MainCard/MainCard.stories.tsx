import { array, date } from '@storybook/addon-knobs'
import { MainCard } from './MainCard'

export default {
  title: 'Molecules/MainCard',
}

export const showMainCard = (): JSX.Element => (
  <MainCard
    date={new Date(date('日程', new Date()))}
    participants={array('アバターURL', [
      'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__480.png',
      'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png',
      'https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331__480.png',
    ])}
    title="メンタルが強い人の特徴とは？？"
  />
)
