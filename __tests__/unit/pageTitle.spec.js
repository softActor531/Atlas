import { shallowMount } from '@vue/test-utils'
import PageTitle from '@/components/PageTitle.vue'

describe('PageTitle', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(PageTitle)
    expect(wrapper.vm).toBeTruthy()
  })
})
