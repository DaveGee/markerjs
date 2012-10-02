(function() {
    
    // the minimum version of jQuery we want
    var v = "1.8.2";

    // check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			
            // show box to enter title and category
            $("<style></style")
                .text(".testdiv { z-index: 100000; position: fixed; left: 0; top: 0; width: 100%; height: 100px; background: red; }")
                .appendTo("body");
                
            //$("<div class='testdiv'><input type='text' value='" + document.location + "' /></div>").appendTo("body");
            $("<div></div>")
                .attr("class", "testdiv")
                .append($("<span />")
                    .text(document.location)
                )
                .appendTo("body");
            
		})();
	}
})();