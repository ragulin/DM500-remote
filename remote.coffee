getHost = ->  window.localStorage.getItem('host')

saveHost = (host) -> window.localStorage.setItem('host', host)

$('#main').live('pagecreate', ->
  $('#heading a').append(" " + getHost())
  jQuery.mobile.changePage($('#popup')) unless getHost()
)

$('button').bind('click', -> 
  url = getHost() + 'cgi-bin/rc?' + $(@).data('btn')
  console.log(url)
  $.get(url)
)

$('#popup').live('pagecreate', ->
  $('#host').val(getHost())
  $('#save-host').bind('click', -> 
    saveHost($('#host').val()))
)

