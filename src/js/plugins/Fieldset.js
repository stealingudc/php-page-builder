export default (editor) => {
  editor.Blocks.add('fieldset_t', {
    label: "Fieldset",
    content: {
      attributes: {
        "label": "Title"
      },
      traits: [{
        name: 'label',
        type: 'text'
      }],
      tagName: "fieldset",
      components: [
        {
          tagName: "legend",
          content: "Title",
          type: "text"
        },
        {
          tagName: "div"
        }
      ]
      ,
      style: {
        "min-height": "100px",
        "border-radius": "8px"
      },
      styles: ` 
        .fieldset-title {
          font-size: 11pt;
        }
        .fieldset-content {
          width: 100%;
          height: 100%;
        }
      `,
      script: function() {
        console.log(this.attributes["label"])
      },
      init() {
        this.on('change:attributes:label', console.log(this));
      }
    },
  });
}
