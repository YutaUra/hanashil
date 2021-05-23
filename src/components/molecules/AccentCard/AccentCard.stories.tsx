import { array, date, text } from '@storybook/addon-knobs'
import { AccentCard } from './AccentCard'

export default {
  title: 'Molecules/AccentCard',
}

export const showAccentCard = (): JSX.Element => (
  <AccentCard
    category={text('カテゴリ', 'その他')}
    date={new Date(date('日程', new Date()))}
    level={text('レベル', '中級')}
    participants={array('アバターURL', [
      'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__480.png',
      'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png',
      'https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331__480.png',
    ])}
    title="メンタルが強い人の特徴とは？？"
  />
)
