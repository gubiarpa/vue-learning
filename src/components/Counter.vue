<template>
    <h2>Counter</h2>
    <p>{{ counter }}</p>
    <div>
        {{ counter }} <sup>2</sup> = {{ squareValue }}
    </div>
    <div>
        {{ counter }} <sup>2</sup> = {{ squareValue }}
    </div>
    <div>
        {{ counter }} <sup>2</sup> = {{ squareValue }}
    </div>
    <div>
        {{ counter }} <sup>2</sup> = {{ squareValue }}
    </div>
</template>

<script>
export default {
    // name: 'Wawitash',
    data() {
        return {
            counter: 5
        }
    },
    computed: {
        squareValue() {
            console.log('squareValue')
            return this.counter ** 2
        }
    },
    methods: {
        getSquareValue() {
            console.log('getSquareValue')
            return this.counter ** 2
        }
    },
}
</script>

<style>

</style>