(function($) {

  $.fn.simplemde = function() {

    return this.each(function() {
    	
    	var textarea = $(this);
    	var field = textarea.closest(".field")
    	var modalUrl = textarea.data("modal_url");
    	
    	var buttons = [
    	  "heading-2",
    	  "heading-3",
    	  "bold",
    	  "italic",
    	  "unordered-list",
    	  "ordered-list",
    	  "link",
    	  "email"
    	];
    	
    	if (textarea.data("buttons")) {
    	  buttons = textarea.data("buttons").split(" ");
    	}
    	
    	var toolbarItems = [
    		{
    			name: "heading-2",
    			action: SimpleMDE.toggleHeading2,
    			className: "fa fa-header fa-header-x fa-header-2",
    			title: "Heading 2",
    		},
    		{
    			name: "heading-3",
    			action: SimpleMDE.toggleHeading3,
    			className: "fa fa-header fa-header-x fa-header-3",
    			title: "Heading 3",
    		},
    		{
    			name: "bold",
    			action: SimpleMDE.toggleBold,
    			className: "fa fa-bold",
    			title: "Bold",
    		},
    		{
    			name: "italic",
    			action: SimpleMDE.toggleItalic,
    			className: "fa fa-italic",
    			title: "Italic",
    		},
    		{
    			name: "unordered-list",
    			action: SimpleMDE.toggleUnorderedList,
    			className: "fa fa-list-ul",
    			title: "Unordered List",
    		},
    		{
    			name: "ordered-list",
    			action: SimpleMDE.toggleOrderedList,
    			className: "fa fa-list-ol",
    			title: "Ordered List",
    		},
    		{
    			name: "link",
    			action: function linkFunction(){
    				var cm = simplemde.codemirror;
    				var selection = cm.getSelection();
    	      var text = '';
    	      var link = '';
    	      if (selection.match(/^https?:\/\//)) {
    	        link = selection;
    	      } else {
    	        text = selection;
    	      }
    	      var replacement = '(link: ' + link + ' text: ' + text + ')';
    	      cm.replaceSelection(replacement);
    	      var cursorPos = cm.getCursor();
    	      if (link) {
    	          cm.setCursor(cursorPos.line, cursorPos.ch - 1);
    	      } else {
    	          cm.setCursor(cursorPos.line, cursorPos.ch - (replacement.length - 7));
    	      }
    	      cm.focus();
    			},
    			className: "fa fa-link",
    			title: "Link",
    		},
    		{
    			name: "email",
    			action: function emailFunction(){
    				var cm = simplemde.codemirror;
    				var selection = cm.getSelection();
    		    var text = '';
    		    var email = '';
    		    if (selection.match("@")) {
    		      email = selection;
    		    } else {
    		      text = selection;
    		    }
    		    var replacement = '(email: ' + email + ' text: ' + text + ')';
    		    cm.replaceSelection(replacement);
    		    var cursorPos = cm.getCursor();
    		    if (email) {
    		        cm.setCursor(cursorPos.line, cursorPos.ch - 1);
    		    } else {
    		        cm.setCursor(cursorPos.line, cursorPos.ch - (replacement.length - 8));
    		    }
    		    cm.focus();
    			},
    			className: "fa fa-envelope",
    			title: "Email",
    		}
    	];

    	toolbarItems = toolbarItems.filter(function(item) {
    		for (var i2 = 0; i2 < buttons.length; i2++) {
    			if (buttons[i2] == item.name) {
    			  return true;
    			}
    		}
      });
        	    	
    	
      var simplemde = new SimpleMDE({
      	element: $(this)[0],
      	spellChecker: false,
      	status: false,
      	parsingConfig: {
    			allowAtxHeaderWithoutSpace: true
    		},
    		forceSync: true,
    		toolbar: toolbarItems,
      });
      
      // Check for tabs plugin
      if ($(".tab-placeholder").length || $(".tab-container").length) {
        field.addClass("tabs-helper");
      }
            
    });

  };

})(jQuery);