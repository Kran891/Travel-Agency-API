
# Vehicle Booking System API

This repository is designed to facilitate vehicle bookings for a travel agency. The project includes multiple APIs handling different functionalities such as authentication, booking, logging, messaging, and vehicle management. The main technologies used in this project are TypeScript, JavaScript, and Docker, with configurations for Kubernetes and Skaffold to manage deployment and infrastructure.

The repository contains a detailed README file which outlines the project setup, usage instructions. The README also provides information on how to run the application locally using Docker and Kubernetes, as well as guidance on setting up the development environment.

For more detailed information, you can check out the [Travel-Agency-API](https://github.com/Kran891/Travel-Agency-API.git) repository on GitHub.


## Installation

For running the application locally install
 - Nodejs, RabbitMq
For deploying the project install
 - Docker, Kubernetes, Minikube
Useful extensions for VS Code
 - YAML, Docker, DevContainers, Swagger UI
Installation Guides:
- Install node Js Latest Version.
   - Installation guide:
       https://nodejs.org/en/download/package-manager
- Install RabbitMq from offical website.
   - Installation guide:
       https://www.rabbitmq.com/docs/download
- Install Docker from offical website.
   - Installation guide:
       https://docs.docker.com/desktop/install/windows-install/
- Install RabbitMq from offical website.
   - Installation guide:
       https://www.rabbitmq.com/docs/download 
- Install Kubernetes from offical website.
   - Installation guide:
       https://kubernetes.io/releases/download/
- Install Minikube from offical website.
   - Installation guide:
       https://minikube.sigs.k8s.io/docs/start/?arch=%2Fwindows%2Fx86-64%2Fstable%2F.exe+download
- Install Skaffold from offical website.
   - Installation guide:
       https://skaffold.dev/docs/install/   

```bash
  npm install 
  npm run <API-NAME>
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/Kran891/Travel-Agency-API.git
```

Go to the project directory

```bash
  cd Travel-Agency-API
```

Install dependencies

```bash
  npm install
```

Start the server for any API 

```bash
  npm run <API-name>
```


## Deployment

First start the minikube if you're using minikube through Docker and point minikube to docker environment 
```bash
  minikube start
  &minikube -p minikube docker-env
```


## Authors
Github Profiles:
 - [@ Kranthi Kumar Reddy](https://www.github.com/kran891)
 - [@ Naveen Bahunadham](https://www.github.com/naveenbabu4)
Contact details:
 - Kranthi Kumar GaviReddy
   - 📞 +918688348532
   - 📧 kranthi.gavireddy.code@gmail.com
 - Naveen Bahunadham
   - 📞 +919912786537
   - 📧 bsa.naveenbabu@gmail.com

