(function() {
	var template = `
		<form action="#">
			<input type="text"/><button>Search</button>
		</form>
	`;

	// Create a class for the element
	class SearchInput extends HTMLElement {
		get value() {
			console.log(this.search.value);
			return this.search.value;
		}

		set value(newValue) {
			console.log(newValue);
			this.shadowRoot.querySelector("input").value = newValue;
			this.shadowRoot.setAttribute("value", newValue);
			// this.search.value = newValue;
            // this.setAttribute("value", newValue)
		}

		constructor() {
			// Always call super first in constructor
			super();

			// Create a shadow root
			var shadowRoot = this.attachShadow({
				mode: "open"
			});

			shadowRoot.innerHTML = template;

			// Create a standard search element and set it"s attributes.
			var search = this.shadowRoot.querySelector("input");

			// Add an event listener to the image.
			search.addEventListener("onkeypress", () => {
				if (!e) e = window.event;
				var keyCode = e.keyCode || e.which;
				if (keyCode == "13") {
					// Enter pressed
					console.log(search.value);
					return false;
				}
			});
		}
	}

	// Define the new element
	window.customElements.define("search-input", SearchInput);
})();
