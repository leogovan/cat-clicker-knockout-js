var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Tabby");
	this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
	this.imgAttribution = ko.observable("");
	this.nickNames = ko.observableArray([{name: "Cribbinbob"},{name: "Thatcher"},{name: "Threadbats"},{name: "Redders"}]);

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
	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel());