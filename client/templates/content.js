Template.content.helpers({
	pops:function(){
		return Job.find({},{sort:{stars_num:-1}});
	},
	latests:function(){
		return Job.find({},{sort:{createdAt:-1}});
	}
});