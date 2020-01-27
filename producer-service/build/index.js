"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafka_node_1 = require("kafka-node");
class Main {
    constructor() {
        console.log('Hello API');
        this.client = new kafka_node_1.KafkaClient({ kafkaHost: 'localhost:9092' });
        this.producer = new kafka_node_1.Producer(this.client);
    }
    createTopics() {
        const topicsToCreate = [
            {
                topic: 'topic1',
                partitions: 1,
                replicationFactor: 2
            },
            {
                topic: 'topic2',
                partitions: 2,
                replicationFactor: 2
            },
        ];
        this.client.createTopics(topicsToCreate, (err, result) => {
            if (err)
                console.log('error', err);
            if (result) {
                result.forEach((createResponse) => {
                    console.log('createResponse', createResponse);
                });
            }
        });
    }
}
const main = new Main();
main.createTopics();
//# sourceMappingURL=index.js.map