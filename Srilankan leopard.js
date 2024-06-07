const data=[
    "metadata", {
        "title": "Srilankan leopard",
        "viewport": "width=device-width, initial-scale=1.0",
        "charset": "utf-8",
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
      "navigation_links", [
        { "text": "index", "url": "index.html" },
        { "text": "Srilankan wildlife", "url": "Srilankan wildlife.html" },
        { "text": "Department of wildlife conservation", "url": "Department of wildlife conservation.html" },
        { "text": "Srilankan leopard", "url": "Srilankan leopard.html" },
        { "text": "Animals in Srilanka", "url": "Animals in Srilanka.html" },
        { "text": "Yala national park", "url": "Yala national park.html" },
        { "text": "Wilpattu national park", "url": "Wilpattu national park.html" }
      ],
      {
        "venues": [
          {
            "name": "Venue1: Yala national park",
            "description": "Our first stop is Yala, the most famous national park in Sri Lanka. Its fame is largely thanks to the fact that Yala has the most densely populated leopard presence on earth. Around 40 leopards are believed to roam the area, but sightings of these elusive creatures are still very rare."
          },
          {
            "name": "Venue2: Wilpattu national park",
            "description": "Our first stop is Yala, the most famous national park in Sri Lanka. Its fame is largely thanks to the fact that Yala has the most densely populated leopard presence on earth. Around 40 leopards are believed to roam the area, but sightings of these elusive creatures are still very rare."
          },
          {
            "name": "Venue3: Kumana national park",
            "description": "Wilpattu, Sri Lanka’s biggest national park, is located in the north-west lowlands and was once the most famous place for seeing leopards in the country. Leopard sightings have been more common recently and it’s slightly less busy than Yala. The same wildlife roam Wilpattu as at Yala and the animals are slightly less cautious of humans."
          }
        ],
        "threats": [
          {
            "name": "habitat loss and defragmentation",
            "image": "./images/habitat_loss_and_defragmentation_of_leopards.jpeg",
            "description": "Habitat loss and fragmentation is a major threat to the survival of the Sri Lankan leopard. As human settlements expand, the leopard’s natural habitat is increasingly encroached upon, leading to a decrease in their population. Conservation Efforts: Organizations like Leopocon Sri Lanka are working towards the conservation of Sri Lankan leopards and their ecosystems. They aim to raise awareness, conduct research, and safeguard the country’s apex predator.",
            "conservation_link": "https://www.leopocon.org/"
          },
          {
            "name": "Poaching",
            "image": "./images/Poaching_leopards.jpeg",
            "description": "Poaching is another significant threat to the Sri Lankan leopard. Their coats are in high demand, which has led to an increase in illegal hunting activities. Conservation Efforts: The Wilderness and Wildlife Conservation Trust (WWCT) conducts ecological research and raises awareness to help maintain a peaceful human-leopard dynamic and to preserve the habitat in which the leopard can thrive.",
            "conservation_link": "https://www.wwct.org/"
          }
        ]
      },
      
         "footer_links",[
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
      "copyright", "&copy;2021 Iresh tourism industry."
  ]


 // Convert the JSON data to a string
const jsonDataString = JSON.stringify(data);

// Store the JSON data in localStorage
localStorage.setItem('data', jsonDataString);

// Check if the data is stored correctly
const storedData = localStorage.getItem('data');
if (storedData) {
  console.log('Data stored in localStorage successfully.');
} else {
  console.error('Error storing data in localStorage.');
}  