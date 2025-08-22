<template>
  <main class="main-layout">
    <h1> titulo </h1>
    <slot />
  </main>
</template>
<style>
.main-layout {
  min-height: 100vh;
  min-width: 100vw;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>