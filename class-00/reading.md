Responsive web design
----------------------

Deliver different layouts, content to users depending on size of browser window they're using, screen dpi, or even what medium (print) they're sending your page out to.


Best Practices:

Start with mobile first, then design for larger browsers

Consider using fluid layouts to account for the bazillion different sizes of mobile devices especially

Save the users bandwidth where you can things like not loading giant backgrounds on mobile devices can slim down how much the page is loading

Consider using grid framework/mixin to not be doing crazy math all the time


Floats
----------

Antiquated but occasionall still the right tool for the job

Plus legacy code doesn't always want you to refactor to just change one little layout

Grids
---------

can be done with floats vs css grid if legacy support needed


SMACSS
------------
Methodology for building modular css systems with functions separated out into different files based on function - layout, typography, theme etc.

Base - resets and basic stuff like link colors
Layout - grid and containers for full width vs. constrained etc. plus basic page layout templates
Module - reusable components like a contact box, a photo with caption and share links etc.
State - collapsed/expanded menus, highlights/active states on form elements etc.
Theme - things literal to look and feel like colors, typography etc, strictly presentational


Preprocessors
---------------

SASS is legit, allows variables, functionality similar JS prototypes (mixins) etc.

SASS application watches a folder and automatically compiles files to CSS, can include things like minifying and merging files if desired.

This does complicate the CSS file structure because can include however many files you'd like to separate site's code into, but that's a feature