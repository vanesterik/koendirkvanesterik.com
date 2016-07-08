'use strict';

var $ = global.$ = require( 'jquery' );
var jQuery = global.jQuery = require( 'jquery' );


function switchAssets( direction ){
	var assets = [ $( '.site-header' ), $( '.site-footer' )];
	switch( direction ){
		case 'off':
			$.each( assets, function( key, $element ){
				if( !$element.hasClass( 'off' )){ $element.addClass( 'off' ); }
			});
			break;

		default:
			$.each( assets, function( key, $element ){
				if( $element.hasClass( 'off' )){ $element.removeClass( 'off' ); }
			});
			break;
	}
}


function getPostImage( id ){
	return $( '.site-background' ).find( '[ data-target="' + id + '" ]' );
}


$( '.post-link' ).mouseover( function(){
	switchAssets( 'off' );
	if( !$( this ).siblings().hasClass( 'off' )){ $( this ).siblings().addClass( 'off' ); }
	var $postImage = getPostImage( $( this ).attr( 'id' ));
	if( !$postImage.hasClass( 'active' )){ $postImage.addClass( 'active' ); }
});


$( '.post-link' ).mouseout( function(){
	switchAssets();
	if( $( this ).siblings().hasClass( 'off' )){ $( this ).siblings().removeClass( 'off' ); }
	var $postImage = getPostImage( $( this ).attr( 'id' ));
	if( $postImage.hasClass( 'active' )){ $postImage.removeClass( 'active' ); }
});

