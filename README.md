# SimpleMDE for Kirby <a href="https://www.paypal.me/medienbaecker"><img width="99" src="http://www.medienbaecker.com/beer.png" alt="Buy me a beer" align="right"></a>

This is a textarea with Markdown highlighting using [SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor).

![Preview](https://user-images.githubusercontent.com/7975568/33186314-de426910-d088-11e7-914a-10e874fd0cef.gif)

## Installation

Put the `kirby-simplemde-master` folder into your `site/fields` folder and rename it to `simplemde`.

You can then replace your `textarea` fields to `simplemde` like that:


```
text:
  label: Text
  type:  simplemde
```

## Features

Compared to the built-in textarea, this field has some advantages:

- Live Markdown highlighting
- Undo/redo
- No modals for URLs and email addresses as this prevents the buttons from showing in structure fields.
- Automatic link/email detection when selecting text and using the `link` or `email` button.
- Easy to add custom buttons
- Sticky toolbar for better reachability

## Options

By default the following buttons are displayed:

- `heading-2`
- `heading-3`
- `bold`
- `italic`
- `unordered-list`
- `ordered-list`
- `link`
- `email`

You can define what buttons you want to use for any field:

```
text:
  label: Text
  type:  simplemde
  buttons:
    - bold
    - italic
    - link
```

## Roadmap

There are still some features missing.

- [x] Keep changes on reload/navigation 
- [ ] Drag and drop from the sidebar
- [ ] Adequate sticky toolbar for mobile devices
- [ ] The page link functionality used in the [Kirby Enhanced Textarea](https://github.com/medienbaecker/kirby-enhanced-textarea)
- [ ] Kirbytag highlighting (and maybe autocomplete)
- [ ] More built-in buttons
- [ ] Better horizontal overflow with many buttons