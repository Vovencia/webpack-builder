import {source, dist, root} from "./_utils";

export default {
	extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".png", ".jpg", ".gif", ".svg"],
	alias: {
		'@root'			: root(),
		'@source'		: source(),
	}
}