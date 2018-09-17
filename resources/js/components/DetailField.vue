<template>
  <r64-panel-item
    :field="field"
    :hide-label="field.hideLabelInDetail"
    :label-classes="field.panelLabelClasses"
    :field-classes="field.panelFieldClasses"
  >
    <div slot="value">
      <component
        :class="{'remove-bottom-border': index == fields.length - 1}"
        :key="index"
        :ref="field.attribute"
        v-for="(field, index) in fields"
        :is="`detail-${field.component}`"
        :field="field"
        :base-classes="field.baseClasses"
      />
    </div>
  </r64-panel-item>
</template>

<script>
import HasChildFields from '../mixins/HasChildFields';

export default {
  mixins: [HasChildFields],

  props: ['resource', 'resourceName', 'resourceId', 'field']
};
</script>
