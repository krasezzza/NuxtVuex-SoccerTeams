<template>
  <div class="page-tabs">
    <ul class="tab-navigation">
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="tab-buttons"
        :class="{ 'active': index === activeTab }"
      >
        <label
          :for="`${_uid}${index}`"
          class="tab-title"
          v-text="tab"
        />

        <input
          :id="`${_uid}${index}`"
          v-model="activeTab"
          type="radio"
          :name="`${_uid}-tab`"
          :value="index"
        >
      </li>
    </ul>

    <template v-for="(tab, index) in tabList">
      <div
        v-if="index === activeTab"
        :key="index"
        class="tab-content"
      >
        <slot :name="`tabPanel-${index}`" />
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      tabList: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {
        activeTab: 0,
      };
    },
  };
</script>
