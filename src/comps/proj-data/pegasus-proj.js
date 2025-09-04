

const PegasusProj = {
    title: "Pegasus",
    about: <div className="pegasus-proj-about">
        <p>Pegasus is a comprehensive flight management system that streamlines flight scheduling, ticketing, and user management. The web app provides tailored interfaces for customers (or travel agents), airlines, and administrators, enabling efficient flight management and seamless ticketing.</p>
        <p>Customers can easily search and book flights, manage their tickets, and update personal profiles. Airlines can add and manage flights while maintaining company information. Administrators have full control over user management, airline accounts, and system-wide flight oversight, ensuring smooth operations across the platform.</p>

        <h3>Features</h3>
        <p>Easily search flights by origin, destination, and travel date. You can also look up a specific flight number or view all arrivals and departures within the next 12 hours in any country.</p>

        <h4>Customer Interface:</h4>
        <p>Intended for private customers or travel agents alike.</p>
        <ul>
            <li>Purchase tickets effortlessly with just one click.</li>
            <li>My Tickets: View or cancel your purchased tickets and check the status of your flights.</li>
            <li>My Profile: Update your personal data, including credit card info.</li>
        </ul>

        <h4>Airline Interface:</h4>
        <ul>
            <li>Add Flight: Create a flight for the airline and set the number of available tickets.</li>
            <li>Manage Flights: View and edit all airline flights, and update their status. Use the search to find a specific flight by flight number or by using criteria.</li>
            <li>My Profile: Update the Airline’s info.</li>
        </ul>

        <h4>Admin Interface:</h4>
        <ul>
            <li>Manage Admins: Revoke or grant admin permissions to existing admin users. Create new admin users. Note: Existing non-admin users cannot be turned into admins for security purposes.</li>
            <li>Manage Airline Companies: Deactivate and reactivate airline companies’ users. Create new airline company users.</li>
            <li>Manage Customers: Deactivate and reactivate customers’ users. Create new customer users. Note: unlike admins and airlines, customers can sign up and create their own accounts.</li>
            <li>All Flights: View all flights or search by flight number.</li>
            <li>My Profile: Update own user data.</li>
        </ul>

    </div >,
    short_descript: 'Pegasus is a comprehensive flight management system that streamlines flight scheduling, ticketing, and user management. The web app provides tailored interfaces for customers (or travel agents), airlines, and administrators, enabling efficient flight management and seamless ticketing. Customers can easily search and book flights, manage their tickets, and update personal profiles. Airlines can add and manage flights while maintaining company information. Administrators have full control over user management, airline accounts, and system-wide flight oversight, ensuring smooth operations across the platform.',
    images: [
        ["/images/prj-screenshots/pegasus1.jpg", 'Homepage & Flight Search'],
        ["/images/prj-screenshots/pegasus2.jpg", 'Admin Interface: Flights Display'],
        ["/images/prj-screenshots/pegasus3.jpg", 'Admin Interface: Manage Customers']
    ],
    video: "/images/prj-screenshots/pegasus-video.mp4",
    skills: ['MSSQL', 'Flask', 'HTML', 'CSS'],
    gitLink: "https://github.com/MirAdam999/Project-2-Flights-Website",
    liveLink: ""
};

export default PegasusProj;