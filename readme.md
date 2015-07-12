An accordion menu created from the static png provided.

I have made the assumption that, if a triangle icon appears next to a menu 
item, that item contains a submenu but is not a link to a page itself, and 
if the icon doesn't appear then that item is a link to a page. This means 
that a click on that menu item will either go to a link, or it will open a 
submenu, and it doesn't need to do both. I've taken that approach here, but 
the real example may need the functionality to do both: you could have a 
click on the menu text taking you to the new page and a click on the triangle 
icon opening or closing the submenu, but this isn't ideal as the triangle icon 
is a very small target.

If this page is loaded without JavaScript, the entire menu displays and is 
accessible: only if JavaScript loads do the submenus close.

The icon images are 8 bit pngs which have been taken from the png provided: 
they would be better quality 24 bit pngs if they were created from the 
original vector artwork. You could also create them using canvas or svg instead.

I have used Segoe UI as the first font in the font stack, but as I'm using a 
Mac it falls back to Lucida Grande in my browser. An IE-specific stylesheet 
may be needed to take account of the different box model rendering in older 
versions of IE.
