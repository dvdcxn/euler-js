export default class {
	constructor(title, description){
		this.title = title;
		this.description = description;
	}

	solve (){
		throw new Error(`'${this.title}' did not implement solution.`);
	}
}