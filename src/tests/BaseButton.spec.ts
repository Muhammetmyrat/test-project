import { mount } from '@vue/test-utils'
import BaseButton from '@/UI/BaseButton.vue'

describe('BaseButton.vue', () => {
  it('renders the button with default props', () => {
    const wrapper = mount(BaseButton)

    // Check if the button element exists
    expect(wrapper.find('button').exists()).toBe(true)

    // Check if the default props are as expected
    expect(wrapper.props('disabled')).toBe(false)
    expect(wrapper.props('primary')).toBe(false)

    // Check if the button is not disabled and has the correct classes
    expect(wrapper.find('button').element.disabled).toBe(false)
    expect(wrapper.classes()).toContain(
      'flex',
      'py-12',
      'px-16',
      'justify-center',
      'items-center',
      'rounded-10',
      'text-14',
      'text-normal',
      'font-medium',
      'leading-130'
    )
    expect(wrapper.classes()).toContain('text-custom-black')
    expect(wrapper.classes()).not.toContain('bg-custom-primary')
    expect(wrapper.text()).toBe('') // Check if the slot is empty
  })

  it('renders the button with custom props', () => {
    const wrapper = mount(BaseButton, {
      props: {
        disabled: true,
        primary: true
      },
      slots: {
        default: 'Click Me' // Provide content for the slot
      }
    })

    // Check if the custom props are as expected
    expect(wrapper.props('disabled')).toBe(true)
    expect(wrapper.props('primary')).toBe(true)

    // Check if the button is disabled and has the correct classes
    expect(wrapper.find('button').element.disabled).toBe(true)
    expect(wrapper.classes()).toContain('bg-custom-primary', 'text-[#E9EAF2]')
    expect(wrapper.classes()).not.toContain('text-custom-black')
    expect(wrapper.text()).toBe('Click Me') // Check if the slot content is rendered
  })
})
