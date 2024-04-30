const amqp = require('amqplib');

async function connectToRabbitMQ(url) {
  return new Promise((resolve, reject) => {
    amqp.connect(url, (err, connection) => {
      if (err) {
        reject(err); // Reject the promise if there's an error
      } else {
        console.log("Successfully connected to RabbitMQ");
        resolve(connection); // Resolve the promise with the connection object
      }
    });
  });
}

async function main() {
  try {
    const url = 'amqp://localhost'; // Replace with your RabbitMQ URL
    const connection = await connectToRabbitMQ(url);
    // Proceed with further actions using the connection object
    console.log("Connection:", connection);
  } catch (error) {
    console.error("Failed to connect to RabbitMQ:", error);
    // Handle connection failure
  }
}

// Call the main function
main();
