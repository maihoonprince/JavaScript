
        // Scope and Conditional's:-

        var string1 = "This is string";
        var string1 = "This is string2";
        console.log(string1);

        let a = "prince";
        console.log(a);

        const b = "This cannot be  changed";
        // b = "i want to change this"; // this always show error because const element never be changed..
        console.log(b);

        // Conditionals:-

        // 1. if-else condition
        let age = 34;
        if (age > 18) {
            console.log("you can drink water");
        }
        else if (age == 2) {
            console.log("age is 2");
        }
        else {
            console.log("you can drink Cold Drink");
        }

        // 2.Switch case Statement
        const days = 8;
        switch (days) {
            case 1:
                console.log("Push Day");
                break;
            case 2:
                console.log("Pull Day");
                break;
            case 3:
                console.log("Leg + Core");
                break;
            case 4:
                console.log("Push Day");
                break;
            case 5:
                console.log("Pull Day");
                break;
            case 6:
                console.log("Leg + Core");
                break;
            case 7:
                console.log("its your Rest Day");
                break;
            default:
                console.log("Your input is wrong, There are 7 days in week");
                break;
        }