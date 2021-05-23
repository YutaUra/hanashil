import { ChakraProvider } from '@chakra-ui/react'
import { withKnobs } from '@storybook/addon-knobs'
import { StoryContext } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import theme from '../src/theme'

const withChakra = (StoryFn: Function, context: StoryContext) => {
  return (
    <ChakraProvider theme={theme}>
      <div id="story-wrapper" style={{ minHeight: '100vh' }}>
        <StoryFn />
      </div>
    </ChakraProvider>
  )
}

export const decorators = [jsxDecorator, withKnobs, withChakra]
