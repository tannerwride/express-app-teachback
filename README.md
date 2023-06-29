# CircleCI Teachback

This repo will be used for TSM's to practice implementing CircleCI features on a basic Node application. We will meet as a group and have the TSMs explain how they implemented these features. 

## Objectives

The objective of this activity is to have TSMs practice implementing the following:

- Test splitting 
- Contexts 
- Uploading test results 

## How this Repo Works

This repo is broken down by branches.

- 0: This is the starter branch with a basic build, test, deploy, workflow. The task is to take this branch and add test splitting, upload the test results, and add contexts for the deployment secrets.

## Prerequisites

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) this repository to your personal GitHub account. 
2. [Setup the CircleCI project](https://circleci.com/docs/getting-started/?utm_source=google&utm_medium=sem&utm_campaign=sem-google-dg--uscan-en-dsa-tROAS-auth-brand&utm_term=g_-_c__dsa_&utm_content=&gclid=Cj0KCQjwtO-kBhDIARIsAL6LoreqoxYV4ckTzv020rOwBBsWl2nJ5QQsMQeJ6YMxhaJJgzqd4hp9hCgaAnrNEALw_wcB) in your account
    - Point to the branch titled `0` for the config file
3. Setup a Google App Engine app. 

## Instructions
The premise of this activity is that you have created a basic Node.js application and have a workflow on CircleCI that builds, tests, and deploys that application. The platform team you are a part of wants to implement a few CircleCI features to improve the CI/CD pipeline. Your job is to add contexts to the project to keep the organizations secrets safe, add test splitting to improve workflow run time, and store test results to detect any flaky tests and make improvements over time. 

<details>
    <summary>Click to view a description of files in this repo</summary>

Inside this repo are several directories and files. Below is a quick explaination of what they are. You will only make edits to the `.circleci/config.yml` file, however.  

</details>

### Add a new Context 

### Implement Test Splitting 

### Upload Test Results 