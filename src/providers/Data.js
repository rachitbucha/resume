const personalDetails = {
    name: 'Rachit Bucha',
    designation: '(Full Stack Developer) ',
    aboutMe: `Full-Stack web developer with 1+ years of experience in designing & developing web applications. 
    I have worked on various JavaScript frameworks such as NodeJS, Angular, NestJs & ReactJs. 
    I also worked on Redis & RabbitMQ.
    Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a full stack developer.`,
    details: [
        { icon: 'fa fa-envelope', html: `<a href="mailto:rachit.rj11@gmail.com" alt="rachit.rj11@gmail.com" target="_blank" rel="noopener noreferrer">rachit.rj11@gmail.com</a>` },
        { icon: 'fa fa-linkedin', html: `<a href="https://www.linkedin.com/in/rachitbucha/" alt="linkedin" target="_blank" rel="noopener noreferrer">linkedin.com/in/rachitbucha/</a>` },
        { icon: 'fa fa-mobile', html: `<a href="tel:+918875717199" alt="+918875717199" target="_blank" rel="noopener noreferrer">+918875717199</a>, <a href="tel:+918875818199" alt="+918875818199" target="_blank" rel="noopener noreferrer">+918875818199</a>` },
        { icon: 'fa fa-calendar', html: `16 Aug 1999` },
    ],
    experience: [
        {
            designation: 'SDE I',
            company: 'NeoDove Technologies',
            duration: '01/2021 - Present',
            location: 'Jaipur',
            desc: `NeoDove is a Telecalling CRM and Sales Engagement Platform that helps small and medium businesses improve their telesales team’s
            productivity and performance to drive higher growth in revenue.`,
            bullets: [
                `Work at Front-Foot as a Lead Developer for Developing the product.`,
                `Designed and Developed the back-end and core integration
                processes.`,
                `Work and Specialised in Debugging & optimizing back-end
                code.`,
                `Increased Security and Given Complete Control to the Admin of the Organization via adding Roles and Permissions to control the entire application.`,
                `Reduced Admin Distribution of Leads Efforts By Implementing auto lead distribution in users, which helped 80% of Admins for eliminating all manual efforts for
                Admin to assign leads to users.`,
                `Made Lead Edit Process Smoother By Implementing Bulk Update Of Lead Information that helped 95% of Admins for Faster Update Of Lead Information.`,
            ]
        }
    ],
    educations: [
        {
            name: 'MCA',
            college: 'JECRC University',
            duration: '2019 - 2021',
            location: 'Jaipur',
            stream: 'Master Of Computer Application',
            desc: ''
        },
        {
            name: 'BCA',
            college: 'Goverment Engineering College Bikaner',
            duration: '2016 - 2019',
            location: 'Bikaner',
            stream: 'Bachelor Of Computer Application',
            desc: ''
        }
    ],
    skills: ['Angular', 'React', 'NodeJS', 'NestJS', 'Javascript', 'Postgres', 'Redis', 'RabbitMQ'],
    projects: [
        {
            name: 'NeoDove Web Portal',
            tech: 'Angular, TypeScript',
            desc: `Telecalling CRM and Sales Engagement Platform For Admin and Mangers`,
            link: 'https://app.neodove.com'
        },
        {
            name: 'NeoDove Super Admin',
            tech: 'Angular, TypeScript',
            desc: `Telecalling CRM and Sales Engagement Platform for Internal Team`,
            link: 'https://admin.neodove.com'
        },
        {
            name: 'NeoDove Dialler',
            tech: 'Angular, TypeScript',
            desc: `Telecalling CRM and Sales Engagement Platform for TeleCallers`,
            link: 'https://dial.neodove.com'
        },
        {
            name: 'NeoDove Backend NodeJs',
            tech: 'NodeJs, PostgreSQL',
            desc: `Telecalling CRM and Sales Engagement Platform Backend`,
            link: ''
        },
        {
            name: 'NeoDove Backend NestJs',
            tech: 'NestJs, PostgreSQL',
            desc: `Telecalling CRM and Sales Engagement Platform Backend`,
            link: ''
        },
        {
            name: 'Group Chat Application',
            tech: 'NodeJs, Socket.IO',
            desc: `Group Chat Application, Multiple Users Chat and Share their Location`,
            link: 'https://rachit-node-chat-app.herokuapp.com'
        },
        {
            name: 'Wheather ForeCast Application',
            tech: 'NodeJs',
            desc: `Applicaton for Getting Latest Wheather ForeCast`,
            link: 'https://rachit-wheather-app.herokuapp.com'
        },
        {
            name: 'Student Profile Application',
            tech: 'Angular',
            desc: `Platform For View and Search Student Profiles`,
            link: 'https://github.com/rachitbucha/student-profiles'
        },
        {
            name: 'Task Management Portal',
            tech: 'NestJs',
            desc: `Task Management Platform`,
            link: 'https://github.com/rachitbucha/task-management-backend'
        },
        {
            name: 'Resturant Management CRM',
            tech: 'Laravel',
            desc: `Resturant Management Platform`,
            link: 'https://github.com/rachitbucha/restaurant'
        }
    ],
}




module.exports = personalDetails;