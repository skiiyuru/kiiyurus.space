---
title: Laying out the Web using CSS Grid
description: Learn how to get started with CSS Grid using these few handy tips.
pubDate: 2025-01-15
image: https://rzei8mczw5.ufs.sh/f/v9xa1lyXWM8uYhRDB6LEYTZ7sfj68qwlrdJBIL0MUoxikGm2
isDraft: false
---

## TLDR

Use Flexbox only for

1. A series of boxes that are NOT the same size
2. A series of boxes that are NOT in and even-sized grid,
3. When the same space between elements is important, not the same width of each element

Use Grid for everything else layout related!

## Intro

I’ve been using Flexbox to lay out all my elements on a web page. I would often come across alignment issues and fall into the bad habit of setting fixed widths and heights or other hacky methods to “solve” such problems.

For example, when creating pricing cards, some would be taller than others and in order to fix this, I would make the shorter cards stretch to match the tallest one or set a fixed heigh that works for all cards. Shame on me!

I heard about CSS Grid and looked it up but the few tutorials I skimmed through left me uninspired to give it a try. One day I came across [Jen Kramer’s](https://www.linkedin.com/in/jen4web) class on [Grid and Flexbox](https://grid-flexbox.css.education/index.html) and realized I had been doing layouts all wrong!

## How to use Grid

Imagine you have a web page made up of a section and multiple cards. On mobile devices, maybe it would look something like this:

<!-- ![Screenshot 2025-01-13 160035.png](Screenshot_2025-01-13_160035.png) -->

Not so complicated right? But what about a fancy desktop layout like this:

<!-- ![Screenshot 2025-01-13 155939.png](Screenshot_2025-01-13_155939.png) -->

Grid to the rescue! We can set our parent element `section` to become a grid by saying

```css
section {
  display: grid;
}
```

A grid is made up of columns and rows. Our desktop layout is made up of 8 columns and 4 rows

<!-- “image with columns and rows” -->

We can specify this by saying

```css
section {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, auto);
}
```

`1fr` implies a fraction of the screen while `auto` means be as big as the largest item in that row.

The first card takes up 4 columns and 4 rows while the rest take up 2 columns and 2 rows each. In order for the cards to reference their parent’s grid definition, we need to use `subgrid`. We can define this by saying

```css
.card {
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.card:first-of-type {
  grid-column: span 4;
  grid-row: span 4;
}

.card:not(:first-of-type) {
  grid-column: span 2;
  grid-row: span 2;
}
```

And that’s it. Those are the main ideas to keep in mind when you want to create such fancy layouts. Of course there’s a lot more I haven’t mentioned and if you would like to dive deeper, I highly recommend Jen’s course.
