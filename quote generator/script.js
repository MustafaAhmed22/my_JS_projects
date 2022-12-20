                let bodyy =document.body
                const setBg = () => {
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
                        "Silence is the last thing the world will ever hear from me.",
                        "مَن جاءَ مَسجِدي هذا لم يَأتِهِ إلَّا لِخيرٍ يتعلَّمُهُ أو يعلِّمُهُ، فَهوَ بمنزلةِ المجاهِدِ في سبيلِ اللَّهِ، ومن جاءَ لغيرِ ذلِكَ فَهوَ بمنزلةِ الرَّجُلِ ينظرُ إلى متاعِ غيرِهِ",
                        "إِذَا مَاتَ الإنْسَانُ انْقَطَعَ عنْه عَمَلُهُ إِلَّا مِن ثَلَاثَةٍ: إِلَّا مِن صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو له",
                        "فضلُ العلْمِ أحبُّ إِلَيَّ مِنْ فضلِ العبادَةِ، وخيرُ دينِكُمُ الورَعُ"
                    ]
                    var randomItem = quotes[Math.floor(Math.random() * quotes.length)];
                    //console.log(randomItem)
                    let loadimg = [
                       'url("img/1.jpg")',
                        'url("img/2.jpg")',
                        'url("img/3.jpg")',
                        'url("img/4.jpg")',
                        'url("img/5.jpg")',
                        'url("img/6.jpg")',
                        'url("img/7.jpg")'
                    ]
                    /*
                    loadimg[1] = '\2.jpg',
                    loadimg[0] = '\1.jpg',
                    loadimg[2] = '\3.jpg',
                    loadimg[3] = '\4.jpg',
                    loadimg[4] = '\5.jpg',
                    loadimg[5] = '\6.jpg',
                    loadimg[6] = '\7.jpg',
                    */
                    let rand = loadimg[Math.floor(Math.random() * loadimg.length)];
                        console.log(rand)
                        //let path = 'C:\Users\mostafa\Documents\GitHub\my_JS_projects\quote generator\img\\'
                    //function imgRandom() {}
                    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    document.querySelector('.container').style.backgroundColor = "#" + randomColor;
                    document.querySelector('#genNew').style.backgroundColor = "#" + randomColor;
                    document.querySelector('.quote').textContent = randomItem
                    //let image = new Image()
                    //image.src =path+rand
                    bodyy.style.backgroundImage = rand

                }
                genNew.addEventListener("click", setBg);
                setBg();

