import { mount } from '@vue/test-utils'
import Toast from '@/components/BaseToast.vue'

describe('Toast.vue', () => {
  it('renders a toast box with the title and text', () => {
    const toastItem = {
      id: 1,
      title: 'Sample Title',
      text: 'Sample Text',
      status: 'success' // Replace with the desired status
    }

    const wrapper = mount(Toast, {
      props: {
        toast: {
          getToasts: [toastItem]
        }
      }
    })

    expect(wrapper.text()).toContain('Sample Title')
    expect(wrapper.text()).toContain('Sample Text')
  })

  it('applies the correct background color based on the toast status', () => {
    const successToastItem = {
      id: 1,
      title: 'Success Toast',
      text: 'This is a success toast',
      status: 'success'
    }

    const warningToastItem = {
      id: 2,
      title: 'Warning Toast',
      text: 'This is a warning toast',
      status: 'warning'
    }

    const errorToastItem = {
      id: 3,
      title: 'Error Toast',
      text: 'This is an error toast',
      status: 'error'
    }

    const wrapper = mount(Toast, {
      props: {
        toast: {
          getToasts: [successToastItem, warningToastItem, errorToastItem]
        }
      }
    })

    // Assert that the correct background color classes are applied
    expect(wrapper.classes('bg-[#5cf14f4d]')).toBe(true) // Success
    expect(wrapper.classes('bg-yellow-100')).toBe(true) // Warning
    expect(wrapper.classes('border-red-500 bg-[#f05353]')).toBe(true) // Error
  })
})
