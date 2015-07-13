$( document ).ready(function() {

	var $menusWithSubmenus = $( "nav li" ).has( "ul" );
	var $anchorsInMenusWithSubmenus = $menusWithSubmenus.find("a");

	$( "nav li" ).addClass( "inactive" );

	$anchorsInMenusWithSubmenus.click(function() {
		var thisParent = $(this).parent();
		if (thisParent.hasClass( "inactive" ) && (thisParent.is($menusWithSubmenus) ) ) {
			thisParent.removeClass( "inactive" ).siblings().addClass( "inactive" );
			thisParent.siblings().find("li").addClass( "inactive" );
		} else if (!thisParent.hasClass( "inactive" ) && (thisParent.is($menusWithSubmenus) ) ) {
			thisParent.addClass( "inactive" ).find($menusWithSubmenus).addClass( "inactive" );
		};
	});


});