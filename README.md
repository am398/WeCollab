# WeCollab Project README

## Project Information
This project, **WeCollab**, is developed by students at Shiv Nadar University for the CSD 304: Software Engineering course. The team includes:
- Anuj Maurya
- Naman Sharma
- Arin Agnihotri
- Manasbir Bhatia

The project is supervised by Assistant Professor Suchi Kumari from the Computer Science and Engineering department.

## Project Overview
WeCollab is designed to address challenges in collaborative work environments by providing a comprehensive platform that integrates multiple collaboration tools into one seamless experience. The application incorporates essential features such as real-time communication, video conferencing, project management, whiteboarding, and document collaboration. The backend uses Convex for real-time synchronization, and the frontend employs Tailwind CSS for a modern, responsive design.

## Technologies Used
- **Frontend Framework**: Next.js
- **UI Library**: Tailwind CSS
- **Real-time Collaboration**: Convex
- **User Authentication**: Clerk
- **Development Tools**: React, ShadCN UI
- **Whiteboard integration**: Liveblocks

  
- ## Diagrams
- USE CASE DIAGRAM
- ![image](https://github.com/am398/WeCollab/assets/137151295/32ecd71e-6d22-41ce-81e4-fff6530679cd)

- Class Diagram
- ![image](https://github.com/am398/WeCollab/assets/137151295/c1a7b51d-3573-46e8-a3bf-fef372c19c75)


- Activity Diagram
- ![image](https://github.com/am398/WeCollab/assets/137151295/b07647ed-0a2b-4725-8a73-c9e956aaf27d)


- Sequence Diagram
- ![image](https://github.com/am398/WeCollab/assets/137151295/0d15d9bc-e89f-4b44-9bb4-a9a6a4d5f333)


## User Stories

### 1. Dashboard Access

**As a user, I need a dashboard to access all organizational and project-related features.**

#### Scenario:
I am a user who needs to see the dashboard for details.

- **Given:** I am logged in as a user.
- **When:** I access the application.
- **Then:** I land on the dashboard, where I can view all available organizations, projects, and collaboration tools.

#### Acceptance Criteria:
The dashboard provides easy navigation to all essential features and functionalities within the application.

### 2. Organization Sidebar

**As a user, I need an organization sidebar to switch between different organizations I’m part of.**

#### Scenario:
As a user, I need to switch from one organization to another.

- **Given:** I am logged in as a user and belong to multiple organizations.
- **When:** I access the dashboard or organizational settings.
- **Then:** I see a sidebar displaying a list of organizations I can switch between.

#### Acceptance Criteria:
The organization sidebar allows seamless navigation between different organizations, providing quick access to relevant whiteboard projects and collaboration spaces.

### 3. Navbar Functionality

**As a user, I need a navbar to access essential features and tools across the application.**

#### Scenario:
As a user, I need to use some tools for my convenience.

- **Given:** I am logged in as a user.
- **When:** I navigate within the application.
- **Then:** I see a navbar with options to access the whiteboard, chat, settings, and other key features.

#### Acceptance Criteria:
The navbar remains visible and accessible across all pages, providing consistent access to important functionalities.

### 4. Board List View

**As a user, I need a board list to view and manage all whiteboard projects within an organization.**

#### Scenario:
I am a user who needs to see all the boards.

- **Given:** I am logged in as a user and have access to an organization’s dashboard.
- **When:** I navigate to the whiteboard section.
- **Then:** I see a list of all whiteboard projects available within the organization, along with options to create new boards, rename existing ones, and perform other actions.

#### Acceptance Criteria:
The board list displays all whiteboard projects clearly and allows users to perform various actions such as creation, renaming, and deletion.

### 5. Favorite Capacity

**As a user, I need the ability to mark certain whiteboard projects as favorites for easy access.**

#### Scenario:
I am a user who wants to mark a certain board as my favorite.

- **Given:** I am logged in as a user and have access to multiple whiteboard projects within an organization.
- **When:** I navigate through the board list.
- **Then:** I can mark specific whiteboard projects as favorites.

#### Acceptance Criteria:
The application allows users to mark whiteboard projects as favorites, and the favorited projects are easily accessible from a designated section within the dashboard.

### 6. Organization Settings Configuration

**As an admin, I need access to organization settings to configure default permissions and access levels for new users.**

#### Scenario:
I am an admin and I need to set some permissions for users.

- **Given:** I am logged in as an admin.
- **When:** I access the organization settings.
- **Then:** I can customize default permissions, access levels, and other settings applicable to all users within the organization.

#### Acceptance Criteria:
Changes made to organization settings are applied consistently to all users and projects within the organization.

### 7. User Management

**As an admin, I need user management tools to invite new users, revoke access, and manage user roles within the organization.**

#### Scenario:
I am an Admin, I need to invite new users and manage user roles.

- **Given:** I am logged in as an admin.
- **When:** I access the user management section.
- **Then:** I can invite new users by sending email invitations, revoke access for existing users, and assign or modify user roles as needed.

#### Acceptance Criteria:
User management actions are executed accurately, and changes to user roles and permissions are reflected in real-time.

### 8. Real-time Collaboration Implementation

**As a User, I need to have real-time collaboration features to ensure seamless communication and interaction with other users on the whiteboard.**

#### Scenario:
I am a user and I need to have real-time collaboration.

- **Given:** I am working on the application’s collaboration module.
- **When:** I implement real-time updates for whiteboard changes.
- **Then:** Users can see changes made by other users in real-time without delays or synchronization issues.

#### Acceptance Criteria:
Changes made by any user are immediately reflected for all other users connected to the whiteboard session.

### 9. Chat Integration

**As a User, I need to have a chat feature so that I can have real-time communication with other users.**

#### Scenario:
I am a user, and I feel there’s a need for a chat feature.

- **Given:** I am working on the chat module.
- **When:** I implement chat functionality and user interfaces.
- **Then:** Users can send and receive messages without interruptions, and chat messages are displayed in real-time.

#### Acceptance Criteria:
The chat feature seamlessly integrates with the whiteboard and other application components, providing a smooth user experience.

Jira Link:- https://placementarchive.atlassian.net/jira/software/projects/COL/boards/2/backlog?epics=visible







## Setting Up the Development Environment
To set up the development environment for WeCollab, follow these steps:

1. Ensure you have the necessary system requirements, including Node.js and npm.
2. Clone the repository to your local machine.
3. Navigate to the project directory and install the required dependencies:
   ```bash
   npm i
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000` to view the project.

## Project Structure
- The frontend components and logic are located in the `app/` directory.
- Core Next.js configuration files are in the root of the project.
- User authentication is managed through Clerk, and Convex provides real-time backend functionality.

## Contributing
Contributions to the WeCollab project are welcome. If you find any issues or have suggestions, feel free to submit a pull request or open an issue in the repository.

