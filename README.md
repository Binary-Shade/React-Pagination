# React + Vite Project with Pagination and Filter Options

Welcome to the React + Vite project! This project demonstrates a simple yet powerful implementation of pagination and filtering options for a data set. Below you'll find everything you need to get started and understand the core features of this application.

## Screenshot

![image](https://github.com/Binary-Shade/React-Pagination/assets/115919438/effa8507-bac5-4b93-ae14-2521e55e9a22)

## Table of Contents

1. [Installation](#installation)
2. [Running the Project](#running-the-project)
3. [Features](#features)
4. [Configuration](#configuration)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

To get started, you need to have Node.js and npm installed. Then, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Binary-Shade/React-Pagination/
    cd React-Pagination
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Running the Project

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the Vite development server and you can view the application by navigating to `http://localhost:3000` in your web browser.

- **public/**: Contains the HTML file for the application.
- **src/**: Contains the main application code.
  - **components/**: Contains reusable components like Filter and Pagination.
  - **data/**: Contains any mock data used in the application.
  - **pages/**: Contains the main pages for the application.
  - **styles/**: Contains CSS styles.

## Features

### Pagination

The project includes a simple pagination component that allows users to navigate through a data set.

- **Pagination Component**: Handles the logic and UI for paginating through items.
- **Page Numbers**: Displayed dynamically based on the total number of items and items per page.
- **Next/Previous Buttons**: Allow users to navigate to the next or previous set of items.

### Filter Options

The project also includes filtering functionality to narrow down the displayed data based on user input.

- **Filter Component**: Provides UI for selecting filter criteria.
- **Filter Logic**: Filters the data based on selected criteria before pagination is applied.

## Configuration

You can configure various aspects of the project by modifying the following:

- **Items per page**: Adjust the number of items displayed per page by changing the corresponding state in the Pagination component.
- **Filter criteria**: Update the Filter component and the associated logic to add or modify filter options.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push your branch to your fork.
4. Open a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


Happy coding! 🚀
