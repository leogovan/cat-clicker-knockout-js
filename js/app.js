var initialCats = [{
	clickCount: 0,
	name: "Dave",
	imgSrc: "img/kitty-1.jpg",
	nickNames: [{name: "Cribbinbob"},{name: "Thatcher"},{name: "Threadbats"},{name: "Redders"}]
},
{
	clickCount: 0,
	name: "Steve",
	imgSrc: "img/kitty-2.jpg",
	nickNames: [{name: "Nutster"}]
},
{
	clickCount: 0,
	name: "Tim",
	imgSrc: "img/kitty-3.jpg",
	nickNames: [{name: "Milk-fiend"}]
},
{
	clickCount: 0,
	name: "Eustace",
	imgSrc: "img/kitty-4.jpg",
	nickNames: [{name: "Fishypants"}]
},
{
	clickCount: 0,
	name: "Alan",
	imgSrc: "img/kitty-5.jpg",
	nickNames: [{name: "Gen dit"}]
}];




var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nickNames = ko.observableArray([data.nickNames.name]);

	this.level = ko.computed(function() {
		if (this.clickCount() < 10) {
			return "Infant";
		}
		if (this.clickCount() < 20 ){
			return "Adolescent";
		}
		if (this.clickCount() < 30 ){
			return "Adult";
		}
		if (this.clickCount() < 40 ){
			return "Old Age";
		}
		if (this.clickCount() < 50 ){
			return "Last Legs";
		}
		else {
			return "Dead";
		};
	}, this);
};




var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
};

ko.applyBindings(new ViewModel());
