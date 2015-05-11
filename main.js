if (Meteor.isClient) {
    /* Chapter 6 only 
    Tracker.autorun(function(c) {
        var example = Session.get('mySessionExample');
        if (!c.firstRun) {
            if (Session.equals('mySessionExample', 'stop')) {
                alert('We stopped our reactive Function');
                c.stop();
            }
            else {
                alert(example);
            }
        }
       
    });
    */
    Meteor.subscribe("userRoles");
    timer = new ReactiveTimer();
    timer.start(10);
    
    /* Before page 176
    ReactiveTimer = new Tracker.Dependency;
    
    Meteor.setInterval(function() {
        // re-run dependencies every 10s
        ReactiveTimer.changed();
    }, 10000);
    
    Tracker.autorun(function() {
        ReactiveTimer.depend();
        console.log('Function re-run');
    });
    */
}

Accounts.config({
    forbidClientAccountCreation: true
});