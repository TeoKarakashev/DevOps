# DevOps course project

## Overview

This repository contains a simple web application that consists of three main components:

1. **Frontend Service** : A web-based user interface that allows users to interact with the backend services.
2. **Is-Prime Backend Service** : A backend service that checks if a given number is prime.
3. **SortArray Backend Service** : A backend service that sorts an array of numbers.

## CI/CD pipeline

The CI/CD pipeline is designed to automatically test, build, and deploy multiple microservices within the repository. It triggers on every push or pull request made to the `main` branch. The pipeline includes the following stages:

1. **Checkout Code** : Fetch the latest code from the repository.
2. **Set Up Node.js** : Install Node.js to run JavaScript applications.
3. **Install Dependencies and Run Tests** : Install project dependencies and run tests for each microservice.
4. **Docker Build and Push** : Build Docker images for each microservice and push them to Google Container Registry (GCR).
5. **Deploy to Google Kubernetes Engine (GKE)** : Deploy the Docker images to a GKE cluster.
