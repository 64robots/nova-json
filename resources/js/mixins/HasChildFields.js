export default {
  props: ['field'],

  data() {
    return {
      fields: []
    };
  },

  created() {
    this.fields = this.field.fields.map(field => {
      let value = '';
      let jsonValue = JSON.parse(this.field.value);
      if (field.attribute in jsonValue) {
        value = jsonValue[field.attribute];
      }

      return {
        ...field,
        value
      };
    });
  }
};
