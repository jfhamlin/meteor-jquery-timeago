jquery-timeago2
============

Meteor packaging of jquery-timeago 1.3.1

This package is MIT Licensed. Do whatever you like with it but any
responsibility for doing so is your own.

All rights to jquery-timeago are with the original author.

See: http://timeago.yarp.com/

Example
============
In a handlebars template

    Template.myTemplate.rendered = function() {
        $(this.find("abbr.timeago")).timeago();
    };
