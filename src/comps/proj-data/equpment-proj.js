import '../pc/projectpage_comps/project.css'

const EqupmentProj = {
    title: "Equpment Orders Managment System",
    about: <div id='equpment-proj-about'>
        <p>
            System for multi-branch organizations where Equipment orders are consolidated and overseen by a Global Manager.
            The System features two types of users: Branch Manager and Global Manager.
            The Branch Managers can create, track, and confirm equipment orders, while a Global Manager oversees all branches,
            consolidates orders, and coordinates with suppliers.
            In addition, the Global Manager controls user access, manages equipment availability, and flags certain items for approval
            before externall export of orders to suppliers.
            *The System is designed primarily in Hebrew. This is an early version of a later system that was developed for a multi-branch clinic.
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
    </div>,
    short_descript: 'System for multi-branch organizations where Equipment orders are consolidated, overseen, and exported to external suppliers by a Global Manager. The System features two types of users: Branch Manager and Global Manager. The Branch Managers can create, track, and confirm equipment orders, while a Global Manager oversees all branches, consolidates orders, and coordinates with suppliers. In addition, the Global Manager controls user access, manages equipment availability, and flags certain items for approval before orders are sent externally. *The System is designed primarily in Hebrew. This is an early version of a later system that was developed for a multi-branch clinic.',
    images: [
        ["/images/prj-screenshots/equpment1.png", 'Branch Admin Interface: Create Order'],
        ["/images/prj-screenshots/equpment2.png", 'Update My User Data'],
        ["/images/prj-screenshots/equpment3.png", 'Branch Admin Interface: View an Order'],
        ["/images/prj-screenshots/equpment4.png", 'Global Admin Interface: Manage Orders'],
        ["/images/prj-screenshots/equpment5.png", 'Global Admin Interface: View an Order'],
        ["/images/prj-screenshots/equpment6.png", 'Global Admin Interface: Manage Equipment Items, Create New Item'],
        ["/images/prj-screenshots/equpment7.png", 'Global Admin Interface: View Orders Pending Export to Supplier'],
        ["/images/prj-screenshots/equpment8.png", 'Global Admin Interface: View and Export an Order to Supplier'],
        ["/images/prj-screenshots/equpment9.png", 'Global Admin Interface: Manage Users']
    ],
    video: "/images/prj-screenshots/equpment-video.mp4",
    skills: ['MySQL', 'Django', 'React', 'HTML', 'CSS'],
    gitLink: "https://github.com/MirAdam999/Equpment",
    liveLink: ""
};

export default EqupmentProj;