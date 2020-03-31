# README

Space Invaders game

## Questions?

- Please contact LK with any questions or concerns.

<pre>
*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-*
|                                                             |
|   LLL            EEEEEEEEEE    AAAAAAAAAA    HHH      HHH   |
|   LLL           EEEEEEEEEEE   AAAAAAAAAAAA   HHH      HHH   |
|   LLL           EEE           AAA      AAA   HHH      HHH   |
|   LLL           EEEEEEEE      AAAAAAAAAAAA   HHHHHHHHHHHH   |
|   LLL           EEE           AAA      AAA   HHH      HHH   |
|   LLL           EEE           AAA      AAA   HHH      HHH   |
|   LLLLLLLLLLL   EEEEEEEEEEE   AAA      AAA   HHH      HHH   |
|    LLLLLLLLLL    EEEEEEEEEE   ASA      AAA   HHH      HHH   |
|                                                             |
*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-*</pre>

## Styling

### Sass

I used Sass as the project's preprocessor. To install Sass globally, I used NPM. Run the following command in the terminal

```sh
npm install -g sass
```

- **Organization** | Linking all stylesheets into one central stylesheet. Being able to componentize stylesheets creates a great system for targeting a section or element in an organized fashion. This is also showcased in the next two points.

- **Variables** | The ability to set a few basic colors, etc in one spot and reuse them, be able to switch multiple areas in one line of code is super powerful and efficient. For example, if `variables.scss` is correctly set up, changing branding colors for a client who decides to update their logo would take less than a few minutes.

- **Nesting** | Have all media queries, states, and sub-elements within the umbrella of a parent class. Nesting is much better than having to repeat classes each time a hover or media query was needed. Comparing to CSS, SASS also reduces the amount of code that would have been needed.

### Layout

Flexbox. That is all. Site is fully responsive and beautiful on mobile and tablet.

[Installation](https://sass-lang.com/install)

After setting up the initial folder and file structure, I opened the terminal and typed the command

```sh
sass --watch assets/scss/main.scss assets/css/main.css
```

[Guide](https://sass-lang.com/guide)

The watch command tells SASS to watch main.scss SCSS file for changes and compile into main.css.
