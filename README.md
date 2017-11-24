# SimpleMDE for Kirby <a href="https://www.paypal.me/medienbaecker"><img width="99" src="http://www.medienbaecker.com/beer.png" alt="Buy me a beer" align="right"></a>

This is a textarea with Markdown highlighting using [SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor).

![Preview](https://user-images.githubusercontent.com/7975568/33209410-ef90385e-d115-11e7-8364-5c849b84218c.gif)

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

- `h2`
- `h3`
- `bold`
- `italic`
- `unordered-list`
- `ordered-list`
- `link`
- `email`

There are also some more built-in buttons:

- `h1`
- `quote`
- `horizontal-rule`

You can define what buttons you want to use for any field:

```
text:
  label: Text
  type:  simplemde
  buttons:
    - h1
    - italic
    - link
```