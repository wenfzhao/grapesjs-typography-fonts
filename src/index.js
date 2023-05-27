export default (editor, opts = {}) => {
  const options = { ...{
    // default options
    /**
     * Font options
     * @type {[FontOption]}
     * 
     * FontOption: {
     *  label: '', // required - label for the font
     *  value: '', // optional - value of the font (use `name` when value is empty), the actual font name in the generated css
     *  import: { // optional - load the font inside the canvas
     *    link: '', // url to load the font from
     *    style: '',  // css rules to load, most likely by using @font-face
     *  }
     * }
     */
    fonts: [],
    clearDefaultList: true, // remove the existing font list
  },  ...opts };

  const fontConfigs = options.fonts || [];
  if (fontConfigs.length === 0) {
    return; // no font list provided, exit the plugin
  }

  const fontOptions = [];
  // load fonts via link tags
  const fontLinks = [];
  // load fonts via css rules such as @font-face
  const fontStyles = [];
  for (let i = 0; i < fontConfigs.length; i++) {
    const config = fontConfigs[i];
    fontOptions.push({ id: config.value, label: config.label });
    if (config.import?.link) {
      fontLinks.push(config.import.link);        
    }
    if (config.import?.style) {
      fontStyles.push(config.import.style);
    }
  }
  
  const canvasConfig = editor.Canvas.getConfig();
  // import fonts into canvas
  canvasConfig.styles.push(...fontLinks);
  fontStyles.forEach(style => canvasConfig.frameStyle += '\n ' + style + '\n');

  editor.on('load', function() {
    const styleManager = editor.StyleManager;
    const fontProperty = styleManager.getProperty('typography', 'font-family');

    // add the font list into the font-family dropdown
    if (options.clearDefaultList) {
      // override and set the font list
      fontProperty.setOptions(fontOptions);
    } else {
      // append to the existing list
      fontOptions.forEach(option => fontProperty.addOption(option));
    }
  });
};