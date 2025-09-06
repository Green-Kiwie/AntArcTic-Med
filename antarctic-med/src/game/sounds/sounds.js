import { Audio } from "expo-av";

// Preload sounds with require
export const sounds = {
  success: require("../sounds/sounds/success.wav"),
  fail: require("../sounds/sounds/fail.wav"),
  gameover: require("../sounds/sounds/gameover.wav"),
};

export async function playSound(soundFile) {
  try {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    await sound.playAsync();

    // unload when finished
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  } catch (error) {
    console.log("Error playing sound:", error);
  }
}

