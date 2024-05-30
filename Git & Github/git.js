// Git -> free & open source Version Control System 
    // Version Control System -> tools that help to tracks changes in code


    // configuring git
        // git config --global user.name "MAHR"
        // git config --global user.email "someone@gmail.com"
        // git config --list
        
    // Basic commands
        // git clone <- some link->          -> cloning a repository on our local machine
        // git status                        -> displays the state of the code
        // git add <- file name ->           -> adds new or changed files in your working directory to the Git staging area.
        // git commit -m "some message"      -> it is the record of change
        // git commit -am "some message"     -> add and commit together
        // git push origin main              -> upload local repo content to remote repo
        // git init                          -> used to create a new git repo
        // git remote add origin <-link->
        // git remote -v (to verify remote)
        // git branch    (to check branch)
        // git branch -M main         (to rename branch)
        // git push origin main    (to push the code to the main branch)

    // Branch commands
        // git branch                         -> to check branch
        // git branch -M main                 -> to rename branch into main
        // git checkout <-branch name->       -> to navigate
        // git checkout -b <bran name->       -> to create new branch
        // git branch -d <brach name->        -> to detele branch

    // Merging code
        // git diff <-branch name->             -> to compare commits, branches, files and more
        // git merge <-brach name->             -> to merge 2 branches
            // or Create a pull Request 
                // PR -> it lets you tell others about changes you've pushed to a branch in a repository on GitHub
        // git pull origin main                  -> used to fethc and download content from a remote repo and immediately update the local repo to match the content

    
    // Merge conflicts
        // -> an event that takes place when Git in unable to automatically resolve differences in code between two commits


    // Fixing Mistakes
        // Case 1: staged changes   -> add some code which is unnessery
            // git reset <- file name -> 
            // git reset

        // Case 2: commited changes (for one commite)
            // git reset HEAD~1
        
        // Case 3: commited changes (for many commites)
            // git log                                    -> to check all the commit
            // git reset <- commit hash ->
            // git reset --hard <- commit hash ->


    // Forking 
        // -> A fork is a new repository that shares code and visibility settings with the original "upstream" repository
        // -> Fork is a rough copy
        