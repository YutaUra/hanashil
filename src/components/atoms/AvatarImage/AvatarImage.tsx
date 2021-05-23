import { Image } from '@chakra-ui/image'
import type { BoxProps } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'

interface AvatarImageProps
  extends Omit<BoxProps, 'bg' | 'children' | 'position' | 'rounded'> {
  src: string
  alt: string
}

export const AvatarImage = ({
  src,
  alt,
  boxSize = '7',
  ...props
}: AvatarImageProps): JSX.Element => {
  return (
    <Box bg="white" boxSize={boxSize} pt="1" rounded="full" {...props}>
      <Image
        alt={alt}
        boxSize="full"
        clipPath="circle(50% at 50% 50%)"
        src={src}
      />
    </Box>
  )
}
