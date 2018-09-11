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
      let jsonValue = this.field.value;
      if(typeof jsonValue === 'object') {
          jsonValue = JSON.stringify(jsonValue) || '{}';
      }
      jsonValue = Object.assign({}, JSON.parse(jsonValue)) || {};
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
