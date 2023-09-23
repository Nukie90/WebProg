const questions = [
    {
        "question": "Which one of these is a berry?",
        "answer": [
            {
                "id": "raspberry",
                "pic": "https://www.fast-growing-trees.com/cdn/shop/products/Heritage_Raspberry_1_FGT.jpg",
                "correct": false
            },
            {
                "id": "strawberry",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg",
                "correct": false
            },
            {
                "id": "eggplant",
                "pic": "https://www.harighotra.co.uk/images/Shutterstock/aubergine_560x560.jpg",
                "correct": true
            },
            {
                "id": "tomato",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/220px-Bright_red_tomato_and_cross_section02.jpg",
                "correct": true
            }
        ],
        "explain": "Eggplants and Tomato are classified as berries. Raspberry is an accessory fruit, and strawberry is a false fruit."
    },
    {
        "question": "Which of these countries have never won the FIFA World Cup?",
        "answer": [
            {
                "id": "Brazil",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/9/99/Brazilian_Football_Confederation_logo.svg",
                "correct": false
            },
            {
                "id": "Germany",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Deutscher_Fu%C3%9Fball-Bund_logo.svg",
                "correct": false
            },
            {
                "id": "Spain",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Royal_Spanish_Football_Federation_logo.svg/1200px-Royal_Spanish_Football_Federation_logo.svg.png",
                "correct": false
            },
            {
                "id": "Netherlands",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Netherlands_national_football_team_logo.svg/1200px-Netherlands_national_football_team_logo.svg.png",
                "correct": true
            }
        ],
        "explain": "Netherlands have never won the FIFA World Cup. They have reached the final three times, but lost all of them."
    },
    {
        "question": "Which of the following is not a programming language?",
        "answer": [
            {
                "id": "Rust",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/220px-Rust_programming_language_black_logo.svg.png",
                "correct": false
            },
            {
                "id": "Java",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/220px-Java_programming_language_logo.svg.png",
                "correct": false
            },
            {
                "id": "C",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/220px-C_Programming_Language.svg.png",
                "correct": false
            },
            {
                "id": "Flask",
                "pic": "https://flask.palletsprojects.com/en/2.3.x/_images/flask-horizontal.png",
                "correct": true
            }
        ],
        "explain": "Flask is a web framework for Python, not a programming language."
    },
    {
        "question": "What distro is being used to host the SE Web Programming Server?",
        "answer": [
            {
                "id": "Ubuntu",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/7/76/Ubuntu-logo-2022.svg",
                "correct": true
            },
            {
                "id": "Debian",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Openlogo-debianV2.svg/220px-Openlogo-debianV2.svg.png",
                "correct": false
            },
            {
                "id": "Arch Linux",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Archlinux-logo-standard-version.png",
                "correct": false
            },
            {
                "id": "Fedora",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fedora_logo.svg/220px-Fedora_logo.svg.png",
                "correct": false
            }
        ],
        "explain": "Maybe you could just neofetch the server?"
    },
    {
        "question": "Which one is NOT mobile phone OS?",
        "answer": [
            {
                "id": "Ubuntu",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/7/76/Ubuntu-logo-2022.svg",
                "correct": false
            },
            {
                "id": "Window 10",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Windows_logo_-_2012_%28dark_blue%2C_lines_thinner%29.svg/25px-Windows_logo_-_2012_%28dark_blue%2C_lines_thinner%29.svg.png",
                "correct": false
            },
            {
                "id": "Android",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Android_logo_2023_%28stacked%29.svg/200px-Android_logo_2023_%28stacked%29.svg.png",
                "correct": false
            },
            {
                "id": "macOS",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MacOS_logo.svg/200px-MacOS_logo.svg.png",
                "correct": true
            }
        ],
        "explain": "This is the trick question, and yes everyone here have their own version of Mobile Phone OS. But for Mac it is iOS."
    },
    {
        "question": "Which country is NOT in South East Asia?",
        "answer": [
            {
                "id": "Poland",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/255px-Flag_of_Poland.svg.png",
                "correct": true
            },
            {
                "id": "Brunei",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/255px-Flag_of_Brunei.svg.png",
                "correct": false
            },
            {
                "id": "Myanmar",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/125px-Flag_of_Myanmar.svg.png",
                "correct": false
            },
            {
                "id": "Philippines",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/255px-Flag_of_the_Philippines.svg.png",
                "correct": true
            }
        ],
        "explain": "The red and white flag here is not of Indonesia. It is the flag of Poland."
    },
    {
        "question": "Which country is the second largest country in the world by land mass?",
        "answer": [
            {
                "id": "USA",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png",
                "correct": false
            },
            {
                "id": "Canada",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/255px-Flag_of_Canada_%28Pantone%29.svg.png",
                "correct": true
            },
            {
                "id": "China",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png",
                "correct": false
            },
            {
                "id": "Russia",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png",
                "correct": false
            }
        ],
        "explain": "These 4 countries are in fact, the top 4 in term of the land mass. First is Russia. Second is Canada. Third is USA. And Forth is China"
    },
    {
        "question": "Which country is in the same time zone as Thailand?",
        "answer": [
            {
                "id": "Russia",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png",
                "correct": false
            },
            {
                "id": "Canada",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/255px-Flag_of_Canada_%28Pantone%29.svg.png",
                "correct": false
            },
            {
                "id": "Vietnam",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/255px-Flag_of_Vietnam.svg.png",
                "correct": true
            },
            {
                "id": "Myanmar",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/125px-Flag_of_Myanmar.svg.png",
                "correct": false
            }
        ],
        "explain": "Vietnam is the only one here that strictly share time zone with Thailand. While Russia follow 11 time zones."
    },
    {
        "question": "Which country have a city name Paris?",
        "answer": [
            {
                "id": "Russia",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png",
                "correct": false
            },
            {
                "id": "USA",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png",
                "correct": true
            },
            {
                "id": "Vietnam",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/255px-Flag_of_Vietnam.svg.png",
                "correct": false
            },
            {
                "id": "Poland",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/255px-Flag_of_Poland.svg.png",
                "correct": false
            }
        ],
        "explain": "Aside from France, USA and Canada have a city name Paris."
    },
    {
        "question": "Which province does not have 'Chaloem Phra Kiat District'?",
        "answer": [
            {
                "id": "Nan",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/%E0%B8%98%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%99.svg/100px-%E0%B8%98%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%99.svg.png",
                "correct": false
            },
            {
                "id": "Buriram",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_Buriram_Province.png/100px-Flag_Buriram_Province.png",
                "correct": true
            },
            {
                "id": "Saraburi",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Provincial_Flag_of_Saraburi.svg/100px-Provincial_Flag_of_Saraburi.svg.png",
                "correct": false
            },
            {
                "id": "Khonkaen",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_Khonkaen_Province.png/100px-Flag_Khonkaen_Province.png",
                "correct": true
            }
        ],
        "explain": "In all 4 provinces, only Khonkaen do not have 'Chaloem Phra Kiat District'."
    },
    {
        "question": "Which university is not in England?",
        "answer": [
            {
                "id": "Imperial College London",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shield_of_Imperial_College_London.svg/160px-Shield_of_Imperial_College_London.svg.png",
                "correct": false
            },
            {
                "id": "Edge Hill University",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Edge_Hill_University_Crest.png/200px-Edge_Hill_University_Crest.png",
                "correct": false
            },
            {
                "id": "University of Glasgow",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/UofG_Coat_of_Arms.png/150px-UofG_Coat_of_Arms.png",
                "correct": true
            },
            {
                "id": "Kingston University",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Kingston_university_coat_of_arms.png/220px-Kingston_university_coat_of_arms.png",
                "correct": false
            }
        ],
        "explain": "All of these are in United Kingdom, but only University of Glasgow is in Scotland and NOT England."
    },
    {
        "question": "Which of the following is not a Game Engine?",
        "answer": [
            {
                "id": "Godot",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Godot_logo.svg/200px-Godot_logo.svg.png",
                "correct": false
            },
            {
                "id": "Source 2",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Source_engine_logo_and_wordmark.svg/120px-Source_engine_logo_and_wordmark.svg.png",
                "correct": false
            },
            {
                "id": "Unreal",
                "pic": "https://media.moddb.com/images/downloads/1/251/250122/Unreal_Tournament_GOTY_Edition_H.2.png",
                "correct": true
            },
            {
                "id": "Adventure Game Studio",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bigblue_cup.PNG/120px-Bigblue_cup.PNG",
                "correct": false
            }
        ],
        "explain": "Unreal Engine is an engine, yes. But that is Unreal Tournament, the game. This is a trick question."
    },
    {
        "question": "Who developed C++?",
        "answer": [
            {
                "id": "Bjarne Stroustrup",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Bjarne-stroustrup_%28cropped%29.jpg",
                "correct": true
            },
            {
                "id": "Dennis Ritchie",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dennis_Ritchie_2011.jpg/220px-Dennis_Ritchie_2011.jpg",
                "correct": false
            },
            {
                "id": "Ken Thompson",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Ken-Thompson-2019.png",
                "correct": false
            },
            {
                "id": "Linus Torvalds",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/220px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg",
                "correct": false
            }
        ],
        "explain": "Bjarne Stroustrup developed C++ in 1979. Dennis Ritchie developed C in 1972, Ken Thompson developed Unix in 1969, and Linus Torvalds developed Linux in 1991."
    },
    {
        "question": "Which of these magical girl shows are not suitable for children?",
        "answer": [
            {
                "id": "Cardcaptor Sakura",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Cardcaptor_Sakura_logo.png/220px-Cardcaptor_Sakura_logo.png",
                "correct": false
            },
            {
                "id": "Puella Magi Madoka Magica",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Madoka_magica_logo.svg/220px-Madoka_magica_logo.svg.png",
                "correct": true
            },
            {
                "id": "Sailor Moon",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Sailormoon_logo.png/220px-Sailormoon_logo.png",
                "correct": false
            },
            {
                "id": "PreCure",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Precure_logo.svg/220px-Precure_logo.svg.png",
                "correct": false
            }
        ],
        "explain": "Puella Magi Madoka Magica deals with existentialism, death and cosmic horror, and is not suitable for children."
    },
    {
        "question": "Which of the following is developed by Meta?",
        "answer": [
            {
                "id": "Svelte",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
                "correct": false
            },
            {
                "id": "SolidJS",
                "pic": "https://www.solidjs.com/img/logo/without-wordmark/logo.svg",
                "correct": false
            },
            {
                "id": "ReactJS",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png",
                "correct": true
            },
            {
                "id": "VueJS",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png",
                "correct": false
            }
        ],
        "explain": "React was made by 2 guys from Meta and has become one of the most popular web framework the world have ever seen, much to the dismay of sane people."
    },
    {
        "question": "Who ends up with Araragi Koyomi in the end?",
        "answer": [
            {
                "id": "Senjougahara Hitagi",
                "pic": "https://static.wikia.nocookie.net/bakemonogatari1645/images/f/fb/Senjou_owari.jpg",
                "correct": true
            },
            {
                "id": "Hanekawa Tsubasa",
                "pic": "https://static.wikia.nocookie.net/bakemonogatari1645/images/b/be/Bakehane.png",
                "correct": false
            },
            {
                "id": "Hachikuji Mayoi",
                "pic": "https://images.gamebanana.com/img/ss/mods/5f7f72255f2b8.jpg",
                "correct": false
            },
            {
                "id": "Kanbaru Suruga",
                "pic": "https://i.pinimg.com/originals/1a/55/67/1a55674525690d04f03c57fcb67e42a7.png",
                "correct": false
            }
        ],
        "explain": "According to the latest novel, Araragi Koyomi ends up with Senjougahara Hitagi."
    },
    {
        "question": "Who is the bassist of the band Hokago Tea-Time?",
        "answer": [
            {
                "id": "Yui Hirasawa",
                "pic": "https://static.wikia.nocookie.net/k-on/images/4/4b/Yui_Hirasawa_new_mugshot.png",
                "correct": false
            },
            {
                "id": "Mio Akiyama",
                "pic": "https://static.wikia.nocookie.net/k-on/images/1/1d/Mio_Akiyama_new_mugshot.png",
                "correct": true
            },
            {
                "id": "Ritsu Tainaka",
                "pic": "https://static.wikia.nocookie.net/k-on/images/4/40/Ritsu_Tainaka_new_mugshot.png",
                "correct": false
            },
            {
                "id": "Tsumugi Kotobuki",
                "pic": "https://static.wikia.nocookie.net/k-on/images/c/ca/Tsumugi_Kotobuki_new_mughot.png",
                "correct": false
            }
        ],
        "explain": "Simple. Mio plays the bass, Ritsu plays the drums, Yui plays the guitar, and Tsumugi plays the keyboard."
    },
    {
        "question": "Which game that Kazuma Kiryu has made a guest appearance in?",
        "answer": [
            {
                "id": "Project X Zone 2",
                "pic": "https://upload.wikimedia.org/wikipedia/pt/2/23/Project_X_Zone_2_capa.png",
                "correct": true
            },
            {
                "id": "Super Smash Bros. Ultimate",
                "pic": "https://www.nintendo.com/th/switch/aaab/img/product.png",
                "correct": false
            },
            {
                "id": "Tekken 7",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Official_Tekken_7_Logo.jpg/220px-Official_Tekken_7_Logo.jpg",
                "correct": false
            },
            {
                "id": "Street Fighter V: Arcade Edition",
                "pic": "https://assets1.ignimgs.com/2017/12/11/street-fighter-v-arcade-edition---button-1513021101677.jpg",
                "correct": false
            }
        ],
        "explain": "Kazuma Kiryu has made a guest appearance in Project X Zone 2, along with Goro Majima. He has never appeared in any other games because they don't want him to beat up women."
    },
    {
        "question": "Who has the same voice actress as Chitoge Kirisaki from Nisekoi?",
        "answer": [
            {
                "id": "Ruka Sarashina",
                "pic": "https://static.wikia.nocookie.net/kanojo-okarishimasu/images/d/d4/Ruka_Profile_Pic_(Manga).png",
                "correct": true
            },
            {
                "id": "Chizuru Mizuhara",
                "pic": "https://static.wikia.nocookie.net/kanojo-okarishimasu/images/2/25/Chizuru-Profile-Pic-(Manga).png",
                "correct": false
            },
            {
                "id": "Sumi Sakurasawa",
                "pic": "https://static.wikia.nocookie.net/kanojo-okarishimasu/images/4/43/Sumi_Profile_Pic_(Manga).png",
                "correct": false
            },
            {
                "id": "Mami Nanami",
                "pic": "https://static.wikia.nocookie.net/kanojo-okarishimasu/images/d/d0/Mami_Profile_Pic_(Manga).png",
                "correct": false
            }
        ],
        "explain": "Both Ruka and Chitoge are voiced by Nao Touyama."
    },
    {
        "question": "What is the worst Valorant map?",
        "answer": [
            {
                "id": "Bind",
                "pic": "https://static.wikia.nocookie.net/valorant/images/2/23/Loading_Screen_Bind.png",
                "correct": false
            },
            {
                "id": "Haven",
                "pic": "https://static.wikia.nocookie.net/valorant/images/7/70/Loading_Screen_Haven.png",
                "correct": false
            },
            {
                "id": "Breeze",
                "pic": "https://static.wikia.nocookie.net/valorant/images/1/10/Loading_Screen_Breeze.png",
                "correct": true
            },
            {
                "id": "Icebox",
                "pic": "https://static.wikia.nocookie.net/valorant/images/1/13/Loading_Screen_Icebox.png",
                "correct": false
            }
        ],
        "explain": "Breeze is the worst Valorant map. It's too big and open, and it's not fun to play on."
    },
    {
        "question": "On the first season of Overwatch League, which team whose members are all Korean won the championship?",
        "answer": [
            {
                "id": "London Spitfire",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/London_Spitfire_logo.svg/1200px-London_Spitfire_logo.svg.png",
                "correct": true
            },
            {
                "id": "New York Excelsior",
                "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/New_York_Excelsior_%28logo%29.svg/1200px-New_York_Excelsior_%28logo%29.svg.png",
                "correct": false
            },
            {
                "id": "Seoul Dynasty",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Seoul_Dynasty_logo.svg/1200px-Seoul_Dynasty_logo.svg.png",
                "correct": false
            },
            {
                "id": "Shanghai Dragons",
                "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Shanghai_Dragons_logo.svg/1175px-Shanghai_Dragons_logo.svg.png",
                "correct": false
            }
        ],
        "explain": "London Spitfire won the first season of Overwatch League. They are the only team whose members are all Korean despite being based in London."
    },
    {
        "question": "Which of the following anime was voted 10/10 by SpiralNuggets on MyAnimeList?",
        "answer": [
            {
                "id": "Lycoris Recoil",
                "pic": "https://static.wikia.nocookie.net/yuripedia/images/a/a7/Lycoris-Recoil-teaser-visual-1.jpg",
                "correct": true
            },
            {
                "id": "Asobi Asobase",
                "pic": "https://m.media-amazon.com/images/M/MV5BZTBlOTMyNzItNDc1OC00MTg0LThkYmQtOTg5NTI4NjAwNDIxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
                "correct": false
            },
            {
                "id": "Spy X Family",
                "pic": "https://m.media-amazon.com/images/M/MV5BNTA2NDRmNzQtMTE2Yi00MThlLThmMjAtYzQ4MjNkMjc1NGEzXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_QL75_UY281_CR3,0,190,281_.jpg",
                "correct": false
            },
            {
                "id": "Miss Kobayashi's Dragon Maid S",
                "pic": "https://www.kaorinusantara.or.id/wp-content/uploads/2021/06/photo_2021-06-05_19-36-01.jpg",
                "correct": false
            }
        ],
        "explain": "<img src='https://pbs.twimg.com/media/FCJ3cU0VQAMAGAa.jpg?name=orig' alt='Lycoris Recoil 10/10' title='SpiralNuggets only bought cosplay outfits from the 10/10 animes and he has Chisato costume.' width='300px'>"
    },
    {
        "question": "Which game has Gruppa Krovi in it's soundtrack?",
        "answer": [
            {
                "id": "Call of Duty: Black Ops Cold War",
                "pic": "https://static.wikia.nocookie.net/callofduty/images/f/ff/Keyart_Promo_BOCW.jpg",
                "correct": false
            },
            {
                "id": "S.T.A.L.K.E.R.: Call of Pripyat",
                "pic": "https://m.media-amazon.com/images/M/MV5BNTNkOWFiZDQtODdjZi00YTE5LTg0MjItMWM0NWEwMzc3NmUyXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
                "correct": false
            },
            {
                "id": "World In Conflict",
                "pic": "https://delistedgames.com/wp-content/uploads/2020/04/worldinconflict.jpg",
                "correct": false
            },
            {
                "id": "Grand Theft Auto IV",
                "pic": "https://m.media-amazon.com/images/M/MV5BYThjZGVhMzktZjRlNS00NTcwLTk4ZjktMWUzMmU3MTM4YThmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
                "correct": true
            }
        ],
        "explain": "Gruppa Krovi is a song by Kino, a Russian rock band. It is featured in Grand Theft Auto IV under Vladivostok FM."
    },
    {
        "question": "Which rifle is used in the longest distance confirmed kill, at 3.5 km?",
        "answer": [
            {
                "id": "Accuracy International Arctic Warfare",
                "pic": "https://special-ops.org/wp-content/uploads/Accuracy-International-Arctic-Warfare-bolt-action-sniper-rifle-scaled.jpeg",
                "correct": false
            },
            {
                "id": "McMillan Tac-50",
                "pic": "https://topwar.ru/uploads/posts/2020-09/1598919727_tac-50_2.jpg",
                "correct": true
            },
            {
                "id": "Barrett M82A1",
                "pic": "https://fs.airsoft.in.th/img/show.php?file=NtlF2GATbK4PCr6j.jpg",
                "correct": false
            },
            {
                "id": "CheyTac Intervention",
                "pic": "https://inwfile.com/s-dc/9yqt3d.jpg",
                "correct": false
            }
        ],
        "explain": "The McMillan Tac-50: Undisclosed JTF-2 Sniper: 3,540 m. AIAW: Craig Harrison: 2,475 m. Barrett M82A1: Undisclosed Australian Commando: 2,815 m. CheyTac Intervention (Unconfirmed): Undisclosed SAS Sniper: 2,500~ m."
    },
    {
        "question": "What have the original Top Gear trio never done?",
        "answer": [
            {
                "id": "Visit Chernobyl Exclusion Zone",
                "pic": "https://img.atlasobscura.com/TVYz8UhWJaQviHDtrSLXCT9CKada1CBmiuVva-tnuhM/rs:fill:580:580:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy84MDBw/eC1QcmlweWF0X0Nl/bnRyYWxTcXVhcmVf/MC5qcGc.jpg",
                "correct": false
            },
            {
                "id": "Drive to the North Pole",
                "pic": "https://www.alluringworld.com/wp-content/uploads/2019/04/6-Alert-Nunavut.jpg",
                "correct": false
            },
            {
                "id": "Operate a sky crane",
                "pic": "https://aviationweek.com/sites/default/files/styles/crop_freeform/public/2021-02/s-64_military-1024x851.jpg",
                "correct": true
            },
            {
                "id": "Enter the Britcar 24 Hour",
                "pic": "https://www.thorneymotorsport.co.uk/old-s-tm/tms/uploads/1/DSC00086_2.jpg",
                "correct": false
            }
        ],
        "explain": "The original Top Gear trio have never operated a sky crane. They have entered the Chernobyl Exclusion Zone (Although this is debatable as Hammond ran out of gas before he had done so) , driven to the North Pole, and entered the 2007 Britcar 24 Hour."
    }
];

// basic display you may add more code here.
let counter = 0;
let quesNum = 0;
let questionNum = document.getElementById('questionNum')
scoretext = document.getElementById('scoretext')
score = 0
scoretext.innerHTML = `Score : ${score}`
let clicked = false
// set the question and answers to the html via DOM
let questionElement = document.getElementById('question');
let ans1Element = document.getElementById('ans1');
let ans2Element = document.getElementById('ans2');
let ans3Element = document.getElementById('ans3');
let ans4Element = document.getElementById('ans4');
let scoreElement = document.getElementById('score');

let nextButton = document.getElementById('next');
nextQuestion();
nextButton.addEventListener('click', nextQuestion);
ans1Element.addEventListener('click', checkAnswer);
ans2Element.addEventListener('click', checkAnswer);
ans3Element.addEventListener('click', checkAnswer);
ans4Element.addEventListener('click', checkAnswer);

function nextQuestion() {
    if (counter < 5) {
        shuffle(questions)
        quesNum += 1
        questionNum.innerHTML = `Question ${quesNum}`
        clicked = false
        let question = questions[counter];
        counter += 1;
        counter %= questions.length; // just prevent the index go out of scope
        answers = question.answer;
        explanation = question.explain;
        questionElement.innerHTML = question.question;
        ans1Element.src = answers[0].pic;
        ans2Element.src = answers[1].pic;
        ans3Element.src = answers[2].pic;
        ans4Element.src = answers[3].pic;
        ans1Element.alt = answers[0].id;
        ans2Element.alt = answers[1].id;
        ans3Element.alt = answers[2].id;
        ans4Element.alt = answers[3].id;
        ans1Element.title = answers[0].id;
        ans2Element.title = answers[1].id;
        ans3Element.title = answers[2].id;
        ans4Element.title = answers[3].id;
        let correct = document.getElementById("correct")
        correct.style.display = 'none'
        let wrong = document.getElementById("wrong")
        wrong.style.display = 'none'
        let explanationElement = document.getElementById("explanation")
        explanationElement.style.display = 'none'
        if (counter == 5){
            nextButton.innerHTML = 'Finish'
        }
    }


}
//check answer as boolean
function checkAnswer(event) {
    if (clicked == false) {
        let answer = event.target.alt;
        let correct = true;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].id == answer) {
                correct = answers[i].correct;
            }
        }
        let correctElement = document.getElementById("correct")
        let wrongElement = document.getElementById("wrong")
        let explanationElement = document.getElementById("explanation")
        if (correct) {
            correctElement.style.removeProperty('display')
            score += 1
            scoretext.innerHTML = `Score : ${score}`
            clicked = true
        } else {
            wrongElement.style.removeProperty('display')
            explanationElement.style.removeProperty('display')
            explanationElement.innerHTML = explanation
            clicked = true
        }
    }
}

//random the array question
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}



