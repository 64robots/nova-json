<template>
  <panel-item :field="field">
    <div slot="value">
      <component
        :class="{'remove-bottom-border': index == fields.length - 1}"
        :key="index"
        :ref="field.attribute"
        v-for="(field, index) in fields"
        :is="`detail-${field.component}`"
        :field="field"
      />
    </div>
  </panel-item>
</template>

<script>
import HasChildFields from '../mixins/HasChildFields';

export default {
  mixins: [HasChildFields],

  props: ['resource', 'resourceName', 'resourceId', 'field']
};
</script>
