Template.joblist.helpers({
	lists: function(){
		return Job.find({},{sort:{createdAt:-1}});
	},
	STARS:function(){
		return Job.findOne(this._id).stars_num;
	}
});