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
    <hr>
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
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