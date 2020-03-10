# README

A prestigious international non-profit organization, StopDeath.org, has
sought out your expertise as a highly-skilled front-end developer. They've
commissioned a design mockup from a well-known designer, but their resources
have fallen short on implementation. Your task is to rescue StopDeath.org's
project and see the implementation to completion.

## Minimum Requirements

1. Recreate the provided mockup as a production quality prototype.  
   You should: style for all commonly used HTML elements; and, use the most  
   semantically correct markup.
1. Explain, in detail, your dev and decision making process in the README.md.
1. You will only receive the desktop version of the design mock-up. It is up to  
   you to style for additional viewports. Make sure you explain your responsive  
   decisions.
1. WCAG level A compliance.

### Bonus points

1. Use CSS compiler, gulp, etc. in your build pipeline, with documentation.
1. Deliver a Drupal or Wordpress theme or sub-theme.
1. Prototype or working demo (double bonus: in a Drupal or Wordpress site).
1. A style guide to outline your design framework.
1. Consideration and documentation of states and interactions.
1. Design fluorishes, rich elements, animations, etc.
1. WCAG level AA compliance.

## Additional information

- We expect a theme based on the generic mock-up, but you have some  
  degree of creative freedom to adjust as necessary, keeping Stop Death's brand  
  in mind. If you decide to go this route, consider tweaking the final site in  
  ways the client would appreciate, or that you feel would amplify the client's  
  message. Be prepared to defend your decisions.
- This repository is more or less irrelevant to your PR. We know that's not a  
  standard use case for pull requests, but it's the easiest way for us to collect  
  and analyze responses.
- You may continue committing up until the submission deadline. No commits made  
  after submission deadline will be considered.
- Relying on libraries or other 3rd-party code is fine, encouraged even, so  
  long as you _credit the original source_.
- Show your work! We'll consider your PR for partial credit even if you don't  
  fulfill the requirements.
- If you run out of time, or are unable to fulfill some part of the assignment,  
  explain the solution you _would_ build.
- Similarly, feel free to provide details about known bugs, areas for  
  improvement, or any other possible enhancements.
- Comment your work AND provide documentation please. We want to see how you  
  tackle a problem, and what your thinking is when solving it, and what resources  
  you used to get to your solution.
- In addition to code comments, we'll look at your commit logs to get an idea  
  of your process.

## Instructions

1. Create a branch for your work
1. Fulfill the implementation requirements
1. Create a pull request with your prototype's code

## Questions?

- Please contact the repository owner with any questions or concerns.

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

In this code mockup, I learned how to set up SASS from scratch rather than relying on an existing theme as I've always done. After a lot of ....trial and errors, Sass was workingThere are a few perks to using Sass rather than CSS.

- **Organization** | Linking all stylesheets into one central stylesheet. Being able to componentize stylesheets creates a great system for targeting a section or element in an organized fashion. This is also showcased in the next two points.

- **Variables** | The ability to set a few basic colors, etc in one spot and reuse them, be able to switch multiple areas in one line of code is super powerful and efficient. For example, if `variables.scss` is correctly set up, changing website colors for a client who decides to change their company's brand colors would take less than a few minutes.

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

## Misc

### Links

All external links are to be opened in a new tab by using `target=_blank` in the `<a>` tags. This keeps the user engaged with the current site rather than completely leaving to visit another website.

### UI/UX

- **Buttons** | A subtle variation to the overused `background-color` propery.
- **Social media icons** | These icons have a subtle hover effect using a text-shadow & keyframes with a 15 to 20 degree rotation in percentage increments.
- **Featured content** | Hovering over each card will move the text to the bottom of the container. This allows the visitor to both see the image a little more clearly and confidently know where the mouse is located. The image also zooms in 1.25x.
- **Footer** | Links will underline on hover.

<hr>

## Image Optimization

The seven images have been optimized using [TinyPNG](https://tinypng.com) to shrink file size and reduce page load speed.

## Accessibility

I added a semi-transparent black background behind the text for the hero and featured content sections. This will make it much easier to read for...everyone.

- By using semantic tags in my HTML, screenreaders will be able to identify different parts to users.
  `header`, `footer`, `nav`, etc.

- Add a role of `menubar` to the navigation `<ul>` and menuitem`to the`<a> tags in the navigation menu.

## Credits

### Icons

[FontAwesome](https://fontawesome.com/): Since I used this last ~2016, the class names for the icons have changed from <code>fa</code> to either <code>fab</code> for brand icons or <code>fas</code> for solid icons, depending on what the icon is. Three hours of frustration and confidence that the issue was the file architecture rather than a classname led to a Google Search that led me to....

[Tutorial on Architectural Setup](youtube.com/watch?v=7C9H0EzPxl8):
modified my folder structure so files are all in a `fontawesome` folder rather than loose files within `scss`.

### Images

[Stone Beach](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZwUoZo2jclXGGWDikhvRB0_wO9uyL0UoC54eLrKFdrym-k39&s)

[Raindrop](https://images.pexels.com/photos/932320/pexels-photo-932320.jpeg?cs=srgb&dl=closeup-photo-of-water-drop-932320.jpg&fm=jpg)

[NY Cityscape](https://farm8.staticflickr.com/7290/10913654143_75932564f1_b.jpg)

[Waterdrops](https://storage.needpix.com/rsynced_images/water-2482094_1280.jpg)

[Clouds](https://live.staticflickr.com/1867/44449066021_ef31fcd030_b.jpg)

[Sunset](https://upload.wikimedia.org/wikipedia/commons/8/87/Red_sunset.jpg)

[Hands in Water](http://images.pexels.com/photos/9749/hands-water-poor-poverty.jpg)

### Favicon

[Stop Sign](https://favicon.io/emoji-favicons/stop-sign/)

### Logo

[Stop Sign](data:image/png;base64,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)
