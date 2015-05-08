

Template.Appbody.onRendered(function() {
   $('#at-nav-button').addClass("waves-effect waves-light btn"); 

   this.find('.page-content')._uihooks = {
    insertElement: function(node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn(function () {
          listFadeInHold.release();
        });
    },
    removeElement: function(node) {
      $(node).fadeOut(function() {
        $(this).remove();
      });
    }
  };
});



Template.Appbody.helpers({
	STARS:function(){
		return Job.findOne(this._id).stars_num;
	},
	NOT_Search_FLAG:function(){
		return Session.get("NOT_Search_FLAG");
	}
});

Template.Appbody.events({
	'focus #search-form':function(event){
		Router.go('/search');
	},
	'click a.btn.btn-mini':function(event){
		var text = event.target.text;
		$(".search-term").focus();
		$(".search-term").val(text);
		
		//Router.go('/search');
	}
});