// "this" in template helpers and callbacks
Template.contextExample.rendered = function(){
	console.log('Rendered Context Example',this.data);
};

