# CSS Framework Cheatsheet

## Table of Contents

1. [Introduction](#introduction)
2. [Root CSS Variables](#root-css-variables)
   - [Color Variables](#color-variables)
   - [Spacing Variables](#spacing-variables)
   - [Size Variables](#size-variables)
   - [Border & Radius Variables](#border--radius-variables)
   - [Typography Variables](#typography-variables)
   - [Container & Layout Variables](#container--layout-variables)
   - [Component Variables](#component-variables)
3. [Global Classes](#global-classes)
   - [Layout Classes](#layout-classes)
   - [Component Classes](#component-classes)
   - [Utility Classes](#utility-classes)
   - [Icon & Interaction Classes](#icon--interaction-classes)
4. [Locally Scoped CSS Variables](#locally-scoped-css-variables)
   - [How They Work](#how-they-work)
   - [Button Example](#button-example)
   - [Heading Example](#heading-example)
   - [Navigation Example](#navigation-example)
5. [Practical Examples](#practical-examples)
   - [Customizing Colors](#customizing-colors)
   - [Creating a Custom Component](#creating-a-custom-component)
   - [Modifying Component Spacing](#modifying-component-spacing)

---

## Introduction

This CSS framework uses a robust system of CSS custom properties (variables) and utility classes to create a flexible,
maintainable design system. The framework follows these key principles:

- **Variable Cascading**: Base variables defined at the root level, component variables reference those base variables,
  and local element variables can override as needed
- **Component-Based Design**: Provides pre-styled elements while allowing for customization
- **Utility Classes**: Quick access to common styles without writing custom CSS
- **Responsive Design**: Built-in responsive behavior using flexible layouts and container queries

### CSS Variable Naming Convention

The framework uses a consistent naming convention for CSS variables that helps distinguish between global and local scoped variables:

- **Global Variables**: Use the pattern `--keyword--property--modifier` (double dashes around the keyword/group name). Examples: `--color--primary--500`, `--spacing--lg`, `--button--filled-bg-enabled`. These are defined at the `:root` level and are meant to be used throughout the system.

- **Local Variables**: Use the pattern `--property-modifier` (single dashes throughout). Examples: `--background-color`, `--color-text`, `--spacing-block`. These are declared within specific selectors and provide a flexible way to customize that selector's styles without modifying the selector's declaration directly.

This naming convention makes it clear at a glance whether a variable is part of the global design system or a local customization point.

This cheatsheet will help you navigate the framework's structure and understand how to effectively use and customize it.

---

## Root CSS Variables

The `:root` selector contains global CSS variables that define the core design system elements. These can be overridden
at more specific levels when needed.

### Color Variables

```css
:root {
    /* Base colors */
    --color--base--0: #ffffff;
    --color--base--50: #f7f7f7;
    --color--base--100: #f0f0f0;
    --color--base--200: #dddedf;
    --color--base--300: #c6c7c8;
    --color--base--400: #a8aaad;
    --color--base--500: #8b8e92;
    --color--base--600: #6e7277;
    --color--base--700: #585b5f;
    --color--base--800: #44474b;
    --color--base--900: #383a3e;
    --color--base--950: #292b2e;
    --color--base--1000: #000000;

    /* Primary colors */
    --color--primary--50: #f2f6fd;
    --color--primary--100: #e5edfa;
    --color--primary--200: #c6d8f6;
    --color--primary--300: #9ebdf0;
    --color--primary--400: #6b9cea;
    --color--primary--500: #397be4;
    --color--primary--600: #1c5fc9;
    --color--primary--700: #194c9f;
    --color--primary--800: #143c7b;
    --color--primary--900: #17335e;
    --color--primary--950: #0c244a;
    --color--primary--original: #548de8;

    /* Success colors */
    --color--success--50: #f4fbf4;
    --color--success--100: #e8f7e9;
    --color--success--200: #cdefcf;
    --color--success--300: #a9e5ad;
    --color--success--400: #7dd983;
    --color--success--500: #50cd58;
    --color--success--600: #34b23c;
    --color--success--700: #2b8c31;
    --color--success--800: #226c27;
    --color--success--900: #235226;
    --color--success--950: #154118;
    --color--success--original: #64d36b;

    /* Error colors */
    --color--error--50: #fdf2f3;
    --color--error--100: #fbe5e8;
    --color--error--200: #f6c5cc;
    --color--error--300: #f19da8;
    --color--error--400: #ec6a7c;
    --color--error--500: #e7374f;
    --color--error--600: #cb1a33;
    --color--error--700: #a1172a;
    --color--error--800: #7c1221;
    --color--error--900: #5f1620;
    --color--error--950: #4b0c14;
    --color--error--original: #e6324b;
}
```

### Spacing Variables

```css
:root {
    --spacing--none: var(--size--0);
    --spacing--xxs: var(--size--1);
    --spacing--xs: var(--size--2);
    --spacing--sm: var(--size--4);
    --spacing--md: var(--size--6);
    --spacing--lg: var(--size--8);
    --spacing--xl: var(--size--10);
    --spacing--2xl: var(--size--12);
    --spacing--3xl: var(--size--16);
    --spacing--4xl: var(--size--20);
    --spacing--5xl: var(--size--24);
    --spacing--6xl: var(--size--28);
    --spacing--7xl: var(--size--32);
    --spacing--8xl: var(--size--36);
    --spacing--10xl: var(--size--40);
    --spacing--11xl: var(--size--48);
    --spacing--12xl: var(--size--56);
    --spacing--13xl: var(--size--64);
    --spacing--14xl: var(--size--72);
    --spacing--15xl: var(--size--80);
}
```

### Size Variables

Size variables define the core measurements used throughout the system:

```css
:root {
    --size--0: 0px;
    --size--1: 2px;
    --size--2: 4px;
    --size--3: 6px;
    --size--4: 8px;
    --size--5: 10px;
    --size--6: 12px;
    --size--7: 14px;
    --size--8: 16px;
    --size--9: 18px;
    --size--10: 20px;
    --size--12: 24px;
    --size--14: 28px;
    --size--16: 32px;
    --size--18: 36px;
    --size--20: 40px;
    --size--24: 48px;
    --size--28: 56px;
    --size--32: 64px;
    --size--36: 72px;
    --size--40: 80px;
    --size--48: 96px;
    --size--56: 112px;
    --size--64: 128px;
    --size--72: 144px;
    --size--80: 160px;
    --size--96: 192px;
    --size--112: 224px;
    --size--128: 256px;
    --size--160: 320px;
    --size--192: 384px;
}
```

### Border & Radius Variables

```css
:root {
    --border--width: calc(var(--size--1) / 2);
    --border--color: var(--color--primary--600);
    --border--radius: var(--radius--xl);

    --radius--none: var(--size--0);
    --radius--xxs: var(--size--1);
    --radius--xs: var(--size--2);
    --radius--sm: var(--size--3);
    --radius--md: var(--size--4);
    --radius--lg: var(--size--5);
    --radius--xl: var(--size--6);
    --radius--2xl: var(--size--8);
    --radius--3xl: var(--size--10);
    --radius--4xl: var(--size--12);
    --radius--6xl: var(--size--16);
    --radius--10xl: var(--size--24);

    --outline--width: var(--size--1);
    --outline--border: var(--outline--width) solid var(--color--base--800);
    --box--shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
```

### Typography Variables

```css
:root {
    --font--family-emoji: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font--family-sans-serif: system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, Helvetica, Arial, "Helvetica Neue", sans-serif, var(--font--family-emoji);
    --font--family-monospace: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, var(--font--family-emoji);
    --font--family: var(--font--family-sans-serif);

    --font--spacing-block: var(--size--8);
    --font--line-height: 1.5;
    --font--weight: 400;

    --text--color--content: var(--color--base--800);
    --text--color--heading: var(--color--base--950);

    --text--size--h1-max: var(--size--24);
    --text--size--h1-min: var(--size--16);
    --text--size--h2-max: var(--size--18);
    --text--size--h2-min: var(--size--14);
    --text--size--h3-max: var(--size--16);
    --text--size--h3-min: var(--size--12);
    --text--size--h4-max: var(--size--14);
    --text--size--h4-min: var(--size--10);
    --text--size--h5-max: var(--size--12);
    --text--size--h5-min: var(--size--9);
    --text--size--h6-max: var(--size--8);
    --text--size--h6-min: var(--size--8);
    --text--size--content-max: var(--size--10);
    --text--size--content-min: var(--size--8);
    --text--size--button-max: var(--size--9);
    --text--size--button-min: var(--size--7);
    --text--size--badge-max: var(--size--7);
    --text--size--badge-min: var(--size--7);

    --font--size--content: clamp(var(--text--size--content-min), 0.9038rem + 0.3846vi, var(--text--size--content-max));
    --font--size--button: clamp(var(--text--size--button-min), 0.7788rem + 0.3846vi, var(--text--size--button-max));
    --font--size--badge: clamp(var(--text--size--badge-min), 0.8750rem + 0.0000vi, var(--text--size--badge-max));
    --font--size--0: clamp(var(--text--size--h6-min), 1.0000rem + 0.0000vi, var(--text--size--h6-max));
    --font--size--1: clamp(var(--text--size--h5-min), 0.9808rem + 0.5769vi, var(--text--size--h5-max));
    --font--size--2: clamp(var(--text--size--h4-min), 1.0577rem + 0.7692vi, var(--text--size--h4-max));
    --font--size--3: clamp(var(--text--size--h3-min), 1.3077rem + 0.7692vi, var(--text--size--h3-max));
    --font--size--4: clamp(var(--text--size--h2-min), 1.5577rem + 0.7692vi, var(--text--size--h2-max));
    --font--size--5: clamp(var(--text--size--h1-min), 1.6154rem + 1.5385vi, var(--text--size--h1-max));
}
```

### Container & Layout Variables

```css
:root {
    --container--full: 100%;
    --container--max: 1280px;
    --container--narrow: 820px;
    --container--min: 350px;
    --container--width: var(--container--max);

    --spacing--block: var(--spacing--lg);
    --spacing--block-start: var(--spacing--block);
    --spacing--block-end: var(--spacing--block);
    --spacing--inline: var(--spacing--lg);
    --spacing--inline-start: var(--spacing--inline);
    --spacing--inline-end: var(--spacing--inline);

    --grid--item-min-width: 240px;
    --grid--item-max-width: 1fr;
    --grid--row-gap: var(--spacing--block);
    --grid--col-gap: var(--spacing--inline);
    --grid--gap: var(--grid--row-gap) var(--grid--col-gap);

    --section--padding-block: var(--spacing--xl);
    --section--padding-inline: var(--spacing--lg);
}
```

### Component Variables

```css
:root {
    /* Button variables */
    --button--filled-bg-disabled: var(--color--base--300);
    --button--filled-bg-enabled: var(--color--primary--500);
    --button--filled-bg-focused: var(--color--primary--600);
    --button--filled-bg-hovered: var(--color--primary--600);
    --button--filled-bg-pressed: var(--color--primary--700);
    --button--filled-tx-disabled: var(--color--base--0);
    --button--filled-tx-enabled: var(--color--base--0);
    --button--filled-tx-focused: var(--color--base--0);
    --button--filled-tx-hovered: var(--color--base--0);
    --button--filled-tx-pressed: var(--color--base--0);

    --button--filled-tonal-bg-disabled: var(--color--base--300);
    --button--filled-tonal-bg-enabled: var(--color--primary--100);
    --button--filled-tonal-bg-focused: var(--color--primary--200);
    --button--filled-tonal-bg-hovered: var(--color--primary--200);
    --button--filled-tonal-bg-pressed: var(--color--primary--300);
    --button--filled-tonal-tx-disabled: var(--color--base--0);
    --button--filled-tonal-tx-enabled: var(--color--primary--600);
    --button--filled-tonal-tx-focused: var(--color--base--0);
    --button--filled-tonal-tx-hovered: var(--color--base--0);
    --button--filled-tonal-tx-pressed: var(--color--base--0);

    --button--ghost-tx-disabled: var(--color--base--500);
    --button--ghost-tx-enabled: var(--color--primary--500);
    --button--ghost-tx-focused: var(--color--primary--600);
    --button--ghost-tx-hovered: var(--color--primary--600);
    --button--ghost-tx-pressed: var(--color--primary--700);

    --button--outlined-bg-disabled: var(--color--base--0);
    --button--outlined-bg-focused: var(--color--primary--50);
    --button--outlined-bg-hovered: var(--color--primary--50);
    --button--outlined-bg-pressed: var(--color--primary--100);
    --button--outlined-br-disabled: var(--color--base--500);
    --button--outlined-br-enabled: var(--color--primary--400);
    --button--outlined-br-focused: var(--color--primary--500);
    --button--outlined-br-hovered: var(--color--primary--500);
    --button--outlined-br-pressed: var(--color--primary--600);
    --button--outlined-tx-disabled: var(--color--base--500);
    --button--outlined-tx-enabled: var(--color--primary--600);
    --button--outlined-tx-focused: var(--color--primary--700);
    --button--outlined-tx-hovered: var(--color--primary--700);
    --button--outlined-tx-pressed: var(--color--primary--800);

    /* Badge variables */
    --badge--filled-bg: var(--color--primary--500);
    --badge--filled-tx: var(--color--base--0);
    --badge--ghost-tx: var(--color--primary--600);
    --badge--outlined-bg: var(--color--primary--50);
    --badge--outlined-br: var(--color--primary--500);
    --badge--outlined-tx: var(--color--primary--600);
    --badge--tonal-bg: var(--color--primary--100);
    --badge--tonal-tx: var(--color--primary--600);

    /* Card variables */
    --card--background-color: var(--color--base--0);
    --card--border-color: var(--color--base--50);
    --card--box-shadow: var(--box--shadow);
    --card--border-radius: var(--border--radius);

    /* Other component variables */
    --table--border-color: var(--color--base--400);
    --table--row-stripped-background-color: var(--color--primary--50);
    --code--background-color: var(--color--base--200);
    --code--color: var(--color--base--700);
    --transition: 0.2s ease-in-out;
}
```

---

## Global Classes

The framework provides pre-styled elements through global classes for common layout patterns, components, and utilities.

### Layout Classes

#### `.container`

Centers content with configurable max-width:

```css
.container {
   margin-left: auto;
   margin-right: auto;
   width: 100%;
   max-width: var(--max-width, var(--container--width));
}
```

#### `.grid`

Creates a responsive grid layout:

```css
.grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(var(--grid--item-min-width), var(--grid--item-max-width)));
   gap: var(--spacing--md);
   width: 100%
}
```

#### `.flex-row`

Horizontal flexbox with configurable gap:

```css
.flex-row {
   display: flex;
   gap: var(--spacing--inline);
   justify-content: flex-start
}
```

#### `.flex-column`

Vertical flexbox with configurable gap:

```css
.flex-column {
   display: flex;
   flex-direction: column;
   gap: var(--spacing--block);
   align-items: flex-start
}
```

### Component Classes

#### Buttons

The framework provides several button variants:

```css
/* Default button styles */
:is(button, .button, [role=button], [type=submit]) {
   --background-color: var(--button--filled-bg-enabled);
   --color-text: var(--button--filled-text);
   --spacing-block: var(--spacing--lg);
   --spacing-inline: var(--spacing--xl);
   --border-radius: var(--radius--xs);
   --border-color: transparent;
   --border-style: solid;
   --border-width: 1px;
   --text-decoration: none;
   --font-weight: 600;
   --font-size: var(--size--9);
   display: flex;
   justify-content: center;
   color: var(--color-text);
   background-color: var(--background-color);
   padding: var(--spacing-block) var(--spacing-inline);
   border-radius: var(--border-radius);
   border: var(--border-width) var(--border-style) var(--border-color);
   font-weight: var(--font-weight);
   font-size: var(--font-size);
   line-height: var(--font--line-height);
   text-align: center;
   text-decoration: var(--text-decoration);
   cursor: pointer;
   user-select: none;
   transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition)
}

/* Button variants */
.btn-tonal {
   --background-color: var(--button--filled-tonal-bg-enabled);
   --color-text: var(--button--filled-tonal-text);
}

.btn-outlined {
   --background-color: transparent;
   --color-text: var(--button--outlined-text);
   --border-color: var(--button--outlined-border-enabled);
}

.btn-ghost {
   --background-color: transparent;
   --color-text: var(--button--ghost-text-enabled);
}
```

#### Badge

Badge styles with various variants:

```css
:where(.badge, .badge-tonal, .badge-outlined, .badge-ghost) {
   --background-color: var(--badge--filled-bg);
   --color-text: var(--badge--text);
   --spacing-block: var(--spacing--sm);
   --spacing-inline: var(--spacing--md);
   --border-radius: var(--radius--2xl);
   --border-color: var(--badge--outlined-border);
   --border-style: solid;
   --border-width: 1px;
   --text-decoration: none;
   --font-weight: 400;
   --font-size: var(--size--7);
   --font-line-height: 1.1;
   display: inline-block;
   /* Additional styles... */
}

.badge-tonal {
   --border-color: transparent;
}

.badge-outlined {
   --background-color: transparent;
}

.badge-ghost {
   --background-color: transparent;
   --border-color: transparent;
}
```

#### Card

Simple card component:

```css
.card {
   padding: var(--spacing--3xl);
   border-radius: var(--card--border-radius);
   background-color: var(--card--background-color);
   border: solid var(--border--width) var(--card--border-color);
   box-shadow: var(--card--box-shadow);
   display: flex;
   flex-direction: column;
   row-gap: var(--spacing--sm);
   align-items: flex-start;
}
```

#### Navigation

Navigation components:

```css
.bldr-nav {
   display: flex;
   flex-direction: row;
   align-items: center;
   margin: 0;
   padding: 0;
   width: 100%;
}

.bldr-nav-menu {
   display: flex;
   flex-direction: row;
   align-items: center;
   width: 100%;
   margin: 0;
   padding: 0;
   list-style: none;
   z-index: 999;
   background-color: var(--bldr-menu-bg-color, var(--color--base--0, #fff));
   gap: var(--bldr-menu-gap);
   justify-content: var(--bldr-menu-alignment, flex-end);
}

.bldr-nav-item {
   display: flex;
}

.bldr-nav-link {
   display: flex;
   text-decoration: none;
   flex: 1;
   text-align: center;
   justify-content: center;
   padding: var(--spacing--block, 16px) var(--spacing--inline, 16px);
   color: var(--bldr-menu-link-color, var(--text--color--heading, #0014a0));
   background-color: var(--bldr-menu-link-bg-color, transparent);
   border: var(--border--width) solid var(--color--base--0);
   border-radius: var(--radius--xs, 4px);
}
```

### Utility Classes

#### Color Utilities

```css
.color-primary {
   color: var(--color--primary--500);
}

.bg-primary {
   background-color: var(--color--primary--100);
}

.border-color-primary {
   border-color: var(--color--primary--500);
}
```

#### Typography Utilities

```css
.font-size-1 {
   font-size: var(--font--size--0);
   --font-line-height: 1.125;
   --spacing-block-start: 3rem;
}

.font-size-2 {
   font-size: var(--font--size--1);
   --font-line-height: 1.15;
   --spacing-block-start: 2.625rem;
}

/* Additional font size classes... */
```

### Icon & Interaction Classes

```css
.icon-btn {
   display: inherit;
   --icon-height: var(--size--8);
   --icon-width: var(--size--8);
   --icon-bg: var(--button--filled-bg-enabled);
   --icon-fill-color: var(--button--filled-text);
}

:where(.icon-btn) .icon {
   mask-image: var(--icon--search);
   -webkit-mask-image: var(--icon--search);
   background-color: currentColor;
   mask-size: 1em;
   mask-position: center center;
   mask-repeat: no-repeat;
   height: var(--icon-height);
   width: var(--icon-width);
}

.hasicon-end {
   --icon-size: 1.5em;
   --spacing-inline: 0.5em;
   display: inline-flex;
   align-items: center;
   gap: var(--spacing--inline);
}

.hasicon-end::after {
   display: inline-flex;
   content: "";
   width: var(--icon-size);
   height: var(--icon-size);
   mask-image: var(--icon--chevron);
   background-color: currentColor;
}

.hasicon-start {
   display: inline-flex;
   align-items: center;
   --icon-size: 1.5em;
   --spacing-inline: 0.5em;
   gap: var(--spacing--inline);
}

.hasicon-start::before {
   display: inline-flex;
   content: "";
   width: var(--icon-size);
   height: var(--icon-size);
   mask-image: var(--icon--chevron);
   background-color: currentColor;
}
```

---

## Locally Scoped CSS Variables

### How They Work

The framework uses locally scoped CSS variables to customize specific elements while inheriting from the global design
system. This approach allows for:

1. **Consistency**: Components use the same base variables
2. **Customization**: Components can override variables for their specific needs
3. **Flexibility**: Changes to base variables cascade properly to components

The cascading order is:
`:root` variables → component variables → element-specific variables

### Button Example

Buttons define their own scoped CSS variables that override or reference global variables:

```css
:is(button, .button, [role=button], [type=submit]) {
   --background-color: var(--button--filled-bg-enabled);
   --color-text: var(--button--filled-text);
   --spacing-block: var(--spacing--lg);
   --spacing-inline: var(--spacing--xl);
   --border-radius: var(--radius--xs);
   --border-color: transparent;
   --border-style: solid;
   --border-width: 1px;
   --text-decoration: none;
   --font-weight: 600;
   --font-size: var(--size--9);

   /* Then these variables are used in the actual CSS properties */
   color: var(--color-text);
   background-color: var(--background-color);
   padding: var(--spacing-block) var(--spacing-inline);
   border-radius: var(--border-radius);
   border: var(--border-width) var(--border-style) var(--border-color);
   /* etc... */
}
```

When a button variant is used, it overrides these local variables:

```css
.btn-tonal {
   --background-color: var(--button--filled-tonal-bg-enabled);
   --color-text: var(--button--filled-tonal-text);
}
```

### Heading Example

Headings define size-specific variables:

```css
h1 {
   --font-size: var(--font--size--5);
   --font-line-height: 1.125;
   --spacing-block-start: var(--size--24);
}

h2 {
   --font-size: var(--font--size--4);
   --font-line-height: 1.15;
   --spacing-block-start: var(--size--20);
}

/* Then these shared properties use the local variables */
h1, h2, h3, h4, h5, h6 {
   margin-top: 0;
   margin-bottom: var(--spacing--block-end, var(--spacing--block));
   color: var(--text--color--heading);
   font-weight: var(--font--weight);
   font-size: var(--font-size);
   line-height: var(--font-line-height);
   font-family: var(--font--family);
}
```

### Navigation Example

The navigation components provide locally scoped variables for customization:

```css
.bldr-nav-menu {
   background-color: var(--bldr-menu-bg-color, var(--color--base--0, #fff));
   gap: var(--bldr-menu-gap);
   justify-content: var(--bldr-menu-alignment, flex-end);
   align-items: center;
}

.bldr-nav-link {
   padding: var(--spacing--block, 16px) var(--spacing--inline, 16px);
   color: var(--bldr-menu-link-color, var(--text--color--heading, #0014a0));
   background-color: var(--bldr-menu-link-bg-color, transparent);
}

.bldr-nav-link:hover, .bldr-nav-link.current-menu-item {
   color: var(--bldr-menu-link-color-hover, var(--color--primary--500, #2962ff));
   background-color: var(--bldr-menu-link-bg-color-hover, var(--color--base--100, #bbbcc6));
   border: var(--border--width) solid var(--color--primary--500);
}
```

---

## Practical Examples

### Framework Variables Meant to be Customized

When implementing this framework in your project, the following CSS variables are specifically designed to be modified
and customized:

#### Typography Variables

All typography variables which start with `--text--size-` are meant to be adjusted per project:

```css
/* Example of typography customization */
:root {
   --text--size--h1-max: var(--size--28); /* Make headings larger */
   --text--size--h1-min: var(--size--18);
   --text--size--body-max: var(--size--12); /* Larger body text */
   --text--size--body-min: var(--size--9);
}
```

#### Container Variables

All container-related variables can be adjusted for your layout needs:

```css
:root {
   --container--max: 1440px; /* Wider container */
   --container--narrow: 960px; /* Wider narrow container */
}
```

#### Spacing Variables

All spacing variables starting with `--spacing-` should be customized to match your design requirements:

```css
:root {
   --spacing--block: var(--spacing--xl); /* More vertical spacing */
   --spacing--inline: var(--spacing--xl); /* More horizontal spacing */
   --section--padding-block: var(--spacing--2xl);
}
```

#### Color Variables

All color variables (starting with `--color-`) are meant to be adjusted to match your brand:

```css
:root {
   /* Primary color palette */
   --color--primary--500: #2d7d46; /* Green primary */
   --color--primary--700: #1a5c2d; /* Darker green */
   --color--primary--300: #5bae75; /* Lighter green */

   /* Base colors can also be adjusted */
   --color--base--50: #f5f7f5;
   --color--base--900: #1e271e;
}
```

#### Component Variables

All component-specific variables are designed to be customized for your project's appearance:

```css
:root {
   /* Button customization */
   --button--filled-bg-enabled: var(--color--primary--500);
   --button--filled-text: var(--color--base--0);

   /* Card customization */
   --card--border-radius: var(--radius--md);
   --card--box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

   /* Badge customization */
   --badge--filled-bg: var(--color--primary--100);
   --badge--text: var(--color--primary--800);
}
```

### Customizing Colors

To customize the color scheme of your site using this framework, you can override the root color variables:

```css
:root {
   /* Change primary color to purple */
   --color--primary--50: #f3e5f5;
   --color--primary--100: #e1bee7;
   --color--primary--200: #ce93d8;
   --color--primary--300: #ba68c8;
   --color--primary--400: #ab47bc;
   --color--primary--500: #9c27b0;
   --color--primary--600: #8e24aa;
   --color--primary--700: #7b1fa2;
   --color--primary--800: #6a1b9a;
   --color--primary--900: #4a148c;
}
```

This simple change will automatically update all components that use the primary color, including buttons, badges,
borders, and more.

### Creating a Custom Component

You can create a custom component that uses the framework's variables:

```css
.custom-alert {
   /* Local variables that reference global ones */
   --background-color: var(--color--error--50);
   --border-color: var(--color--error--300);
   --text-color: var(--color--error--700);
   --icon-color: var(--color--error--500);
   --spacing: var(--spacing--lg);

   /* Component styles using those variables */
   background-color: var(--background-color);
   border: var(--border--width) solid var(--border-color);
   border-radius: var(--border--radius);
   color: var(--text-color);
   padding: var(--spacing);
   display: flex;
   align-items: flex-start;
   gap: var(--spacing--md);
}

.custom-alert::before {
   content: "";
   width: 24px;
   height: 24px;
   background-color: var(--icon-color);
   mask-image: url('path-to-warning-icon.svg');
   mask-size: contain;
   mask-repeat: no-repeat;
}

/* Variant */
.custom-alert-info {
   --background-color: var(--color--primary--50);
   --border-color: var(--color--primary--300);
   --text-color: var(--color--primary--700);
   --icon-color: var(--color--primary--500);
}
```

### Modifying Component Spacing

You can adjust the spacing of components by overriding their local variables:

```css
/* Global spacing adjustment */
:root {
   --spacing--block: var(--spacing--xl); /* Increase default block spacing */
   --spacing--inline: var(--spacing--xl); /* Increase default inline spacing */
}

/* Component-specific spacing */
.card {
   --spacing-block: var(--spacing--2xl); /* Larger padding for cards */
}

/* Button-specific spacing */
button, .button {
   --spacing-block: var(--spacing--md); /* Smaller vertical padding */
   --spacing-inline: var(--spacing--2xl); /* Larger horizontal padding */
}
```

### Using Icon Helpers

The framework provides several ways to work with icons:

```html
<!-- Using icon-btn class with SVG -->
<button class="icon-btn">
   <svg>...</svg>
   <span>Button Text</span>
</button>

<!-- Using hasicon-start class for icon before text -->
<a href="#" class="hasicon-start">View Details</a>

<!-- Using hasicon-end class for icon after text -->
<a href="#" class="hasicon-end">Learn More</a>
```

You can customize the icon appearance:

```css
.custom-link.hasicon-end {
   --icon-size: 1.2em; /* Change icon size */
   --spacing-inline: 0.25em; /* Adjust spacing between icon and text */
}

.custom-link.hasicon-end::after {
   mask-image: var(--icon--arrow); /* Use a different icon */
}
```

### Creating a Custom Layout

You can use the grid system to create custom layouts:

```css
.product-grid {
   /* Extend the base grid */
   display: grid;
   gap: var(--spacing--lg);

   /* Customize grid properties */
   --grid--item-min-width: 280px;
   grid-template-columns: repeat(auto-fit, minmax(var(--grid--item-min-width), 1fr));
}

/* Responsive adjustments */
@media (max-width: 768px) {
   .product-grid {
      --grid--item-min-width: 100%; /* Full width on mobile */
   }
}
```

### Adding and Customizing a Responsive Navigation

The framework includes fully responsive navigation components that can be easily customized:

```css
/* Desktop navigation customization */
.bldr-nav-menu {
   --bldr-menu-bg-color: var(--color--base--50);
   --bldr-menu-gap: var(--spacing--xl);
   --bldr-menu-alignment: space-between;
}

.bldr-nav-link {
   --bldr-menu-link-color: var(--color--primary--700);
   --bldr-menu-link-bg-color: transparent;
   border-bottom: 2px solid transparent;
   transition: border-color var(--transition);
}

.bldr-nav-link:hover, .bldr-nav-link.current-menu-item {
   --bldr-menu-link-color-hover: var(--color--primary--900);
   --bldr-menu-link-bg-color-hover: transparent;
   border-bottom: 2px solid var(--color--primary--500);
}

/* Mobile navigation customization */
@media (max-width: 768px) {
   :root {
      --bldr-menu-mobile-bg-color: var(--color--base--0);
      --bldr-menu-mobile-link-color: var(--color--primary--600);
      --bldr-menu-mobile-link-bg-color: var(--color--base--50);
      --bldr-menu-mobile-gap: var(--spacing--lg);
   }
}
```
