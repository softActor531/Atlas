import { shallowMount } from '@vue/test-utils'
import Sign from '@/components/Sign.vue'

let wrapper

describe('Sign', () => {
  beforeEach(() => {
    wrapper = shallowMount(Sign, {
      stubs: ['input-group', 'input-select-group']
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should catch submit input and call method', () => {
    const submit = wrapper.find('input[type=submit]')
    expect(submit.exists()).toBe(true)

    const mockedSubmit = jest.spyOn(wrapper.vm, 'submit')

    wrapper.vm.$on('click', mockedSubmit)
    submit.trigger('click')
    wrapper.vm.$emit('click')

    wrapper.vm.$nextTick()

    expect(mockedSubmit).toHaveBeenCalled()
  })
})
