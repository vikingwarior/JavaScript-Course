let age = parseInt(prompt('Enter your age:'))

if (age > 17) {
  alert('You can drive!')
}

else {
  alert('You cannot drive!')
}
if(age < 0){
  console.error('lol negative age.')
} 

while (confirm('Do you want to retry?')) {
  age = parseInt(prompt('Enter your age:'))

  if (age > 17) {
    alert('You can drive!')
  }
  else {
    alert('You cannot drive!')
  }
}