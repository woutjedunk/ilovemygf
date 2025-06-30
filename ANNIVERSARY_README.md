# 💕 Anniversary Project - 2 Years Together

A beautiful, romantic web application to celebrate your 2-year anniversary! This project includes:

- 🌟 **Welcome Screen** - A romantic introduction
- 🧠 **Love Quiz** - Customizable questions about your relationship  
- 📸 **Photo Slideshow** - Beautiful slideshow of your memories
- 💖 **Surprise Ending** - A sweet conclusion

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit the URL shown in the terminal

## 🎨 Customization Guide

### 📝 Personalizing the Quiz

Edit `src/components/Quiz.tsx` to customize:

- **Questions**: Update the `questions` array with your own relationship questions
- **Answers**: Make sure to set the correct `correctAnswer` index for each question
- **Fun Facts**: Add personal memories and inside jokes in the `funFact` field

Example:
```typescript
{
  id: 1,
  question: "Where did we have our first date?",
  options: ["Coffee shop downtown", "The park", "That Italian restaurant", "Online video call"],
  correctAnswer: 2, // Index starts at 0, so this is "That Italian restaurant"
  funFact: "You were 20 minutes late but it was worth the wait! ☕️💕"
}
```

### 📸 Adding Your Photos

1. **Add your photos** to the `public/photos/` folder
2. **Update the slideshow** in `src/components/Slideshow.tsx`:

```typescript
const photos: Photo[] = [
  {
    id: 1,
    url: "/photos/first-date.jpg", // Your actual photo filename
    caption: "Our magical first date 💕",
    date: "June 30, 2023"
  },
  // Add more photos...
]
```

**Supported formats**: JPG, PNG, GIF, WebP

### 🎨 Customizing Colors and Styles

The project uses Tailwind CSS with a romantic pink/purple theme. To customize:

- **Colors**: Edit the gradient classes in each component
- **Animations**: Modify `src/App.css` for custom animations
- **Layout**: Adjust Tailwind classes in the components

### 💬 Personalizing Messages

Update these text elements throughout the components:

- Welcome screen messages in `WelcomeScreen.tsx`
- Quiz fun facts in `Quiz.tsx`  
- Photo captions in `Slideshow.tsx`
- Final celebration message in `App.tsx`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── WelcomeScreen.tsx    # Romantic introduction
│   ├── Quiz.tsx             # Interactive love quiz
│   └── Slideshow.tsx        # Photo slideshow
├── App.tsx                  # Main app component
├── App.css                  # Custom styles and animations
└── index.css                # Base styles
```

## 🎁 Deployment Ideas

### For Special Presentation:
1. **Full Screen**: Press F11 for immersive experience
2. **Mobile Friendly**: Works great on tablets/phones too
3. **Share**: Build and host on Netlify, Vercel, or GitHub Pages

### Build for Production:
```bash
npm run build
```

## 💡 Creative Ideas

### 🎵 Add Music
Add background music by including an audio element:
```html
<audio autoPlay loop>
  <source src="/music/your-song.mp3" type="audio/mpeg">
</audio>
```

### 🎮 More Interactive Elements
- Add a timeline of your relationship
- Include a "reasons I love you" section
- Create a future plans/dreams section
- Add a message recording feature

### 📱 Make it a PWA
Add service worker for offline access and "install on phone" capability.

## 🛠️ Technical Details

- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development
- **Responsive design** - works on all devices

## 💝 Tips for the Big Day

1. **Test everything** beforehand
2. **Have a backup** (screenshot the questions, print photos)
3. **Set the mood** with dim lighting and maybe some candles
4. **Take your time** - enjoy each section together
5. **Capture the moment** - record her reactions!

---

Made with 💕 for celebrating love and memories. 

**Happy Anniversary! Here's to many more years together! 🥂**
