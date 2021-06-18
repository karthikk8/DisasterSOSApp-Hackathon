# DisasterSOSApp-Hackathon



A basic GitHub repository example for WIP Hackathon.



_Read this in other languages: [English](README.md), [한국어](./docs/README.ko.md), [português](./docs/README.pt_br.md)._

## Contents

- [Submission or project name](#submission-or-project-name)
  - [Contents](#contents)
  - [Short description](#short-description)
    - [What's the problem?](#whats-the-problem)
    - [How can technology help?](#how-can-technology-help)
    - [The idea](#the-idea)
  - [Demo video](#demo-video)
  - [The architecture](#the-architecture)
  - [Long description](#long-description)
  - [Project roadmap](#project-roadmap)
  - [Getting started](#getting-started)
  - [Live demo](#live-demo)
  - [Built with](#built-with)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Short description

### What's the problem?

Natural disasters are out of human control, but as the consequences of natural disasters there is human suffering caused by damage to life, personal property, and infrastructure. Every year, millions of people are affected by this, families are displaced, victims lose shelter, face the danger of death or physical injury. This is complicated further by immense shortages of food and drinking water. Several medical and psychological problems among the victims are major offshoots of natural disasters. Though it is beyond human control, but by leveraging new cutting age technology we can minimize the impact to a significant amount and can handle post incident consequences. 
Considering the above facts, the idea of creating an app to assist people to be prepare and take action in case of such emergency, came up by using cloud solution based on their current geographic location and climate.
User will be able to see present weather condition based on their location at any point of time. In case of adverse situation arising due to disaster, can reach out to their extended family members / friends for help. Get information on help / facility and support provided by Govt. authorities in his near vicinity. Will get the alerts sent by Govt. authorities on any critical weather forecast. Application will have provision for general guidelines for Do and Don’ts based on different adverse situations.



### How can technology help?
Using Disaster SOS Application user will be benefited on the below points
    In case of total power outage / no net connectivity, application will send automatic notifications to the relatives / friends listed in the  profile
    Get weather information at any point of time
    Be able to get forecast alert notification automatically before any natural disaster occurs
    Be able to plan accordingly to be prepared and mitigate upcoming effects due to natural disaster
    Ask for help from his relatives / friends with almost no time along with his location details
    Be well informed about help / facility and support arrangements made by local or central Govt authorities in the vicinity based on geographic location
    Make direct call from the app itself  
    Increase awareness on preparatory / post incident measures and tips / information for different types of disasters
    



### The idea

1) Design and develop a cloud-based application which will be available in both web interface & mobile version for the user. In broader sense, the application will have below capability / functionality made available to the user
2) User registration and capture relatives / friends list
3) User Login
4) Get current weather forecast based on user location (Latitude and Longitude) at any point of time
5) In case of any situation arises, can directly call (for Mobile App) or send message / email notification to their relatives / friends, listed in profile along with user’s location
6) In case of any adverse situation (total power outage / no net connectivity), app will send automatic notification to the relatives / friends listed for all target user based on the location of the incident
7) Provide information on help / facility and support arrangements made by local or central Govt authorities in the vicinity based on geographic location of the user with calling facility (for Mobile App)
8) Get advance alert notifications for critical weather forecast issued by local or central Govt authorities for public interest
Preparatory / post incident measures and tips / information for different types of disasters



## Demo video

[![Watch the video](https://github.com/karthikk8/DisasterSOSApp-Hackathon/blob/main/images/Homepage.JPG)](https://youtu.be/bicJ-Zh0hLQ)

## The architecture

![Video transcription/translation app](https://github.com/karthikk8/DisasterSOSApp-Hackathon/blob/main/images/Architecture%20diagram.jpg)

1. The user opens the Application in mobile or computer.
2. Webserver provides the UI to the user with options to login,register and add contact details.
3. Application server process the requests and updated the data in Cloudant database.
4. Cloudant database stores the user details in different databases.

## Long description

The following enhacements are planned for this application.
![Enhancements](https://github.com/karthikk8/DisasterSOSApp-Hackathon/blob/main/images/Enhancements.jpg)

## Project roadmap

Please find the detailed roadmap for the application development.

![Roadmap](./images/roadmap.jpg)

## Getting started

In this section you add the instructions to run your project on your local machine for development and testing purposes. You can also add instructions on how to deploy the project in production.

- [Springboot Java app](./SpringBootAppServercode/java-spring-app-smopa-2021-06-15/)
- [Angular Web UI App](./sample-angular-app/)


## Live demo

You can find a running system to test at [disaster-sos-web.eu-gb.mybluemix.net](http://disaster-sos-web.eu-gb.mybluemix.net

).

## Built with

- [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
- [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results) - The compute platform for handing logic
- [IBM API Connect](https://cloud.ibm.com/catalog?search=api%20connect#search_results) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency management


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning



## Authors

a)Santhi Krishna Gogineni
b)Karthik Kumar
c)Bhaskar Ghosh
d)Preeti Tenihalli



## License



## Acknowledgments


