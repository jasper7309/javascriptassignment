const readline = require('readline')
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    })
    
    function passwordValidator(password) {
        const pattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return pattern.test(password);
    }
     
    rl.question("Enter your password: ", (password) => {
        if (passwordValidator(password)) {
            console.log("password is valid")
        }else {
            console.log("password is not valid")
        }
        
        rl.close()
    });

