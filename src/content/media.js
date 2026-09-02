/**
 * Central image registry. Pages/components import from here so the content
 * data files stay text-only (Task 3.1) and image paths live in one place.
 *
 * Source: Unsplash (Unsplash License — free for commercial use, attribution
 * not required). Photo IDs are listed in src/assets/images/CREDITS.md.
 * Before launch the client should review each image and swap the conference
 * gallery for real ACI event photography — see CREDITS.md.
 */
import heroSkyline from "../assets/images/hero-skyline.jpg";
import strategyWall from "../assets/images/strategy-wall.jpg";
import teamHands from "../assets/images/team-hands.jpg";
import financeFolder from "../assets/images/finance-folder.jpg";
import marketingNote from "../assets/images/marketing-note.jpg";
import conferenceHall from "../assets/images/conference-hall.jpg";
import boardroom from "../assets/images/boardroom.jpg";
import teamLaptop from "../assets/images/team-laptop.jpg";
import deskWork from "../assets/images/desk-work.jpg";
import galleryAudience from "../assets/images/gallery-audience.jpg";
import gallerySpeaker from "../assets/images/gallery-speaker.jpg";
import galleryHall from "../assets/images/gallery-hall.jpg";
import galleryRoom from "../assets/images/gallery-room.jpg";

export const media = {
  heroSkyline,
  strategyWall,
  teamHands,
  financeFolder,
  marketingNote,
  conferenceHall,
  boardroom,
  teamLaptop,
  deskWork,
};

/** Per-service hero image, keyed by service slug. */
export const serviceImages = {
  consultancy: { src: strategyWall, alt: "A planning wall covered in decision notes during a strategy session" },
  hr: { src: teamHands, alt: "Colleagues joining hands over a desk of working documents" },
  auditing: { src: financeFolder, alt: "A finance folder and reference material on a review desk" },
  marketing: { src: marketingNote, alt: "A marketing-strategy note among design tools on a workbench" },
  conferences: { src: conferenceHall, alt: "A speaker on stage addressing a full conference hall" },
};

/** Illustrative conference gallery — format reference, not past ACI events. */
export const conferenceGallery = [
  { src: galleryAudience, alt: "Delegates seated for a conference working session" },
  { src: gallerySpeaker, alt: "A speaker addressing a packed auditorium from the front" },
  { src: conferenceHall, alt: "Wide view of a conference hall with stage screens lit" },
  { src: galleryHall, alt: "Attendees networking in a high-windowed venue hall" },
  { src: galleryRoom, alt: "A large seated audience facing the main stage" },
  { src: boardroom, alt: "A smaller boardroom session with laptops around the table" },
];
