import { Button, IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import {
  Box,
  Center,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/layout'
import NextLink from 'next/link'
import { BsBoxArrowLeft, BsFillMicFill } from 'react-icons/bs'
import { GoLightBulb } from 'react-icons/go'
import { HiPlus } from 'react-icons/hi'
import { AvatarImage } from '~/components/atoms/AvatarImage'
import { TalkRoomUser } from '~/components/molecules/TalkRoomUser'
import { getBrandColor } from '~/theme'

export const RoomTop = (): JSX.Element => {
  return (
    <Box height="100vh" overflowY="scroll" p="4">
      <VStack mb="7" spacing="7">
        <Heading as="h1" color={getBrandColor('text')} fontSize="xl">
          ハナシルをよりよくするには？？
        </Heading>
        <VStack color={getBrandColor('text')} fontSize="xs" spacing="0">
          <Text>残り5分</Text>
          <Text>学びを投稿しよう！</Text>
        </VStack>
      </VStack>
      <VStack mb="16" spacing="12">
        <HStack w="full">
          <TalkRoomUser
            isMute={false}
            isSpeaker={false}
            name="パリピ"
            right="0"
            url="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__480.png"
            w="50%"
          />
          <TalkRoomUser
            isMute={false}
            isSpeaker={false}
            name="おかぴー"
            url="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"
            w="50%"
          />
        </HStack>
        <HStack w="full">
          <TalkRoomUser
            isMute={false}
            isSpeaker
            name="Angelpeople"
            url="https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331__480.png"
            w="50%"
          />
          <TalkRoomUser
            isMute
            isSpeaker={false}
            name="みいみい"
            url="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"
            w="50%"
          />
        </HStack>
      </VStack>

      <Box pb="16">
        <Text color={getBrandColor('text')}>学びの投稿</Text>
        <Button
          bgGradient={`linear(to-r, ${getBrandColor(
            'accent.dark',
          )}, ${getBrandColor('accent.light')})`}
          mb="1"
          rounded="full"
          w="full"
        >
          <Icon as={HiPlus} boxSize="8" color="white" />
        </Button>
        <Stack spacing="1">
          <Stack
            boxShadow="-0.5px 0.5px 2px #AFAFAF"
            direction="row"
            px="2"
            py="1"
          >
            <AvatarImage
              alt="アバター"
              flexShrink={0}
              src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__480.png"
            />
            <Text>こういう学びがあったよ</Text>
          </Stack>
          <Stack
            boxShadow="-0.5px 0.5px 2px #AFAFAF"
            direction="row"
            px="2"
            py="1"
          >
            <AvatarImage
              alt="アバター"
              flexShrink={0}
              src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"
            />
            <Text>これこれこういう考えを持った</Text>
          </Stack>
          <Stack
            boxShadow="-0.5px 0.5px 2px #AFAFAF"
            direction="row"
            px="2"
            py="1"
          >
            <AvatarImage
              alt="アバター"
              flexShrink={0}
              src="https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331__480.png"
            />
            <Text>
              こういう考えある。あと、こういう考えもあるよね。うんうん。あとこんなふうに考えることもできるよね。
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Center
        bgGradient="linear(to-b, rgba(255, 255, 255, 0.1) 0%,  rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0.95) 80%)"
        bottom="0"
        left="0"
        position="fixed"
        py="3"
        w="full"
      >
        <HStack spacing="12">
          <NextLink href="/" passHref>
            <IconButton
              aria-label="leave"
              as="a"
              icon={
                <Icon
                  as={BsBoxArrowLeft}
                  bg="white"
                  boxSize="12"
                  color={getBrandColor('accent.middium')}
                  p="1"
                  rounded="lg"
                />
              }
            />
          </NextLink>

          <Icon
            as={BsFillMicFill}
            bg="white"
            boxSize="12"
            color={getBrandColor('accent.middium')}
            p="2"
            rounded="lg"
          />
          <Icon
            as={GoLightBulb}
            bg="white"
            boxSize="12"
            color={getBrandColor('accent.middium')}
            p="2"
            rounded="lg"
          />
        </HStack>
      </Center>
    </Box>
  )
}
