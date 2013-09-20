module bs.views {

	export class HeaderView extends Marionette.ItemView {

		constructor(options: any) {
			options.template = "#header-template";

			super(options);
		}
	}
}