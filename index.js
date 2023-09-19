
        console.log("Hello World, It's Prince Here");

        a = 2
        b = 5
        c = a + b
        console.log(c);

        // variable's
        var num1 = 68;
        var num2 = 98;

        // Operators
        console.log("The value of num1 + num2 is" + " " + (num1 + num2));
        console.log("The value of num1 - num2 is" + " " + (num1 - num2));
        console.log("The value of num1 * num2 is" + " " + (num1 * num2));
        console.log("The value of num1 / num2 is" + " " + (num1 / num2));
        console.log("The value of num1 ** num2 is" + " " + (num1 ** num2));
        console.log("The value of num1++ is" + " " + (num1++));
        console.log("The value of ++num1 is" + " " + (++num1));
        console.log("The value of num1-- is" + " " + (num1--));
        console.log("The value of --num1 is" + " " + (--num1));

        // String and its Methods

        var string = "This";
        var name = "Prince";
        var channel = "codewithprince";
        var message = 'Prince is a good boy';
        var temp = `${name} is a 'nice' person "and" \n he has a channel called ${channel}`;  // \n is use to change line just like c language
        console.log(string)

        console.log(temp)

        var len = name.length;  // string length: 
        console.log("length of name is " + len);
        console.log(`length of name is ${len}`);


        // why to use string in js: 
        var y = new String("this");
        document.getElementById('content').innerHTML = '<h3> this is an h3 heading </h3>'


        var str = "This is string";
        console.log(str)

        // First occurance of a substring
        var position = str.indexOf('is');
        console.log(position);

        // Last occurance os a string
        position = str.lastIndexOf('is');
        console.log(position);

        // Substring from String: 
        // var substr = str.slice(1,9);
        var substr = str.substring(1, 9); // index always starts from 0
        console.log(substr);

        var substr1 = str.substr(1,10);
        console.log(substr1);

        // For replacing in string:-
        var replaced = str.replace('string','Prince')
        console.log(str);
        console.log(replaced);
        console.log(str.toLocaleUpperCase());
        console.log(str.toLocaleLowerCase());

        var newString = str.concat(' new string');
        console.log(newString);

        var strWithWhiteSpace = "    this contains         whitespace      ";
        console.log(strWithWhiteSpace);
        console.log(strWithWhiteSpace.trim());

        // how to extract character 
        var char3 = str.charAt(2);
        console.log(char3);

        console.log(str[3]);