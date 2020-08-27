# reactor
Rules for commit messages:

First row of commit message should be one of the following:
 * Add of <atom | molecule | compound | organism | some sort of short message of what has been added>
 * Update of <atom | molecule | compound | organism | some sort of short message of what has been updated>
 * Remove of <atom | molecule | compound | organism | some sort of short message of what has been Removed>

Second row shold be:
 * Just a empty line

Third row and so forth apply to the following rules:
 * Max 30 characters before line break
 * The rest is up to you! Preferably some sort of description of what has been done
 
 Rules of development:
 
 * If you feel like you need a separate branch to work on and then merge this to master go ahead. However the following rules must be obliged: Branches should have the following naming: dev-reactor-id<some number starting from 1> number 0 is reserved as a testing branch which anyone can use.
 * If you feel like hacking directly on the master branch... No guts no glory!
