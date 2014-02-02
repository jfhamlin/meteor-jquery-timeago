Package.describe({
  summary: 'A jQuery plugin that makes it easy to support automatically-updating fuzzy timestamps'
});

Package.on_use(function (api, where) {
  api.add_files('lib/jquery.timeago.js', 'client');
});
