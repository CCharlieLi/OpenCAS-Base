Job = new Mongo.Collection('jobs');
//User = new Mongo.Collection('users');
//Publisher = new Mongo.Collection('publishers');


var Schemas = {};

Schemas.Job = new SimpleSchema({
    company: {
        type: String,
        label: "Company",
        max: 50
    },
    email: {
        label: "Contact Email",
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    job: {
        type: String,
        label: "Job Name",
        min: 2
    },
    description: {
        type: String,
        label: "Job Description",
    },
    tags: {
    	type: String,
    	label:"Tags",
    	optional:true,
    },
    stars: {
    	type: String,
    	label: "People of stars",
    	optional:true,
    },
    stars_num:{
        type: Number,
        label: "Number of stars",
        optional:true,
    },
    publisher:{
    	type: String,
    	label:"Publisher",
    },
    publisher_id:{
    	type: String,
    	label:"Publisher_Id",
    },
    createdAt:{
    	type: String,
 	    label: "Date",
    }
});


Job.attachSchema(Schemas.Job);