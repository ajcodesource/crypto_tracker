# Hackerdroid Crypto Tracker

## Purpose

The **Crypto Tracker** is a simple web application that allows users to track the real-time prices of popular cryptocurrencies such as **Bitcoin (BTC)** and **Ethereum (ETH)**. The app fetches live data from a third-party cryptocurrency API and displays the current prices of these coins, helping users stay informed about the market.

This project was created as part of my preparation for a DevOps internship interview at Siemens, to demonstrate my skills in **web development**, **containerization**, **automation**, and **continuous integration/deployment**.

## Features

- Fetches real-time cryptocurrency data from the **CoinMarketCap API**.
- Displays live prices for **Bitcoin (BTC)** and **Ethereum (ETH)**.
- Displays cryptocurrency price data every few seconds using **JavaScript's `setInterval`** to update the values.
- The backend API is built using **Express.js** in Node.js to handle the API calls and data processing.
- The entire application is containerized using **Docker** for easy deployment and scalability.
- **GitHub Actions** is used to automate the testing and deployment processes.

## Why I Made It

The purpose of this project was twofold:
1. **Learn and Implement DevOps Practices**: 
   - I wanted to practice the key concepts of **DevOps** such as **continuous integration (CI)**, **continuous delivery (CD)**, and **containerization** using Docker.
   - I also wanted to get hands-on experience with **GitHub Actions** to automate the testing of the app as part of the CI/CD pipeline.

2. **Prepare for My DevOps Internship Interview**:
   - As part of my preparation for a DevOps internship, I built this project to demonstrate my understanding of **containerization** (using Docker), **API development**, **front-end development**, and **automated testing**.
   - I also wanted to show my ability to **deploy** applications in a scalable manner and explain my understanding of **DevOps tools** like Docker, GitHub Actions, and CI/CD.

## What I Learned

Building this project helped me learn the following:
1. **Docker**:
   - How to create **Docker images** and **containers**.
   - How to expose application ports and run containers locally.
   - How to use **Docker Compose** to manage multiple containers.
   - Containerizing both front-end and back-end components for easy deployment.

2. **GitHub Actions**:
   - Setting up a **CI/CD pipeline** for automated testing.
   - How to configure GitHub Actions to run tests on **push events** to the repository.
   - How to securely manage sensitive API keys and environment variables using GitHub Secrets.

3. **Backend Development (Node.js and Express)**:
   - How to build a simple API using **Express.js** to serve the front-end with cryptocurrency data.
   - How to integrate with third-party APIs (in this case, **CoinMarketCap API**) to fetch real-time data.

4. **Frontend Development (HTML, CSS, JavaScript)**:
   - How to use **JavaScript's `setInterval`** to automatically refresh data on the frontend.
   - Simple **DOM manipulation** to display data on the web page.
   - Styling the application with **CSS** for a user-friendly experience.

5. **API Integration**:
   - How to integrate with external **REST APIs** (CoinMarketCap in this case) to fetch and process cryptocurrency data.

6. **Version Control (Git)**:
   - Using **Git** for version control, committing changes, and managing branches.
   - How to create a pull request to merge changes from different branches.
   - Understanding the importance of using `.gitignore` to avoid committing unnecessary files like `node_modules`.

- **Node.js** (v14 or higher)
- **Docker** (for containerization)
- **Git** (to clone the repository)
