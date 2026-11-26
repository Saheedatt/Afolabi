/**
 * The physiotherapy page. Cases describe conditions, never patients: no names, faces, dates or places.
 * Saheedat was on the team that managed each case, and managed them directly where she could.
 */

/** The physio paragraph from the About page, word for word. */
export const PHYSIO_INTRO =
  "Outside marketing, I'm also a physiotherapist. I love doing the maths of patient management, especially biomechanics and kinesiology, and figuring out how one movement or action influences another in the body.";

export interface PhysioCase {
  name: string;
  where: string;
  plain: string;
  colour: string;
  /** the pin's position on the body drawing (viewBox 240 x 520) */
  pin: [number, number];
}

export const CASES: PhysioCase[] = [
  {
    name: "Leukoaraiosis",
    where: "Brain",
    plain: "Changes in the brain's white matter that show up on scans, often linked to small blood-vessel disease. It can affect balance, walking and thinking.",
    colour: "--h4",
    pin: [120, 40],
  },
  {
    name: "Thoracic outlet syndrome",
    where: "Neck and shoulder",
    plain: "Nerves or blood vessels get squeezed in the narrow space between the collarbone and the first rib, which can cause pain, numbness or tingling down the arm.",
    colour: "--h3",
    pin: [146, 104],
  },
  {
    name: "Post-radical mastectomy",
    where: "Chest and shoulder",
    plain: "Recovery after surgery that removes the breast and nearby lymph nodes. Physio helps get the shoulder moving again and manage swelling in the arm.",
    colour: "--h2",
    pin: [98, 150],
  },
  {
    name: "Ulcerative colitis",
    where: "Large bowel",
    plain: "Long-term inflammation of the large bowel. Flare-ups can leave people tired and deconditioned, which is where rehab comes in.",
    colour: "--h5",
    pin: [130, 238],
  },
  {
    name: "Haemophilia, limited knee movement",
    where: "Knee",
    plain: "Blood that doesn't clot properly. Repeated bleeds into a joint like the knee can leave it stiff, so movement has to be rebuilt carefully.",
    colour: "--h1",
    pin: [97, 404],
  },
  {
    name: "Clubfoot",
    where: "Foot and ankle",
    plain: "A condition some babies are born with, where the foot turns inward and down. It's corrected early with stretching, casts and a brace, so the child can stand and walk on a flat foot.",
    colour: "--h6",
    pin: [148, 500],
  },
  {
    name: "Duchenne muscular dystrophy",
    where: "Muscles, starting in the hips and legs",
    plain: "A genetic condition, mostly in boys, where the muscles get weaker over time. Physio keeps joints stretched and helps the child stay moving and independent for as long as possible.",
    colour: "--h3",
    pin: [150, 440],
  },
];

export const UNITS = [
  "Geriatrics",
  "Orthopedics & musculoskeletal",
  "Women's health",
  "Oncology",
  "Surgery & post-operative",
  "Neurology",
  "Cardiorespiratory",
  "Pediatrics",
];

/** The HerPhysio line from the CV. */
export const HERPHYSIO = {
  line: "Led an 8-person volunteer team supporting a community of about 180 members and a webinar network of more than 300 physiotherapists; hosted and moderated biweekly webinars.",
  stat: { value: "300+", label: "physiotherapists in the webinar network" },
};
