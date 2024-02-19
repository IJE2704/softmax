export async function findStudentById(id) {
  console.log(id)
  console.log('h')
  try {
      const response = await fetch(`https://softmaxshop.com/user/students/`);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      console.log(response.status)
      const users = await response.json();
      console.log(users)
      const user = users.filter(user=> user.id === id);
      console.log(user[0].id)
      return user;
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return null;
  }
}