Session.setDefault('ERROR_FLAG', false);
Session.setDefault('ERROR_MSG', "");

Template.publish.helpers({
	ERROR_MSG:function(){
		return Session.get('ERROR_MSG');
	},
	ERROR_FLAG:function(){
		return Session.get('ERROR_FLAG');
	}
});

Template.publish.events({
	'submit .row':function(event){
		event.preventDefault();
		//alert(Meteor.user().username);
		var text = event.target.company.value;
		var email = event.target.email.value;
		var jobname = event.target.jobname.value;
		var abstract = event.target.abstract.value;
		var description = event.target.description.value;
		var tags = event.target.tags.value;
		/*var call_back = function(error, result){
				if(result == false)
				{
					Session.set('ERROR_FLAG', true);
					Session.set('ERROR_MSG', error.message);
				}
				else
				{
					Session.set('ERROR_FLAG', false);
					Router.go('joblist');
				}
			}*/

		Meteor.call('publishJob',
			text,
			email,
			jobname,
			abstract,
			description,
			tags);

	}
});