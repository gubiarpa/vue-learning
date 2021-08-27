<template>
    <h2>Counter</h2>
    <div>
        {{ counter }} <sup>2</sup> = {{ squareValue }}
    </div>
    <div class="buttons-container">
        <button @click="increase">Increase</button>
        <button @click="decrease">Decrease</button>
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
            return this.counter ** 2
        }
    },
    methods: {
        getSquareValue() {
            return this.counter ** 2
        },
        increase() {
            this.counter++
        },
        decrease() {
            this.counter--
        },
    },
}
</script>

<style>

</style>