Template.home.created = function(){
	console.log('Created the home template');
};

Template.home.rendered = function(){
	console.log('Rendered the home template');
};




//Template.home.destroyed = function(){
//	console.log('Destroyed the home template');
//};



	// Template helpers
Template.home.helpers({
    // #Storing Data -> Querying a collection
    postsList: function(){
    	return Posts.find({}, {sort: {timeCreated: -1}});
    },

    // #Sessions -> Using sessions in template helpers
    sessionExample: function(){
        return Session.get('mySessionExample');
    }
});

Template.home.events({
'click button.lazyload': function(e, template){
var currentLimit = Session.get('lazyloadLimit');
Session.set('lazyloadLimit', currentLimit + 2);
}
});