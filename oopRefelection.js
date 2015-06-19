//User class
function User() {

}

User.prototype.login = function() {};
User.prototype.watch = function() {};

//GroupUser class
function GroupUser() {

}

GroupUser.prototype = Object.create(User.prototype, {
  constructor : {
    value : GroupUser
  }
});

GroupUser.prototype.share = function() {};
GroupUser.prototype.borrow = function() {};

//SuperUser class
function SuperUser() {

}

SuperUser.prototype = Object.create(GroupUser.prototype, {
  constructor : {
    value : SuperUser
  }
});

SuperUser.prototype.set = function() {};
SuperUser.prototype.cancel = function() {};

var user = new User();
var group = new GroupUser();
var superU = new SuperUser();

function reflector(obj) {
  console.log('Class: ' + obj.constructor.name);
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      console.log('Methods: ' + k);
    }
  }
}