# API Visualizer

A React-based web application that fetches and visualizes the data in a tabular form any public API returning an array of objects. The user can input any public API URL and the app will dynamically render the data in a table.

## Live Demo
- Vercel Link: https://api-visualizer-mu.vercel.app
- Github Link: https://github.com/kartik914/api-visualizer

## Features
- Input any valid API URL to the input field
- Auto detects the column based on the JSON structure
- Nested objects flattered for display
- Sorting, filtering and pagination (Using AG Grid)
- Error handling for invalid URLs and invalid data formats

## How to run locally
- Clone the Repositry
  ```bash
  git clone https://github.com/kartik914/api-visualizer.git
  cd api-visualizer

- Install the dependencies
  ```bash
  npm install

- Start development server
  ```bash
  npm run dev
