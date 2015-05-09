Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  },

  publishJob:function(text,email,jobname,abstract,description,tags){
    check([text, email, jobname, abstract,description,tags], [String]);

    if (Meteor.userId()) {
      Job.insert({
        company: text,
        email: email,
        job: jobname,
        abstract: abstract,
        description: description,
        stars: ",",
        stars_num: 0,
        tags: tags,
        publisher: Meteor.user().username,
        publisher_id: Meteor.userId(),
        createdAt: moment().format("YYYY-MM-DD HH:mm").toString(),
        }, function(error, result){
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
        })
    }
  },

  editJob:function(id,text,email,jobname,abstract,description,tags){
    check([text, email, jobname, abstract,description,tags], [String]);

    if (Meteor.userId()) {
      Job.update({_id:id},{$set:{
        company: text,
        email: email,
        job: jobname,
        abstract: abstract,
        description: description,
        tags: tags,
        //publisher: Meteor.user().username,
        //publisher_id: Meteor.userId(),
        //createdAt: moment().format("YYYY-MM-DD HH:mm").toString(),
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
  },

  commit:function(comment,company,email,job,publisher){

    if(Meteor.userId())
    {
      Commit.insert({
        from: Meteor.userId(),
        commit: comment,
        company: company,
        email: email,
        job: job,
        publisher: publisher,
        createdAt: moment().format("YYYY-MM-DD HH:mm").toString(),

        }, function(error, result){
          if(result == false)
          {
            Session.set('ERROR_FLAG', true);
            Session.set('ERROR_MSG', error.message);
          }
          else
          {
            Session.set('ERROR_FLAG', false);
            Session.set('SUCCESS_FLAG', true);
            //Router.go('joblist');
            
          }
        });
    }

  },

  likeit:function(id,_stars,_stars_num){
    if(Meteor.userId())
    {
      Job.update({_id:id},{$set:{stars:_stars+Meteor.userId()+","}});
      Job.update({_id:id},{$set:{stars_num:_stars_num+1}});
    }
  }
});
