

const EventhubProj = {
    title: "EventHub",
    about:
        <div className="eventhub-proj-about">
            <p>Eventhub is a comprehensive event management website designed to connect people with experiences that match their interests. Users can easily browse and register for events, create and manage their own, and engage with organizers and attendees through feedback and ratings. Each user has a dedicated profile showcasing their activity, making event discovery and participation simple and engaging.
            </p>
            <p>For administrators, the platform provides powerful tools to oversee events, categories, and user accounts, ensuring smooth operation and community management. With a responsive design optimized for desktop devices, the system offers both convenience and control for everyday users and admins alike.
            </p>

            <h3>Features</h3>
            <p>Responsive Design: Optimized for desktop devices.</p>
            <h4>All Users</h4>
            <ul>
                <li>Discover Events: Easily explore events that match your interests using smart search filters, and register with just one click.</li>
                <li>Feedback & Ratings: Share your experience and browse feedback, ratings, and photos from both attendees and organizers.</li>
                <li>Event Creation & Management: Easily create and manage your own events. Choose from a wide range of categories to help attendees discover your event, or set it as private so each registration requires your approval.</li>
                <li>User Profiles: Every user has a profile page with a short “About” section and a list of their organized events.</li>
                <li>Stay Updated: Easily track your registered events, whether upcoming or already attended, through dedicated pages.</li>
            </ul>

            <h4>Admin Users</h4>
            <ul>
                <li>Review All Events: Access every event, not just filtered search results.</li>
                <li>Manage Event Categories: Add, edit, or delete categories, and view the number and list of events in each.</li>
                <li>Manage Users: Deactivate or reactivate accounts, and browse or filter all users.</li>
                <li>Manage Admins: Grant or revoke admin permissions for users.</li>
                <li><em>Note:</em> Admins cannot deactivate their own accounts or revoke their own admin permissions.</li>
            </ul>


            <h3>Security</h3>
            <p>EventHub uses JWT tokens for secure authentication for both front and backend stored tokens, and hashes passwords before storing them in the database to ensure user security.</p>
        </div>
    ,
    short_descript: 'Eventhub is a comprehensive event management website designed to connect people with experiences that match their interests. Users can easily browse and register for events, create and manage their own, and engage with organizers and attendees through feedback and ratings. Each user has a dedicated profile showcasing their activity, making event discovery and participation simple and engaging. For administrators, the platform provides powerful tools to oversee events, categories, and user accounts, ensuring smooth operation and community management. With a responsive design optimized for desktop devices, the system offers both convenience and control for everyday users and admins alike.',
    images: [
        ["/images/prj-screenshots/eventhub1.jpg", 'Homepage'],
        ["/images/prj-screenshots/eventhub2.jpg", 'Passed & Attended Event Image Gallery'],
        ["/images/prj-screenshots/eventhub3.jpg", 'My Events Page & Sidebar']
    ],
    video: "/images/prj-screenshots/eventhub-video.mp4",
    skills: ['MSSQL', 'Flask', 'React', 'HTML', 'CSS'],
    gitLink: "https://github.com/MirAdam999/Project-3-Event-Hub",
    liveLink: ""
};

export default EventhubProj;