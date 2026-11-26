/**
 * Bits & pieces: real photos, screenshots and clips, captioned in her own words.
 * Files live in public/media/bits/. On a laptop each piece lands at x/y (% of the screen) with a
 * width in vw and a tilt; on a phone they become a two-column scrapbook.
 */
export interface Bit {
  src: string;
  /** for videos: the still shown before it plays */
  poster?: string;
  caption: string;
  kind: "photo" | "shot" | "video";
  x: number;
  y: number;
  w: number;
  tilt: number;
  /** height / width of the picture, used to balance the two columns on phones */
  ratio: number;
}

export const BITS: Bit[] = [
  { src: "ironing.webp", caption: "My friend knows I struggle with ironing so they sent me this text", kind: "shot", x: 3, y: 15, w: 22, tilt: -3, ratio: 0.152 },
  { src: "rave-tag.webp", caption: "A rule you just have to believe tbh", kind: "photo", x: 27, y: 12, w: 9, tilt: 4, ratio: 1.767 },
  { src: "cats.mp4", poster: "cats.jpg", caption: "I love cats and they seem to love me just as much", kind: "video", x: 38, y: 13, w: 9, tilt: -2, ratio: 1.779 },
  { src: "friends.webp", caption: "A picture of my friends that I like", kind: "photo", x: 58, y: 11, w: 15, tilt: 3, ratio: 0.750 },
  { src: "book1.webp", caption: "Necessary Fiction, Eloghosa Osunde", kind: "photo", x: 75, y: 13, w: 9, tilt: -4, ratio: 1.333 },
  { src: "book2.webp", caption: "The Bone River, Nkereuwem Albert", kind: "photo", x: 86, y: 18, w: 9, tilt: 5, ratio: 1.333 },
  { src: "rave.mp4", poster: "rave.jpg", caption: "Me at a rave, excitedly showing the shirt my lover got me for my birthday", kind: "video", x: 4, y: 40, w: 15, tilt: 2, ratio: 0.561 },
  { src: "suit.webp", caption: "Me in a suit", kind: "photo", x: 21, y: 55, w: 9, tilt: -5, ratio: 1.333 },
  { src: "quote.webp", caption: "A quote I like to remember", kind: "shot", x: 20, y: 84, w: 22, tilt: 1.5, ratio: 0.193 },
  { src: "rave-ops.webp", caption: "From the time I worked on a team organising a rave: event operations and artist liaison", kind: "photo", x: 76, y: 43, w: 11, tilt: -3, ratio: 1.250 },
  { src: "cat.webp", caption: "Me holding a cat", kind: "photo", x: 88, y: 49, w: 9, tilt: 4, ratio: 1.333 },
  { src: "school.mp4", poster: "school.jpg", caption: "Me, saying something about finishing school", kind: "video", x: 60, y: 66, w: 15, tilt: -2, ratio: 0.564 },
  { src: "colouring.webp", caption: "I love colouring, and this colouring book in particular", kind: "photo", x: 78, y: 70, w: 9, tilt: 3, ratio: 1.333 },
  { src: "beer.webp", caption: "Themed beer parlour date with friends", kind: "photo", x: 5, y: 68, w: 9, tilt: -4, ratio: 1.333 },
  { src: "young.webp", caption: "Young me", kind: "photo", x: 89, y: 75, w: 8, tilt: -6, ratio: 0.751 },
  { src: "class.webp", caption: "Me again!", kind: "photo", x: 44, y: 64, w: 11, tilt: 5, ratio: 0.750 },
  { src: "mirror.webp", caption: "Me", kind: "photo", x: 48.5, y: 17, w: 7, tilt: -3, ratio: 1.778 },
  { src: "new01.webp", caption: "Sah and friends", kind: "photo", x: 29, y: 74, w: 11, tilt: 3, ratio: 0.750 },
  { src: "new02.webp", caption: "#realtalk", kind: "shot", x: 43, y: 90, w: 15, tilt: -1.5, ratio: 0.243 },
  { src: "new03.webp", caption: "A friend sends me songs every time he can and this warmed my heart", kind: "shot", x: 61, y: 87, w: 13, tilt: 2, ratio: 0.380 },
  { src: "new04.webp", caption: "Me!", kind: "photo", x: 14, y: 29, w: 6, tilt: 4, ratio: 1.777 },
  { src: "new05.webp", caption: "An activity I love", kind: "photo", x: 69, y: 29, w: 10, tilt: -3, ratio: 0.750 },
  { src: "new06.webp", caption: "#yearning", kind: "shot", x: 24, y: 27, w: 12, tilt: 2.5, ratio: 0.386 },
  { src: "new07.webp", caption: "Saving Cinema!", kind: "photo", x: 69, y: 52, w: 10, tilt: 3, ratio: 0.563 },
  { src: "new08.webp", caption: "Review from Tayo of cyclewithTayo", kind: "shot", x: 3, y: 89, w: 12, tilt: -2, ratio: 0.225 },
  { src: "new09.webp", caption: "Went swimming training with my friend", kind: "photo", x: 92, y: 29, w: 6.5, tilt: -4, ratio: 1.333 },
  { src: "new10.webp", caption: "#friendship", kind: "photo", x: 33, y: 61, w: 7, tilt: -5, ratio: 1.333 },
  { src: "new11.webp", caption: "#finallydonewithschool", kind: "photo", x: 15, y: 77, w: 6, tilt: 5, ratio: 1.333 },
  { src: "newvid1.mp4", poster: "newvid1.jpg", caption: "#friend", kind: "video", x: 56, y: 79, w: 7, tilt: -3, ratio: 1.333 },
  { src: "newvid2.mp4", poster: "newvid2.jpg", caption: "#savingcinema", kind: "video", x: 70, y: 74, w: 6, tilt: 4, ratio: 1.773 },
  { src: "new12.webp", caption: "Doing a jigsaw puzzle with a friend", kind: "photo", x: 2, y: 12, w: 6, tilt: -4, ratio: 1.777 },
  { src: "new13.webp", caption: "#friend", kind: "photo", x: 82, y: 30, w: 7, tilt: 3, ratio: 1.333 },
];

export const BITS_DIR = "/media/bits/";
