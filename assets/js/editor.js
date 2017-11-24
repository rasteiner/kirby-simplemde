(function($) {

  $.fn.simplemde = function() {

    return this.each(function() {
    	
    	var simplemde = $(this);
    	var field = simplemde.closest(".field")
    	var modalUrl = simplemde.data("modal_url");
    	
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
    	
    	if (simplemde.data("buttons")) {
    	  buttons = simplemde.data("buttons").split(" ");
    	}
    	
    	var toolbarItems = [
    		{
    			name: "heading-1",
    			action: SimpleMDE.toggleHeading1,
    			className: "fa fa-header fa-header-x fa-header-1",
    			title: "Heading 1",
    		},
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
    			name: "quote",
    			action: SimpleMDE.toggleBlockquote,
    			className: "fa fa-quote-left",
    			title: "Quote",
    		},
    		{
    			name: "horizontal-rule",
    			action: SimpleMDE.drawHorizontalRule,
    			className: "fa fa-minus",
    			title: "Horizontal Line",
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
    		    
    		    if (selection) {
    		      if (selection.match("@")) {
    		        email = selection;
    		      } else {
    		        text = selection;
    		      }
    		      var replacement = '(email: ' + email + ' text: ' + text + ')';
    		    }
    		    else {
    		      var replacement = '(email: )';
    		    }
    		    
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
      
      
      
      // Drag and Drop
      field.find('.CodeMirror').droppable({
        hoverClass: 'CodeMirror-over',
        accept: $('.sidebar .draggable'),
        drop: function(e, ui) {
          editor = simplemde.codemirror;
          var selection = editor.getSelection();
          if(selection.length>0){
              editor.replaceSelection(ui.draggable.data('text'));
          }
          else{
              var doc = editor.getDoc();
              var cursor = doc.getCursor();
              var pos = {
                line: cursor.line,
                ch: cursor.ch
              }
              doc.replaceRange(ui.draggable.data('text'), pos);
          }
        }
      });
            
      // Keep changes
      simplemde.codemirror.on("change", function() {
      	field.closest('form').trigger('keep');
      });
      
      // Check for tabs plugin
      if ($(".tab-placeholder").length || $(".tab-container").length) {
        field.addClass("tabs-helper");
      }           
            
    });

  };

})(jQuery);