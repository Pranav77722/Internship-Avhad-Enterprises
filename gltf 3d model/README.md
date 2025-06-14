# Pranav 3D Gallery

An interactive 3D web experience with **glassmorphism UI** and **3D models** rendered using **Three.js**.

## 🌟 Features
- 🎥 Animated video background with glassmorphism overlay
- 🌀 Multiple 3D models (switchable)
- 🖱️ Mouse-controlled camera (OrbitControls)
- ⚡ Smooth, modern, responsive design

## 📂 Folder Structure
/project-root
├── index.html
├── css/
│ └── style.css
├── js/
│ └── main.js
└── models/
├── dino/
│ └── scene.gltf
└── eye/
└── scene.gltf

markdown
Copy
Edit

## 🚀 How to Run
1. Clone/download this repository.
2. Place your `.gltf/.glb` models in the `/models/` directory.
3. Open `index.html` in your browser.
4. Click **Switch Model** to toggle between models.

## 📦 3D Formats Comparison

| Feature       | `.glTF / .glb`         | `.OBJ`          |
|---------------|------------------------|-----------------|
| **Type**      | Modern (JSON/Binary)   | Old (Text)      |
| **Size**      | Small & compressed     | Large           |
| **Textures**  | ✅ Supports             | ✅ Supports     |
| **Animations**| ✅ Supported           | ❌ Not supported|
| **Web Usage** | ✅ Optimized for web    | ❌ Slower       |
| **Performance**| Fast loading           | Slow loading    |
| **Recommendation** | ✅ **Use for websites** | ❌ Avoid for web  |
This is the supporting code for [this video](https://youtu.be/lGokKxJ8D2c)
