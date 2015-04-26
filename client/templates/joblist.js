Template.joblist.helpers({
	lists: function(){
		return Job.find({},{sort:{createdAt:-1}});
	},
	STARS:function(){
		return this.stars_num;
	}
});