import { shallowMount, createLocalVue } from '@vue/test-utils'
import Table from '@/components/shared/Table.vue'
import { BootstrapVue } from 'bootstrap-vue'

let wrapper

describe('Table', () => {
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(BootstrapVue)

    wrapper = shallowMount(Table, {
      localVue,
      data: () => ({}),
      props: {
        items: {
          type: Array,
          default: () => []
        }
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should load table', async () => {
    const table = wrapper.find('b-table-stub')
    expect(wrapper.html()).toMatchSnapshot()
    expect(table.exists()).toBe(true)
  })

  test('should load items', async () => {
    const table = wrapper.find('b-table-stub')

    wrapper.setProps({
      enableSearch: true,
      items: [
        {
          type: 'users',
          id: '1',
          first_name: 'Ahmed',
          last_name: 'Omran',
          title: 'Mr.',
          email: 'ahmed.omran@sixtysixten.com',
          'created-at':
        '2020-09-03T00:16:37.000000Z',
          links: {
            self: 'http://atlas-rebuild-api.mtcdevsite.com/api/v1/users/1'
          },
          role: 'Sales'
        },
        {
          type: 'users',
          id: '2',
          first_name: 'Karim',
          last_name: 'Hisham',
          title: 'Mr.',
          email: 'karim.hisham@sixtysixten.com',
          'created-at':
          '2020-09-03T00:26:42.000000Z',
          links: {
            self: 'http://atlas-rebuild-api.mtcdevsite.com/api/v1/users/2'
          },
          role: 'Scanner'
        }
      ]
    })
    await wrapper.vm.$nextTick()

    expect(table.props().items.length).toEqual(2)
  })

  test('should test computed', async () => {
    wrapper.setProps({
      fields: [{ key: 'first_name', label: 'First', sortable: true }]
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.sortOptions).toStrictEqual([{ text: 'First', value: 'first_name' }])
  })
})
