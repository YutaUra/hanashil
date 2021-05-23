import type { HeadingProps } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'
import type { ReactNode } from 'react'
import { getBrandColor } from '~/theme'

interface Heading2Props
  extends Omit<
    HeadingProps,
    'as' | 'children' | 'color' | 'fontSize' | 'fontWeight'
  > {
  children: ReactNode
}

export const Heading2 = ({
  children,
  ...props
}: Heading2Props): JSX.Element => {
  return (
    <Heading
      as="h2"
      color={getBrandColor('text')}
      fontSize="xl"
      fontWeight="bold"
      {...props}
    >
      {children}
    </Heading>
  )
}
