import Icon from '@chakra-ui/icon'
import type { StackProps } from '@chakra-ui/layout'
import { Text, VStack } from '@chakra-ui/layout'
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs'
import { AvatarImage } from '~/components/atoms/AvatarImage'
import { getBrandColor, resolveBrandColor } from '~/theme'
import type { ITalkRoomUser } from '~/types/user'

type TalkRoomUserProps = ITalkRoomUser & Omit<StackProps, 'children'>

export const TalkRoomUser = ({
  isMute,
  isSpeaker,
  name,
  url,
  ...props
}: TalkRoomUserProps): JSX.Element => {
  return (
    <VStack w="fit-content" {...props}>
      <Text fontSize="lg">
        {name}
        <Icon
          as={isMute ? BsFillMicMuteFill : BsFillMicFill}
          color={isMute ? getBrandColor('text') : getBrandColor('accent.dark')}
        />
      </Text>
      <AvatarImage
        alt={`${name}のアバター`}
        boxShadow={
          isSpeaker
            ? `0 0 8px ${resolveBrandColor('accent.dark')}`
            : `0 0 4px ${resolveBrandColor('accent.text')}`
        }
        boxSize="20"
        src={url}
      />
    </VStack>
  )
}
