var render = function() {
   //$('#at-pwd-form').find("label").before("<div class=\"span2\"></div>");
   $('#at-pwd-form').addClass("row");
   $('#at-pwd-form').prepend("<br/>");

   //$('.at-input.has-feedback').find("label").wrap("<div class=\"span2\"></div>");
   //$('.at-input.has-feedback').find("input").wrap("<div class=\"span6\"></div>");
   //$('#at-pwd-form').find("button").wrap("<div class=\"span6 offset2 bm30\"></div>");
   //$('.at-pwd-link').wrap("<div class=\"span6 offset2 \"></div>");
   //$('.at-signup-link').wrap("<div class=\"span6 offset2 \"></div>");

   //$('#at-pwd-form').find("input").addClass("required input-xlarge");
   $('#at-pwd-form').find("button").addClass("btn btn-inverse");

};

Template.sign.onRendered(render);
