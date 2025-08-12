
const PegasusProj = {
    title: "Pegasus",
    about: <div className="pegasus-proj-about">
        <p>Peagsus: Flight Management System</p>

        <h3>Features</h3>
        <ul>
            <li>Database Schema: Detailed schema including tables for Flights, Airline_Companies, Users, Countries, Tickets, Customers, User_Roles, and Administrators.
            </li>
            <li>Data Integrity: Use of primary keys (PK), foreign keys (FK), auto-increment (AI), and unique (U) constraints to ensure data integrity.
            </li>
            <li>Flight Management: Capabilities to add, update, and query flight information, including departure and landing times, and manage remaining tickets.
            </li>
            <li>Airline and Customer Management: Manage airline companies and customer information, including sensitive data such as credit card numbers securely.
            </li>
            <li>User Roles and Authentication: Differentiated access and operations based on user roles, ensuring system security and integrity.
            </li>
            <li>Comprehensive Ticketing System: Ticket management functionality, linking flights to customers and handling transactions.
            </li>
        </ul>

        <h3>Usage</h3>

        <p>The system is designed for use by airlines, travel agencies or private travelers, and administrative users with varying levels of access.</p>

        <h3>Tech Stack</h3>
        <ul>
            <li>Database: SQL Server is employed for its robust data management capabilities, handling the storage,
                retrieval, and manipulation of relational data with high performance and reliability.
            </li>
            <li>Backend: The Flask Rest Framework is used to create a powerful API layer. It facilitates the development
                of RESTful APIs, allowing for flexible, efficient, and scalable backend services.
            </li>
            <li>Frontend: A Flask-based user interface provides a straightforward and effective way for users to interact
                with the system. While Flask is traditionally seen as a backend framework, it can also serve HTML templates,
                enabling the creation of dynamic web pages for managing and displaying flight information, user accounts, and more.
            </li>
        </ul>
    </div>,
    images: [
        ["/images/prj-screenshots/pegasus1.jpg", 'Homepage & Flight Search'],
        ["/images/prj-screenshots/pegasus2.jpg", 'Admin Interface: Flights Display'],
        ["/images/prj-screenshots/pegasus3.jpg", 'Admin Interface: Manage Customers']
    ],
    skills: ['MSSQL', 'Flask', 'HTML', 'CSS'],
    gitLink: "https://github.com/MirShukhman/Project-2-Flights-Website",
    liveLink: ""
};

export default PegasusProj;