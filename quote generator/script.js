let quotes = ["When you have a dream, you've got to grab it and never let go.",
"Nothing is impossible. The word itself says 'I'm possible!'",
 "There is nothing impossible to they who will try.",
   "The bad news is time flies. The good news is you're the pilot.", 
   "Life has got all those twists and turns. You've got to hold on tight and off you go.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
     "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
      "You define your own life. Don't let other people write your script.",
       "You are never too old to set another goal or to dream a new dream.",
        "Spread love everywhere you go.",
         "You can be everything. You can be the infinite amount of things that people are.", 
         "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
          "Belief creates the actual fact.",
           "It is during our darkest moments that we must focus to see the light.",
            "Silence is the last thing the world will ever hear from me."]
            
            var randomItem = quotes[Math.floor(Math.random() * quotes.length)];
            console.log(randomItem)

            
            const setBg = () => {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                document.body.style.backgroundColor = "#" + randomColor;
                color.innerHTML = "#" + randomColor;
            }
            genNew.addEventListener("click", setBg);
            setBg();

