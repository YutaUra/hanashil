import { boolean, text } from '@storybook/addon-knobs'
import { TalkRoomUser } from './TalkRoomUser'

export default {
  title: 'Molecules/TalkRoomUser',
}

export const showTalkRoomUser = (): JSX.Element => (
  <TalkRoomUser
    isMute={boolean('ミュート', false)}
    isSpeaker={boolean('話し中', false)}
    name={text('名前', 'パリピ')}
    url={text(
      'アバターURL',
      'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__480.png',
    )}
  />
)
