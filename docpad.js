// Generated by CoffeeScript 1.7.1
(function() {
	var docpadConfig,
	__indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	docpadConfig = {
		templateData: {
			site: {
				url		: "http://jsinside.com",
				title		: "JS Inside",
				description	: "JSInside is all about learning things with javascript in a fast and efficient way.\n"
					+ "You have high quality bite sized videos. They are straight and to the point.\n"
					+ "No bullshit. Just knowledge!",
				keywords	: "place, your, website, keywoards, here, keep, them, related, to, the, content, of, your, website",
				author		: "Jerome Etienne",
				email 		: "jerome.etienne@gmail.com",
				styles		: [
					"/styles/twitter-bootstrap.css",
					"/styles/style.css", 
					"/vendor/font-awesome-4.0.3/css/font-awesome.css",
					"/styles/post.css"
				],
				scripts		: [
					"//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js",
					"//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js",
					"/vendor/twitter-bootstrap/dist/js/bootstrap.min.js",
					"/scripts/script.js"
				]
			},
			getPreparedTitle: function() {
				if (this.document.title) {
					return "" + this.document.title + " | " + this.site.title;
				} else {
					return this.site.title;
				}
			},
			getPreparedDescription: function() {
				return this.document.description || this.site.description;
			},
			getPreparedKeywords: function() {
				return this.site.keywords.concat(this.document.keywords || []).join(', ');
			}
		},
		collections: {
			pages: function(database) {
				return database.findAllLive({
					pageOrder: {
						$exists: true
					}
				}, [{
					pageOrder: 1,
					title: 1
				}]);
			},
			linkItems: function(database) {
				return database.findAllLive({
					courseData: {
						$exists: true
					}
				}, [{
					date: -1
				}]);
			},
			coursePages: function(database) {
				return database.findAllLive({
					layout: 'course'
				}, [{
					date: -1
				}]);
			},
			posts: function(database) {
				return database.findAllLive({
					layout: 'post'
				}, [{
					date: -1
				}]);
			}
		},
		plugins: {
			downloader: {
				downloads: [{
					name: 'Twitter Bootstrap',
					path: 'src/files/vendor/twitter-bootstrap',
					url: 'https://codeload.github.com/twbs/bootstrap/tar.gz/master',
					tarExtractClean: true
				}]
			}
		},
		events: {
			serverExtend: function(opts) {
				var server = opts.server;
				var docpad = this.docpad;
				var latestConfig = docpad.getConfig();
				var oldUrls = latestConfig.templateData.site.oldUrls || [];
				var newUrl = latestConfig.templateData.site.url;
				return server.use(function(req, res, next) {
					var _ref;
					if (_ref = req.headers.host, __indexOf.call(oldUrls, _ref) >= 0) {
						return res.redirect(newUrl + req.url, 301);
					} else {
						return next();
					}
				});
			},
		},

		// listen on port 8000
		port: 8000,

		// jme - to get watch to work on macosx
		watchOptions: {
			preferredMethods: ['watchFile', 'watch']
		}
	};

	module.exports = docpadConfig;

}).call(this);
