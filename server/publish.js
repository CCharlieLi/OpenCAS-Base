Meteor.publish('jobs', function() {
    return Job.find({});
});

Meteor.publish('tags', function() {
    return Tag.find({});
});

Meteor.publish('commits', function() {
  if (this.userId) {
    return Commit.find({from: this.userId});
  } else {
    this.ready();
  }
});
