
Session.setDefault('Editable',false);
Session.setDefault('ERROR_FLAG', false);
Session.setDefault('ERROR_MSG', "");
Session.setDefault('SUCCESS_FLAG', false);

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
    Session.set('ERROR_FLAG',false);
    Session.set('SUCCESS_FLAG',false);
        return this.stars_num;
	},
	Editable:function(){
		if(this.publisher_id == Meteor.userId())
		{
			Session.set('Editable',true);
		}
    else
    {
      Session.set('Editable',false);
    }
		return Session.get('Editable');
	},
  ERROR_MSG:function(){
    return Session.get('ERROR_MSG');
  },
  ERROR_FLAG:function(){
    return Session.get('ERROR_FLAG');
  },
  SUCCESS_FLAG:function(){
    return Session.get('SUCCESS_FLAG');
  },
  comm:function(){
    var str = "";
    json = Commit.find({},{createdAt:1,sort:{createdAt:-1},limit:1});
    for (var one in json)
    {
      for(var key in json[one])
         {
             str += json[one][key] + ",";
         }
    } 
    return json;
  }
});

Template.jobinfo.events({
	'click #like-it-form':function(event){
		//var temp = Job.findOne(this._id);
		if(this.stars.indexOf(Meteor.userId()) == -1)  //not in stars
		{
			Job.update({_id:this._id},{$set:{stars:this.stars+Meteor.userId()+","}});
			Job.update({_id:this._id},{$set:{stars_num:this.stars_num+1}});
		}

	},
  'submit .msg':function(event){
    event.preventDefault();
    //alert(Meteor.user().username);
    
    if(1)
    {
      var comment = event.target.comment.value;
      var company = this.company;
      var email = this.email;
      var job = this.job;
      var publisher = this.publisher_id;
      
      Meteor.call('commit',
        comment,
        company,
        email,
        job,
        publisher);

      if(Session.get('ERROR_FLAG') == false)
      {
        Meteor.call('sendEmail',
                'ccharlieli@live.com',
                'charlie@opencas.com',
                comment,
                comment);
      }
    }
    



  }
  /*
	'change .myFileInput': function(event, template) {
    var temp = this;
      FS.Utility.eachFile(event, function(file) {
        CVStore.insert(file, function (err, fileObj) {
          if (err){
             alert("err");
          } else {
            var userId = Meteor.userId();
            var reveicer = temp._id;
            var cvURL =  "/uploads/cvstore-" + fileObj._id;
            var createdAt = moment().format("YYYY-MM-DD HH:mm").toString();
            Commit.insert({from:userId,rec:reveicer,cv:cvURL,createdAt:createdAt});
            Session.set('SUCCESS_FLAG',true);

            //Router.go('joblist');
          }
        });
     });
    }*/
});