// Audio Management

// Audio context for generating simple beep sounds
let audioContext;

/**
 * Initialize the audio context
 */
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

/**
 * Play a simple beep sound with given frequency and duration
 * @param {number} frequency - Frequency in Hz
 * @param {number} duration - Duration in milliseconds
 * @param {string} type - Waveform type ('sine', 'square', 'sawtooth', 'triangle')
 */
function playBeep(frequency, duration, type = 'sine') {
    initAudio();
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
}

/**
 * Play click sound (when selecting a prime)
 */
function playClickSound() {
    playBeep(800, 50, 'square');
}

/**
 * Play success sound (when matching the target)
 */
function playSuccessSound() {
    // Play a pleasant ascending sequence
    setTimeout(() => playBeep(523, 100, 'sine'), 0);    // C
    setTimeout(() => playBeep(659, 100, 'sine'), 100);  // E
    setTimeout(() => playBeep(784, 200, 'sine'), 200);  // G
}

/**
 * Play undo sound (when undoing a selection)
 */
function playUndoSound() {
    playBeep(400, 80, 'triangle');
}


