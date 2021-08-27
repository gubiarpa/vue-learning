import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    test('Debe hacer el match con el snapshot', () => {
        const wrapper = shallowMount(Counter)

        expect(wrapper.html()).toMatchSnapshot()
    })
})