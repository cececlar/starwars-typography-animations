## Installation and usage

If you are using VSCode, please ensure you have installed the [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) and [LiveServer](extensions).

Run the following commands in a terminal window:

```bash
git clone git@github.com:cececlar/starwars-typography-animations.git
cd starwars-typography-animations
```

Click the "Watch Sass" option on the bottom nav bar of VSCode.

Right click anywhere in the `index.html` file and select "Open With Live Server" to view the project in a browser.

## About this project

The purpose of this projet was to demonstrate to new web developers how to work with CSS animations, transitions, and typography properties.

The garishness of the animations and typographic choices was for demonstration purposes only. Please note that I am well aware of the extent to which I am visually assaulting my users and likely offending the eyes of any product designers.

## Opportunities for future features

I would like to replicate the full Star Wars crawly text from the beginning of Episode IV: A New Hope. While there are many code bases which have solutions for achieving this effect on platforms like CodePen, the ones that I found displayed the crawly text full-screen, whereas I want it to disappear when it overflows the TV screen border.

I would also like to add animated antenna and a little animated CSS version of R2D2 peeking out at random intervals from behind the TV.

While I wanted to achieve all of this functionality in CSS, after doing some research I found that it does not appear to be possible to play an audio file without user interaction with the browser, so I wrote a teeny tiny bit of JavaScript to play and pause the Star Wars theme song when the user clicks the audio control buttons.

I would love to collaborate with anyone who is interested in tackling any of the above.
