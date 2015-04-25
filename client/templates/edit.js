Session.setDefault('ERROR_FLAG', false);
Session.setDefault('ERROR_MSG', "");

Template.edit.helpers({
	ERROR_MSG:function(){
		/////////////////
		if(Job.findOne(this._id).publisher_id != Meteor.userId())
		{
			Router.go('joblist');
		}
		////////////////
		return Session.get('ERROR_MSG');
	},
	ERROR_FLAG:function(){
		return Session.get('ERROR_FLAG');
	}
});

Template.edit.events({
	'submit .row':function(event){
		//alert(moment());
		event.preventDefault();
		//alert(Meteor.user().username);
		if(Job.findOne(this._id).publisher_id == Meteor.userId())
		{
			var text = event.target.company.value;
			var email = event.target.email.value;
			var jobname = event.target.jobname.value;
			var abstract = event.target.abstract.value;
			var description = event.target.description.value;
			var tags = event.target.tags.value;
			Job.update({_id:this._id},{$set:{
				company: text,
				email: email,
				job: jobname,
				abstract: abstract,
				description: description,
				tags: tags,
				publisher: Meteor.user().username,
				publisher_id: Meteor.userId(),
				createdAt: moment().format("YYYY-MM-DD HH:mm").toString(),
			}}, function(error, result){
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
				});
	    }
	    Session.set('ERROR_MSG', "You are not allowed to edit!");
	}
});