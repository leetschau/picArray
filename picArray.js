if (Meteor.isClient) {
  Template.newbook.helpers({
  });

  Template.booklist.helpers({
    allBooks: function() {
      return Books.find();
    },
    getCover: function() {
      return this.cover;
    }
  });
}
