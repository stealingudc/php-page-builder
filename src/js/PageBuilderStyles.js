class PageBuilderStyles {
  static appendFont = (styleManager, font) =>
    styleManager.getProperty('typography', 'font-family')
      .attributes.options.push(font);
}

export default PageBuilderStyles;
