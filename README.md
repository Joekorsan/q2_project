#Who uses it?
Arizonians for Children have asked us to create a full functionality application for parents to be able to see their kids in the foster care system. Currently, the non-profit organization does the verification process on paper and this takes hours to verify. This simple CRUD application can efficiently submit user forms to admin faster than paper can.

#What outputs do they need?
* Low tier: parent's aid homepage with scheduled appointment, available times and confirmation code for kiosk.
* Mid tier: Volunteer homepage with schedule times and access to send signup forms to PA.
* High tiers (admin) receive stored information on parents aids, parents, volunteers and has full CRUD functionality.

#What inputs are needed to generate those outputs?
1. Low tiers: Login Form or signup form for PAs to enter in information about parents/agency. Input scheduled times for parents to see their child(ren).
2. Mid tiers: login form for volunteers.
3. Kiosk has form for parents and parents aid to input their info/confirmation code.
4. High tiers: Login form for admin.

#A list of technologies that you plan to use
Express, Node, EJS, Session, Knex, Postico, SQL, PG, Body-Parser, Path, LOGGER, CSS Grid, Bootstrap, Mailgun (email verification)

#Feature list
1. Low tiers: Enter personal information/appointment list.
2. Mid tiers: scheduled times for PA and parents. Approval upon arrival to visitation center.
3. Upon arrival, kiosk with input for confirmation code (for PAs) or quick form for parents.
4. High tiers: PA, parents information and their appointment times. Full CRUD functionality.
