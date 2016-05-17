	$ ( document ).ready( function () {
		console.log("dom is k ready")
		$ ( '.thumb' ).on( 'click', function() {
			var clickedbook = $ (this) .attr ( 'title' )
			console.log("You clicked " + clickedbook)
			var ajaxdata = {
				title: clickedbook
			}
			$.get ('/api', ajaxdata, function(data) {
				console.log( data )
				$ ( '#title' ).text (data.title)
				$ ( '#author' ).text (data.author)
				$ ( '#description').text (data.description)
				$ ( '#cover' ).attr ({'src': "/imgs/" + data.cover})
			})
		})
	})