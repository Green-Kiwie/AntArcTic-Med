import { Platform } from "react-native";

const audioCache = {};
export const sounds = {
  success: require("./sounds/success.wav"),
  fail: require("./sounds/fail.wav"),
  gameover: require("./sounds/gameover.wav"),
  music: require("./sounds/lofi_loop.mp3"),
};
const soundsToPreload = ["success", "fail", "gameover", "music"]

function preloadSoundsWeb(soundList) {
  if (Platform.OS === "web") {
    soundList.forEach((key) => {
      if (sounds[key] && !audioCache[key]) {
        const audio = new Audio(sounds[key]);
        audio.load(); 
        audioCache[key] = audio;
      }
    });
  }
}
preloadSoundsWeb(soundsToPreload);


export async function playSound(file) {
  if (Platform.OS === "web") {
    playSoundWeb(file)
  } else {
    // Mobile / Expo
    try {
      const { Audio } = await import("expo-av");
      await playSoundMobile(Audio, file);
      
    } catch (err) {
      console.log("Error playing sound:", err);
    }
  }
}

async function playSoundMobile(Audio, file){
  const { sound } = await Audio.Sound.createAsync(file);
  await sound.playAsync();

  unloadSoundMobile(sound)
}

async function unloadSoundMobile(sound){
  sound.setOnPlaybackStatusUpdate((status) => {
    if (status.didJustFinish) sound.unloadAsync();
  });
}

async function playSoundWeb(file){
  if (audioCache[file]) {
      playCachedWeb(file)
    } else {
      playUncachedWeb(file)
    }
} 

async function playCachedWeb(file){
  const audio = audioCache[file].cloneNode();
  audio.currentTime = 0;
  audio.play().catch((err) => console.log("Error playing sound:", err));
}

async function playUncachedWeb(file){
  const audio = new Audio(file);
  audio.currentTime = 0;
  audio.play().catch((err) => console.log("Error playing sound:", err));
}