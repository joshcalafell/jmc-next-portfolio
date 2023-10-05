import { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'

const meta = {
  title: 'navigation/Footer',
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Hello |  About | Contact | Blog',
  },
}
