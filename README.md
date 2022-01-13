# cssvizo
CSSVizo Utility CSS Library

## What is it?
Simple CSS Library for prototyping some basic UI.

### How to use?
Sipmply add `css/main.css` file to your project and include it in header `<link rel="stylesheet" href="css/main.css">`.

### How to edit?
1. Clone repository `git clone https://github.com/mativizo/cssvizo.git`.
2. Install dependencies `npm i`.
3. Run watcher `npm start`.










## Contents:

1. [Containers](#containers)
2. [Components](#components)
    - [Buttons](#buttons)
    - [Cards](#cards)
    - [Notifies](#notifies)
3. [Colors](#colors)
    - [Text Colors](#text-colors)
    - [Background colors](#background-colors)
4. [Utils](#utils)
    - [Margins](#margins)
    - [Paddings](#paddings)
    - [Shadows](#shadows)










## Containers

- `.container` - main container with max width `960px`.
- `.container-fluid` - main container with full width.










## Components

### Buttons

- `button`/ `.btn` - standard, primary button.
- `.btn-outline`- primary, outlined button.
- `.btn-secondary` - secondary button.
- `.btn-secondary-outline` - secondary, outlined button.
- `.btn-light` - light button.
- `.btn-light-outline` - light, outlined button.
- `button:disabled` / `.btn-disabled` - disabled button.

- `btn-sm` - change button to small.
- `btn-lg` - change button to large.




### Cards

```html
<div class="card">
    <p class="title">Card Title</p>
    <p class="content">Card content.</p>
    <div>
        <a href="#" class="btn">Let's go!</a>
    </div>
</div>
```

- `.card` - main card container.
- `.card > .title` - title of the card.
- `.card > .content` - content of the card.




### Notifies

```html
<div class="notify">
    <span class="close">x</span>
    <p class="title">This is a notify!</p>
    <p class="content">This is notify content.</p>
    <div>
        <button class="btn-light btn-sm">Accept</button>
        <button class="btn-sm">Decline</button>
    </div>
</div>
```

- `.notify` - main notification container.
- `.notify > .title` - notification title.
- `.notify > .content` - notification content.
- `.notify > .close` - notification close button.









## Colors

### Text colors

- `.text-primary` - Primary color.
- `.text-secondary` - Secondary color.
- `.text-red` - Red color.
- `.text-green` - Green color.
- `.text-blue` - Blue color.
- `.text-orange` - Orange color.
- `.text-purple` - Purple color.
- `.text-pink` - Pink color.
- `.text-light` - Light color.
- `.text-dark` - Dark color.

### Background colors

- `.bg-main` - Main dark background.
- `.bg-primary` - Primary background.
- `.bg-secondary` - Secondary background.
- `.bg-red` - Red background.
- `.bg-green` - Green background.
- `.bg-blue` - Blue background.
- `.bg-orange` - Orange background.
- `.bg-purple` - Purple background.
- `.bg-pink` - Pink background.
- `.bg-light` - Light background.










## Utils

### Margins

- `.m-0` to `.m-5` - Margin.
- `.m-auto` - Margin auto.
- `.mt-0` to `.mt-5` - Margin top.
- `.mb-0` to `.mb-5` - Margin bottom.
- `.ml-0` to `.ml-5` - Margin left.
- `.mr-0` to `.mr-5` - Margin right.
- `.my-0` to `.my-5` - Margin Y-axis.
- `.mx-0` to `.mx-5` - Margin X-axis.



### Paddings

- `.p-0` to `.p-5` - Padding.
- `.pt-0` to `.pt-5` - Padding top.
- `.pb-0` to `.pb-5` - Padding bottom.
- `.pl-0` to `.pl-5` - Padding left.
- `.pr-0` to `.pr-5` - Padding right.
- `.py-0` to `.py-5` - Padding Y-axis.
- `.px-0` to `.px-5` - Padding X-axis.

### Shadows

- `.shadow-0` - No box-shadow.
- `.shadow-1` - Low box shadow.
- `.shadow-2` - Medium box shadow.
- `.shadow-3` - Large box shadow.

