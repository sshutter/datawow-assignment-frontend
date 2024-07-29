# **DATA WOW Take Home Assignment (frontend)**

This is a Next.js frontend for a Ruby on Rails application designed as part of the Datawow take-home exercise. It allows users to create, read, update, and delete (CRUD) posts. The application includes secure user authentication to manage user access.

## **Prerequisites**

Before you begin, ensure you have the following installed on your system:
- NPM (Node Packages Manager)
  ```bash
    $ brew install node

    # Verify installation
    $ node -v 
    $ npm -v
  ```
- Git: [Getting start with Git](https://docs.github.com/en/get-started/getting-started-with-git)

## **Setup Instructions**

To set up and run the application locally, follow these steps:
1. **Clone the repository**

  ```
    $ git clone https://github.com/sshutter/datawow-assignment-frontend.git

    $ cd datawow-assignment-frontend
  ```
2. **Install dependencies**
  
  ```
    $ npm install
  ```
3. **Set Up environment**
   
    Create a `.env.local` file in the root directory based on the provided `.env.template` file.

    Example:
  ```
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=secret
    NEXT_PUBLIC_BACKEND_PORT=5001
  ```

4. **Run the Next.js application in development mode** 🚀
  
  ```
    $ npm run dev
  ```
