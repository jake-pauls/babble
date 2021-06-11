import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Testing /views Mounting', () => {
  it('Validates Home.vue Mount', () => {
    const wrapper = shallowMount(Home)

    expect(wrapper.vm.$options.name).toMatch('Home')
  })
})
