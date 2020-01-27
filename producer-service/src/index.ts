import { 
  Producer, 
  KafkaClient, 
  CreateTopicRequest, 
  CreateTopicResponse
} from 'kafka-node';

class Main {
  private producer:Producer;
  private client:KafkaClient;

  constructor(){
    console.log('Hello API');
    this.client = new KafkaClient({kafkaHost: 'localhost:29092'});
    this.producer = new Producer(this.client);
  }

  createTopics ():void {
    const topicsToCreate:CreateTopicRequest[] = [
      {
        topic: 'topic1',
        partitions: 3,
        replicationFactor: 1
      },
      {
        topic: 'topic2',
        partitions: 3,
        replicationFactor: 1
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