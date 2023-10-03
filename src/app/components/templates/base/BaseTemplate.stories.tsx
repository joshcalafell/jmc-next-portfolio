import BaseTemplate, { IBaseTemplate } from './BaseTemplate'
import { mockBaseTemplateProps } from './BaseTemplate.mocks'

export default {
  title: 'templates/BaseTemplate',
  argTypes: {},
}

import { ComponentStory } from '@storybook/react'

const Template: ComponentStory<typeof BaseTemplate> = (args: IBaseTemplate) => (
  <BaseTemplate {...args} />
)

export const Base: ComponentStory<typeof BaseTemplate> = Template.bind({})
Base.args = {
  ...mockBaseTemplateProps.base,
}
