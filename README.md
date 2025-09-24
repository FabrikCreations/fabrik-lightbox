## Magnific Popup Setup

You can install via npm

    npm i @fabrikcreations/fabrik-fitframe --save-dev

### Magnific Popup

[![Build Status](https://travis-ci.org/dimsemenov/Magnific-Popup.png)](https://travis-ci.org/dimsemenov/Magnific-Popup) 
[![Flattr](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/thing/1310305/Magnific-Popup-by-dimsemenov)

Fast, light and responsive lightbox plugin, for jQuery and Zepto.js.

- [Documentation and getting started guide](http://dimsemenov.com/plugins/magnific-popup/documentation.html).
- [Examples and plugin home page](http://dimsemenov.com/plugins/magnific-popup/).
- More examples in [CodePen collection](http://codepen.io/collection/nLcqo).

Optionally, install via Bower `bower install magnific-popup` or npm: `npm install magnific-popup`.
[Ruby gem](https://rubygems.org/gems/magnific-popup-rails): `gem install magnific-popup-rails`.


### Using Magnific Popup?

If you used Magnific Popup in some interesting way, or on site of popular brand, I'd be very grateful if you <a href="mailto:diiiimaaaa@gmail.com?subject="Site that uses Magnific Popup"">shoot me</a> a link to it.


### Build 

To compile Magnific Popup by yourself, first of make sure that you have [Node.js](http://nodejs.org/), [Grunt.js](https://github.com/cowboy/grunt), [Ruby](http://www.ruby-lang.org/) and [Jekyll](https://github.com/mojombo/jekyll/) installed, then:

1) Copy repository

	git clone https://github.com/dimsemenov/Magnific-Popup.git

2) Go inside Magnific Popup folder that you fetched and install Node dependencies

	cd Magnific-Popup && npm install

3) Now simply run `grunt` to generate JS and CSS in folder `dist` and site in folder `_site/`.

	grunt

Optionally:

- Run `grunt watch` to automatically rebuild script when you change files in `src/` or in `website/`.
- If you don't have and don't want to install Jekyll, run `grunt nosite` to just build JS and CSS files related to popup in `dist/`.