const amqp = require('amqplib');

async function subscribeToExchange() {
  try {
    // Connect to RabbitMQ server
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    // Declare a fanout exchange
    const exchangeName = 'logs1';
    await channel.assertExchange(exchangeName, 'fanout', { durable: true });

    // Declare an exclusive queue
    const q = await channel.assertQueue('', { exclusive: true });

    // Bind the queue to the exchange
    await channel.bindQueue(q.queue, exchangeName, '');

    // Consume messages from the queue
    console.log('Waiting for messages...');
    channel.consume(q.queue, (msg) => {
      if (msg !== null) {
        console.log('Received message:', msg.content.toString());
        // Acknowledge message
        channel.ack(msg);
      }
    });

    // Handle closing
    process.once('SIGINT', () => {
      connection.close();
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

subscribeToExchange();
