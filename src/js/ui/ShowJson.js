const appendShowJson = (builder) => builder.Panels.addButton("options",
  {
    id: 'show-json',
    className: 'btn-show-json',
    label: '.json',
    context: 'show-json',
    command(builder) {
      builder.Modal.setTitle('Components JSON')
        .setContent(`<pre style="width: 100%; height: 250px; overflow-y: scroll; color: white;">
          ${JSON.stringify(builder.getComponents(), null, 2)}
        </pre>`).open();
    }
  }
);

export { appendShowJson as ShowJson };
