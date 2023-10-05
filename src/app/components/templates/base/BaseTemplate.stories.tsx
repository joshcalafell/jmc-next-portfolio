import { Meta, StoryObj } from '@storybook/react'
import BaseTemplate from './BaseTemplate'

const meta = {
  title: 'template/BaseTemplate',
  component: BaseTemplate,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof BaseTemplate>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    sampleTextProp: 'Hello World',
  },
}

export const Alternate: Story = {
  args: {
    sampleTextProp: 'Hello Alternate World',
  },
}
