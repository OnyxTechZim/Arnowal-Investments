const portraits = [
  {
    background: "#ead9c6",
    skin: "#8d543b",
    hair: "#26201e",
    clothing: "#701f32",
    hairstyle: "M42 69c-5-31 10-49 38-49 30 0 44 20 38 50-6-8-10-17-11-27-14 12-34 17-58 16-1 4-3 7-7 10Z",
  },
  {
    background: "#d9e5df",
    skin: "#a96849",
    hair: "#211d1b",
    clothing: "#a57a2e",
    hairstyle: "M41 70c-5-34 12-51 40-51 27 0 43 18 38 51l-9-7-4-22c-17 13-38 17-60 15l-2 14Z",
  },
  {
    background: "#e6dce9",
    skin: "#75442f",
    hair: "#211b1b",
    clothing: "#405d65",
    hairstyle: "M40 71c-5-35 12-53 41-53 30 0 44 20 39 53l-10-8-3-24c-15 14-37 18-61 17l-2 15Z",
  },
];

export default function LeadershipPortrait({ name, variant = 0 }) {
  const portrait = portraits[variant % portraits.length];

  return (
    <svg
      className="h-36 w-36 rounded-full border-4 border-brand-gold-light shadow-sm"
      viewBox="0 0 160 160"
      role="img"
      aria-label={`Illustrated placeholder portrait for ${name}`}
    >
      <circle cx="80" cy="80" r="80" fill={portrait.background} />
      <path d="M17 160c4-31 26-48 63-48s59 17 63 48H17Z" fill={portrait.clothing} />
      <path d="M64 105h32v28H64z" fill={portrait.skin} />
      <path d="M51 61c0-23 12-35 29-35s29 12 29 35v20c0 21-13 35-29 35S51 102 51 81V61Z" fill={portrait.skin} />
      <path d={portrait.hairstyle} fill={portrait.hair} />
      <path d="M61 76h9m20 0h9" stroke={portrait.hair} strokeWidth="3" strokeLinecap="round" />
      <circle cx="66" cy="82" r="2.5" fill="#211b1b" />
      <circle cx="94" cy="82" r="2.5" fill="#211b1b" />
      <path d="M79 83l-3 12h7m-14 8c6 5 16 5 22 0" fill="none" stroke="#60392e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m64 119 16 12 16-12" fill="none" stroke="#fff8ed" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}
