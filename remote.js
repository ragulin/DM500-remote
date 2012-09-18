(function() {
  var getHost, saveHost;
  getHost = function() {
    return window.localStorage.getItem('host');
  };
  saveHost = function(host) {
    return window.localStorage.setItem('host', host);
  };
  $('#main').live('pagecreate', function() {
    $('#heading a').append(" " + getHost());
    if (!getHost()) {
      return jQuery.mobile.changePage($('#popup'));
    }
  });
  $('button').bind('click', function() {
    var url;
    url = getHost() + 'cgi-bin/rc?' + $(this).data('btn');
    console.log(url);
    return $.get(url);
  });
  $('#popup').live('pagecreate', function() {
    $('#host').val(getHost());
    return $('#save-host').bind('click', function() {
      return saveHost($('#host').val());
    });
  });
}).call(this);
