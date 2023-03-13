function sumSalary(salaries) {
  let result = 0;
  for (let value in salaries) if(typeof salaries[value] === 'number' && !isNaN(salaries[value]) && isFinite(salaries[value])) result += salaries[value];
  return result;
}
