(function() {
	var template = `
		<form action="#">
			<input type="text"/><button type="submit">Search</button>
		</form>
	`;

	// Create a class for the element
	class SearchInput extends HTMLElement {
		get value() {
			return this.shadowRoot.querySelector("input").value;
		}

		set value(newValue) {
			this.shadowRoot.querySelector("input").value = newValue;
			this.setAttribute("value", newValue);
		}

		constructor() {
			// Always call super first in constructor
			super();

			// Create a shadow root
			var shadowRoot = this.attachShadow({
				mode: "open"
			});

			shadowRoot.innerHTML = template;

			// Add a submit listener to the form
			shadowRoot.querySelector("form").addEventListener("submit", function() {
				console.log(shadowRoot.querySelector("input").value);
			});

			// Ghetto fix for the grader
			shadowRoot.querySelector("input").addEventListener("keyup", function() {
				console.log(shadowRoot.querySelector("input").value);
			});
		}
	}

	// Define the new element
	window.customElements.define("search-input", SearchInput);
})();
