import { Box, Center, HStack, Icon, Stack } from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'
import { FaRocketchat } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import { Heading2 } from '~/components/atoms/Heading2'
import { Heading3 } from '~/components/atoms/Heading3'
import { Logo } from '~/components/atoms/Logo'
import { AccentCard } from '~/components/molecules/AccentCard'
import { MainCard } from '~/components/molecules/MainCard'
import { resolveBrandColor, useBrandColor } from '~/theme'

const MainCards = (): JSX.Element => {
  return (
    <Stack direction="row" overflowX="scroll" p="1" spacing="3.5">
      <MainCard
        date={new Date(2021, 5, 15, 20, 30)}
        minW="72"
        participants={[
          'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__480.png',
          'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png',
          'https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331__480.png',
        ]}
        title="メンタルが強い人の特徴とは？？"
      />
      <MainCard
        date={new Date(2021, 5, 15, 20, 30)}
        minW="72"
        participants={[
          'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__480.png',
          'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png',
          'https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331__480.png',
        ]}
        title="メンタルが強い人の特徴とは？？"
      />
    </Stack>
  )
}

export const Top = (): JSX.Element => (
  <Box height="100vh" p="4">
    <Center mb="2">
      <Logo />
    </Center>
    <Heading2 mb="2">参加しよう！</Heading2>
    <AccentCard
      category="その他"
      date={new Date(2021, 5, 15, 20, 30)}
      level="中級"
      mb="2"
      participants={[
        'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__480.png',
        'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png',
        'https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331__480.png',
      ]}
      title="メンタルが強い人の特徴とは？？"
    />
    <Heading2 mb="2">予約しよう！</Heading2>
    <Stack pb="20" spacing="4">
      <Stack>
        <Heading3>ホット</Heading3>
        <MainCards />
      </Stack>
      <Stack>
        <Heading3>社会問題</Heading3>
        <MainCards />
      </Stack>
      <Stack>
        <Heading3>健康</Heading3>
        <MainCards />
      </Stack>
      <Stack>
        <Heading3>健康</Heading3>
        <MainCards />
      </Stack>
    </Stack>
    <Center
      bgGradient="linear(to-b, rgba(255, 255, 255, 0.1) 0%,  rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0.95) 80%)"
      bottom="0"
      left="0"
      position="fixed"
      py="3"
      w="full"
    >
      <HStack spacing="12">
        <Icon
          as={FaRocketchat}
          bg="white"
          boxShadow={`0 0 0.5rem ${resolveBrandColor('accent.middium')}`}
          boxSize="16"
          color={useBrandColor('accent.middium')}
          p="3"
          rounded="2xl"
        />
        <Icon
          as={HiPlus}
          bgGradient={`linear(to-r, ${useBrandColor(
            'accent.dark',
          )}, ${useBrandColor('accent.light')})`}
          boxShadow="0 0 0.25rem #AFAFAF"
          boxSize="12"
          color="white"
          fontWeight="2"
          p="1"
          rounded="2xl"
          textShadow="lg"
        />
        <Icon
          as={AiOutlineUser}
          bg="white"
          boxShadow={`0 0 0.5rem ${resolveBrandColor('accent.middium')}`}
          boxSize="12"
          color={useBrandColor('accent.middium')}
          p="1"
          rounded="2xl"
        />
      </HStack>
    </Center>
  </Box>
)
