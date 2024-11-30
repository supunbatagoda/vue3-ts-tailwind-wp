<template>
    <div class="container">
        <h1>Home</h1>
        <div v-for="item in items" :key="item.id">
            <h2>{{ item.name }}</h2>
            <p>Price: {{ item.price }}</p>
            <p>Quantity: {{ item.quantity }}</p>
        </div>
        <p>Total Price: {{ totalPrice }}</p>
    </div>

</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default defineComponent({
    props: {
        items: {
            type: Array as PropType<Item[]>,
            required: true,
        },
    },
    setup(props) {
        const totalPrice = ref(0);

        const calculateTotalPrice = () => {
            totalPrice.value = props.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        };

        calculateTotalPrice();

        return {
            totalPrice,
        };
    },
});

</script>