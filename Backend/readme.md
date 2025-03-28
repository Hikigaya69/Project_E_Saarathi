# Users Register Endpoint

## Endpoint
POST /users/register

## Description
Creates a new user, returning a JSON Web Token (JWT) and the newly registered user details.

## Request Body
- fullname (object)
  - firstname (string, required, at least 3 characters)
  - lastname (string, optional, at least 3 characters)
- email (string, required, valid email)
- password (string, required, minimum 6 characters)

## Status Codes
- 201 Created: Successfully created a new user.
- 400 Bad Request: Validation errors or missing fields.

### Example Response
```json
{
    "token": "xxx.yyy.zzz",
    "user": {
        "id": "1234abcd",
          "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "user@example.com",
        "password":"userpassword"
      
    }
}
```

## /users/login
Allows a registered user to log in and receive a JSON Web Token (JWT).

### Request Body
- email (string, required, valid email)
- password (string, required, minimum 6 characters)

### Status Codes
- 200 OK: Successfully logged in, returns user details and token.
- 400 Bad Request: Validation errors.
- 401 Unauthorized: Invalid credentials.

### Example Response
```json
{
  "token": "xxx.yyy.zzz",
  "user": {
    "id": "1234abcd",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
```

...existing code...

# Users Profile Endpoint

## Endpoint
GET /users/profile

## Description
Retrieves the authenticated user's profile information.

## Authentication
Requires valid JWT token in Authorization header or cookies.

## Response
- 200 OK: Returns user profile data
- 401 Unauthorized: Invalid or missing token
- 403 Forbidden: Token blacklisted

# Users Logout Endpoint 

## Endpoint
GET /users/logout

## Description
Logs out the user by blacklisting their JWT token and clearing cookies.

## Authentication
Requires valid JWT token in Authorization header or cookies.

## Response
- 200 OK: Successfully logged out
- 401 Unauthorized: Invalid or missing token
- 403 Forbidden: Token already blacklisted