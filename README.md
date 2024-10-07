# Password Manager

A secure and user-friendly password manager built using **React**, **Express**, and **MongoDB**. This project allows users to store their passwords locally or in a MongoDB database with just a few clicks. It also provides features like password editing, deleting, copying to the clipboard, and toggling password visibility.

## Features

- **Save Passwords**: Store passwords either in local storage or securely in a MongoDB database.
- **Edit Passwords**: Update existing credentials easily.
- **Delete Passwords**: Remove saved passwords with one click.
- **Copy to Clipboard**: Quickly copy the saved password, username, or URL to the clipboard.
- **Hide/Show Passwords**: Toggle between showing and hiding the password for security and convenience.

## Tech Stack

- **Frontend**: React
- **Backend**: Express.js
- **Database**: MongoDB
- **UUID Generation**: `uuid` package to generate unique IDs for passwords

### Install Dependencies
### 1. Clone the Repository

```git clone https://github.com/yourusername/password-manager.git ```

### 2. Install Dependencies
Navigate to the project directory and run:
```npm install```

### 3. Backend Setup
Start the Express server:
```npm run server```

### 4. Frontend Setup
Start the react frontend
```npm start```

### 5. MongoDB setup
Make sure MongoDB is installed and running on your local machine, or use a cloud MongoDB instance (e.g., MongoDB Atlas).

### Usage
**1. Add a Password**: Fill in the website, username, and password fields and click "Save Password."
**2. Edit a Password**: Click the edit icon next to the entry you want to modify.
**3. Delete a Password**: Click the delete icon to remove a password.
**4. Copy to Clipboard**: Use the copy icon to quickly copy the password, username, or URL.
**5. Toggle Visibility**: Click the eye icon to show/hide the password.