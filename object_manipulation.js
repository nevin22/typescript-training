var person = {
    name: "nevin",
    age: 5
};
var Role;
(function (Role) {
    Role[Role["TAE"] = 0] = "TAE";
    Role[Role["SHIT"] = 1] = "SHIT";
    Role[Role["POOP"] = 2] = "POOP";
})(Role || (Role = {}));
;
console.log("my name is " + person.name + " and my age is " + person.age);
