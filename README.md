# Builderius CSS - Alpha 1.0
## A Minimal CSS Framework for Builderius Site Builder
A minimalist and lightweight starter CSS that prioritizes semantic HTML, uses CSS Variables and simple utility classes. It takes this minimalist approach to CSS frameworks and adapts them to the specific visual builder environment so that it aligns better with the logic of the UI and helps users get a quick start.

## How does it help users get a quick start?
- Drop any html element into the canvas and it will look nice and be responsive out of the box. 
- It takes care of the basic global styling so that you can extend it to fit your needs faster then building from scratch would take you.
- 
## What is included?

### Elegant HTML Reset
- Responsive
- Looks great out of the box
- Lightweight
- Low Specificity for easy overrides
- Semantic styles (button, [input=submit], [role=button] and .button receive the same styles)

### Fluid Typography
- Framework uses `clamp()` to set flexible sizes for typography that scale with the size of the browser making the typography fit every screen size.

### Modern selectors for managing low specificity
Framework has to be easy to override on local level, without the need to overuse the high specificity selectors like ID based selectors. We use `:where()` frequently for this reason as well as making the selectors grouping more elegant and readable.

### CSS Variables
From generic variables like `--color-primary` to a more specific `--switch-checked-background-color` the framework makes it easy to apply consistent changes to as many or as little elements one wants.

#### Colors
We provide you with the very basic color variables, `--color-primary`, `--color-secondary`, `--color-muted` and some variants of these. If you need more of them add them where you need them. 

#### Typography
Provides 6 sizes type scale applied to headings automatically or added with classes .font-size-step- or with variables --font-size-step-. Easy to change the typography scale using [Utopia Calculator](https://utopia.fyi/type/calculator/) or [Fluid Type Scale](https://www.fluid-type-scale.com/).

#### Spacing
Use `--spacing-m`, `--spacing-lg` to apply spacing to your elements. Add additional ones to the list, or change the values as per your need. 
#### Borders
For multipart value CSS properties such as borders, we offer all in one variables like --border-primary, `--border-muted` ... or a more modular approach using `--border-width`, and other.

#### Border radius
Use `--radius-m`, `--radius-lg` ... to apply border radius to your elements. Add additional ones to the list, or change the values as per your need. 

#### Container widths
Use `--container-width`, for invoking the default width, or specify `--container-narrow`, `--container-wide`, `--container-full`. We recommend not to give static value to `--container-width` itself, but reference one of the specific ones, by default we declare it like this `--container-width: var(--container-wide);`

#### Grid properties
We include `--grid-item-min-width`, `--grid-item-max-width`, `--grid-gap` and more, use these to maintain consistency over your grids, yet retain flexibility.

### Classes
We include a series of utilities and common use classes to get you started. `.flex-row`, `.flex-column`, `.grid`, `.card` are notable examples. We also include some classes that do the same things some CSS variables do so you can use class or variable as per your preference. For example: `.font-size-step-6`, `.font-size-step-0`, `.border-secondary` etc.

## Recommendations on how to extend the Framework
### Working with the Variables
Our parser captures the names of the variables and uses those names to organize the variables list in the UI. Knowing how this happens can help you organize the variables the way you want. By the way of naming, you can craft your own "Theme Settings" with the variables manager.

### Some principles as you work with the variables
1. First part of the variable name will be the name of the variable group
2. It is generally a good idea to group variables by their use-case, rather then the type
3. Using "Design Tokens" approach will give your global CSS variables more flexibility
4. It is generally better to redefine the variable in a specific "scope" then to make a new one

#### Names and grouping 
**If you name your variables like:**

- `--color-button-active`
- `--color-button-disabled`
- `--color-hero-section`
- `--border-hero-section`

They will get grouped under the accordion **Color**, and **Border**

 **If you name your variables like:**

- `--button-color-active`
- `--button-color-disabled`
- `--hero-color-section`
- `--hero-border-section`

They will get grouped under the accordion **Button** and **Hero**, and as a consequence your settings for hero sections will be grouped together, as well as for the buttons.

#### Prefer local overrides
If you need to override the variable value do not make a higher specificity selector, or make a new variable rather redeclare the variable in the local scope.

**Here is an example:**
A global variable will look like this:
```
:root {
--some-variable: 1234;
} 
```

And it can be override like this:
```
.button-primary {
--some-variable: 4321;
}
```
***Notice:*** *Local variable overrides are not yet available (Alpha: July, 2024) in the elements UI, so for now one should use Code editor to do this.*

### Working with the Classes
We provide only the basic classes to the framework for now. You can easily add more classes whichever way you will like. Pasting your usual ones inside the code editor. Making them as you go. Making them using the selectors panel.

If you think we should add certain classes out of the box, please recommend them and we will look into it.

## How to give feedback and influence the Builderius framework going forward?

You can use GitHub issues and comments to give us feedback. Alternatively you can send us an email to support@builderius.io or at [Builderius Facebook Community](https://www.facebook.com/groups/builderians).

Thank you for being a part of Builderius development.
