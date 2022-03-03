import Button from '../components/Button'

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    handleClick: { action: 'handleClick'},
    backgroundColor: { control: 'color' }
  }
}

const Template = args => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  backgroundColor: '#3366FF',
  textColor: 'white',
  borderStyle: 'none'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  backgroundColor: 'white',
  textColor: '#3366FF',
  borderStyle: '1px solid #3366FF'
}

export const Minimal = Template.bind({})
Minimal.args = {
  label: 'Button',
  backgroundColor: 'white',
  textColor: '#56596B',
  borderStyle: '1px solid #D2D5E0'
}

export const Error = Template.bind({})
Error.args = {
  label: 'Button',
  backgroundColor: '#D14343',
  textColor: 'white',
  borderStyle: 'none'
}

export const TextOnly = Template.bind({})
TextOnly.args = {
  label: 'Button',
  backgroundColor: 'transparent',
  textColor: '#56596B',
  borderStyle: 'none'
}
