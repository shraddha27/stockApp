# Real-Time Stock/Crypto Prices

This project is a mini-website to collect and display real-time price data for stocks and cryptocurrencies.

## Backend

The backend polls real-time data every few seconds for 5 stocks or cryptocurrencies from an API (e.g., CoinGecko) and stores that data in a MongoDB database.

### Setup

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`.
3. Create a `.env` file with your MongoDB URI and API URL.
4. Start the server: `npm run dev`.

## Frontend

The frontend fetches the most recent 20 real-time data entries from the MongoDB database for a particular stock or crypto and displays them in a table. The table updates dynamically with new data.

### Setup

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.

## How to Run

1. Start the backend server.
2. Start the frontend server.
3. Open your browser and navigate to `http://localhost:3000`.

## Technologies Used

- Backend: Node.js, Express, MongoDB, Mongoose, Axios
- Frontend: Next.js, Typescript, Redux

## Features

- Real-time data polling and storage
- Dynamic table updates
- Modal for changing the stock or crypto

## Author

Shraddha N Bandekar