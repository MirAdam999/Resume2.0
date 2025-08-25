import '../pc/projectpage_comps/project.css'

const EqupmentProj = {
    title: "Equpment Orders Managment System",
    about: <div id='equpment-proj-about'>
        <p>
            Equipment Order Management System built using Django, React, and MySQL. The project was inspired by my desire to practice Django skills and to improve upon the equipment ordering system used at the clinic network where I previously worked. The system is designed to be a web application with a simple and user-friendly interface, primarily in Hebrew.
        </p>

        <h3>Features</h3>
        <h4>Branch Admin Interface:</h4>
        <ul>
            <li>Easy Order Creation: Allows branch admins to create orders with a categorized view of available equipment.</li>
            <li>Order Status Tracking: Track the status of orders from creation to fulfillment.</li>
            <li>Order Confirmation:  Confirm the receipt of equipment at the branch.</li>
            <li>Branch Switching: Easily switch between branches for ordering or tracking purposes.</li>
            <li>Profile Management: Update personal information and change passwords.</li>
        </ul>
        <h4>Global Admin Interface:</h4>
        <ul>
            <li>Management of Branches, Suppliers, and Equipment: View, create, and update branches, suppliers, equipment items, and categories.</li>
            <li>User Management: Create new users (external registration is not available), view users, promote them to admins, or block them from the system.</li>
            <li>Approval System: Flag certain equipment items as "Manager Approval Required." Orders containing these items will need national admin approval before being sent to suppliers.</li>
            <li>Order Monitoring: View orders requiring attention (those not yet sent to suppliers or containing items requiring approval).</li>
            <li>Order Filtering: Filter orders based on various criteria.</li>
            <li>Order Dispatch: Generate Word files for orders by branch and supplier, which can be annotated and sent to suppliers. Future updates plan to send PDF orders directly via email.</li>
        </ul>

        <h4>User Authentication:</h4>
        <p>
            The system uses Django's Token Authentication for user identification and stores passwords hashed in the database.
        </p>

        <h3>Live Demo</h3>
        <p>
            The live demo of the system showcases a fictional multi-branch clinic inspired by the original project concept.< br />
            For your convenience, demo user data is available on the login page.
        </p>
    </div>,
    short_descript: 'System for multi-branch organizations where Equipment orders are consolidated and overseen by a Global Manager. The Branch Managers can create, track, and confirm equipment orders, while a Global Manager oversees all branches, consolidates orders, and coordinates with suppliers. The Global Manager controls user access, manages equipment availability, and flags certain items for approval before orders are sent externally. *The System is designed primarily in Hebrew. This is an early version of a later system I have developed for a multi-branch clinic.',
    images: [
        ["/images/prj-screenshots/equpment1.png", 'Global Admin Interface: Manage Orders'],
        ["/images/prj-screenshots/equpment2.png", 'Branch Admin Interface: Create Order'],
        ["/images/prj-screenshots/equpment3.png", 'Global Admin Interface: Manage Equpment Items']
    ],
    skills: ['MySQL', 'Django', 'React', 'HTML', 'CSS'],
    gitLink: "https://github.com/MirAdam999/Equpment",
    liveLink: ""
};

export default EqupmentProj;