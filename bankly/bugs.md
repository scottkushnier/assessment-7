
###Bugs found in Bankly###

 
(1) One of the parameters of the `register` route should be `isAdmin` - so that
a new user can be registered as a user with administrative access.   
`routes/auth.js` 

(2) The `register` route doesn't need to return the hashed password. To return
it presents a needless security vulnerability. Like the /etc/shadow file, this
information should be locked down as much as possible.  
`models/user.js` 

(3) Tokens should be passed in the 'headers' and not in the body or in URL-encoded
parameters where they can be intercepted. Token are the keys to the kingdom. They belong in headers. (It also obviates the need to filter *underscored* variable names in other places in the code.  
`middleware/auth.js` 

(4) Patching should be accessible to a user changing one's own information. The original code allowed only an administrator to modify user info.  
`routes/users.js` 

(5) Patching should not allow a user to change one's own admin status. Also, a user should not be allowed to modify one's username, since that's a key in the SQL database and is, at best: not recommended - at worst: would cause a SQL error.  
`routes/users.js` 

(6) The `authUser` function may properly return if a token was not supplied. This should not cause an 'Unauthorized' error. If the code here does fail, then there's probably a server error going on and that should be reported explicitly.  
`middleware/auth.js`  