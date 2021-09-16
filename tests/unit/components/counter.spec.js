import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    /*
    test('Debe hacer el match con el snapshot', () => {
        const wrapper = shallowMount(Counter)

        expect(wrapper.html()).toMatchSnapshot()
    })
    */

    test('h2 should have the default value "Counter"', () => {

        const wrapper = shallowMount(Counter)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe('Counter')

    })

    test('p default value should be 100', () => {
        
        const wrapper = shallowMount(Counter)
        
        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('5')
    })

})