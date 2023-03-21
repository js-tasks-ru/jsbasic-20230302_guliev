function showSalary(users, age) {
  return users.filter((user) => user.age <= age).map((item) => {
    if(item){
      return `${item.name}, ${item.balance}`; 
    }
  }).join('\n')
}
