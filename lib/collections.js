//Collection

Job = new Mongo.Collection('jobs');
Tag = new Mongo.Collection('tags');
Commit = new Mongo.Collection('commits');


//EasySearch

Job.initEasySearch(['company', 'job','abstract','description','tags'], {
    'limit' : 10,
    'use' : 'mongo-db'
});
Tag.initEasySearch(['tags'],{
    'limit' : 5,
    'use' : 'mongo-db'
});

//Schema

var Schemas = {};
Schemas.Job = new SimpleSchema({
    company: {
        type: String,
        label: "Company",
        max: 50,
    },
    email: {
        label: "Contact Email",
        type: String,
        regEx: SimpleSchema.RegEx.Email,
    },
    job: {
        type: String,
        label: "Job Name",
        min: 2,
    },
    abstract: {
        type: String,
        label: "Abstract",
        max: 300,
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

Schemas.Commit = new SimpleSchema({
    from:{
        type: String,
        label: "ID",
    },
    commit:{
        type:String,
        label:"Comment",
    },
    company: {
        type: String,
        label: "Company",
        max: 50,
    },
    email: {
        label: "Contact Email",
        type: String,
        regEx: SimpleSchema.RegEx.Email,
    },
    job: {
        type: String,
        label: "Job Name",
        min: 2,
    },
    publisher:{
        type: String,
        label:"Publisher",
    },
    createdAt:{
        type: String,
        label: "Date",
    }
});


Commit.attachSchema(Schemas.Commit);
/*
var CVStore = new FS.Store.GridFS("cvstore");
CVs = new FS.Collection("cvstore", {
 stores: [CVStore]
});

CVStore = new FS.Collection("cvstore", {
  stores: [new FS.Store.FileSystem("cvstore", {path: "./../../../../../public/uploads"})]
});*/
/*
var CVs = new FS.Store.GridFS('cvs');
CVstore = new FS.Collection('cvstore', {
 stores: [CVs]
});

CVStore.deny({
 insert: function(){
 return false;
 },
 update: function(){
 return false;
 },
 remove: function(){
 return false;
 },
 download: function(){
 return false;
 }
 });

CVStore.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});*/
