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

## Branching strategy

Maintain a **stable `main` branch** that always reflects the production-ready code.

- Facilitate feature development through **epic branches** .
- Allow for rapid deployment of urgent fixes through **fix branches** .
- Enforce code quality and consistency through **merge requests** and **code reviews** .

## Branch Types

Our branching strategy utilizes the following branch types:

1. [**`main` Branch**](#main-branch)
2. [**`epic` Branches**](#epic-branches)
3. [**`fix` Branches**](#fix-branches)

### `main` Branch

- **Purpose** : The `main` branch represents the latest stable version of the codebase. It should always be in a deployable state.
- **Access** : Direct commits to `main` are **not allowed** except for merges from `epic` and `fix` branches through merge requests.
- **Protection** : The branch is protected to prevent accidental commits and enforce the merge request process.

### `epic` Branches

- **Naming Convention** : `epic/<epic-name>`
- **Purpose** : Used for developing large features or sets of related features (epics). These branches provide an isolated environment for collaborative development.

### `fix` Branches

- **Naming Convention** : `fix/<issue-description>`
- **Purpose** : Intended for quick fixes that need to be deployed rapidly to address bugs or issues in the production code.

Local usage

Open three seperate terminals and navigate to the folder for every service. run npm install in every single folder then proceed to run npm start(for every service). You should see a message such as
