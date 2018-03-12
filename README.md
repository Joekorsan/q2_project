#Who uses it?
Arizonians for Children have asked us to create a full functionality application for parents to be able to see their kids in the foster care system. Currently, the non-profit organization does the verification process on paper and this takes hours to verify. This simple CRUD application can efficiently submit user forms to admin faster than paper can.

#What outputs do they need?
* Verification through email or text?
* After verify, the user then receives a list of appointment dates availability.
* High tiers receive stored information on the user and is able to verify user and appointment time.

#What inputs are needed to generate those outputs?
1. Low tiers:  Form validation for users to enter personal information
2. Mid tiers: approval upon user form and appointment time(s)
3. High tiers: Read/Write Privileges for DB

#A list of technologies that you plan to use
Express, Node, EJS, Session, Knex, Postico, SQL, PG, Body-Parser, Path, LOGGER, CSS Grid, Bootstrap, Mailgun (email verification)

#Feature list
1. Low tiers: Enter personal information/appointment list upon approval
2. Mid tiers: user information and their appointment times. Approval/Disapproval. Revalidation for users if needed.
3. High tiers: user information and their appointment times. Approval/Disapproval, Modify user information.
