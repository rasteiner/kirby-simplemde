# SimpleMDE for Kirby <a href="https://www.paypal.me/medienbaecker"><img width="99" src="http://www.medienbaecker.com/beer.png" alt="Buy me a beer" align="right"></a>

This is a textarea with Markdown highlighting using [SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor).

![Preview](https://user-images.githubusercontent.com/7975568/33190585-7499c6ea-d0ae-11e7-8626-bad66c5db22f.gif)

## Installation

Put the `kirby-simplemde-master` folder into your `site/fields` folder and rename it to `simplemde`.

You can then replace your `textarea` fields with `simplemde` like that:


```
text:
  label: Text
  type:  simplemde
```

## Features

Compared to the built-in textarea, this field has some advantages:

- Live Markdown highlighting. Including green Kirbytags.
- Undo/redo via `Ctrl`/`⌘` + `Z`/`Y`.
- No modals for URLs and email addresses as this prevents the buttons from showing in structure fields.
- Automatic link/email detection when selecting text and using the `link` or `email` button.
- Easy to add custom buttons
- Sticky toolbar on the top for better reachability

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

There are also some more built-in buttons:

- `heading-1`
- `quote`
- `horizontal-rule`

You can define what buttons you want to use for any field:

```
text:
  label: Text
  type:  simplemde
  buttons:
    - heading-1
    - italic
    - link
```

## Roadmap

There are still some features missing.

- [x] Keep changes on reload/navigation 
- [ ] Drag and drop from the sidebar
- [x] Adequate sticky toolbar for mobile devices
- [ ] The page link functionality used in the [Kirby Enhanced Textarea](https://github.com/medienbaecker/kirby-enhanced-textarea)
- [x] Kirbytag highlighting
- [x] More built-in buttons
- [X] Better horizontal overflow with many buttons