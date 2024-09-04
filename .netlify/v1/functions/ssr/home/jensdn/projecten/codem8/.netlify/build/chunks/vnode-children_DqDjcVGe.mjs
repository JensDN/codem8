import { createElement, Fragment } from 'react';
import { w, R, k, j } from './index_hpDd0Hk8.mjs';

let ids = 0;
function convert(children) {
	let doc = w(children.toString().trim());
	let id = ids++;
	let key = 0;

	function createReactElementFromNode(node) {
		const childVnodes =
			Array.isArray(node.children) && node.children.length
				? node.children.map((child) => createReactElementFromNode(child)).filter(Boolean)
				: undefined;

		if (node.type === R) {
			return createElement(Fragment, {}, childVnodes);
		} else if (node.type === k) {
			const { class: className, ...props } = node.attributes;
			return createElement(node.name, { ...props, className, key: `${id}-${key++}` }, childVnodes);
		} else if (node.type === j) {
			// 0-length text gets omitted in JSX
			return node.value.trim() ? node.value : undefined;
		}
	}

	const root = createReactElementFromNode(doc);
	return root.props.children;
}

export { convert as default };
