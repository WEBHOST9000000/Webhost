const park2=[
    "metadata",{
        "title": "Department of wildlife conservation",
        "charset": "utf-8",
        "viewport": "width=device-width, initial-scale=1.0",
        "favicon": {
          "apple_touch_icon": "/apple-touch-icon.png",
          "favicon_32x32": "/favicon-32x32.png",
          "favicon_16x16": "/favicon-16x16.png",
          "manifest": "/site.webmanifest",
          "mask_icon": "/safari-pinned-tab.svg",
          "msapplication_tile_color": "#da532c",
          "theme_color": "#ffffff"
        }
      },

    "main_content", {
      "about_wilpattu_national_park": {
        "description": "Wilpattu National Park, situated in the northwest of Sri Lanka, is another captivating destination for wildlife enthusiasts. It is the largest national park in the country, covering an expansive area of approximately 1,317 square kilometers (or about 508 square miles).Access to Wilpattu National Park is possible from various points, including Colombo and Anuradhapura. Exploring the park requires a safari vehicle, and visitors can embark on guided safaris to enhance their wildlife experience. Wilpattu's natural beauty, coupled with its rich wildlife, makes it a must-visit destination for nature lovers and those seeking an authentic safari experience in Sri Lanka.",
        "topography": "Wilpattu is known for its unique topography, which includes natural lakes known as 'villus.' These water-filled basins contribute to the park's rich biodiversity, providing habitats for a variety of wildlife.",
        "notable_species": "One of the distinctive features of Wilpattu is its population of Sri Lankan leopards, similar to Yala National Park. The park is also home to other iconic species such as elephants, sloth bears, water buffaloes, and an array of bird species."
      },
      "visitor_tips": [
        {
          "tip": "Get acquainted with essential facts about Wilpattu National Park before embarking on your visit.",
          "suggestion": "The dry season, from June to October, is considered the best time to visit Wilpattu National Park when wildlife congregates around water sources."
        }
      ],
      "wildlife_at_wilpattu": {
        "description": "Embark on a wildlife adventure at Wilpattu National Park, home to an array of fascinating species. Encounter the 'Big Four' of Sri Lanka, including Elephants, Leopards, Sloth Bears, and Wild Buffaloes."
      }
    },
    "footer_links", [
      { "text": "Privacy policy", "url": "#" },
      { "text": "Terms of use", "url": "#" }
    ],
    "social_icons", [
      { "icon_class": "fa fa-twitter", "url": "#" },
      { "icon_class": "fa fa-linkedin", "url": "#" },
      { "icon_class": "fa fa-twitch", "url": "#" },
      { "icon_class": "fa fa-github", "url": "#" },
      { "icon_class": "fa fa-youtube", "url": "#" }
    ],
    "copyright","&copy;2021 Iresh tourism industry."
]
// Convert the JSON data to a string
const jsonDataString = JSON.stringify(park2);

// Store the JSON data in localStorage
localStorage.setItem('park2', jsonDataString);

// Check if the data is stored correctly
const storedData = localStorage.getItem('park2');
if (storedData) {
  console.log('Data stored in localStorage successfully.');
} else {
  console.error('Error storing data in localStorage.');
}  

