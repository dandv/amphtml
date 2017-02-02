# Implementation notes

There are easily [50+ open sourced star rating widgets](https://github.com/dandv/comparisons/blob/master/star-rating-widgets.md) out there, but no clear winner (as in, no dependencies beyond fonts, accessible, customizable). Below are some things we've learned while building `amp-star-rating`.


## Fallback elements

[Most often](http://lea.verou.me/2011/08/accessible-star-rating-widget-with-pure-css/), the underlying elements for star ratings are radio buttons. Other elements that make sense are [number inputs](https://github.com/javiertoledo/bootstrap-rating-input) or [`<input type="range">`](https://gist.github.com/keithchu/1584147#gistcomment-559559), but these require creating an entire set of (inaccessible) elements to show the stars.


## Accessibility

Normally AMP is rendered on mobile devices, where keyboard navigation isn't a concern. However, bolting accessibility later on is much more expensive than building it in from the start, so we chose an approach that *is* accessible - **radio inputs decorated with labels**, rather than [labels with hidden radio inputs within](http://jsfiddle.net/y9zeLr1n/).


## JavaScript usage

A surprising number of widgets take pride in using only CSS. While this is interesting academically, it's not a concern with AMP, and it also makes it impossible to get proper keyboard navigation because CSS solutions,

* either reverse the order of the input radio buttons, so [keyboard arrows will do the opposite of what the user expects](https://github.com/LunarLogic/starability/issues/15), or
* [don't change the styling of the stars on hover](http://codepen.io/mburnette/pen/eNNZbm) (again, not an issue for AMP *typically* on mobile, but AMP pages are also opened on desktops, e.g. when a mobile user shares an AMP link with a desktop user)


## Half stars

Half stars are [often requested by users](https://github.com/javiertoledo/bootstrap-rating-input/issues/8) and implemented by the [more polished](https://github.com/craigh411/vue-star-rating) among widgets, sometimes even as [fully fractional stars](http://plugins.krajee.com/star-rating-demo-basic-usage#basic-example-2).


## Stars vs. other icons

AMP publishers may want to use brand-specific icons instead of the stars, such as their logo or other symbol. Since vector icons scale better than images, we support customizing the CSS for the stars (for example, Front Awesome icons could be used, or a [minimal subset thereof](https://transfonter.org/)), or specifying SVG icons.
ss