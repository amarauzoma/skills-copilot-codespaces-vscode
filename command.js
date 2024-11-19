// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

// Create Server
http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    if(pathname === '/'){
        pathname = '/index.html';
    }

    // Get file extension
    var extname = path.extname(pathname)
});
