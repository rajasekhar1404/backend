const {Kafka} = require('kafkajs')

const kafka = new Kafka({
    clientId: 'backend-producer',
    brokers: ['localhost:9092', 'localhost:9093']
})

const producer = kafka.producer()

const run = async () => {
    await producer.connect()
    
    await producer.send({
        topic: 'test-topic',
        messages: [
            {
                value: 'thinnavara...',
                partition: 1
            }
        ]
    })
}

run().catch(console.error)