const axios = require('axios');
const readline = require('readline');

const baseUrl = 'http://localhost:3000';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  await actionSelector()
}

async function actionSelector() {
  console.log('Choose an action:');
  console.log('1. Update a secret string');
  console.log('2. Check if a secret string matches the input');

  rl.question('Enter the number of your choice: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter the new secret text: ', async (secretText) => {
          const updateResponse = await updateSecret(secretText);
          console.log('Update Response:', updateResponse.data.message);
          rl.close();
        });
        break;

      case '2':
        rl.question('Enter the secret text to check: ', async (secretText) => {
          const validateResponse = await validateSecret(secretText);
          console.log('Validate Response:', validateResponse.data.valid);
          rl.close();
        });
        break;

      default:
        console.log('Invalid choice. Please enter 1 or 2.');
        rl.close();
        break;
    }
  });
}

async function updateSecret(secretText) {
  return axios.post(`${baseUrl}/updateSecret`, { secretText });
}

async function validateSecret(secretText) {
  return axios.post(`${baseUrl}/validateSecret`, { secretText });
}

main();
