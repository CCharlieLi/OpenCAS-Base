

Template.Appbody.onRendered(function() {
   $('#at-nav-button').addClass("waves-effect waves-light btn");  
   
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
		$(".search-term").keydown(function(event){  
		  if(event.keyCode==13){  
		     //doSth  
		  }  
		});  
		//Router.go('/search');
	}
});