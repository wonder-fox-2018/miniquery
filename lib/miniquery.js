/*!
 * miniquery
 */
/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
let SweetSelector = {
	select: function(domSTR) {
		return document.querySelectorAll(domSTR);
	}
};

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
let DOM = {
	addClass: function(selectedDOM, addedClass) {
		SweetSelector.select(selectedDOM).forEach(x => x.classList.add(addedClass));
	},
	removeClass: function(selectedDOM, removedClass) {
		SweetSelector.select(selectedDOM).forEach(x =>
			x.classList.remove(removedClass)
		);
	},
	hide: function(selectedDOM) {
		SweetSelector.select(selectedDOM).forEach(
			x => (x.style.display = "hidden")
		);
	},
	show: function(selectedDOM) {
		SweetSelector.select(selectedDOM).forEach(
			x => (x.style.display = "visible")
		);
	}
};

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

let EventDispatcher = {
	on: function(selectedDOM, eventName, functionToExecute) {
		SweetSelector.select(selectedDOM).forEach(x =>
			x.addEventListener(eventName, functionToExecute)
		);
	},
	trigger: function(selectedDOM, eventName) {
		SweetSelector.select(selectedDOM).forEach(x => x.dispatchEvent(eventName));
	}
};

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

let AjaxWrapper = {
	request: function({ url, type, success, fail }) {
		let xhr = new XMLHttpRequest();
		xhr.open(type, url);
		xhr.send();
		if (String(xhr.status)[0] === "2" || String(xhr.status)[0] === "3")
			success();
		else fail();
	}
};

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

let miniquery = (function(selectedDOM) {
	let SweetSelector = {
		select: function(domSTR) {
			return document.querySelectorAll(domSTR);
		}
	};

	let selectedDOMVar = SweetSelector.select(selectedDOM);

	return {
		addClass: function(addedClass) {
			selectedDOMVar.forEach(x => x.classList.add(addedClass));
		},
		removeClass: function(removedClass) {
			selectedDOMVar.forEach(x => x.classList.remove(removedClass));
		},
		hide: function() {
			selectedDOMVar.forEach(x => (x.style.display = "hidden"));
		},
		show: function() {
			selectedDOMVar.forEach(x => (x.style.display = "visible"));
		},
		on: function(eventName, functionToExecute) {
			selectedDOMVar.forEach(x =>
				x.addEventListener(eventName, functionToExecute)
			);
		},
		trigger: function(eventName) {
			selectedDOMVar.forEach(x => x.dispatchEvent(eventName));
		},
		ajax: function({ url, type, success, fail }) {
			let xhr = new XMLHttpRequest();
			xhr.open(type, url);
			xhr.send();
			if (String(xhr.status)[0] === "2" || String(xhr.status)[0] === "3")
				success();
			else fail();
		}
	};
})(DOMElementSelector);

///alias

let $ = miniquery;