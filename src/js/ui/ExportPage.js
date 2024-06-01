const appendExportPageMenu = (builder) => {
  builder.Panels.addButton("options",
    {
      id: 'export-page',
      className: 'btn-export-page',
      label: 'Export',
      context: 'export-page',
      command(builder) {
        openExportModal(builder);
      }
    }
  );
}

const openExportModal = (builder) => {
  const modal = builder.Modal;
  const container = document.createElement("div");
  container.className = "submit-form";

  const content = `
    <label for="meta-title">Title</label>
    <input class="form-input" id="meta-title"></input>
    <label for="meta-description">Description</label>
    <textarea class="form-textarea" id="meta-description"></textarea>
  `;
  container.innerHTML = content;

  const submitButton = document.createElement("button");
  submitButton.className = "form-btn";
  submitButton.type = "button";
  submitButton.innerText = "Export";
  submitButton.onclick = () => {
    handleSubmitPage(builder);
    modal.close();
  }

  modal.setTitle("Export Page");
  console.log(container)
  container.appendChild(submitButton);
  modal.setContent(container);
  modal.open();
}

const handleSubmitPage = (builder) => {
  const getRunningScript = () => {
    return decodeURI(new Error().stack.match(/([^ \n\(@])*([a-z]*:\/\/\/?)*?[a-z0-9\/\\]*\.js/ig)[0])
  }

  const formData = new FormData();
  formData.append("meta-title", document.getElementById("meta-title").value);
  formData.append("meta-description", document.getElementById("meta-description").value);
  formData.append("html", builder.getHtml());
  formData.append("css", builder.getCss());

  fetch(getRunningScript() + "/../../../php/routes/pages.php", {
    method: "POST",
    body: formData
  });
}

export { appendExportPageMenu as ExportPage };
