<?php

echo <<<HEAD
<head>
  <script src="https://unpkg.com/grapesjs" defer></script>
  <script src="https://unpkg.com/grapesjs-user-blocks" defer></script>
  <script src="https://unpkg.com/grapesjs-blocks-basic" defer></script>
  <script src="https://unpkg.com/grapesjs-custom-code" defer></script>
  <script src="https://unpkg.com/grapesjs-script-editor" defer></script>
  <script src="https://unpkg.com/grapesjs-blocks-flexbox"></script>
  <link href="https://unpkg.com/grapesjs-user-blocks/dist/grapesjs-user-blocks.min.css" rel="stylesheet">
  <script src="https://unpkg.com/grapesjs-templates" defer></script>
  <link rel="stylesheet" href="https://unpkg.com/grapesjs/dist/css/grapes.min.css">
  <script src="./src/js/index.js" type="module" defer></script>
  <link rel="stylesheet" href="./src/css/index.css">
</head>
HEAD;

echo <<<BODY
<body>
  <div class="__page-builder_panel__top">
    <div class="__page-builder_panel__basic-actions"></div>
  </div>
  <div id="__page-builder">
    <h1>Hello world!</h1>
  </div>
  <div id="__page-builder_blocks"></div>
</body>
BODY;
