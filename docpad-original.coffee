# The DocPad Configuration File
# It is simply a CoffeeScript Object which is parsed by CSON
docpadConfig = {

	# =================================
	# Template Data 
	# These are variables that will be accessible via our templates
	# To access one of these within our templates, refer to the FAQ: https://github.com/bevry/docpad/wiki/FAQ

	templateData:

		# Specify some site properties
		site:
			# The production url of our website
			url: "http://jsinside.com"

			# Here are some old site urls that you would like to redirect from
			#oldUrls: [
			#	'www.website.com',
			#	'website.herokuapp.com'
			#]

			# The default title of our website
			title: "JS Inside"

			# The website description (for SEO)
			description: """
				JSInside is all about learning things with javascript in a fast and efficient way.
				You have high quality bite sized videos. They are straight and to the point.
				No bullshit. Just knowledge!
				"""

			# The website keywords (for SEO) separated by commas
			keywords: """
				place, your, website, keywoards, here, keep, them, related, to, the, content, of, your, website
				"""

			# The website author's name
			author: "Jerome Etienne"

			# The website author's email
			email: "jerome.etienne@gmail.com"
			
			

			# Styles
			styles: [
				"/styles/twitter-bootstrap.css"
				"/styles/style.css"
				"/vendor/font-awesome-4.0.3/css/font-awesome.css"
				"/styles/post.css"
			]

			# Scripts
			scripts: [
				"//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"
				"//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"
				"/vendor/twitter-bootstrap/dist/js/bootstrap.min.js"
				"/scripts/script.js"
			]



		# -----------------------------
		# Helper Functions

		# Get the prepared site/document title
		# Often we would like to specify particular formatting to our page's title
		# we can apply that formatting here
		getPreparedTitle: ->
			# if we have a document title, then we should use that and suffix the site's title onto it
			if @document.title
				"#{@document.title} | #{@site.title}"
			# if our document does not have it's own title, then we should just use the site's title
			else
				@site.title

		# Get the prepared site/document description
		getPreparedDescription: ->
			# if we have a document description, then we should use that, otherwise use the site's description
			@document.description or @site.description

		# Get the prepared site/document keywords
		getPreparedKeywords: ->
			# Merge the document keywords with the site keywords
			@site.keywords.concat(@document.keywords or []).join(', ')


	# =================================
	# Collections
	# These are special collections that our website makes available to us

	collections:
		pages: (database) ->
			database.findAllLive({pageOrder: $exists: true}, [pageOrder:1,title:1])

		linkItems: (database) ->
			database.findAllLive({courseData: $exists: true}, [date:-1])

		coursePages: (database) ->
			database.findAllLive({layout:'course'}, [date:-1])

		posts: (database) ->
			database.findAllLive({layout:'post'}, [date:-1])


	# =================================
	# Plugins

	plugins:
		downloader:
			downloads: [
				{
					name: 'Twitter Bootstrap'
					path: 'src/files/vendor/twitter-bootstrap'
					url: 'https://codeload.github.com/twbs/bootstrap/tar.gz/master'
					tarExtractClean: true
				}
			]


	# =================================
	# DocPad Events

	# Here we can define handlers for events that DocPad fires
	# You can find a full listing of events on the DocPad Wiki
	events:

		# Server Extend
		# Used to add our own custom routes to the server before the docpad routes are added
		serverExtend: (opts) ->
			# Extract the server from the options
			{server} = opts
			docpad = @docpad

			# As we are now running in an event,
			# ensure we are using the latest copy of the docpad configuraiton
			# and fetch our urls from it
			latestConfig = docpad.getConfig()
			oldUrls = latestConfig.templateData.site.oldUrls or []
			newUrl = latestConfig.templateData.site.url

			# Redirect any requests accessing one of our sites oldUrls to the new site url
			server.use (req,res,next) ->
				if req.headers.host in oldUrls
					res.redirect(newUrl+req.url, 301)
				else
					next()


	# =================================
	# Server Configuration

	# Port
	# Use to change the port that DocPad listens to
	# By default we will detect the appropriate port number for our environment
	# if no environment port number is detected we will use 9778 as the port number
	# Checked environment variables are:
	# - PORT - Heroku, Nodejitsu, Custom
	# - VCAP_APP_PORT - AppFog
	# - VMC_APP_PORT - CloudFoundry
	port: 8000  # default
	
	# to fix watch on macox
	# - see http://docpad.org/docs/troubleshoot#watching-doesn-t-work-works-only-some-of-the-time-i-get-eisdir-errors
	watchOptions: preferredMethods: ['watchFile','watch']
}


# Export our DocPad Configuration
module.exports = docpadConfig
