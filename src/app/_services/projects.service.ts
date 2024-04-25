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
    summary : 'Developed a weather application with Spring Boot, offering 3-hourly forecasts for cities over a 5-day period via OpenWeatherMap API. Technologies used include Spring Boot, Spring Cloud Feign, Spring Security, Spring Kafka, JWT, PostgreSQL, and Mockito',
    description : 'This project is a weather application developed using Spring Boot. The application provides weather forecasts using a RESTful web service. It allows users to query weather forecasts for a city, providing predictions at 3-hour intervals covering a 5- day period. The application retrieves weather forecasts using the OpenWeatherMap API',
    projectLink : 'https://github.com/iumutdikbasan/weather-app',
    tags :[Tag.JAVA,Tag.SPRING,Tag.SPRINGCLOUDFEIGN,Tag.SPRINGSECURITY,Tag.SPRINGKAFKA,Tag.JWT,Tag.POSTGRESQL,Tag.SPRINGMOCKITO],
    pictures : ["assets/weather_slide1.png","assets/slide2.jpg","assets/slide3.jpg"]
  },
  {
    id : 1,
    name : 'Trip Scanner',
    summary : 'Trip search application with Spring Boot, featuring CRUD-managed trip data and a Search API. Ensured security with authentication and daily data updates using a mock API.',
    description : `

    This user-friendly trip management system offers a well-structured API with automatic data mapping and secure access control.
     It enforces logical travel rules and provides trip search for all users. 
     Admins can manage stations and trips, while a daily background task retrieves and processes data from a third-party source. 
    Security features include database authentication, user roles, and encrypted passwords.
    `,
    projectLink : 'https://github.com/iumutdikbasan/TripScanner',
    tags : [Tag.JAVA,Tag.SPRING,Tag.SPRINGSECURITY,Tag.POSTGRESQL],
    pictures : ["assets/tripscanner_slide1.png","assets/slide2.jpg","assets/slide3.jpg"]
  },
  
  {
    id : 2,
    name : 'E-Commerce Clone',
    summary : 'It is a service that manages Users, Products and comments.',
    description : '● The user manages a service that handles products and reviews. \n\
    ● An email and a phone number belong to only one user. \n\
    ● The same username, phone number, or email cannot be registered. \n\
    ● The user type can be an individual or a company. \n\
    ● Maven, Spring Boot, MapStruct, Swagger, PostgreSQL \n\
    ',
    projectLink : 'https://github.com/iumutdikbasan/ecommerce',
    tags :[Tag.JAVA,Tag.SPRING,Tag.JWT,Tag.POSTGRESQL],
    pictures : ["assets/comment_slide1.png","assets/comment_slide2.png","assets/comment_slide3.png","assets/comment_slide4.png","assets/comment_slide5.png"]
  },
  {
    id : 3,
    name : 'Broker',
    summary : 'CRUD operations, event listeners to exchange messages between services. If a product is not in the inventory, the receipt service doesnt work',
    description : 'CRUD operations, event listeners to exchange messages between services. If a product is not in the inventory, the receipt service doesnt work',
    projectLink : 'https://github.com/iumutdikbasan/broker-ms',
    tags :[Tag.JAVA,Tag.SPRING,Tag.SPRINGSECURITY,Tag.SPRINGCLOUDGATEWAY,Tag.MONGODB,Tag.JWT,Tag.RABBITMQ, Tag.MICROSERVICE,Tag.DOCKER],
    pictures : ["assets/slide1.jpg","assets/slide2.jpg","assets/slide3.jpg"]
  },

  {
    id : 4,
    name : 'PaymentApp',
    summary : 'Full-Stack Project Payment API',
    description : 'Full-Stack Project Payment API',
    projectLink : 'https://github.com/iumutdikbasan/PaymentApp-fs',
    tags :[Tag.CSHARP,Tag.ANGULAR,Tag.SQL],
    pictures : []
  },
  {
    id : 5,
    name : 'Mango',
    summary : 'ASP.NET Core Web Application with Bootstrap 5 and Razor.\n\ NET API with Authentication and Authorization  Async and Sync communication between Microservices School Project',
    description :  'ASP.NET Core Web Application with Bootstrap 5 and Razor.\n\ NET API with Authentication and Authorization  Async and Sync communication between Microservices',
    projectLink : 'https://github.com/iumutdikbasan/Mango',
    tags :[Tag.CSHARP,Tag.SQL,Tag.MICROSERVICE],
    pictures : []
  },
  {
    id : 6,
    name : 'Portfolio Website',
    summary : 'This Website',
    description :  'Responsive portfolio website with Angular',
    projectLink : 'https://github.com/iumutdikbasan/PortfolioWebsite',
    tags :[Tag.ANGULAR],
    pictures : []
  }

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
