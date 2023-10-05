import { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

const meta = {
  title: 'navigation/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Hello |  About | Contact | Blog',
  },
}
