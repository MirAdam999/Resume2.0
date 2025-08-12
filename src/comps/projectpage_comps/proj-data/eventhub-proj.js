
const EventhubProj = {
    title: "EventHub",
    about:
        <div className="eventhub-proj-about">
            <p>EventHub: Community Event Management Platform</p>

            <h3>Overview</h3>
            <p>EventHub is an all-encompassing platform designed to revolutionize the way community events are organized, discovered, and experienced.
                It offers a seamless interface for users to host, register for, and provide feedback on community events. With a focus on connectivity
                and user engagement, EventHub bridges the gap between event organizers and attendees, fostering a vibrant community spirit.
            </p>

            <h3>Features</h3>
            <ul>
                <li>User Profiles: Sign up, manage profiles, and become an event organizer, attendee or both.</li>
                <li>Event Management: Create, manage, and discover community events with ease.</li>
                <li>Event Registration: Seamless registration for upcoming events.</li>
                <li>Feedback and Ratings: Provide and view feedback and photos ates, or organizers.</li>
                <li>Responsive Design: Optimized for desktop devices.</li>
            </ul>

            <h3>Security</h3>
            <p>EventHub uses JWT tokens for secure authentication for both front and backend stored tokens, and hashes passwords before storing them in the database to ensure user security.</p>

            <h3>Tech Stack</h3>
            <ul>
                <li>Database: Microsoft SQL Server for robust data management.</li>
                <li>Backend: Flask Rest Framework for a powerful API layer.</li>
                <li>Frontend: React.js for a dynamic and responsive user interface.</li>
            </ul>
        </div>
    ,
    images: [
        ["/images/prj-screenshots/eventhub1.jpg", 'Homepage'],
        ["/images/prj-screenshots/eventhub2.jpg", 'Passed & Attended Event Image Gallery'],
        ["/images/prj-screenshots/eventhub3.jpg", 'My Events Page & Sidebar']
    ],
    skills: ['MSSQL', 'Flask', 'React', 'HTML', 'CSS'],
    gitLink: "https://github.com/MirShukhman/Project-3-Event-Hub",
    liveLink: ""
};

export default EventhubProj;