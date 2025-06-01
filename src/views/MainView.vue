<template>
<div class="container">

  <Sidebar />
    <div class="content">
      <router-view />
    </div>
  <Contador />


</div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>

<style>
.container {
  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
