// git install/git bash
// vs code

// git is version control system that helps to track changes in code 
// property:
// popular
// free and Open Source
//  fast and scalable 

// after installaion
// configuration=>
//         username=>      git config --global user.name "hitech"
//         email=>       git config --global user.email "shamshad20598@gamil.com"
//                       git config --list
              


// _______________________________
// untracked ===> new files that git does not track
// modified ====> changed in files 
// staged ====>add , when we add code 
// unmodified      ====    


// commands for first time when repo is created and want to send our code to gitgub repo
// …or create a new repository on the command line
// echo "# new-repo" >> README.md
// git init
// git add README.md   ///git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/SHAMSHAD-HUSAIN/new-repo.git
// git push -u origin main


// …or push an existing repository from the command line
// git remote add origin https://github.com/SHAMSHAD-HUSAIN/new-repo.git
// git branch -M main
// git push -u origin main

// // others
// git branch //to check branch
// git branch -M main (to rename branch)
// git checkout -b <branch name>  (to create new branch) 
// git checkout  <branch name>  (to navigate ) 
// git checkout -d <branch name>  (to delete new branch) 

// // most used branch
// git add .   adds new or chnaged files in your working directory to the git staging area
// git commit -m "fisrt commit "   it is the record of change
// git push origin <branch name>     it send code on github repo 
// git pull origin <branch name>     it  take code from orgin branch 
//

// TO generate  ssh key
//ssh-keygen -t ed25519 -C "your email "
//then enter thrice
//copy your public sshbkey
//cat ~/ .ssh/id_ed25519.pub | clip    ===for copy 
// clip < ~/.ssh/id_ed25519.pub        ===for copy


//for configuaration 
// email:;;; git config --global user.email "your email"
// username::: git config --global user.name "your name"



