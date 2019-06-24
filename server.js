(function() {
    "use strict"

    var express =  require("express")
    var app = express()

    app.use(express.static('webdocs'))

    var server = app.listen(8080, function () {
        var host = server.address().address,
            port = server.address().port;

        console.log('Skiutc web server listening at http://%s:%s. Ctrl-C to stop.', host, port);
    })

})()

