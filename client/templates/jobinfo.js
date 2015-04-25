
Session.setDefault('Editable',false);


Template.jobinfo.helpers({
	STAR:function(){
		/*var temp=Job.findOne(this._id).stars;
		var count = 0;
        var offset = 0;
        do
        {
            offset = temp.indexOf(',', offset);
            if(offset != -1)
            {
                count++;
                offset += 1;
            }
        }while(offset != -1);
		*/
        return Job.findOne(this._id).stars_num;
	},
	Editable:function(){
		if(Job.findOne(this._id).publisher_id == Meteor.userId())
		{
			Session.set('Editable',true);
		}
		return Session.get('Editable');
	}

});

Template.jobinfo.events({
	'click #like-it-form':function(event){
		var temp = Job.findOne(this._id);
		if(temp.stars.indexOf(Meteor.userId()) == -1)  //not in stars
		{
			Job.update({_id:this._id},{$set:{stars:temp.stars+Meteor.userId()+","}});
			Job.update({_id:this._id},{$set:{stars_num:temp.stars_num+1}});
		}

	}
});