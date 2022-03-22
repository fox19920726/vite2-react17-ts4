const modules = import.meta.glob('../**/index.tsx')

async function getModules() {
	const comps = {}
	for (const path in modules) {
		const mod = await modules[path]()
		comps[mod.default.name] = mod.default
	}
	return comps
}


export default getModules()