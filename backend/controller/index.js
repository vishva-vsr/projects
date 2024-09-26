const db = require('../db/db'); 
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rajupuchcha1729@gmail.com',
         pass: 'sggv ijfr oknk bozw'
    },
    tls: {
        rejectUnauthorized: false
    }
});

async function contacts_Details(req, res) {
    res.header('Content-Type', 'application/json');
    const { name,interest, email, message } = req.body;
    try {
        const pool = await db.pool;
        
        const query = `INSERT INTO user_contacts(Name, Designation, Email, Message) VALUES (?, ?, ?, ?)`;
        const values = [name, interest, email, message];
        
        await pool.execute(query, values); 
        
        console.log('Data inserted successfully');
        res.status(200).send('Data inserted successfully');
        
        const mailOptions = {
            from: 'rajupuchcha1729@gmail.com',
            to: email,
            subject: 'WELCOME TO OUR PROMETHEAN',
            text: `Hi., ${name}  

We Received Your Message,We Will Let You Know As Soon As Posible.
            
Thank you.
            
Best Regards,
Team Promethean`
        };
        const recipientMailOptions = {
            from: email, 
            to: 'rajupuchcha1729@gmail.com', 
            cc: 'cp04081994@gmail.com', 
            subject: name + ` Show's The Interest On Our Promethean` ,
            text: `Hi,

We Have Received A New Message From ${name}
(${interest}).

Message:
${message}

Best Regards,
${name}`
        };
        transporter.sendMail(recipientMailOptions, function(err, info) {
            if (err) {
                console.error('Error sending recipient email:', err);
            } else {
                console.log('Recipient email sent:', info.response);
            }
        }); 
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.error('Error sending email:', err);
            } else {
                console.log('Email sent:', info.response);
            }
        });
        
    } catch (err) {
        console.error('Database connection error:', err);
        res.status(500).send('Database connection error');
    }
}
module.exports = {
    contacts_Details
};
