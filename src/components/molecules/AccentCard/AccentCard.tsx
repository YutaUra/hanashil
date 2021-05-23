import type { StackProps } from '@chakra-ui/layout'
import { Stack, Text } from '@chakra-ui/layout'
import { format } from 'date-fns'
import { AvatarImage } from '~/components/atoms/AvatarImage'
import { getBrandColor } from '~/theme'

interface AccentCardProps
  extends Omit<
    StackProps,
    'bgGradient' | 'children' | 'color' | 'fontWeight' | 'py' | 'rounded'
  > {
  date: Date
  category: string
  level: string
  title: string
  participants: string[]
}

export const AccentCard = ({
  date,
  category,
  level,
  title,
  participants,
  ...props
}: AccentCardProps): JSX.Element => {
  return (
    <Stack
      bgGradient={`linear(to-r, ${getBrandColor(
        'accent.dark',
      )}, ${getBrandColor('accent.light')})`}
      color={getBrandColor('accent.text')}
      fontWeight="bold"
      px={{ base: '6' }}
      py={{ base: '2' }}
      rounded="2xl"
      spacing={{ base: '2' }}
      {...props}
    >
      <Stack direction="row" fontSize="xs" spacing="2">
        <Text>{format(date, 'MM/dd HH:mm')}</Text>
        <Text>{category}</Text>
        <Text>{level}</Text>
      </Stack>
      <Text fontSize="lg" pb="1">
        {title}
      </Text>
      <Stack direction="row">
        {participants.map((v) => (
          <AvatarImage alt="アバター" key={v} src={v} />
        ))}
      </Stack>
    </Stack>
  )
}
