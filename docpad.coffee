# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    collections:
        pages: ->
            @getCollection("html").findAllLive({isPage:true})

        posts: ->
            @getCollection("documents").findAllLive({relativeOutDirPath:'posts'})
	# =================================
    # Template Data
    # These are variables that will be accessible via our templates
    # To access one of these within our templates, refer to the FAQ: https://github.com/bevry/docpad/wiki/FAQ

    templateData:

        # Specify some site properties
        site:
            # The production url of our website
            url: "http://idjs.github.io/belajar-jasmine"

            # Here are some old site urls that you would like to redirect from
            oldUrls: []

            # The default title of our website
            title: "Belajar Jasmine"

            # The website description (for SEO)
            description: """
                Agar tidur kita bisa lebih nyenyak
                """

            # The website keywords (for SEO) separated by commas
            keywords: """
                javascript, jasmine, unit test
                """

            # The website author's name
            author: "keripix"

            # The website author's email
            email: "keripix@gmail.com"

            # The website's styles
            styles: [
                '/styles/monokai.css',
                '/styles/style.css'
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

        getUrl: (document) ->
            return @site.url + (document.url or document.get?('url'))

        getUrls: (_, site) ->
            site = site || @site.url

            if (typeof _ == "string")
                if (_[0] == "/" && _[1] != "/")
                    return site+_
                return _

            if (typeof _ == "object")
                if (_.url)
                    return @getUrls(_.url,site)
                if (_.map)
                    _getUrls = arguments.callee
                    return _.map((d) ->
                        return _getUrls(d,site)
                    )

            return _

    environments:
        development:
            templateData:
                site:
                    url: 'http://localhost:9778'
}

# Export the DocPad Configuration
module.exports = docpadConfig