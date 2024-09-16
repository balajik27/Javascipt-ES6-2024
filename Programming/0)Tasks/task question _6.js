let arr = [34,55,56,657,674,4546];

        let newEvenArr =[];

        let newOddArr =[];

        for (i=0; i<arr.length; i++) {

        if(arr[i] % 2 == 0){

        newEvenArr.push(arr[i]);
        } else {

        newOddArr.push(arr[i]);
        }
        }

        console.log(newEvenArr);

        console.log(newOddArr);