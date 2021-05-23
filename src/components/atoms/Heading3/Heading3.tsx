import type { HeadingProps } from '@chakra-ui/layout'
import { Heading } from '@chakra-ui/layout'
import type { ReactNode } from 'react'
import { getBrandColor } from '~/theme'

interface Heading3Props
  extends Omit<
    HeadingProps,
    'as' | 'children' | 'color' | 'fontSize' | 'fontWeight'
  > {
  children: ReactNode
}

export const Heading3 = ({
  children,
  ...props
}: Heading3Props): JSX.Element => {
  return (
    <Heading
      as="h3"
      color={getBrandColor('text')}
      fontSize="xs"
      fontWeight="bold"
      {...props}
    >
      {children}
    </Heading>
  )
}
