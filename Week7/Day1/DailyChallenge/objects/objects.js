// Daily challenge : Creating Objects

// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// 1. Create a class named Video. The class should be constructed with the following parameters:
//   - title (a string)
//   - uploader (a string, the person who uploaded it)
//   - time (a number, the duration of the video - in seconds)
// 2. Create a method called watch() which displays a string as follows:
//     “uploader parameter watched all time parameter of title parameter!”
// 3. Instantiate a new Video instance and call the watch() method.
// 4. Instantiate a second Video instance with different values.
// 5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//     Think of the best data structure to save this information within the array.
// 6. Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        console.log(`You watched all ${this.time} seconds of ${this.title} by ${this.uploader}!`);
    }
};

const videoBadgers = new Video('Badgers: animated music video', 'MrWeebl', 73);
const videoIsengard = new Video('They\'re taking the Hobbits to Isengard', 'Erwin Beekveld', 129);

videoBadgers.watch();
videoIsengard.watch();

const mySavedVideos = [
    {
        title: 'Fabulous Secret Powers',
        uploader: 'slackcircus',
        time: 268
    },
    {
        title: 'The Fox',
        uploader: 'Ylvis',
        time: 224
    },
    {
        title: 'Skull Trumpet',
        uploader: 'Piepuppy89',
        time: 2
    },
    {
        title: 'Dancing Baby',
        uploader: 'uninvitedinno',
        time: 24
    },
    {
        title: 'Kitty Cat Dance',
        uploader: 'Steve Ibsen',
        time: 90
    }
]

mySavedVideos.forEach((element) => {
    let currentVideo = new Video(element.title, element.uploader, element.time);
    currentVideo.watch();
});