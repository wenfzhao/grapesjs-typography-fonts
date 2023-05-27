# Grapesjs Typography Fonts

[DEMO](https://codepen.io/wenfzhao/pen/ExdJvqY)

### HTML
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-typography-fonts"></script>

<div id="gjs"></div>
```

### JS
```js
const editor = grapesjs.init({
	container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  plugins: ['grapesjs-typography-fonts'],
  pluginsOpts: {
    'grapesjs-typography-fonts': { 
      fonts: [
        {
          label: 'Merriweather',
          value: 'Merriweather, serif',
          import: {
            link: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap'
          }
        },
      ],
    },
    clearDefaultList: false,
  }
});
```

### CSS
```css
body, html {
  margin: 0;
  height: 100%;
}
```


## Summary

* Plugin name: `grapesjs-typography-fonts`
* Options
    * `fonts`: [FontOption] - list of fonts for Typography
      * `FontOption` - font configuration option
        * `label`
        * `value`
        * `import`: { link: '', style: '' }
    * `clearDefaultList`: Boolean - remove existing font list



## Options

| Option | Description | Default |
|-|-|-
| `fonts` | [FontOption] - list of fonts for Typography | `default []` |
| `clearDefaultList` | remove existing font list | `default true` |



## Download

* CDN
  * `https://unpkg.com/grapesjs-typography-fonts`
* NPM
  * `npm i grapesjs-typography-fonts`
* GIT
  * `git clone https://github.com/wenfzhao/grapesjs-typography-fonts.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-typography-fonts.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      plugins: ['grapesjs-typography-fonts'],
      pluginsOpts: {
        'grapesjs-typography-fonts': { 
          fonts: [
            {
              label: 'Merriweather',
              value: 'Merriweather, serif',
              import: {
                link: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap'
              }
            },
            ...
          ],
        }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-typography-fonts';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/wenfzhao/grapesjs-typography-fonts.git
$ cd grapesjs-typography-fonts
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT
