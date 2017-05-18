import colors from 'colors';

export default problems => {
	problems.forEach(problem => {
		console.log(`${problem.title}`.cyan);
		console.log(`${problem.description}`.gray);
		console.log(`solving...`.yellow);
		try{
			const solution = problem.solve();
			console.log(`${solution}`.green);
		} catch (err) {
			console.log(`Failed to solve '${problem.title}, error encountered.`.red);
			console.error(error);
		}
	});
}