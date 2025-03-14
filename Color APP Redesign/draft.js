const finishes = {
  Celestial: ["#4cc9e2", "#8be4d5", "#804f9e"],
  "Dual Matte": [
    "#f8503f",
    "#fd595a",
    "#ab4f4e",
    "#e9ab6a",
    "#936f47",
    "#4682B4",
    "#452c20",
    "#64646c",
  ],
  "Dual Silk": [
    "#c73337",
    "#f2bd65",
    "#e4b846",
    "#ade3d3",
    "#33948d",
    "#2a8626",
    "#f272c1",
    "#9570ae",
    "#0f649e",
    "#000000",
  ],
  Galaxy: ["#5e2d22", "#045e4d", "#2d2939", "#65646c", "#000000"],
  Glow: ["#004c9b", "#077506"],
  "Gradient Luminous": ["#db4c8d"],
  "Gradient Satin": ["#cdc292"],
  "Gradient Translucent": ["#00ba63"],
  "Gradient Matte": [
    "#ff6ca7",
    "#a0d364",
    "#ff5653",
    "#8ae4f4",
    "#c19c80",
    "#f3c09d",
  ],
  Luminous: ["#8ef431", "#f18f34", "#ef877f", "#399ab9", "#8deb7d"],
  Marble: ["#f75a2c", "#b8b2b2", "#d7c7a5", "#91b9bc", "#e4dfe3"],
  Matte: [
    "#bf3c38",
    "#e83537",
    "#e85154",
    "#c4504a",
    "#de5c40",
    "#FFA500",
    "#f0b726",
    "#f7c745",
    "#f3e95b",
    "#bd9a04",
    "#69be7b",
    "#2e9da3",
    "#71d4f7",
    "#0c6ca8",
    "#123a61",
    "#ed82b4",
    "#e7adbc",
    "#f5bc88",
    "#d2ddbb",
    "#e3c3c8",
    "#a4cfdf",
    "#d5c4ff",
    "#879db5",
    "#6c45a6",
    "#b899dc",
    "#8466ab",
    "#999ba3",
    "#f6f1ed",
    "#9a7161",
    "#826258",
    "#c28553",
    "#cdc0b8",
    "#585d3c",
    "#747b6f",
    "#d3b09a",
    "#32323a",
    "#414040",
    "#2d233f",
  ],
  Metallic: ["#e4a234", "#7b331d", "#27436a", "#8c8e95"],
  Neon: ["#fc4b48", "#fc9a41", "#d43881", "#ef4678", "#ffe000", "#34b94a"],
  Regular: [
    "#f3270a",
    "#ff8a05",
    "#ffd324",
    "#68bb7f",
    "#195596",
    "#6142a0",
    "#000000",
    "#a0a0a2",
    "#708090",
    "#522f14",
    "#e1dcd8",
  ],
  Satin: [
    "#df3033",
    "#8768b3",
    "#FFA500",
    "#FFD700",
    "#84c994",
    "#2f8dcf",
    "#131314",
    "#707986",
    "#66CCCC",
    "#f6f2ef",
  ],
  Silk: [
    "#cc351d",
    "#ebaaa4",
    "#ff9b2b",
    "#FFD700",
    "#727955",
    "#70d6be",
    "#13aebb",
    "#b1ebf2",
    "#006ec6",
    "#4b5adb",
    "#5541a2",
    "#e142a8",
    "#f24c57",
    "#debabd",
    "#f4bd27",
    "#796821",
    "#de8650",
    "#808080",
    "#7e8a9b",
    "#c6d0dc",
    "#484649",
  ],
  Starlight: [
    "#B22222",
    "#b67438",
    "#61575f",
    "#7f9571",
    "#584036",
    "#3f628b",
    "#213731",
    "#1f7491",
    "#a875a5",
  ],
  "Temp shift": ["#85519b", "#e6cd2e"],
  Translucent: ["#e63171", "#ffd826", "#60d7f6", "#b6b2ac", "#f6ede2"],
  "UV Shift": ["#ed914e"],
};

const imageFilenames = {
  Celestial: [
    "Panchroma™ Celestial Blue.jpg",
    "Panchroma™ Celestial Green.jpg",
    "Panchroma™ Celestial Purple​.jpg",
  ],
  "Dual Matte": [
    "Panchroma™ Dual Matte Sunrise (Red-Yellow).png",
    "Panchroma™ Dual Matte Flamingo (Pink-Red).png",
    "Panchroma™ Dual Matte Shadow Red (Black-Red).png",
    "Panchroma™ Dual Matte Foggy Orange (Grey-Orange).png",
    "Panchroma™ Dual Matte Shadow Orange (Orange-Black).png",
    "Panchroma™ Dual Matte Glacier Blue (Ice-Blue).png",
    "Panchroma™ Dual Matte Camouflage (Dark Green-Brown).png",
    "Panchroma™ Dual Matte Shadow Black (White-Black).png",
  ],
  "Dual Silk": [
    "Panchroma™ Dual Silk Sunset (Gold-Red).png",
    "Panchroma™ Dual Silk Banquet (Gold-Magenta).png",
    "Panchroma™ Dual Silk Crown (Gold-Sliver).png",
    "Panchroma™ Dual Silk Jadeite (Green-Chrome).png",
    "Panchroma™ Dual Silk Caribbean Sea (Blue-Green).png",
    "Panchroma™ Dual Silk Chameleon (Yellow-Blue).png",
    "Panchroma™ Dual Silk Aubergine (Lime-Magenta).png",
    "Panchroma™ Dual Silk Sovereign (Gold-Purple).png",
    "Panchroma™ Dual Silk Beluga (Silver-Blue).png",
    "Panchroma™ Dual Yin-Yang.jpg",
  ],
  Galaxy: [
    "Panchroma™ Galaxy Dark Red.png",
    "Panchroma™ Galaxy Dark Green.png",
    "Panchroma™ Galaxy Dark Blue.png",
    "Panchroma™ Galaxy Dark Grey.png",
    "Panchroma™ Galaxy Black.png",
  ],
  Glow: ["Panchroma™ Glow Blue.png", "Panchroma™ Glow Green.png"],
  "Gradient Luminous": ["Panchroma™ Gradient Luminous Rainbow.png"],
  "Gradient Satin": [
    "Panchroma™ Gradient Satin Rainbow.jpg",
    "Panchroma™ Gradient Translucent  Rainbow.jpg",
  ],
  "Gradient Translucent": ["Panchroma™ Gradient Translucent  Rainbow.jpg"],
  "Gradient Matte": [
    "Panchroma™ Gradient Matte Spring.png",
    "Panchroma™ Gradient Matte Summer.png",
    "Panchroma™ Gradient Matte Fall.png",
    "Panchroma™ Gradient Matte Winter.png",
    "Panchroma™ Gradient Matte Cappuccino.png",
    "Panchroma™ Gradient Matte Pastel Rainbow.png",
  ],
  Luminous: [
    "Panchroma™ Luminous Yellow.jpg",
    "Panchroma™ Luminous Orange.png",
    "Panchroma™ Luminous Pink.png",
    "Panchroma™ Luminous Blue.png",
    "Panchroma™ Luminous Green.jpg",
  ],
  Marble: [
    "Panchroma™ Marble Brick.png",
    "Panchroma™ Marble Limestone.png",
    "Panchroma™ Marble Sandstone.png",
    "Panchroma™ Marble Slate Grey.png",
    "Panchroma™ Marble White.png",
  ],
  Matte: [
    "Panchroma™ Matte Army Red.png",
    "Panchroma™ Matte Lava Red.png",
    "Panchroma™ Matte Pastel Watermelon.png",
    "Panchroma™ Matte Mixed Berries (Red-Dark Blue).png",
    "Panchroma™ Matte Muted Red.png",
    "Panchroma™ Matte Sunrise Orange.png",
    "Panchroma™ Matte Pastel Banana.png",
    "Panchroma™ Matte Savannah Yellow.png",
    "Panchroma™ Matte Lime Green.png",
    "Panchroma™ Matte Army Light Green.png",
    "Panchroma™ Matte Forest Green.png",
    "Panchroma™ Matte Arctic Teal.png",
    "Panchroma™ Matte Sky Blue.png",
    "Panchroma™ Matte Sapphire Blue.png",
    "Panchroma™ Matte Army Blue.png",
    "Panchroma™ Matte Lotus Pink.png",
    "Panchroma™ Matte Sakura Pink.png",
    "Panchroma™ Matte Pastel Peach.png",
    "Panchroma™ Matte Pastel Mint.png",
    "Panchroma™ Matte Pastel Candy.png",
    "Panchroma™ Matte Pastel Ice.png",
    "Panchroma™ Matte Pastel Periwinkle.png",
    "Panchroma™ Matte Muted Blue.png",
    "Panchroma™ Matte Electric lndigo.png",
    "Panchroma™ Matte Lavender Purple.png",
    "Panchroma™ Matte Foggy Purple.png",
    "Panchroma™ Matte Fossil Grey.png",
    "Panchroma™ Matte Cotton White.png",
    "Panchroma™ Matte Earth Brown.png",
    "Panchroma™ Matte Army Brown.png",
    "Panchroma™ Matte Wood Brown.png",
    "Panchroma™ Matte Muted White.png",
    "Panchroma™ Matte Army Dark Green.png",
    "Panchroma™ Matte Muted Green.png",
    "Panchroma™ Matte Army Beige.png",
    "Panchroma™ Matte Ash Grey.png",
    "Panchroma™ Matte Charcoal Black.png",
    "Panchroma™ Matte Army Purple.png",
  ],
  Metallic: [
    "Panchroma™ Metallic Gold.png",
    "Panchroma™ Metallic Bronze.jpg",
    "Panchroma™ Metallic Blue.png",
    "Panchroma™ Metallic Silver.png",
  ],
  Neon: [
    "Panchroma™ Neon Red.png",
    "Panchroma™ Neon Orange.png",
    "Panchroma™ Neon Magenta.png",
    "Panchroma™ Neon Pink.png",
    "Panchroma™ Neon Yellow.png",
    "Panchroma™ Neon Green.png",
  ],
  Regular: [
    "Panchroma™ Red.png",
    "Panchroma™ Orange.png",
    "Panchroma™ Yellow.jpg",
    "Panchroma™ Green.png",
    "Panchroma™ Blue.png",
    "Panchroma™ Purple.png",
    "Panchroma™ Black.png",
    "Panchroma™ Grey.png",
    "Panchroma™ Steel Grey.png",
    "Panchroma™ Brown.png",
    "Panchroma™ White.png",
  ],
  Satin: [
    "Panchroma™ Satin Red.png",
    "Panchroma™ Satin Purple.png",
    "Panchroma™ Satin Orange.png",
    "Panchroma™ Satin Yellow.png",
    "Panchroma™ Satin Green.png",
    "Panchroma™ Satin Blue.png",
    "Panchroma™ Satin Black.png",
    "Panchroma™ Satin Grey.png",
    "Panchroma™ Satin Polymaker Teal.png",
    "Panchroma™ Satin White.png",
  ],
  Silk: [
    "Panchroma™ Silk Red.png",
    "Panchroma™ Silk Quartz Pink.png",
    "Panchroma™ Silk Orange.png",
    "Panchroma™ Silk Yellow.png",
    "Panchroma™ Silk Peridot Green.png",
    "Panchroma™ Silk Green.png",
    "Panchroma™ Silk Teal.png",
    "Panchroma™ Silk Light Blue.png",
    "Panchroma™ Silk Blue.png",
    "Panchroma™ Silk Dark Blue.png",
    "Panchroma™ Silk Purple.png",
    "Panchroma™ Silk Magenta.png",
    "Panchroma™ Silk Rose.png",
    "Panchroma™ Silk Rose Gold.png",
    "Panchroma™ Silk Gold.png",
    "Panchroma™ Silk Brass.png",
    "Panchroma™ Silk Bronze.png",
    "Panchroma™ Silk Gunmetal Grey.png",
    "Panchroma™ Silk Chrome.png",
    "Panchroma™ Silk Silver.png",
    "Panchroma™ Silk Black.png",
    "Panchroma™ Silk White.png",
  ],
  Starlight: [
    "Panchroma™ Starlight Mars.jpg",
    "Panchroma™ Starlight Jupiter.png",
    "Panchroma™ Starlight Mercury.png",
    "Panchroma™ Starlight Aurora.png",
    "Panchroma™ Starlight Meteor.png",
    "Panchroma™ Starlight Twilight.png",
    "Panchroma™ Starlight Comet.png",
    "Panchroma™ Starlight Neptune.png",
    "Panchroma™ Starlight Nebula.png",
  ],
  "Temp shift": [
    "Panchroma™ Temp Shift Natural Pink Purple.png",
    "Panchroma™ Temp Shift Green Lime.png",
  ],
  Translucent: [
    "Panchroma™ Translucent Magenta.jpg",
    "Panchroma™ Translucent Yellow.jpg",
    "Panchroma™ Translucent Cyan.jpg",
    "Panchroma™ Translucent Grey.jpg",
    "Panchroma™ Translucent Natural.png",
  ],
  "UV Shift": ["Panchroma™ UV Shift Natural Orange.png"],
};
