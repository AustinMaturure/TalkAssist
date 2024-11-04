[![Netlify Status](https://api.netlify.com/api/v1/badges/f5ab999a-6a7f-4ebe-a0a5-1a9751a5b207/deploy-status)](https://app.netlify.com/sites/talkassist/deploys)
# TalkAssist

**TalkAssist** is a web application designed to help users organize and manage their talks. The application allows users to input their talk content, automatically divides the content into manageable points, and provides a timer to help with speech delivery. Users can also add and edit key points for easy reference during their talks.

## Features

- **Input and Divide Text**: Enter your talk, and the app automatically separates it into distinct points based on thoughts.
- **Timer**: A built-in timer to track your speech duration.
- **Interactive Points**: Navigate through points of your talk with next/previous buttons.
- **Popups**: Add additional notes and content, displayed in popup windows for quick reference.
- **Text Formatting**: Format text for emphasis using bold and italics.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Django with the spaCy library for natural language processing
- **APIs**: Custom API to handle text division

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- Python (with Django and spaCy)

### Frontend Setup

1. Clone the repository:

   ```
   git clone <repository-url>
   cd TalkAssist/Frontend
   ```

2. Install dependencies:

  ```
   npm install 
   ```

3. Start the development server:

   ```
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:

   ```
   cd TalkAssist/Backend 
   ```

2. Install required Python packages:

   ```
   pip install -r requirements.txt 
   ```

3. Start the Django server:

   ``` 
   python manage.py runserver 
   ```

## Usage

1. Enter your speech text in the provided input box.
2. Click "Submit" to automatically divide the text into points.
3. Use the timer to track your speech duration.
4. Navigate through your points using the provided buttons.
5. Add additional notes via the popup interface.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [spaCy](https://spacy.io/) for natural language processing
- [React](https://reactjs.org/) for building the user interface
