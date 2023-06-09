const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'backend-producer',
    brokers: ['localhost:9092', 'localhost:9093']
})

const consumer = kafka.consumer({groupId: 'test-group'})

const run = async () => {

    
    await consumer.connect()
    await consumer.subscribe({
        topic: 'test-topic',
        fromBeginning: true
    })

await consumer.run({
    eachMessage: async ({partition, message}) => {
        console.log({partition, offset: message.offset, value: message.value.toString()})
    }
})

}

run().catch(console.error)