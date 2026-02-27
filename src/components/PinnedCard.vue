<script setup lang="ts">
const { content } = defineProps<{
  content: string
}>()
</script>

<template>
    <div class="paper">
        <p>{{ content }}</p>
    </div>
</template>

<style scoped>
.paper {
  --paper-dark: #e5c93d;
  --paper-color: #ffed87;

  padding: 5px;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--paper-dark),
    30%,
    var(--paper-color)
  );
  box-shadow: 3px 3px 2px var(#c9bf8d);
  transform: rotate(10deg);
  transform-origin: top left;
}

.paper p {
  margin: auto;
}

.shadow {
  position: absolute;
  top: 18px;
  left: -8px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: radial-gradient(var(#c9bf8d), 20%, rgba(201, 191, 141, 0));
}
</style>