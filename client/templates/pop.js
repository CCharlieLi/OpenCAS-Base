Template.pop.helpers({
	pops:function(){
		return Job.find({},{sort:{stars_num:-1},limit:10});
	}
});