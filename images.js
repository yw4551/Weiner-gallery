const images = [
    'images/month pics 1.jpeg',
    'images/month pics 2.jpeg',
    'images/month pics 3(1).jpeg',
    'images/month pics 3(2).jpeg',
    'images/month pics 3(3).jpeg',
    'images/month pics 3(4).jpeg',
    'images/Jerusalem 1.jpeg',
    'images/Jerusalem 2.jpeg',
    'images/Jerusalem 3.jpeg',
    'images/Jerusalem 4.jpeg',
    'images/Jerusalem 5.jpeg',
    'images/Jerusalem 6.jpeg',
    'images/Jerusalem 7.jpeg',
    'images/Jerusalem 8.jpeg',
    'images/Jerusalem 9.jpeg',
    'images/En Hemed 1.jpeg',
    'images/En Hemed 2.jpeg',
    'images/En Hemed 3.jpeg',
    'images/En Hemed 4.jpeg',
    'images/En Hemed 5.jpeg',
    'images/En Hemed 6.jpeg',
    'images/En Hemed 7.jpeg',
    'images/En Hemed 8.jpeg',
    'images/En Hemed 9.jpeg',
    'images/En Hemed 10.jpeg',
    'images/En Hemed 11.jpeg',
    'images/En Hemed 12.jpeg',
    'images/En Hemed 13.jpeg',
    'images/En Hemed 14.jpeg',
    'images/En Hemed 15.jpeg',
    'images/En Hemed 16.jpeg',
    'images/En Hemed 17.jpeg',
    'images/En Hemed 18.jpeg',
    'images/En Hemed 19.jpeg',
    'images/En Hemed 20.jpeg',
    'images/En Hemed 21.jpeg',
    'images/En Hemed 22.jpeg',
    'images/En Hemed 23.jpeg',
    'images/En Hemed 24.jpeg',
    'images/En Hemed 25.jpeg',
    'images/En Hemed 26.jpeg',
    'images/En Hemed 27.jpeg',
    'images/En Hemed 28.jpeg',
    'images/En Hemed 29.jpeg',
    'images/En Hemed 30.jpeg',
    'images/En Hemed 31.jpeg',
    'images/sunset 1.jpeg',
    'images/sunset 2.jpeg',
    'images/sunset 3.jpeg',
    'images/sunset 4.jpeg',
    'images/sunset 5.jpeg',
    'images/sunset 6.jpeg',
    'images/sunset RBS 1.jpeg',
    "images/BBQ with Stefansky's 1.jpeg",
    "images/BBQ with Stefansky's 2.jpeg",
    "images/BBQ with Stefansky's 3.jpeg",
    "images/BBQ with Stefansky's 4.jpeg",
    "images/BBQ with Stefansky's 5.jpeg",
    "images/BBQ with Stefansky's 6.jpeg",
    "images/BBQ with Stefansky's 7.jpeg",
    "images/BBQ with Richenburg's 1.jpeg",
    "images/BBQ with Richenburg's 2.jpeg",
    "images/BBQ with Richenburg's 3.jpeg",
    "images/BBQ with Richenburg's 4.jpeg",
    "images/BBQ with Richenburg's 5.jpeg",
    "images/BBQ with Richenburg's 6.jpeg",
    "images/BBQ with Richenburg's 7.jpeg",
    "images/BBQ with Richenburg's 8.jpeg",
    "images/BBQ with Richenburg's 9.jpeg",
    "images/BBQ with Richenburg's 10.jpeg",
    "images/BBQ with Richenburg's 11.jpeg",
    "images/BBQ with Richenburg's 12.jpeg",
    "images/BBQ with Richenburg's 13.jpeg",
    "images/BBQ with Richenburg's 14.jpeg",
    "images/BBQ with Richenburg's 15.jpeg",
    "images/BBQ with Richenburg's 16.jpeg",
    "images/BBQ with Richenburg's 17.jpeg",
    "images/BBQ with Richenburg's 18.jpeg",
    'images/sines museum 1.jpeg',
    'images/sines museum 2.jpeg',
    'images/sines museum 3.jpeg',
    'images/sines museum 4.jpeg',
    'images/sines museum 5.jpeg',
    'images/sines museum 6.jpeg',
    'images/sines museum 7.jpeg',
    'images/sines museum 8.jpeg',
    'images/sines museum 9.jpeg',
    'images/sines museum 10.jpeg',
    'images/sines museum 11.jpeg',
    'images/ice skating 1.jpeg',
    'images/ice skating 2.jpeg',
    'images/ice skating 3.jpeg',
    'images/ice skating 4.jpeg',
    'images/ice skating 5.jpeg',
    'images/ice skating 6.jpeg',
    'images/ice skating 7.jpeg',
    'images/ice skating 8.jpeg',
    'images/ice skating 9.jpeg',
    'images/ice skating 10.jpeg',
    'images/ice skating 11.jpeg',
    'images/ice skating 12.jpeg',
    'images/ice skating 13.jpeg',
    'images/ice skating 14.jpeg',
    'images/ice skating 15.jpeg',
    'images/ice skating 16.jpeg',
    'images/old city 1.jpeg',
    'images/old city 2.jpeg',
    'images/old city 3.jpeg',
    'images/old city 4.jpeg',
    'images/old city 5.jpeg',
    'images/old city 6.jpeg',
    'images/old city 7.jpeg',
    'images/old city 8.jpeg',
    'images/eilat 1.jpeg',
'images/eilat 2.jpeg',
'images/eilat 3.jpeg',
'images/eilat 4.jpeg',
'images/eilat 5.jpeg',
'images/eilat 6.jpeg',
'images/eilat 7.jpeg',
'images/eilat 8.jpeg',
'images/Neptune Hotel Eilat 1.jpeg',
'images/Neptune Hotel Eilat 2.jpeg',
'images/Neptune Hotel Eilat 3.jpeg',
'images/Neptune Hotel Eilat 4.jpeg',
'images/Neptune Hotel Eilat 5.jpeg',
'images/Neptune Hotel Eilat 6.jpeg',
'images/Neptune Hotel Eilat 7.jpeg',
'images/Neptune Hotel Eilat 8.jpeg',
'images/tayelet eilat 1.jpeg',
'images/tayelet eilat 2.jpeg',
'images/tayelet eilat 3.jpeg',
'images/tayelet eilat 4.jpeg',
'images/tayelet eilat 5.jpeg',
'images/tayelet eilat 6.jpeg',
'images/tayelet eilat 7.jpeg',
'images/tayelet eilat 8.jpeg',
'images/artist 1.jpeg',
'images/artist 2.jpeg',
'images/artist 3.jpeg',
'images/The Underwatter Observatory 1.jpeg',
'images/The Underwatter Observatory 2.jpeg',
'images/The Underwatter Observatory 3.jpeg',
'images/The Underwatter Observatory 4.jpeg',
'images/The Underwatter Observatory 5.jpeg',
'images/The Underwatter Observatory 6.jpeg',
'images/The Underwatter Observatory 7.jpeg',
'images/The Underwatter Observatory 8.jpeg',
'images/The Underwatter Observatory 9.jpeg',
'images/The Underwatter Observatory 10.jpeg',
'images/The Underwatter Observatory 11.jpeg',
'images/The Underwatter Observatory 12.jpeg',
'images/The Underwatter Observatory 13.jpeg',
'images/The Underwatter Observatory 14.jpeg',
'images/The Underwatter Observatory 15.jpeg',
'images/The Underwatter Observatory 16.jpeg',
'images/bot ride 1.jpeg',
'images/bot ride 2.jpeg',
'images/bot ride 3.jpeg',
'images/bot ride 4.jpeg',
'images/bot ride 5.jpeg',
'images/bot ride 6.jpeg',
'images/bot ride 7.jpeg',
'images/burgers bar 1.jpeg',
'images/burgers bar 2.jpeg',
'images/burgers bar 3.jpeg',
'images/camel riding 1.jpeg',
'images/camel riding 2.jpeg',
'images/camel riding 3.jpeg',
'images/camel riding 4.jpeg',
'images/camel riding 5.jpeg',
'images/camel riding 6.jpeg',
'images/camel riding 7.jpeg',
'images/camel riding 8.jpeg',
'images/camel riding 9.jpeg',
'images/camel riding 10.jpeg',
'images/camel riding 11.jpeg',
'images/camel riding 12.jpeg',
'images/camel riding 13.jpeg',
'images/camel riding 14.jpeg',
'images/camel riding 15.jpeg',
'images/dolphin reef 1.jpeg',
'images/dolphin reef 2.jpeg',
'images/dolphin reef 3.jpeg',
'images/dolphin reef 4.jpeg',
'images/dolphin reef 5.jpeg',
'images/dolphin reef 6.jpeg',
'images/dolphin reef 7.jpeg',
'images/dolphin reef 8.jpeg',
'images/eilat sunset 1.jpeg',
'images/eilat sunset 2.jpeg',
'images/eilat sunset 3.jpeg',
'images/eilat sunset 4.jpeg',
'images/eilat sunset 5.jpeg',
'images/eilat sunset 6.jpeg',
'images/eilat sunset 7.jpeg',
'images/eilat sunset 8.jpeg',
'images/eilat sunset 9.jpeg',
'images/shipudei tzipora 1.jpeg',
'images/shipudei tzipora 2.jpeg',
'images/escape room 1.jpeg',
'images/escape room 2.jpeg',
'images/escape room 3.jpeg',
'images/Before pictures 1.jpeg',
'images/Before pictures 2.jpeg',
'images/Before pictures 3.jpeg',
'images/Before pictures 4.jpeg',
'images/Before pictures 5.jpeg',
'images/Before pictures 6.jpeg',
'images/Before pictures 7.jpeg',
'images/Before pictures 8.jpeg',
'images/Before pictures 9.jpeg',
'images/Before pictures 10.jpeg',
'images/Before pictures 11.jpeg',
'images/Before pictures 12.jpeg',
'images/Before pictures 13.jpeg',
'images/Before pictures 14.jpeg',
'images/Before pictures 15.jpeg',
'images/Before pictures 16.jpeg',
'images/Before pictures 17.jpeg',
'images/Before pictures 18.jpeg',
'images/Before pictures 19.jpeg',
'images/Before pictures 20.jpeg',
'images/Before pictures 21.jpeg',
'images/Before pictures 22.jpeg',
'images/Before pictures 23.jpeg',
'images/Before pictures 24.jpeg',
'images/Before pictures 25.jpeg',
'images/Before pictures 26.jpeg',
'images/Before pictures 27.jpeg',
'images/Before pictures 28.jpeg',
'images/yichud room 1.jpeg',
'images/yichud room 2.jpeg',
'images/yichud room 3.jpeg',
'images/After pictures 1.jpeg',
'images/After pictures 2.jpeg',
'images/After pictures 3.jpeg',
'images/After pictures 4.jpeg',
'images/After pictures 5.jpeg',
'images/After pictures 6.jpeg',
'images/Outdoor pics 1.jpeg',
'images/Outdoor pics 2.jpeg',
'images/Outdoor pics 3.jpeg',
'images/Outdoor pics 4.jpeg',
'images/General 1.jpeg',
'images/General 2.jpeg',
'images/General 3.jpeg',
'images/Pics in the park 1.jpeg',
'images/Pics in the park 2.jpeg',
'images/Pics in the park 3.jpeg',
'images/Pics in the park 4.jpeg',
'images/Pics in the park 5.jpeg',
'images/Pics in the park 6.jpeg',
'images/Pics in the park 7.jpeg',
'images/Pics in the park 8.jpeg',
'images/Pics in the park 9.jpeg',
'images/Pics in the park 10.jpeg',
'images/Pics in the park 11.jpeg',
'images/Pics in the park 12.jpeg',
'images/Pics in the park 13.jpeg',
'images/Pics in the park 14.jpeg',
'images/Pics in the park 15.jpeg',
'images/Pics in the park 16.jpeg',
'images/Pics in the park 17.jpeg',
'images/herzliya 1.jpeg',
'images/herzliya 2.jpeg',
'images/herzliya 3.jpeg',
'images/herzliya 4.jpeg',
'images/herzliya 5.jpeg',
'images/herzliya 6.jpeg',
'images/herzliya 7.jpeg',
'images/herzliya 8.jpeg',
'images/herzliya 9.jpeg',
'images/herzliya 10.jpeg',
'images/herzliya 11.jpeg',
'images/herzliya 12.jpeg',
'images/herzliya 13.jpeg',
'images/herzliya 14.jpeg',
'images/The way to Austria 1.jpeg',
'images/The way to Austria 2.jpeg',
'images/The way to Austria 3.jpeg',
'images/The way to Austria 4.jpeg',
'images/The way to Austria 5.jpeg',
'images/The way to Austria 6.jpeg',
'images/The way to Austria 7.jpeg',
'images/The way to Austria 8.jpeg',
'images/The way to Austria 9.jpeg',
'images/The way to Austria 10.jpeg',
'images/Imlauer hotel Vienna 1.jpeg',
'images/Imlauer hotel Vienna 2.jpeg',
'images/Imlauer hotel Vienna 3.jpeg',
'images/Imlauer hotel Vienna 4.jpeg',
'images/Imlauer hotel Vienna 5.jpeg',
'images/Imlauer hotel Vienna 6.jpeg',
'images/Imlauer hotel Vienna 7.jpeg',
'images/Imlauer hotel Vienna 8.jpeg',
'images/Imlauer hotel Vienna 9.jpeg',
'images/Bahur Tov 1.jpeg',
'images/Bahur Tov 2.jpeg',
'images/Bahur Tov 3.jpeg',
'images/Bahur Tov 4.jpeg',
'images/Bahur Tov 5.jpeg',
'images/Vienna 1.jpeg',
'images/Vienna 2.jpeg',
'images/Vienna 3.jpeg',
'images/Vienna 4.jpeg',
'images/Vienna 5.jpeg',
'images/Vienna 6.jpeg',
'images/Vienna 7.jpeg',
'images/Vienna 8.jpeg',
'images/Vienna 9.jpeg',
'images/Vienna 10.jpeg',
'images/Vienna 11.jpeg',
'images/Vienna 12.jpeg',
'images/Vienna 13.jpeg',
'images/Vienna 14.jpeg',
'images/Vienna 15.jpeg',
'images/Vienna 16.jpeg',
'images/Vienna 17.jpeg',
'images/Vienna 18.jpeg',
'images/Vienna 19.jpeg',
'images/Vienna 20.jpeg',
'images/Vienna 21.jpeg',
'images/Vienna 22.jpeg',
'images/Vienna 23.jpeg',
'images/Vienna 24.jpeg',
'images/Vienna 25.jpeg',
'images/Vienna 26.jpeg',
'images/Vienna 27.jpeg',
'images/Vienna 28.jpeg',
'images/Vienna 29.jpeg',
'images/Vienna 30.jpeg',
'images/Vienna 31.jpeg',
'images/Vienna 32.jpeg',
'images/Vienna 33.jpeg',
'images/Vienna 34.jpeg',
'images/Vienna 35.jpeg',
'images/Vienna 36.jpeg',
'images/Vienna 37.jpeg',
'images/Ohel Moshe 1.jpeg',
'images/Prater park 1.jpeg',
'images/Prater park 2.jpeg',
'images/Prater park 3.jpeg',
'images/Prater park 4.jpeg',
'images/Prater park 5.jpeg',
'images/Prater park 6.jpeg',
'images/Prater park 7.jpeg',
'images/Prater park 8.jpeg',
'images/Prater park 9.jpeg',
'images/Prater park 10.jpeg',
'images/Prater park 11.jpeg',
'images/Prater park 12.jpeg',
'images/Prater park 13.jpeg',
'images/Prater park 14.jpeg',
'images/Prater park 15.jpeg',
'images/Prater park 16.jpeg',
'images/Prater park 17.jpeg',
'images/Prater park 18.jpeg',
'images/Prater park 19.jpeg',
'images/Prater park 20.jpeg',
'images/Prater park 21.jpeg',
'images/Prater park 22.jpeg',
'images/Prater park 23.jpeg',
'images/Prater park 24.jpeg',
'images/Prater park 25.jpeg',
'images/Prater park 26.jpeg',
'images/Prater park 27.jpeg',
'images/Prater park 28.jpeg',
'images/Prater park 29.jpeg',
'images/Prater park 30.jpeg',
'images/Prater park 31.jpeg',
'images/Prater park 32.jpeg',
'images/Prater park 33.jpeg',
'images/Prater park 34.jpeg',
'images/Prater park 35.jpeg',
'images/Prater park 36.jpeg',
'images/Prater park 37.jpeg',
'images/Prater park 38.jpeg',
'images/Prater park 39.jpeg',
'images/Prater park 40.jpeg',
'images/Prater park 41.jpeg',
'images/Prater park 42.jpeg',
'images/Prater park 43.jpeg',
'images/Prater park 44.jpeg',
'images/Prater park 45.jpeg',
'images/Prater park 46.jpeg',
'images/Prater park 47.jpeg',
'images/Prater park 48.jpeg',
'images/Prater park 49.jpeg',
'images/Prater park 50.jpeg',
'images/Prater park 51.jpeg',
'images/Prater park 52.jpeg',
'images/Prater park 53.jpeg',
'images/Prater park 54.jpeg',
'images/Prater park 55.jpeg',
'images/Prater park 56.jpeg',
'images/Prater park 57.jpeg',
'images/Prater park 58.jpeg',
'images/Prater park 59.jpeg',
'images/Prater park 60.jpeg',
'images/Prater park 61.jpeg',
'images/Prater park 62.jpeg',
'images/Prater park 63.jpeg',
'images/Prater park 64.jpeg',
'images/Prater park 65.jpeg',
'images/Yudale 1.jpeg',
'images/Yudale 2.jpeg',
'images/Yudale 3.jpeg',
'images/Yudale 4.jpeg',
'images/Yudale 5.jpeg',
'images/Yudale 6.jpeg',
'images/Day trip Austria 1.jpeg',
'images/Day trip Austria 2.jpeg',
'images/Day trip Austria 3.jpeg',
'images/Day trip Austria 4.jpeg',
'images/Day trip Austria 5.jpeg',
'images/Day trip Austria 6.jpeg',
'images/Day trip Austria 7.jpeg',
'images/Day trip Austria 8.jpeg',
'images/Day trip Austria 9.jpeg',
'images/Day trip Austria 10.jpeg',
'images/Day trip Austria 11.jpeg',
'images/Day trip Austria 12.jpeg',
'images/Day trip Austria 13.jpeg',
'images/Day trip Austria 14.jpeg',
'images/Day trip Austria 15.jpeg',
'images/Day trip Austria 16.jpeg',
'images/Day trip Austria 17.jpeg',
'images/Day trip Austria 18.jpeg',
'images/Day trip Austria 19.jpeg',
'images/Day trip Austria 20.jpeg',
'images/Day trip Austria 21.jpeg',
'images/Day trip Austria 22.jpeg',
'images/Day trip Austria 23.jpeg',
'images/Day trip Austria 24.jpeg',
'images/Day trip Austria 25.jpeg',
'images/Day trip Austria 26.jpeg',
'images/Day trip Austria 27.jpeg',
'images/Day trip Austria 28.jpeg',
'images/Day trip Austria 29.jpeg',
'images/Day trip Austria 30.jpeg',
'images/Day trip Austria 31.jpeg',
'images/Day trip Austria 32.jpeg',
'images/Day trip Austria 33.jpeg',
'images/Day trip Austria 34.jpeg',
'images/Alps 1.jpeg',
'images/Alps 2.jpeg',
'images/Alps 3.jpeg',
'images/Alps 4.jpeg',
'images/Alps 5.jpeg',
'images/Alps 6.jpeg',
'images/Alps 7.jpeg',
'images/Alps 8.jpeg',
'images/Alps 9.jpeg',
'images/Alps 10.jpeg',
'images/Alps 11.jpeg',
'images/Alps 12.jpeg',
'images/Alps 13.jpeg',
'images/Alps 14.jpeg',
'images/Alps 15.jpeg',
'images/Alps 16.jpeg',
'images/Alps 17.jpeg',
'images/Alps 18.jpeg',
'images/Alps 19.jpeg',
'images/Alps 20.jpeg',
'images/Alps 21.jpeg',
'images/Alps 22.jpeg',
'images/Alps 23.jpeg',
'images/Alps 24.jpeg',
'images/Alps 25.jpeg',
'images/Alps 26.jpeg',
'images/Alps 27.jpeg',
'images/Alps 28.jpeg',
'images/Alps 29.jpeg',
'images/Alps 30.jpeg',
'images/Alps 31.jpeg',
'images/Alps 32.jpeg',
'images/Alps 33.jpeg',
'images/Alps 34.jpeg',
'images/Alps 35.jpeg',
'images/hallstatt 1.jpeg',
'images/hallstatt 2.jpeg',
'images/hallstatt 3.jpeg',
'images/hallstatt 4.jpeg',
'images/hallstatt 5.jpeg',
'images/hallstatt 6.jpeg',
'images/hallstatt 7.jpeg',
'images/hallstatt 8.jpeg',
'images/hallstatt 9.jpeg',
'images/hallstatt 10.jpeg',
'images/hallstatt 11.jpeg',
'images/hallstatt 12.jpeg',
'images/hallstatt 13.jpeg',
'images/hallstatt 14.jpeg',
'images/hallstatt 15.jpeg',
'images/hallstatt 16.jpeg',
'images/hallstatt 17.jpeg',
'images/hallstatt 18.jpeg',
'images/hallstatt 19.jpeg',
'images/hallstatt 20.jpeg',
'images/hallstatt 21.jpeg',
'images/hallstatt 22.jpeg',
'images/hallstatt 23.jpeg',
'images/mea shearim Vienna 1.jpeg',
'images/mea shearim Vienna 2.jpeg',
'images/mea shearim Vienna 3.jpeg',
'images/mea shearim Vienna 4.jpeg',
'images/mea shearim Vienna 5.jpeg',
'images/mea shearim Vienna 6.jpeg',
'images/YUDALE CAFÉ BAR 1.jpeg',
'images/YUDALE CAFÉ BAR 2.jpeg',
'images/YUDALE CAFÉ BAR 3.jpeg',
'images/YUDALE CAFÉ BAR 4.jpeg',
'images/YUDALE CAFÉ BAR 5.jpeg',
'images/Schönbrunn Palace 1.jpeg',
'images/Schönbrunn Palace 2.jpeg',
'images/Schönbrunn Palace 3.jpeg',
'images/Schönbrunn Palace 4.jpeg',
'images/Schönbrunn Palace 5.jpeg',
'images/Schönbrunn Palace 6.jpeg',
'images/Schönbrunn Palace 7.jpeg',
'images/Schönbrunn Palace 8.jpeg',
'images/Schönbrunn Palace 9.jpeg',
'images/Schönbrunn Palace 10.jpeg',
'images/Schönbrunn Palace 11.jpeg',
'images/Schönbrunn Palace 12.jpeg',
'images/Schönbrunn Palace 13.jpeg',
'images/Schönbrunn Palace 14.jpeg',
'images/Schönbrunn Palace 15.jpeg',
'images/Schönbrunn Palace 16.jpeg',
'images/Schönbrunn Palace 17.jpeg',
'images/Schönbrunn Palace 18.jpeg',
'images/Schönbrunn Palace 19.jpeg',
'images/Schönbrunn Palace 20.jpeg',
'images/Stadttempel Vienna 1.jpeg',
'images/Stadttempel Vienna 2.jpeg',
'images/Stadttempel Vienna 3.jpeg',
'images/Stadttempel Vienna 4.jpeg',
'images/Back home 1.jpeg',
'images/Back home 2.jpeg',
'images/Back home 3.jpeg',
'images/Back home 4.jpeg',
'images/Back home 5.jpeg',
'images/Back home 6.jpeg',
'images/Back home 7.jpeg',
'images/Back home 8.jpeg',
'images/Back home 9.jpeg',
'images/Back home 10.jpeg',
'images/Back home 11.jpeg',
'images/Back home 12.jpeg',
'images/Back home 13.jpeg',
'images/Back home 14.jpeg',
'images/Back home 15.jpeg',
'images/Back home 16.jpeg',
'images/Back home 17.jpeg',
'images/Back home 18.jpeg',
];

const categories = [
  {
    name: 'All Photos',
    description: 'Phothos of all of the good times together',
    image: 'images/logo.jpeg',
    images: images
  },
  {
    name: 'Wedding',
    description: '💍 Are wedding pictures 💍',
    image: 'images/Outdoor pics 2.jpeg',
    images: [
    'images/Before pictures 1.jpeg',
    'images/Before pictures 2.jpeg',
    'images/Before pictures 3.jpeg',
    'images/Before pictures 4.jpeg',
    'images/Before pictures 5.jpeg',
    'images/Before pictures 6.jpeg',
    'images/Before pictures 7.jpeg',
    'images/Before pictures 8.jpeg',
    'images/Before pictures 9.jpeg',
    'images/Before pictures 10.jpeg',
    'images/Before pictures 11.jpeg',
    'images/Before pictures 12.jpeg',
    'images/Before pictures 13.jpeg',
    'images/Before pictures 14.jpeg',
    'images/Before pictures 15.jpeg',
    'images/Before pictures 16.jpeg',
    'images/Before pictures 17.jpeg',
    'images/Before pictures 18.jpeg',
    'images/Before pictures 19.jpeg',
    'images/Before pictures 20.jpeg',
    'images/Before pictures 21.jpeg',
    'images/Before pictures 22.jpeg',
    'images/Before pictures 23.jpeg',
    'images/Before pictures 24.jpeg',
    'images/Before pictures 25.jpeg',
    'images/Before pictures 26.jpeg',
    'images/Before pictures 27.jpeg',
    'images/Before pictures 28.jpeg',
    'images/yichud room 1.jpeg',
    'images/yichud room 2.jpeg',
    'images/yichud room 3.jpeg',
    'images/After pictures 1.jpeg',
    'images/After pictures 2.jpeg',
    'images/After pictures 3.jpeg',
    'images/After pictures 4.jpeg',
    'images/After pictures 5.jpeg',
    'images/After pictures 6.jpeg',
    'images/Outdoor pics 1.jpeg',
    'images/Outdoor pics 2.jpeg',
    'images/Outdoor pics 3.jpeg',
    'images/Outdoor pics 4.jpeg'
      ]
},
  {
    name: 'Austria',
    description: '✈A fun trip to Austria️✈️',
    image: 'images/Alps 16.jpeg',
    images: [
        'images/The way to Austria 1.jpeg',
        'images/The way to Austria 2.jpeg',
        'images/The way to Austria 3.jpeg',
        'images/The way to Austria 4.jpeg',
        'images/The way to Austria 5.jpeg',
        'images/The way to Austria 6.jpeg',
        'images/The way to Austria 7.jpeg',
        'images/The way to Austria 8.jpeg',
        'images/The way to Austria 9.jpeg',
        'images/The way to Austria 10.jpeg',
        'images/Imlauer hotel Vienna 1.jpeg',
        'images/Imlauer hotel Vienna 2.jpeg',
        'images/Imlauer hotel Vienna 3.jpeg',
        'images/Imlauer hotel Vienna 4.jpeg',
        'images/Imlauer hotel Vienna 5.jpeg',
        'images/Imlauer hotel Vienna 6.jpeg',
        'images/Imlauer hotel Vienna 7.jpeg',
        'images/Imlauer hotel Vienna 8.jpeg',
        'images/Imlauer hotel Vienna 9.jpeg',
        'images/Bahur Tov 1.jpeg',
        'images/Bahur Tov 2.jpeg',
        'images/Bahur Tov 3.jpeg',
        'images/Bahur Tov 4.jpeg',
        'images/Bahur Tov 5.jpeg',
        'images/Vienna 1.jpeg',
        'images/Vienna 2.jpeg',
        'images/Vienna 3.jpeg',
        'images/Vienna 4.jpeg',
        'images/Vienna 5.jpeg',
        'images/Vienna 6.jpeg',
        'images/Vienna 7.jpeg',
        'images/Vienna 8.jpeg',
        'images/Vienna 9.jpeg',
        'images/Vienna 10.jpeg',
        'images/Vienna 11.jpeg',
        'images/Vienna 12.jpeg',
        'images/Vienna 13.jpeg',
        'images/Vienna 14.jpeg',
        'images/Vienna 15.jpeg',
        'images/Vienna 16.jpeg',
        'images/Vienna 17.jpeg',
        'images/Vienna 18.jpeg',
        'images/Vienna 19.jpeg',
        'images/Vienna 20.jpeg',
        'images/Vienna 21.jpeg',
        'images/Vienna 22.jpeg',
        'images/Vienna 23.jpeg',
        'images/Vienna 24.jpeg',
        'images/Vienna 25.jpeg',
        'images/Vienna 26.jpeg',
        'images/Vienna 27.jpeg',
        'images/Vienna 28.jpeg',
        'images/Vienna 29.jpeg',
        'images/Vienna 30.jpeg',
        'images/Vienna 31.jpeg',
        'images/Vienna 32.jpeg',
        'images/Vienna 33.jpeg',
        'images/Vienna 34.jpeg',
        'images/Vienna 35.jpeg',
        'images/Vienna 36.jpeg',
        'images/Vienna 37.jpeg',
        'images/Ohel Moshe 1.jpeg',
        'images/Prater park 1.jpeg',
        'images/Prater park 2.jpeg',
        'images/Prater park 3.jpeg',
        'images/Prater park 4.jpeg',
        'images/Prater park 5.jpeg',
        'images/Prater park 6.jpeg',
        'images/Prater park 7.jpeg',
        'images/Prater park 8.jpeg',
        'images/Prater park 9.jpeg',
        'images/Prater park 10.jpeg',
        'images/Prater park 11.jpeg',
        'images/Prater park 12.jpeg',
        'images/Prater park 13.jpeg',
        'images/Prater park 14.jpeg',
        'images/Prater park 15.jpeg',
        'images/Prater park 16.jpeg',
        'images/Prater park 17.jpeg',
        'images/Prater park 18.jpeg',
        'images/Prater park 19.jpeg',
        'images/Prater park 20.jpeg',
        'images/Prater park 21.jpeg',
        'images/Prater park 22.jpeg',
        'images/Prater park 23.jpeg',
        'images/Prater park 24.jpeg',
        'images/Prater park 25.jpeg',
        'images/Prater park 26.jpeg',
        'images/Prater park 27.jpeg',
        'images/Prater park 28.jpeg',
        'images/Prater park 29.jpeg',
        'images/Prater park 30.jpeg',
        'images/Prater park 31.jpeg',
        'images/Prater park 32.jpeg',
        'images/Prater park 33.jpeg',
        'images/Prater park 34.jpeg',
        'images/Prater park 35.jpeg',
        'images/Prater park 36.jpeg',
        'images/Prater park 37.jpeg',
        'images/Prater park 38.jpeg',
        'images/Prater park 39.jpeg',
        'images/Prater park 40.jpeg',
        'images/Prater park 41.jpeg',
        'images/Prater park 42.jpeg',
        'images/Prater park 43.jpeg',
        'images/Prater park 44.jpeg',
        'images/Prater park 45.jpeg',
        'images/Prater park 46.jpeg',
        'images/Prater park 47.jpeg',
        'images/Prater park 48.jpeg',
        'images/Prater park 49.jpeg',
        'images/Prater park 50.jpeg',
        'images/Prater park 51.jpeg',
        'images/Prater park 52.jpeg',
        'images/Prater park 53.jpeg',
        'images/Prater park 54.jpeg',
        'images/Prater park 55.jpeg',
        'images/Prater park 56.jpeg',
        'images/Prater park 57.jpeg',
        'images/Prater park 58.jpeg',
        'images/Prater park 59.jpeg',
        'images/Prater park 60.jpeg',
        'images/Prater park 61.jpeg',
        'images/Prater park 62.jpeg',
        'images/Prater park 63.jpeg',
        'images/Prater park 64.jpeg',
        'images/Prater park 65.jpeg',
        'images/Yudale 1.jpeg',
        'images/Yudale 2.jpeg',
        'images/Yudale 3.jpeg',
        'images/Yudale 4.jpeg',
        'images/Yudale 5.jpeg',
        'images/Yudale 6.jpeg',
        'images/Day trip Austria 1.jpeg',
        'images/Day trip Austria 2.jpeg',
        'images/Day trip Austria 3.jpeg',
        'images/Day trip Austria 4.jpeg',
        'images/Day trip Austria 5.jpeg',
        'images/Day trip Austria 6.jpeg',
        'images/Day trip Austria 7.jpeg',
        'images/Day trip Austria 8.jpeg',
        'images/Day trip Austria 9.jpeg',
        'images/Day trip Austria 10.jpeg',
        'images/Day trip Austria 11.jpeg',
        'images/Day trip Austria 12.jpeg',
        'images/Day trip Austria 13.jpeg',
        'images/Day trip Austria 14.jpeg',
        'images/Day trip Austria 15.jpeg',
        'images/Day trip Austria 16.jpeg',
        'images/Day trip Austria 17.jpeg',
        'images/Day trip Austria 18.jpeg',
        'images/Day trip Austria 19.jpeg',
        'images/Day trip Austria 20.jpeg',
        'images/Day trip Austria 21.jpeg',
        'images/Day trip Austria 22.jpeg',
        'images/Day trip Austria 23.jpeg',
        'images/Day trip Austria 24.jpeg',
        'images/Day trip Austria 25.jpeg',
        'images/Day trip Austria 26.jpeg',
        'images/Day trip Austria 27.jpeg',
        'images/Day trip Austria 28.jpeg',
        'images/Day trip Austria 29.jpeg',
        'images/Day trip Austria 30.jpeg',
        'images/Day trip Austria 31.jpeg',
        'images/Day trip Austria 32.jpeg',
        'images/Day trip Austria 33.jpeg',
        'images/Day trip Austria 34.jpeg',
        'images/Alps 1.jpeg',
        'images/Alps 2.jpeg',
        'images/Alps 3.jpeg',
        'images/Alps 4.jpeg',
        'images/Alps 5.jpeg',
        'images/Alps 6.jpeg',
        'images/Alps 7.jpeg',
        'images/Alps 8.jpeg',
        'images/Alps 9.jpeg',
        'images/Alps 10.jpeg',
        'images/Alps 11.jpeg',
        'images/Alps 12.jpeg',
        'images/Alps 13.jpeg',
        'images/Alps 14.jpeg',
        'images/Alps 15.jpeg',
        'images/Alps 16.jpeg',
        'images/Alps 17.jpeg',
        'images/Alps 18.jpeg',
        'images/Alps 19.jpeg',
        'images/Alps 20.jpeg',
        'images/Alps 21.jpeg',
        'images/Alps 22.jpeg',
        'images/Alps 23.jpeg',
        'images/Alps 24.jpeg',
        'images/Alps 25.jpeg',
        'images/Alps 26.jpeg',
        'images/Alps 27.jpeg',
        'images/Alps 28.jpeg',
        'images/Alps 29.jpeg',
        'images/Alps 30.jpeg',
        'images/Alps 31.jpeg',
        'images/Alps 32.jpeg',
        'images/Alps 33.jpeg',
        'images/Alps 34.jpeg',
        'images/Alps 35.jpeg',
        'images/hallstatt 1.jpeg',
        'images/hallstatt 2.jpeg',
        'images/hallstatt 3.jpeg',
        'images/hallstatt 4.jpeg',
        'images/hallstatt 5.jpeg',
        'images/hallstatt 6.jpeg',
        'images/hallstatt 7.jpeg',
        'images/hallstatt 8.jpeg',
        'images/hallstatt 9.jpeg',
        'images/hallstatt 10.jpeg',
        'images/hallstatt 11.jpeg',
        'images/hallstatt 12.jpeg',
        'images/hallstatt 13.jpeg',
        'images/hallstatt 14.jpeg',
        'images/hallstatt 15.jpeg',
        'images/hallstatt 16.jpeg',
        'images/hallstatt 17.jpeg',
        'images/hallstatt 18.jpeg',
        'images/hallstatt 19.jpeg',
        'images/hallstatt 20.jpeg',
        'images/hallstatt 21.jpeg',
        'images/hallstatt 22.jpeg',
        'images/hallstatt 23.jpeg',
        'images/mea shearim Vienna 1.jpeg',
        'images/mea shearim Vienna 2.jpeg',
        'images/mea shearim Vienna 3.jpeg',
        'images/mea shearim Vienna 4.jpeg',
        'images/mea shearim Vienna 5.jpeg',
        'images/mea shearim Vienna 6.jpeg',
        'images/YUDALE CAFÉ BAR 1.jpeg',
        'images/YUDALE CAFÉ BAR 2.jpeg',
        'images/YUDALE CAFÉ BAR 3.jpeg',
        'images/YUDALE CAFÉ BAR 4.jpeg',
        'images/YUDALE CAFÉ BAR 5.jpeg',
        'images/Schönbrunn Palace 1.jpeg',
        'images/Schönbrunn Palace 2.jpeg',
        'images/Schönbrunn Palace 3.jpeg',
        'images/Schönbrunn Palace 4.jpeg',
        'images/Schönbrunn Palace 5.jpeg',
        'images/Schönbrunn Palace 6.jpeg',
        'images/Schönbrunn Palace 7.jpeg',
        'images/Schönbrunn Palace 8.jpeg',
        'images/Schönbrunn Palace 9.jpeg',
        'images/Schönbrunn Palace 10.jpeg',
        'images/Schönbrunn Palace 11.jpeg',
        'images/Schönbrunn Palace 12.jpeg',
        'images/Schönbrunn Palace 13.jpeg',
        'images/Schönbrunn Palace 14.jpeg',
        'images/Schönbrunn Palace 15.jpeg',
        'images/Schönbrunn Palace 16.jpeg',
        'images/Schönbrunn Palace 17.jpeg',
        'images/Schönbrunn Palace 18.jpeg',
        'images/Schönbrunn Palace 19.jpeg',
        'images/Schönbrunn Palace 20.jpeg',
        'images/Stadttempel Vienna 1.jpeg',
        'images/Stadttempel Vienna 2.jpeg',
        'images/Stadttempel Vienna 3.jpeg',
        'images/Stadttempel Vienna 4.jpeg',
        'images/Back home 1.jpeg',
        'images/Back home 2.jpeg',
        'images/Back home 3.jpeg',
        'images/Back home 4.jpeg',
        'images/Back home 5.jpeg',
        'images/Back home 6.jpeg',
        'images/Back home 7.jpeg',
        'images/Back home 8.jpeg',
        'images/Back home 9.jpeg',
        'images/Back home 10.jpeg',
        'images/Back home 11.jpeg',
        'images/Back home 12.jpeg',
        'images/Back home 13.jpeg',
        'images/Back home 14.jpeg',
        'images/Back home 15.jpeg',
        'images/Back home 16.jpeg',
        'images/Back home 17.jpeg',
        'images/Back home 18.jpeg'
      ]
  },
  {
    name: 'Eilat',
    description: '✈️All the fun times in Eilat✈️',
    image: 'images/eilat 8.jpeg',
    images: [
      'images/eilat 1.jpeg',
      'images/eilat 2.jpeg',
      'images/eilat 3.jpeg',
      'images/eilat 4.jpeg',
      'images/eilat 5.jpeg',
      'images/eilat 6.jpeg',
      'images/eilat 7.jpeg',
      'images/eilat 8.jpeg',
      'images/Neptune Hotel Eilat 1.jpeg',
      'images/Neptune Hotel Eilat 2.jpeg',
      'images/Neptune Hotel Eilat 3.jpeg',
      'images/Neptune Hotel Eilat 4.jpeg',
      'images/Neptune Hotel Eilat 5.jpeg',
      'images/Neptune Hotel Eilat 6.jpeg',
      'images/Neptune Hotel Eilat 7.jpeg',
      'images/Neptune Hotel Eilat 8.jpeg',
      'images/tayelet eilat 1.jpeg',
      'images/tayelet eilat 2.jpeg',
      'images/tayelet eilat 3.jpeg',
      'images/tayelet eilat 4.jpeg',
      'images/tayelet eilat 5.jpeg',
      'images/tayelet eilat 6.jpeg',
      'images/tayelet eilat 7.jpeg',
      'images/tayelet eilat 8.jpeg',
      'images/artist 1.jpeg',
      'images/artist 2.jpeg',
      'images/artist 3.jpeg',
      'images/The Underwatter Observatory 1.jpeg',
      'images/The Underwatter Observatory 2.jpeg',
      'images/The Underwatter Observatory 3.jpeg',
      'images/The Underwatter Observatory 4.jpeg',
      'images/The Underwatter Observatory 5.jpeg',
      'images/The Underwatter Observatory 6.jpeg',
      'images/The Underwatter Observatory 7.jpeg',
      'images/The Underwatter Observatory 8.jpeg',
      'images/The Underwatter Observatory 9.jpeg',
      'images/The Underwatter Observatory 10.jpeg',
      'images/The Underwatter Observatory 11.jpeg',
      'images/The Underwatter Observatory 12.jpeg',
      'images/The Underwatter Observatory 13.jpeg',
      'images/The Underwatter Observatory 14.jpeg',
      'images/The Underwatter Observatory 15.jpeg',
      'images/The Underwatter Observatory 16.jpeg',
      'images/bot ride 1.jpeg',
      'images/bot ride 2.jpeg',
      'images/bot ride 3.jpeg',
      'images/bot ride 4.jpeg',
      'images/bot ride 5.jpeg',
      'images/bot ride 6.jpeg',
      'images/bot ride 7.jpeg',
      'images/burgers bar 1.jpeg',
      'images/burgers bar 2.jpeg',
      'images/burgers bar 3.jpeg',
      'images/camel riding 1.jpeg',
      'images/camel riding 2.jpeg',
      'images/camel riding 3.jpeg',
      'images/camel riding 4.jpeg',
      'images/camel riding 5.jpeg',
      'images/camel riding 6.jpeg',
      'images/camel riding 7.jpeg',
      'images/camel riding 8.jpeg',
      'images/camel riding 9.jpeg',
      'images/camel riding 10.jpeg',
      'images/camel riding 11.jpeg',
      'images/camel riding 12.jpeg',
      'images/camel riding 13.jpeg',
      'images/camel riding 14.jpeg',
      'images/camel riding 15.jpeg',
      'images/dolphin reef 1.jpeg',
      'images/dolphin reef 2.jpeg',
      'images/dolphin reef 3.jpeg',
      'images/dolphin reef 4.jpeg',
      'images/dolphin reef 5.jpeg',
      'images/dolphin reef 6.jpeg',
      'images/dolphin reef 7.jpeg',
      'images/dolphin reef 8.jpeg',
      'images/eilat sunset 1.jpeg',
      'images/eilat sunset 2.jpeg',
      'images/eilat sunset 3.jpeg',
      'images/eilat sunset 4.jpeg',
      'images/eilat sunset 5.jpeg',
      'images/eilat sunset 6.jpeg',
      'images/eilat sunset 7.jpeg',
      'images/eilat sunset 8.jpeg',
      'images/eilat sunset 9.jpeg',
      'images/shipudei tzipora 1.jpeg',
      'images/shipudei tzipora 2.jpeg',
      'images/escape room 1.jpeg',
      'images/escape room 2.jpeg',
      'images/escape room 3.jpeg'
    ]
  },
  {
    name: 'Month pics',
    description: "❤️Adina's month grouth ❤️",
    image: 'images/month pics 1.jpeg',
    images: [
    'images/month pics 1.jpeg',
    'images/month pics 2.jpeg',
    'images/month pics 3(1).jpeg',
    'images/month pics 3(2).jpeg',
    'images/month pics 3(3).jpeg',
    'images/month pics 3(4).jpeg'
    ]
  },
  {
    name: 'Summer 2024',
    description: '☀️All of the fun time in Jerusamem ☀️',
    image: 'images/old city 4.jpeg',
    images: [
        'images/General 1.jpeg',
        'images/General 2.jpeg',
        'images/General 3.jpeg',
        'images/Pics in the park 1.jpeg',
        'images/Pics in the park 2.jpeg',
        'images/Pics in the park 3.jpeg',
        'images/Pics in the park 4.jpeg',
        'images/Pics in the park 5.jpeg',
        'images/Pics in the park 6.jpeg',
        'images/Pics in the park 7.jpeg',
        'images/Pics in the park 8.jpeg',
        'images/Pics in the park 9.jpeg',
        'images/Pics in the park 10.jpeg',
        'images/Pics in the park 11.jpeg',
        'images/Pics in the park 12.jpeg',
        'images/Pics in the park 13.jpeg',
        'images/Pics in the park 14.jpeg',
        'images/Pics in the park 15.jpeg',
        'images/Pics in the park 16.jpeg',
        'images/Pics in the park 17.jpeg',
        'images/herzliya 1.jpeg',
        'images/herzliya 2.jpeg',
        'images/herzliya 3.jpeg',
        'images/herzliya 4.jpeg',
        'images/herzliya 5.jpeg',
        'images/herzliya 6.jpeg',
        'images/herzliya 7.jpeg',
        'images/herzliya 8.jpeg',
        'images/herzliya 9.jpeg',
        'images/herzliya 10.jpeg',
        'images/herzliya 11.jpeg',
        'images/herzliya 12.jpeg',
        'images/herzliya 13.jpeg',
        'images/herzliya 14.jpeg',
        'images/Jerusalem 1.jpeg',
        'images/Jerusalem 2.jpeg',
        'images/Jerusalem 3.jpeg',
        'images/Jerusalem 4.jpeg',
        'images/Jerusalem 5.jpeg',
        'images/Jerusalem 6.jpeg',
        'images/Jerusalem 7.jpeg',
        'images/Jerusalem 8.jpeg',
        'images/Jerusalem 9.jpeg',
        'images/En Hemed 1.jpeg',
        'images/En Hemed 2.jpeg',
        'images/En Hemed 3.jpeg',
        'images/En Hemed 4.jpeg',
        'images/En Hemed 5.jpeg',
        'images/En Hemed 6.jpeg',
        'images/En Hemed 7.jpeg',
        'images/En Hemed 8.jpeg',
        'images/En Hemed 9.jpeg',
        'images/En Hemed 10.jpeg',
        'images/En Hemed 11.jpeg',
        'images/En Hemed 12.jpeg',
        'images/En Hemed 13.jpeg',
        'images/En Hemed 14.jpeg',
        'images/En Hemed 15.jpeg',
        'images/En Hemed 16.jpeg',
        'images/En Hemed 17.jpeg',
        'images/En Hemed 18.jpeg',
        'images/En Hemed 19.jpeg',
        'images/En Hemed 20.jpeg',
        'images/En Hemed 21.jpeg',
        'images/En Hemed 22.jpeg',
        'images/En Hemed 23.jpeg',
        'images/En Hemed 24.jpeg',
        'images/En Hemed 25.jpeg',
        'images/En Hemed 26.jpeg',
        'images/En Hemed 27.jpeg',
        'images/En Hemed 28.jpeg',
        'images/En Hemed 29.jpeg',
        'images/En Hemed 30.jpeg',
        'images/En Hemed 31.jpeg',
        'images/sunset 1.jpeg',
        'images/sunset 2.jpeg',
        'images/sunset 3.jpeg',
        'images/sunset 4.jpeg',
        'images/sunset 5.jpeg',
        'images/sunset 6.jpeg',
        'images/sunset RBS 1.jpeg',
        "images/BBQ with Stefansky's 1.jpeg",
        "images/BBQ with Stefansky's 2.jpeg",
        "images/BBQ with Stefansky's 3.jpeg",
        "images/BBQ with Stefansky's 4.jpeg",
        "images/BBQ with Stefansky's 5.jpeg",
        "images/BBQ with Stefansky's 6.jpeg",
        "images/BBQ with Stefansky's 7.jpeg",
        "images/BBQ with Richenburg's 1.jpeg",
        "images/BBQ with Richenburg's 2.jpeg",
        "images/BBQ with Richenburg's 3.jpeg",
        "images/BBQ with Richenburg's 4.jpeg",
        "images/BBQ with Richenburg's 5.jpeg",
        "images/BBQ with Richenburg's 6.jpeg",
        "images/BBQ with Richenburg's 7.jpeg",
        "images/BBQ with Richenburg's 8.jpeg",
        "images/BBQ with Richenburg's 9.jpeg",
        "images/BBQ with Richenburg's 10.jpeg",
        "images/BBQ with Richenburg's 11.jpeg",
        "images/BBQ with Richenburg's 12.jpeg",
        "images/BBQ with Richenburg's 13.jpeg",
        "images/BBQ with Richenburg's 14.jpeg",
        "images/BBQ with Richenburg's 15.jpeg",
        "images/BBQ with Richenburg's 16.jpeg",
        "images/BBQ with Richenburg's 17.jpeg",
        "images/BBQ with Richenburg's 18.jpeg",
        'images/sines museum 1.jpeg',
        'images/sines museum 2.jpeg',
        'images/sines museum 3.jpeg',
        'images/sines museum 4.jpeg',
        'images/sines museum 5.jpeg',
        'images/sines museum 6.jpeg',
        'images/sines museum 7.jpeg',
        'images/sines museum 8.jpeg',
        'images/sines museum 9.jpeg',
        'images/sines museum 10.jpeg',
        'images/sines museum 11.jpeg',
        'images/ice skating 1.jpeg',
        'images/ice skating 2.jpeg',
        'images/ice skating 3.jpeg',
        'images/ice skating 4.jpeg',
        'images/ice skating 5.jpeg',
        'images/ice skating 6.jpeg',
        'images/ice skating 7.jpeg',
        'images/ice skating 8.jpeg',
        'images/ice skating 9.jpeg',
        'images/ice skating 10.jpeg',
        'images/ice skating 11.jpeg',
        'images/ice skating 12.jpeg',
        'images/ice skating 13.jpeg',
        'images/ice skating 14.jpeg',
        'images/ice skating 15.jpeg',
        'images/ice skating 16.jpeg',
        'images/old city 1.jpeg',
        'images/old city 2.jpeg',
        'images/old city 3.jpeg',
        'images/old city 4.jpeg',
        'images/old city 5.jpeg',
        'images/old city 6.jpeg',
        'images/old city 7.jpeg',
        'images/old city 8.jpeg'
      ]
  }
];
