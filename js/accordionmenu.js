$( document ).ready(function() {

	var $menusWithSubmenus = $( "nav li" ).has( "ul" );
	var $anchorsInMenusWithSubmenus = $menusWithSubmenus.find("a");

	$( "nav li" ).addClass( "inactive" ).removeClass( "initial");

	$anchorsInMenusWithSubmenus.click(function() {
		var thisParent = $(this).parent();
		if (thisParent.hasClass( "inactive" ) && (thisParent.is($menusWithSubmenus) ) ) {
			thisParent.addClass( "active" ).removeClass( "inactive" ).siblings().addClass("inactive").removeClass("active");
			thisParent.siblings().find("li").addClass("inactive").removeClass( "active" );
		} else if (!thisParent.hasClass( "inactive" ) && (thisParent.is($menusWithSubmenus) ) ) {
			thisParent.addClass("inactive").removeClass( "active" ).find($menusWithSubmenus).addClass( "inactive" ).removeClass( "active" );
		}
	});
});
