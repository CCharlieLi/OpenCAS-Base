Session.setDefault('ERROR_FLAG', false);
Session.setDefault('ERROR_MSG', "");


Template.edit.helpers({
	ERROR_MSG:function(){
		return Session.get('ERROR_MSG');
	},
	ERROR_FLAG:function(){
		if(this.publisher_id != Meteor.userId())
		{
			Router.go('joblist');
		}
		return Session.get('ERROR_FLAG');
	}
});

Template.edit.events({
	'submit .row':function(event){
		//alert(moment());
		event.preventDefault();

		//alert(this._id);
		//alert(Meteor.user().username);
		if(this.publisher_id == Meteor.userId())
		{
			var text = event.target.company.value;
			var email = event.target.email.value;
			var jobname = event.target.jobname.value;
			var abstract = event.target.abstract.value;
			var description = event.target.description.value;
			var tags = event.target.tags.value;
			

			Meteor.call('editJob',
			this._id,
			text,
			email,
			jobname,
			abstract,
			description,
			tags);

	    }
	}
});