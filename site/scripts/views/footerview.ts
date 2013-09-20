module bs.views {

	export class FooterView extends Marionette.ItemView {

		constructor(options: any) {
			options.template = "#footer-template";
			
			super(options);
		}
	}
}