// Importa el módulo AWS SDK
const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();

// Función lambda que toma dos números y devuelve su suma
exports.handler = async (event) => {
  try {
    // Extrae los números de la solicitud
    const { num1, num2 } = JSON.parse(event.body);

    // Realiza la suma
    const suma = num1 + num2;

    // Devuelve la respuesta
    return {
      statusCode: 200,
      body: JSON.stringify({ resultado: suma }),
    };
  } catch (error) {
    // En caso de error, devuelve un mensaje de error
    return {
      statusCode: 500,
      body: JSON.stringify({ error: '¡Hubo un error en la función lambda!' }),
    };
  }
};
