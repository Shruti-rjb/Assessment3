//To count the occurence of certain character in a string

function count(s, c)
    {
        let res = 0;
        for (let i = 0; i < s.length; i++)
        {
            // checking character in string
            if (s.toLowerCase().charAt(i) == c)
            res++;
        }
        return res;
    }
    count('hello','h');
 
		


   
   

