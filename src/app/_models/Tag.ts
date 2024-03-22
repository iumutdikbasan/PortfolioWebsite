export class Tag{

    static readonly JAVA  = new Tag('Java', '#FF6600');
    static readonly SPRING  = new Tag('Spring Boot', '#6DB33F');
    static readonly SPRINGCLOUDFEIGN  = new Tag('Spring Cloud Feign', '#6DB33F');
    static readonly SPRINGCLOUDGATEWAY = new Tag('Spring Cloud Gateway', '#6DB33F');
    static readonly SPRINGSECURITY  = new Tag('Spring Security', '#6DB33F');
    static readonly SPRINGKAFKA  = new Tag('Spring Kafka', '#6DB33F');
    static readonly SPRINGMOCKITO  = new Tag('Spring Mockito', '#6DB33F');
    static readonly JWT  = new Tag('JWT', 'black');
    static readonly POSTGRESQL = new Tag('Postgre SQL', '#4169E1');
    static readonly MAVEN = new Tag('Maven', '#FF6600');
    static readonly MAPSTRUCT = new Tag('MapStruct','#FF6600' );
    static readonly MONGODB = new Tag('Mongo DB', '#7DB140');
    static readonly RABBITMQ = new Tag('Rabbit MQ', '#FF6600')
    static readonly CSHARP = new Tag('C#' ,'#800080')
    static readonly ANGULAR = new Tag('Angular', '#FF0000')
    static readonly SQL = new Tag('SQL', '#4169E1')

    private constructor(private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}