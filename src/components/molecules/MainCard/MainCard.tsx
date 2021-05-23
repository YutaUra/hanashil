import { Button } from '@chakra-ui/button'
import type { StackProps } from '@chakra-ui/layout'
import { Stack, Text } from '@chakra-ui/layout'
import { format } from 'date-fns'
import { AvatarImage } from '~/components/atoms/AvatarImage'
import { getBrandColor, resolveBrandColor } from '~/theme'

interface MainCardProps
  extends Omit<
    StackProps,
    | 'bg'
    | 'boxShadow'
    | 'children'
    | 'color'
    | 'fontWeight'
    | 'px'
    | 'py'
    | 'rounded'
    | 'spacing'
  > {
  date: Date
  title: string
  participants: string[]
}

export const MainCard = ({
  date,
  participants,
  title,
}: MainCardProps): JSX.Element => {
  return (
    <Stack
      bg={getBrandColor('main.middium')}
      boxShadow={`0 0 0.5rem ${resolveBrandColor('accent.middium')}`}
      color={getBrandColor('main.text')}
      fontWeight="bold"
      px={{ base: '6' }}
      py={{ base: '2' }}
      rounded="2xl"
      spacing={{ base: '2' }}
    >
      <Text>{format(date, 'MM/dd HH:mm')}</Text>
      <Text maxW={{ base: '44' }}>{title}</Text>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Stack direction="row">
          {participants.map((v) => (
            <AvatarImage alt="アバター" key={v} src={v} />
          ))}
        </Stack>
        <Button
          bg={getBrandColor('accent.middium')}
          color={getBrandColor('accent.text')}
          px="4"
          py="2.5"
          rounded="full"
        >
          予約する
        </Button>
      </Stack>
    </Stack>
  )
}
