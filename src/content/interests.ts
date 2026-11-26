/**
 * Things from the hobbies sentence on About. Each phrase opens a panel with these.
 * Book covers are saved in public/media/books/, numbered in the order she read them.
 */

export interface Book {
  title: string;
  author: string;
  cover: string;
}

/** Books read in 2026, in reading order. The goal for the year is 50. */
export const BOOKS: Book[] = [
  { title: "Lákíríboto", author: "Ayodele Olofintuade", cover: "/media/books/01.webp" },
  { title: "Sànyà", author: "Oyin Olugbile", cover: "/media/books/02.webp" },
  { title: "Architecti (Deals of Dark Desire, book 1)", author: "Ruby Roe", cover: "/media/books/03.webp" },
  { title: "Nonbinary: Memoirs of Gender and Identity", author: "Scott Duane & Micah Rajunov", cover: "/media/books/04.webp" },
  { title: "Blood Over Bright Haven", author: "M. L. Wang", cover: "/media/books/05.webp" },
  { title: "Nightshade and Oak", author: "Molly O'Neill", cover: "/media/books/06.webp" },
  { title: "Murder at the Black Cat Café", author: "Seishi Yokomizo", cover: "/media/books/07.webp" },
  { title: "Seeking Sexual Freedom", author: "Nana Darkoa Sekyiamah", cover: "/media/books/08.webp" },
  { title: "Heap Earth Upon It", author: "Chloe Michelle Howarth", cover: "/media/books/09.webp" },
  { title: "The Faggots and Their Friends Between Revolutions", author: "Larry Mitchell, Ned Asta, Tourmaline & Morgan Bassichis", cover: "/media/books/10.webp" },
  { title: "Pluralities", author: "Avi Silver", cover: "/media/books/11.webp" },
  { title: "Formation: The Making of Nigeria From Jihad to Amalgamation", author: "Fola Fagbule & Feyi Fawehinmi", cover: "/media/books/12.webp" },
  { title: "Let Us Play", author: "Harrison Browne & Rachel Browne", cover: "/media/books/13.webp" },
  { title: "Being Aro", author: "Madeline Dyer & Rosiee Thor (eds.)", cover: "/media/books/14.webp" },
  { title: "Murder at the Hotel Orient", author: "Alessandra Ranelli", cover: "/media/books/15.webp" },
  { title: "No God but Us", author: "Bobuq Sayed", cover: "/media/books/16.webp" },
  { title: "One Leg on Earth", author: "'Pemi Aguda", cover: "/media/books/17.webp" },
  { title: "Ibe the Cannon Boy", author: "Mrs. T. E. Meniru", cover: "/media/books/18.webp" },
  { title: "Eight Detectives", author: "Alex Pavesi", cover: "/media/books/19.webp" },
  { title: "The Iliac Crest", author: "Cristina Rivera Garza", cover: "/media/books/20.webp" },
];

export const READING_GOAL = 50;

export interface Video {
  /** the YouTube video id */
  id: string;
  title: string;
  channel: string;
  favourite?: boolean;
  /** a link shown right under this video */
  more?: { label: string; href: string };
}

export const DJ_SETS: { videos: Video[] } = {
  videos: [
    {
      id: "6F3HfeUL7uc",
      title: "IDKTITO | Group Therapy @ 2 | Opening set | 22 Aug 2025",
      channel: "Group Therapy",
      more: { label: "Any Group Therapy set, really", href: "https://www.youtube.com/@ourgrouptherapy" },
    },
    { id: "zmNgJD2TudA", title: "KARABA, Afro House / Tech set live from DESCENDANTS New York", channel: "DESCENDANTS Records" },
    { id: "xCylIOGnEIo", title: "JNR SA b2b Kabza De Small, Surprisingly Good Sets: Goodbye Summer 26 (Afro house mix)", channel: "Flying Fish SA" },
  ],
};

export const LIVE: Video[] = [
  { id: "jnbSGFav8EU", title: "King Sunny Adé & His African Beats in Japan, Ma Jaiye Oni, 26 Oct 1984", channel: "fusabue" },
  { id: "Uf4hfd4Pvmk", title: "King Sunny Adé in Tokyo, Japan, 26 Oct 1984", channel: "fusabue" },
  { id: "vLHcHWDvgfQ", title: "Jeff Buckley, Lover, You Should've Come Over (Live in Chicago)", channel: "jeffbuckleyVEVO", favourite: true },
];
