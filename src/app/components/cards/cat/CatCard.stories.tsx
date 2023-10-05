import { Meta, StoryObj } from '@storybook/react'
import CatCard from './CatCard'
import { mockCatCardProps } from './CatCard.mocks'

const meta = {
  title: 'cat/CatCard',
  component: CatCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CatCard>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    ...mockCatCardProps.base,
  },
}

export const Alternate: Story = {
  args: {
    ...mockCatCardProps.base,
    author: 'Josh',
    time: '1h ago',
  },
}
