
		var app = {
			newJob: function(e, type, input){
				var jobName = $(input).val();
				var event = window.event || e;
				if(event.keyCode === 13 && jobName.trim() !== ''){
					//Update DOM
					this.addJobToList(type, jobName);
					//Reset input
					$(input).val('');
				}
			},
			addJobToList: function(type, jobName){
				var item = '<li class="list-group-item list-group-item-info">'+jobName+'<span class="glyphicon glyphicon-trash" onclick="app.deleteJob(this)" data-toggle="modal" data-target="#modalConfirm"></span>' + '</li>';
				$('#'+type).append(item);
			}, 
			deleteJob: function(span){
				var modal = $('#modalConfirm');
				var item = $(span).parent();
				// modal.openModal();

				$('#btn-delete').on('click', function(){
					item.remove();
					$('#modalConfirm').modal('hide');
				});
			}	
		};

	    $( ".sorted-list" ).sortable({
	      connectWith: ".sorted-list",
	      placeholder: "ui-state-highlight",
	      start: function(event, ui){
	      	//Add style class
	      	$('ui.items[0]').addClass('dragging');
	      },
	      stop: function(event, ui){
	      	//Remove style class
	      	$('ui.item[0]').removeClass('dragging');
	      }
	    });
	  