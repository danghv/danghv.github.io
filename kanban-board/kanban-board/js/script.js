		var COLUMN_TYPE = ['todo', 'doing', 'done'];
		var DB = {
			getData: function(){
				if(typeof(Storage) !== 'undefined'){
				var data;
				try{
					data = JSON.parse(localStorage.getItem('list')) || {};

				}catch(error){
					data = {};
				}

				return data;
			} else{
				alert("Sorry! No Web Storage support ..");
				return {};
			}
		},
			setData: function (data){
				localStorage.setItem('list', JSON.stringify(data));
			}
		}

		var list = DB.getData();
		var app = {
			newJob: function(e, type, input){
				var jobName = $(input).val();
				var event = window.event || e;
				if(event.keyCode === 13 && jobName.trim() !== ''){
					if(!list[type]){
						list[type] = [];
					}
					list[type].push(jobName);
					DB.setData(list);
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
				var btn = $('#btn-delete');
				// modal.openModal();
				btn.off('click');

				btn.on('click', function(){
					var columnType = item.parent().attr('id');
					var itemPosition = $('#' + columnType + ' li').index(item);
					console.log(itemPosition);
					list[columnType].splice(itemPosition, 1);
					DB.setData(list);
					item.remove();
					$('#modalConfirm').modal('hide');
				});
			}	
		};
		COLUMN_TYPE.forEach(function(type){
			var columnType = list[type] || [];
			columnType.forEach(function(jobName){
				app.addJobToList(type, jobName);
			});
		});

		// var doing = list['doing'] || [];
		// doing.forEach(function(job){
		// 	app.addJobToList('doing', job);
		// });
	    $( ".sorted-list" ).sortable({
	      connectWith: ".sorted-list",
	      placeholder: "ui-state-highlight",
	      start: function(event, ui){
	      	//Add style class
	      	$('ui.items[0]').addClass('dragging');
	    	var oldColumnType = ui.item[0].parentElement.getAttribute('id');
	    	ui.item.oldColumnType = oldColumnType;
	      	console.log(oldColumnType);
	      	// console.log(oldColumnType[0].parentElement.getAttribute('id'));
	      	var oldItemPosition = ui.item.index();
	      	ui.item.oldItemPosition = oldItemPosition;
	      	console.log(oldItemPosition);
	      },
	      stop: function(event, ui){
	      	//Remove style class
	      	$('ui.item[0]').removeClass('dragging');
	      	var item = ui.item;
	      	var oldColumnType = item.oldColumnType;
	      	var oldItemPosition = item.oldItemPosition;
	      	var newColumnType = item[0].parentElement.getAttribute('id');
	      	var newItemPosition = item.index();

	      	// Remove item from old position
	      	list[oldColumnType].splice(oldItemPosition, 1);
	      	list[newColumnType].splice(newItemPosition, 0, item[0].innerText);

	      	//Store data to localstorage
	      	DB.setData(list);
	      }
	    });
	  