function showSalary(users, age) {
  return users.filter((user) => user.age <= age).map((item, index) => {
    if(item){
      return `${item.name}, ${item.balance}${users.length - 1 > index ? '\n': ''}`; 
    }
  }).join('')
}
