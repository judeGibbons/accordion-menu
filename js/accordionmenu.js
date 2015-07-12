$( document ).ready(function() {

	var $menusWithSubmenus = $( "nav li" ).has( "ul" );
	var $anchorsInMenusWithSubmenus = $menusWithSubmenus.find("a");


	$( "nav li" ).addClass( "inactive" );
/* THIS WORKS
	$anchorsInMenusWithSubmenus.click(function() {
		var thisParent = $(this).parent();
		if (thisParent.hasClass( "inactive" )) {
			thisParent.removeClass( "inactive" ).siblings().addClass( "inactive" );
			thisParent.siblings().find("li").addClass( "inactive" );
		} else {
			thisParent.addClass( "inactive" ).find($menusWithSubmenus).addClass( "inactive" );
		}
	});
*/
	$anchorsInMenusWithSubmenus.click(function() {
		var thisParent = $(this).parent();
		if (thisParent.hasClass( "inactive" ) && (thisParent.is($menusWithSubmenus) ) ) {
			thisParent.removeClass( "inactive" ).siblings().addClass( "inactive" );
			thisParent.siblings().find("li").addClass( "inactive" );
		} else if (!thisParent.hasClass( "inactive" ) && (thisParent.is($menusWithSubmenus) ) ) {
			thisParent.addClass( "inactive" ).find($menusWithSubmenus).addClass( "inactive" );
		} else { // does this find ordinary links? - console log doesn't work
			console.log("linky");
			$(this).addClass("red");
			thisParent.addClass("red");
		}
	});


});
