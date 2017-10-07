  $(document).ready(function(){
	    var counter = 1;
	    var wrapper = $("#accordion");
	
		 $("#addButton").on("click", function(e){ 
	    	e.preventDefault();
	    	var catgName = prompt("Please Add your category name");
			if(catgName == ''){
				catgName = 'Catg#'+counter;
			}
			if(catgName != null){
				var ariaExpanded = false;
				var expandedClass = '';
				var collapsedClass = 'collapsed';
				if(counter==1){
					  ariaExpanded = true;
					  expandedClass = 'in';
					  collapsedClass = '';
				}
				  $(wrapper).append('<div class="col-sm-12" style="margin-bottom: 0;"><div class="panel panel-default" id="panel'+ counter +'">' + 
				     '<div class="panel-heading" role="tab" id="heading'+ counter +'"><h4 class="panel-title">' +
					 '<a class="'+collapsedClass+'" id="panel-lebel'+ counter +'" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+ counter +'" ' +
					 'aria-expanded="'+ariaExpanded+'" aria-controls="collapse'+ counter +'"> '+catgName+' </a><div class="actions_div" style="position: relative; top: -26px;">' +
					 '<a href="#" accesskey="'+ counter +'" class="remove_ctg_panel exit-btn pull-right"><span class="glyphicon glyphicon-remove"></span></a>' +
					 '<a href="#" accesskey="'+ counter +'" class="edit_ctg_label pull-right"><span class="glyphicon glyphicon-edit "></span> Edit</a>' +
					 '<a href="#" accesskey="'+ counter +'" class="pull-right" id="addButton2"> <span class="glyphicon glyphicon-plus"></span> Add child category</a></div></h4></div>' +
					 '<div id="collapse'+ counter +'" class="panel-collapse collapse '+expandedClass+'"role="tabpanel" aria-labelledby="heading'+ counter +'">'+
					 '<div class="panel-body"><div id="TextBoxDiv'+ counter +'"></div><a class="btn btn-xs btn-primary" accesskey="'+ counter +'" id="addButton3" ><span class="glyphicon glyphicon-plus"></span> Add New Attributes</a>' +
					 '<a class="btn btn-xs btn-success" accesskey="'+ counter +'" id="ajax_submit_button" >Done</a></div></div></div></div>');
				counter++;
			}
			
	     });
		 
		var x = 1; 
	     $(wrapper).on("click","#addButton2", function(e){
	         e.preventDefault();
			 var parentId = $(this).attr('accesskey');
			 var parentPanel = '#panel'+ parentId;
			 var catgName = prompt("Please Add your category name");
			 if(catgName == ''){
				catgName = ' P#'+parentId+' Catg#'+counter;
			 }
			if(catgName != null){
				var ariaExpanded = false;
				var expandedClass = '';
				var collapsedClass = 'collapsed';
			
				  $(wrapper).find(parentPanel).append('<div class="col-sm-12" style="margin-bottom: 0;"><div class="panel panel-default" id="panel'+counter+'">' + 
				     '<div class="panel-heading" role="tab" id="heading'+counter+'"><h4 class="panel-title">' +
					 '<a class="'+collapsedClass+'" id="panel-lebel'+ counter +'" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+ counter+'" ' +
					 'aria-expanded="'+ariaExpanded+'" aria-controls="collapse'+ counter+'"> '+catgName+' </a><div class="actions_div" style="position: relative; top: -26px;">' +
					 '<a href="#" accesskey="'+counter +'" class="remove_ctg_panel exit-btn pull-right"><span class="glyphicon glyphicon-remove"></span></a>' +
					 '<a href="#" accesskey="'+ counter +'" class="edit_ctg_label pull-right"><span class="glyphicon glyphicon-edit"></span> Edit</a>' +
					 '<a href="#" accesskey="'+ counter +'" class="pull-right" id="addButton2"> <span class="glyphicon glyphicon-plus"></span> Add child category</a></h4></div>' +
					 '<div id="collapse'+ counter+'" class="panel-collapse collapse '+expandedClass+'"role="tabpanel" aria-labelledby="heading'+counter+'">'+
					 '<div class="panel-body"><div id="TextBoxDiv'+ counter +'"></div><a class="btn btn-xs btn-primary" accesskey="'+ counter +'" id="addButton3" ><span class="glyphicon glyphicon-plus"></span> Add New Attributes</a>' +
					 '<a class="btn btn-xs btn-success" accesskey="'+ counter +'" id="ajax_submit_button" >Done</a></div></div></div></div>');
				
				x++;
				counter++;
			}
			
	     });
		 
	     $(wrapper).on("click",".remove_ctg_panel", function(e){ 
				 e.preventDefault(); 
				 var accesskey = $(this).attr('accesskey');
		        $('#panel'+accesskey).remove();
				counter--;
				x--;
	     });
	     
		 
		 
		 
	     var y = 1; 
	     $(wrapper).on("click","#addButton3", function(e){
	         e.preventDefault();
			 var accesskey = $(this).attr('accesskey');
			 y++; 
			 $('#panel'+accesskey).find('#TextBoxDiv'+accesskey).append('<div class="col-md-12 form-group"><input type="text" name="ctgtext[]" class="form-control" style="width: 40%;float: left;"/><a href="#" class="remove_field exit-btn"><span class="glyphicon glyphicon-remove"></a></div>');
	        
	     });
	     
	     $(wrapper).on("click",".remove_field", function(e){
	         e.preventDefault(); 
	     	$(this).parent('div').remove();y--;
	     })
	  	
	     $(wrapper).on("click",".edit_ctg_label", function(e){ 
	    	 var panelId = $(this).attr('accesskey');
			 var catgName = prompt("Please Change your category name");
			 if(catgName == ''){
				   return false;
			 }
			 if(catgName != null){
				 $('#panel'+panelId).find("#panel-lebel"+panelId).html('').html(catgName);
			 }
				
			
     });
  });
