		/*
		 * creates a form with a an empty textfield with a required attribute
		 * & a submitbutton, if the form can be submitted return false.
		 * @return {boolean} canEnforce
		*/ 
		function canIRequire()
		{
			/* 
			Create a submit button because
			form.submit() does not trigger an submit event and
			imo its uglier to do a workaround
			*/
			var form = root.createElement('form');
			var input = root.createElement('input');
			var button = root.createElement('input');
			button.type = 'submit';
			input.required = true;
			form.appendChild(input);
			form.appendChild(button);
			var b = true;
			// Use onsubmit instead of addEvent since this works on all browsers
			form.onsubmit = function (e)
			{
				e.preventDefault();
				b = false;
			}
			button.click();
			return b;
		}