import PageBuilderUI from "./PageBuilderUI.js";
import PageBuilderStyles from "./PageBuilderStyles.js";

import { ExportPage } from "./ui/ExportPage.js";
import { ShowJson } from "./ui/ShowJson.js";

import { SourceCodePro } from "./styles/typography/Fonts.js";

import CodeBlock from "./plugins/CodeBlock.js";
import Fieldset from "./plugins/Fieldset.js";

const externalPlugins = [
  "gjs-blocks-basic", "grapesjs-user-blocks", "grapesjs-templates",
  "grapesjs-custom-code", "grapesjs-script-editor", "grapesjs-blocks-flexbox"
];

const internalPlugins = [
  CodeBlock, Fieldset
];

const builder = grapesjs.init({
  container: "#__page-builder",
  fromElement: true,
  height: 'auto',
  width: 'auto',
  storageManager: false,
  plugins: [...externalPlugins, ...internalPlugins],
  panels: {}
});

PageBuilderUI.build(builder, ExportPage);
PageBuilderUI.build(builder, ShowJson);

PageBuilderStyles.appendFont(builder.StyleManager, SourceCodePro);
