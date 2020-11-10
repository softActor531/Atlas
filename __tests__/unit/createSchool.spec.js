import { shallowMount } from '@vue/test-utils'
import CreateSchool from '@/components/CreateSchool.vue'

describe('CreateSchool', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(CreateSchool)
    expect(wrapper.vm).toBeTruthy()
  })
})
