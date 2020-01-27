import Kafka, { Producer, KafkaClient, CreateTopicRequest, CreateTopicResponse } from 'kafka-node';

class Main {
  private producer:Producer;
  private client:KafkaClient;

  constructor(){
    console.log('Hello API');
    this.client = new KafkaClient({kafkaHost: 'localhost:9092'});
    this.producer = new Producer(this.client);
  }

  createTopics ():void {
    const topicsToCreate:CreateTopicRequest[] = [
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

    this.client.createTopics(topicsToCreate, (err:any, result:CreateTopicResponse[]):void => {
      if (err) console.log('error', err);
      if(result){
        result.forEach((createResponse:CreateTopicResponse) => {
          console.log('createResponse', createResponse);
        });
      }
    });
  }
}

const main:Main = new Main();
main.createTopics();