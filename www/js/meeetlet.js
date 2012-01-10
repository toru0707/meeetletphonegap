function meeetlet(){
	this.initialize.apply(this, arguments);
}

meeetlet.prototype = {
	initialize : function(host, port, user, password){
		this.host = host;
		this.port = port;
		this.user = user;
		this.password = password;

	},

	getMe : function(callback){
		var data = { 'service' : 'get_me'};
		$.get("http://" + host + ":" + port.to_s() + "/me/get", data, callback);
	}, 

	getMyFriends : function(callback){
		var data = { 'service' : 'get_my_friends'};
		$.get("http://" + host + ":" + port.to_s() + "/me/get", data, callback);
	}, 

	getMyEvents : function(offset, limit, callback){
		var data = {'service' : 'get_my_events', 'offset' : offset, 'limit' : limit};
		$.get("http://" + host + ":" + port.to_s() + "/event/get", data, callback);
	}, 

	createPreEvent : function(title, dates, places, budgets, genres, participants, comment, callback){
		var data = {'service' : 'create_pre_event', 'title' : title, 'dates' : dates, 
			'places' : places, 'budgets' : budgets, 'genres' : genres, 'participants' : participants, 'comment' : comment, 'callback' : callback};
		$.get("http://" + host + ":" + port.to_s() + "/event/update", data, callback);
	
	}, 

	createEvent : function(title,date, place, budget, genre, participants, comment, callback){
		var data = {'service' : 'create_event', 'title' : title, 'dates' : dates, 
			'places' : places, 'budgets' : budgets, 'genres' : genres, 'participants' : participants, 'comment' : comment, 'callback' : callback};		
		$.get("http://" + host + ":" + port.to_s() + "/event/update", data, callback);
	
	}, 
   
	replyPreEvent : function(eventid, dates, places, budgets, genres, comment, callback){
		var data = {'service' : 'reply_pre_event', 'eventid' : eventid, 'dates' : dates, 
			'places' : places, 'budgets' : budgets, 'genres' : genres, 'comment' : comment, 'callback' : callback};		
		$.get("http://" + host + ":" + port.to_s() + "/event/update", data, callback);
	

	}, 
	replyEvent : function(eventid, attend, comment, callback){
		var data = {'service' : 'reply_event', 'eventid' : eventid, 'attend' : attend, 
			 'comment' : comment, 'callback' : callback};		
		$.get("http://" + host + ":" + port.to_s() + "/event/update", data, callback);
	

	}, 

	cancelEvent : function(eventid, callback){
		var data = {'service' : 'cancel_event', 'eventid' : eventid, 'callback' : callback};	
		$.get("http://" + host + ":" + port.to_s() + "/event/update", data, callback);
	}, 

	inviteFriend : function(eventid, users, callback){
		var data = {'service' : 'invite_friend', 'eventid' : eventid, 'users' : users,  'callback' : callback};	
		$.get("http://" + host + ":" + port.to_s() + "/event/update", data, callback);
	
	}

};
