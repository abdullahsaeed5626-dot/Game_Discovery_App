# 🎮 Game Hub — Game Discovery Application

A modern **Game Discovery Application** built with **React, TypeScript, and Chakra UI**, powered by the **RAWG Video Games Database API**.

This project provides an interactive interface for searching, filtering, sorting, and discovering video games across various platforms and genres. It was developed as a practical React project to apply modern frontend development concepts, API integrations, state management, and responsive UI design in a real-world web application.

> 🚧 **Project Status:** Frontend development complete / Active portfolio project  
> 🔌 **API Integration:** RAWG Video Games Database API  
> 🎨 **UI Framework:** Chakra UI

---

# Application Preview

## Home Page

![Home Page](./Screenshots/Home%20page.png)

## Search by

![Search by](./Screenshots/Search%20by.png)

## Search by Genre

![Search by Genre](./Screenshots/Search%20by%20Genre.png)

## Search by Platform

![Search by Platform](./Screenshots/Search%20by%20Platform.png)

## Search by Genre + Platform

![Search by Genre + Platform](./Screenshots/Search%20by%20Genre%20%2B%20Platform.png)

## Sort by

![Sort by](./Screenshots/Sort%20by.png)

## Sort by Date Added

![Sort by Date Added](./Screenshots/Sort%20by%20Date%20Added.png)

---

## ✨ Features

## 🔍 Search Games

- Search for video games using the search input
- Real-time search query updates
- Dynamic game results based on the search query
- Search functionality integrated with the RAWG API

## 🏷️ Genre Filtering

- Dynamic genre sidebar
- Filter games by genres such as Action, Indie, RPG, Strategy, and Shooter
- Highlight the currently selected genre
- Display genre image thumbnails

## 💻 Platform Selection

- Filter games by gaming platform
- Support for PC, PlayStation, Xbox, Nintendo, iOS, Android, and other platforms
- Display platform icons on game cards
- Combine platform filtering with other search filters

## 🔀 Sorting System

- Sort games dynamically by:
  - Relevance
  - Date added
  - Name
  - Release date
  - Popularity
  - Metacritic score
  - Average rating

## 🏷️ Metacritic Ratings & Emojis

- Display Metacritic scores on game cards
- Use visual score indicators
- Display emoji feedback based on game ratings
- Provide users with quick visual information about game quality

## 🖼️ Image Optimization

- Dynamically process API image URLs
- Crop and resize game images
- Improve image loading and performance
- Display optimized images inside game cards

## 🌗 Dark & Light Mode

- Built-in dark and light theme support
- Theme switching through Chakra UI
- Allow users to change the application's appearance

## ⚡ Loading Skeletons

- Display skeleton game cards while data is being fetched
- Provide visual feedback during API requests
- Improve the overall loading experience

## 🚫 Error Handling

- Handle API request failures
- Display appropriate error states
- Prevent the interface from breaking when API requests fail

---

## 🛠️ Tech Stack

| Technology     | Usage                                 |
| -------------- | ------------------------------------- |
| ⚛️ React       | Frontend application                  |
| 📘 TypeScript  | Type-safe development                 |
| 🎨 Chakra UI   | User interface and responsive styling |
| 🪝 React Hooks | State and component logic             |
| 🌐 Axios       | HTTP client for API requests          |
| 🎮 RAWG API    | Video game database API               |
| ⚡ Vite        | Development and build tool            |

---

## 🧠 React Concepts Practiced

This project is also designed as a practical learning project for React and modern frontend development.

Concepts implemented include:

- Component-Based Architecture
- JSX / TSX
- TypeScript Interfaces
- Props
- State Management
- `useState`
- `useEffect`
- `useRef`
- Custom Hooks
- API Data Fetching
- Axios
- Event Handling
- Conditional Rendering
- Controlled and Uncontrolled Inputs
- Lifting State Up
- Shared State
- Array Methods
- Component Reusability
- Responsive Layouts
- Dynamic API Query Construction
- Loading States
- Error Handling
- Image Optimization
- Dynamic Styling
- Dark / Light Theme Switching

---

## 🏗️ Application Architecture

The current application follows a component-based React architecture with centralized filter state inside `App.tsx`.

```text
                         React Application
                                │
                                ▼
                    App Component / GameQuery
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
          NavBar            GenreList        PlatformSelector
             │                  │                  │
        SearchInput             │                  │
             │                  │                  │
             └──────────────────┼──────────────────┘
                                │
                         SortSelector
                                │
                                ▼
                        Updated GameQuery
                                │
                                ▼
                            GameGrid
                                │
                    ┌───────────┴───────────┐
                    │                       │
               useGames Hook         GameCardContainer
                    │                       │
                 RAWG API                GameCard
                                            │
                              ┌─────────────┼─────────────┐
                              │             │             │
                      PlatformIconList  CriticScore     Emoji
```

---

## 📁 Project Structure

The project is organized into reusable components, custom hooks, and API services:

game-discovery-app/
│
├── public/
│
├── src/
│ │
│ ├── assets/
│ │ ├── logo.webp
│ │ ├── image-url.ts
│ │ ├── bulls-eye.jpg
│ │ ├── meh.jpg
│ │ └── thumbs-up.jpeg
│ │
│ ├── components/
│ │ ├── ColorModeSwitch.tsx
│ │ ├── CriticScore.tsx
│ │ ├── Emoji.tsx
│ │ ├── GameCard.tsx
│ │ ├── GameCardContainer.tsx
│ │ ├── GameCardSkeleton.tsx
│ │ ├── GameGrid.tsx
│ │ ├── GameHeading.tsx
│ │ ├── GenreList.tsx
│ │ ├── NavBar.tsx
│ │ ├── PlatformIconList.tsx
│ │ ├── PlatformSelector.tsx
│ │ ├── SearchInput.tsx
│ │ └── SortSelector.tsx
│ │
│ ├── hooks/
│ │ ├── useData.ts
│ │ ├── useGames.ts
│ │ ├── useGenres.ts
│ │ └── usePlatforms.ts
│ │
│ ├── services/
│ │ └── api-client.ts
│ │
│ ├── App.css
│ ├── App.tsx
│ ├── main.tsx
│ └── provider.tsx
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md

```

> The structure may evolve as new functionality is added.

---

## 🔄 Current Data Flow

The current version uses a centralized `GameQuery` state object to control search, genre, platform, and sorting.


User Selects Genre / Platform / Sort / Search
                    │
                    ▼
             App Component
                    │
                    ▼
          Updates `gameQuery` State
                    │
                    ▼
       gameQuery passed to GameGrid
                    │
                    ▼
          useGames(gameQuery)
                    │
                    ▼
           Axios API Request
                    │
                    ▼
              RAWG REST API
                    │
                    ▼
             Game List Returned
                    │
                    ▼
        Responsive GameGrid Render


When a user applies filters:


Select Genre / Platform / Sort
              ↓
       Update GameQuery
              ↓
       Trigger useGames()
              ↓
       Build API Query
              ↓
        Request RAWG API
              ↓
       Receive Game Results
              ↓
      Render Game Cards
```

---

## 🚀 Getting Started

## Prerequisites

Make sure you have installed:

- Node.js
- npm or yarn
- Git

## Installation

Clone the repository:

```bash
git clone https://github.com/abdullahsaeed5626-dot/game-hub.git
```

Move into the project directory:

```bash
cd game-hub
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

---

## 🧪 Development

During development, the application can be tested by:

1. Searching for specific game titles.
2. Selecting genres from the sidebar.
3. Selecting gaming platforms.
4. Applying multiple filters simultaneously.
5. Testing sorting options.
6. Checking Metacritic score indicators.
7. Checking emoji rating feedback.
8. Testing loading skeletons.
9. Testing error handling.
10. Toggling between dark and light modes.

---

## 🎮 Game Discovery

The application provides a complete game discovery experience through search, filtering, and sorting.

Users can:

- Search for specific games.
- Browse games by genre.
- Filter games by platform.
- Combine multiple filters.
- Sort games using different criteria.
- View game ratings.
- View supported platforms.
- Browse games through a responsive grid.

The application retrieves game information from the RAWG Video Games Database API and dynamically updates the interface based on the user's selections.

---

## 🎯 Project Objectives

The main objectives of this project are to:

- Build a practical real-world React application.
- Develop a reusable component structure.
- Practice centralized state management.
- Understand lifting state up.
- Work with TypeScript interfaces and props.
- Build and use custom React Hooks.
- Integrate a real-world REST API.
- Handle asynchronous API requests.
- Implement search, filtering, and sorting.
- Practice responsive UI development.
- Implement loading and error states.
- Optimize API image URLs.
- Create a professional portfolio-ready frontend project.

---

## 🔮 Future Roadmap

The current version focuses on the frontend and API-powered game discovery experience. Future versions can introduce:

## Navigation

- Mobile drawer for genre navigation
- Improved mobile filtering experience
- More advanced navigation controls

## Game Discovery

- Pagination
- Infinite scrolling
- Advanced search options
- More sorting options

## Game Details

- Detailed game information page
- Game screenshots
- Game trailers
- Extended game descriptions
- Game release information

## Favorites

- Favorite or bookmarked games
- LocalStorage persistence
- Dedicated favorites section
- Persistent favorite state

---

## 📈 Project Development Stages

Stage 1  
Vite + React + TypeScript Setup  
↓  
Stage 2  
Chakra UI Layout & Grid Scaffolding  
↓  
Stage 3  
RAWG API Integration & Generic Data Hook  
↓  
Stage 4  
Game Cards, Platform Badges & Metacritic Ratings  
↓  
Stage 5  
Genre Sidebar & Dynamic Filtering  
↓  
Stage 6  
Platform Selector & Sorting Dropdowns  
↓  
Stage 7  
Global Search Input & Dynamic Heading Titles  
↓  
Stage 8  
Loading Skeletons, Error Handling & Image Optimization

---

**Current focus:** Frontend functionality, API integration, responsive UI, and portfolio refinement.

---

## 💡 Why This Project?

Game discovery applications involve several interconnected operations such as searching, filtering, sorting, API communication, and dynamic UI updates.

Building this application provides practical experience in handling those relationships inside a React application instead of creating isolated demo components.

For example:

```text
Search
   ↕
Genre Filter
   ↕
Platform Filter
   ↕
Sorting
   ↕
RAWG API
   ↕
Game Results
   ↕
Game Cards
```

This makes the project a practical demonstration of frontend application architecture, state management, API integration, and reusable React components.

---

## Live links & gitHub Repository

![Live Demo](https://game-discovery-app-smoky.vercel.app/)
![GitHub Repo](https://github.com/abdullahsaeed5626-dot/Game_Discovery_App)

## 👨‍💻 Author

## Abdullah Saeed

Frontend Developer / React & TypeScript Enthusiast

This project is part of my practical journey toward building real-world React applications and developing a professional frontend portfolio.

---

## 📄 License

This project is created for **educational, learning, and portfolio purposes**.
