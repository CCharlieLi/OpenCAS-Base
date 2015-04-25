Router.configure({
  layoutTemplate: 'Appbody'
});




Router.plugin('ensureSignedIn', {
    only: ['jobinfo','publish']
});



Router.map(function() {
  this.route('/', function () {
    this.render('content');
    this.render('links', {to: 'links'});
    this.render('tags', {to: 'tags'});
  });

  this.route('/joblist',function(){
    this.render('joblist');
  });

  this.route('/joblist/:_id',function(){
    name: "joblist",
    this.render('jobinfo', {
      data: function(){
        return Job.findOne({_id:this.params._id});
      }
    });
  });

  this.route('/faqs',function(){
    this.render('faqs');
  });

  //this.route('/contact',function(){
  //  this.render('contact');
  //});

  //this.route('/sign',function(){
  //  this.render('sign');
  //});

  this.route('/publish',function(){
    this.render('publish');
  });

  this.route('/edit/:_id',function(){
    this.render('edit', {
      data: function(){
        return Job.findOne({_id:this.params._id});
      }
    });
  });

  this.route('/item', function () {
    var req = this.request;
    var res = this.response;
    res.end('hello from the server\n');
  }, {where: 'server'});


});


