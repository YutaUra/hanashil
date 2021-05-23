import { extendTheme } from '@chakra-ui/react'

const BrandColors = {
  'Orange-1': {
    text: '#6F7070',
    main: {
      light: '#FFFFFF',
      middium: '#FFFFFF',
      dark: '#FFFFFF',
      text: '#7F7F81',
    },
    accent: {
      light: '#FFB653',
      middium: '#FFAA54',
      dark: '#FF9D55',
      text: '#FFFDFD',
    },
  },
  'Green-1': {
    text: '#6F7070',
    main: {
      light: '#FFFFFF',
      middium: '#FFFFFF',
      dark: '#FFFFFF',
      text: '#7F7F81',
    },
    accent: {
      light: '#CDF97E',
      middium: '#B5F18E',
      dark: '#9CE89D',
      text: '#5F5F5F',
    },
  },
}

export const useBrandColor = <
  T extends
    | 'text'
    | `${'accent' | 'main'}.${'dark' | 'light' | 'middium' | 'text'}`,
>(
  value: T,
): `brand.${T}` => `brand.${value}` as const

export const CurrentBrand: keyof typeof BrandColors = 'Green-1'

export const resolveBrandColor = <
  T extends
    | 'text'
    | `${'accent' | 'main'}.${'dark' | 'light' | 'middium' | 'text'}`,
>(
  value: T,
): string => {
  const keys = value.split('.')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  let obj = BrandColors[CurrentBrand] as any
  while (keys.length) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    obj = obj[keys.shift() ?? '']
  }
  return obj as string
}

const theme = extendTheme({
  colors: {
    brand: BrandColors[CurrentBrand],
    brands: BrandColors,
  },
})

export default theme
