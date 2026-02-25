### Image Compare Slider

![License](https://img.shields.io/github/license/HanamiSoftware/Image-Vertical-Slider)
![GitHub stars](https://img.shields.io/github/stars/HanamiSoftware/Image-Vertical-Slider?style=social)
![GitHub forks](https://img.shields.io/github/forks/HanamiSoftware/Image-Vertical-Slider?style=social)
![Last Commit](https://img.shields.io/github/last-commit/HanamiSoftware/Image-Vertical-Slider)
![Issues](https://img.shields.io/github/issues/HanamiSoftware/Image-Vertical-Slider)

## Features

- Zero dependencies
- Pointer Events (mouse, touch, pen)
- Keyboard accessible (Arrow Left / Arrow Right)
- CSS-first customization via custom properties
- No layout reflow during drag
- Progressive enhancement
- Works with GitHub Pages
- Fully responsive

---

## Demo

Enable GitHub Pages and add a `/demo/index.html` example.

---

## Installation

 Option 1 — Copy Files

Copy:

- `image-compare.css`
- `image-compare.js`

into your project.

## Option 2 — Direct Include

```html
<link rel="stylesheet" href="image-compare.css">
<script src="image-compare.js" defer></script>

Basic Usage
```html
<div class="image-compare" style="--position:50%">
  <img src="day.jpg" alt="Day version">
  <img src="night.jpg" alt="Night version">
</div>

That's all.

## Customization

You can override these CSS variables:

```html
.image-compare {
  --position: 50%;
  --divider-width: 2px;
  --divider-color: white;
  --handle-size: 32px;
  --handle-bg: rgba(255,255,255,0.9);
}

Example Theme

```html
.image-compare.dark {
  --divider-color: #00ffcc;
  --handle-bg: #00ffcc;
}

## How It Works

The second image is masked using a dynamic gradient:

```html
mask-image: linear-gradient(
  to right,
  black 0%,
  black var(--position),
  transparent var(--position)
);

JavaScript updates the --position variable during pointer interaction.

This avoids resizing elements and prevents layout reflow.

## Accessibility

Keyboard accessible

tabindex="0" automatically added

Arrow keys move the divider

Honors prefers-reduced-motion

Works without JavaScript (shows base image)

## Browser Support

Requires modern browsers supporting:

CSS mask-image

Pointer Events

CSS custom properties

Safari requires -webkit-mask-image.

Internet Explorer is not supported.

## Limitations

Images must share the same aspect ratio

Horizontal mode only

No snapping behavior by default

Not intended as a full image editor

## Development

No build step required.

To run locally:

npx serve

Or use any local development server.

### Example Use Cases

Before / After photography

Day / Night UI comparison

Product feature highlighting

Watch dial lume comparison

UI redesign showcase

## Project Structure

Root
│
├── src/
│   ├── css/
│   │   └──image-compare.css
│ 	├── img/
│   │   └──combo.png
│   │   └──day.png
│   │   └──night.png
│   ├── js/
│	│	└──image-compare.js
│	└──index.html
│
├── README.md
├── LICENSE.txt
└── CONTRIBUTING.md

Pull requests are welcome.

Please:

Keep the component dependency-free

Avoid unnecessary abstraction

Preserve performance and accessibility

See CONTRIBUTING.md for details.

## Code of Conduct

This project follows a simple principle:

Be respectful. Be constructive. Assume good intent.

Full version:

## Our Pledge

We pledge to make participation in this project a harassment-free experience for everyone.

## Our Standards

Examples of behavior that contributes to a positive environment:

Using welcoming and inclusive language

Respecting differing viewpoints

Accepting constructive criticism

Focusing on what is best for the community

Unacceptable behavior includes:

Harassment or discriminatory language

Trolling or insulting comments

Publishing private information without consent

## Enforcement

Project maintainers may remove or edit comments, commits, code, issues, and other contributions that do not align with this Code of Conduct.

## License

MIT License

See LICENSE file for full text.

## Philosophy

This component intentionally avoids:

Framework dependencies

Build tools

Heavy abstraction

The goal is clarity, performance, and maintainability.

Small. Focused. Reliable.