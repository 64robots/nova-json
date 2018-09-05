<template>
  <default-field :field="field">
    <template slot="field">
      <component
        :class="{'remove-bottom-border': index == fields.length - 1}"
        :key="index"
        :ref="field.attribute"
        v-for="(field, index) in fields"
        :is="`form-${field.component}`"
        :resource-name="resourceName"
        :resource-id="resourceId"
        :field="field"
      />
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova';
import HasChildFields from '../mixins/HasChildFields';

export default {
  mixins: [FormField, HandlesValidationErrors, HasChildFields],

  props: ['resourceName', 'resourceId', 'field'],

  mounted() {
    this.fields.forEach(field => {
      this.$watch(
        () => {
          return this.$refs[field.attribute][0].value;
        },
        value => {
          let currentJson = JSON.parse(this.value || '{}');
          if (field.attribute in currentJson) {
            currentJson[field.attribute] = value;
          } else {
            currentJson = Object.assign(currentJson, {
              [field.attribute]: value
            });
          }
          this.value = JSON.stringify(currentJson);
        }
      );
    });
  },

  methods: {
    /**
     * Set the initial, internal value for the field.
     */
    setInitialValue() {
      this.value = this.field.value || '';
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
      formData.append(this.field.attribute, this.value || '');
    },

    /**
     * Update the field's internal value.
     */
    handleChange(value) {
      this.value = value;
    }
  }
};
</script>
