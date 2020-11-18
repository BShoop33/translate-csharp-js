using System;
using System.Collections.Generic;

namespace insulter
{
    class Program
    {
        static void Main(string[] args)
        {
           try{
           List<string> insults = new List<string>();
                insults.Add("You look like what morning breath smells like."); // adding elements using add() method
                insults.Add("If you tried to give me cpr I would probably throw myself back under water");
                insults.Add("I am not a fan of you");
                insults.Add("You think you're so special...and you are. The fact of your existence is nearly impossible to believe");
                insults.Add("I'd rather walk than be on the same plane as you");
                insults.Add("If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy");
                insults.Add("Do you have to be so...like that?");

            List<int> indexes = new List<int>();
            while(indexes.Count < 3){
                Random r = new Random();
                int candidate = r.Next(0,insults.Count - 1);
                indexes.Add(candidate);
            }

            for(int i=0; i<insults.Count; i++){
                //Console.WriteLine(i);
                int index = indexes[i];
                Console.WriteLine(insults[index]);
            }
            }
            catch{
                
            }
        }
    }
}