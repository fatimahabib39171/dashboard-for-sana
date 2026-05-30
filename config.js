const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Sana",
  photo: "./img/Sana.jpeg",       // Place your photo in the img/ folder
  music: "./music/Khat.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#9333ea", 
  secondary: "#4f46e5", // Adding an Indigo undertone for complexity
  glow: "0 0 20px rgba(147, 51, 234, 0.5)",
  
  dark: {
    // "Deep Space Mesh" - Using two radial points to create a depth-map
    background: "radial-gradient(circle at 10% 20%, #1e1b4b 0%, #000000 50%), radial-gradient(circle at 90% 80%, #3b0764 0%, #000000 50%)",
    
    // Glassmorphism with an "Inner-Glow" border
    card: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
    backdropFilter: "blur(24px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    text: "#f8fafc",
    mutedText: "#94a3b8"
  },
  
  light: {
    // Soft purple theme
    background:
      "linear-gradient(180deg, #f3e8ff 0%, #ffffff 50%, #ede9fe 100%)",

    card:
      "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(243,232,255,0.85) 100%)",

    backdropFilter: "blur(30px)",
    border: "1px solid rgba(168,85,247,0.4)",
    text: "#3b0764",
    mutedText: "#7e22ce"
  }
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Assalam-o-alaikum",
      subtitle: "A small message for you before the end of a beautiful chapter... ✨",
      holdTime: 7000
    },
  
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🌷✨",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Before you move ahead in life there is something <br>I wanted to say.",
    },
    {
      type: "chatbox",
      message:
        "Before you leave, I wanted to thank you for all the memories, trust, support and kindness you gave me during these past months 💜🖤✨",
        buttonText: "Continue",
    },
    {
      type: "ideas",
      lines: [
        "I wanted to write a simple goodbye message.",
        "But then I thought...",
        "Some people deserve more than a simple goodbye 🌙",
        "Because...",
        "You became a beautiful part of my college journey ✨",
        "You are Special <span> :) </span>",
      ],
      bigLetters: "THANK YOU",
    },
    {
      type: "quote",
      text: "Our paths may change as life goes along but the footprints of beautiful souls stay embedded in our memories forever.",
      author: "— A Grateful Person",
    },
    {
      type: "stars",
      count: 80,
    },
    {
      type: "profile",
      wishTitle: "A New Chapter Begins",
      wishText: "May Allah bless your future with happiness, success, peace and countless opportunities. <br>JazakAllah for being part of my journey ;)",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "No matter where life takes us, I will always remember the memories we shared.<br>Take care of yourself and never stop smiling.",
      replayText: "Click to relive these memories again.",
    },
  ],
};
