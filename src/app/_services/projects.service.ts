import { Injectable } from '@angular/core';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  project: Project []=[ {
    id : 0,
    name : 'WeatherApp',
    summary : 'A Spring Boot weather app provides 5-day forecasts with 3-hour intervals via a RESTful service using OpenWeatherMap API.',
    description : 'This project is a weather application developed using Spring Boot. The application provides weather forecasts using a RESTful web service. It allows users to query weather forecasts for a city, providing predictions at 3-hour intervals covering a 5- day period. The application retrieves weather forecasts using the OpenWeatherMap API',
    projectLink : 'https://github.com/iumutdikbasan/weather-app',
    tags :[Tag.JAVA,Tag.SPRING,Tag.SPRINGCLOUDFEIGN,Tag.SPRINGSECURITY,Tag.SPRINGKAFKA,Tag.JWT,Tag.POSTGRESQL,Tag.SPRINGMOCKITO],
    pictures : ["../../assets/slide1.jpg","../../assets/slide2.jpg","../../assets/slide3.jpg"]
  },
  {
    id : 1,
    name : 'E-Commerce Clone',
    summary : 'It is a service that manages Users, Products and comments.',
    description : 'It is a service that manages Users, Products and comments.',
    projectLink : 'https://github.com/iumutdikbasan/ecommerce',
    tags :[Tag.JAVA,Tag.SPRING,Tag.JWT,Tag.POSTGRESQL],
    pictures : ["../../assets/slide1.jpg","../../assets/slide2.jpg","../../assets/slide3.jpg"]
  },
  {
    id : 2,
    name : 'Broker',
    summary : 'CRUD operations, event listeners to exchange messages between services. If a product is not in the inventory, the receipt service doesnt work',
    description : 'CRUD operations, event listeners to exchange messages between services. If a product is not in the inventory, the receipt service doesnt work',
    projectLink : 'https://github.com/iumutdikbasan/broker-ms',
    tags :[Tag.JAVA,Tag.SPRING,Tag.SPRINGSECURITY,Tag.SPRINGCLOUDGATEWAY,Tag.MONGODB,Tag.JWT,Tag.RABBITMQ],
    pictures : ["../../assets/slide1.jpg","../../assets/slide2.jpg","../../assets/slide3.jpg"]
  },
  /*
  {
    id : 3,
    name : 'PaymentApp',
    summary : 'Full-Stack Project Payment API',
    description : 'Full-Stack Project Payment API',
    projectLink : 'https://github.com/iumutdikbasan/PaymentApp-fs',
    tags :[Tag.CSHARP,Tag.ANGULAR,Tag.SQL],
    pictures : []
  },
  {
    id : 4,
    name : 'Mango',
    summary : 'ASP.NET Core Web Application with Bootstrap 5 and Razor.\n\ NET API with Authentication and Authorization  Async and Sync communication between Microservices School Project',
    description :  'ASP.NET Core Web Application with Bootstrap 5 and Razor.\n\ NET API with Authentication and Authorization  Async and Sync communication between Microservices',
    projectLink : 'https://github.com/iumutdikbasan/Mango',
    tags :[Tag.CSHARP,Tag.SQL],
    pictures : []
  }
  */
];
  constructor() { }

  GetProjects(){
    return this.project;
  }

  GetProjectById(id:number): Project{
    let project = this.project.find(project =>project.id === id);

    if(project === undefined){
      throw new TypeError('There is no project that matches with this id: '+id);
    }
    return project;
  }
}
