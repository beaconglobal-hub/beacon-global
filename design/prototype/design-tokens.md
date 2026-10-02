# Beacon Global — Design tokens

Maps to Tailwind v3 + shadcn-style HSL variables (same names as godsbeacon.org). Dark theme only.

```css
:root {
  --background: 204.2 78.8% 12.9%;   /* #07263B page */
  --foreground: 214 68% 93%;         /* #E1ECF9 body text */
  --card: 206 52% 16%;               /* #142C3E cards, facts block */
  --card-foreground: 0 0% 100%;
  --muted: 206 43% 23%;              /* #213E54 dividers, subtle borders */
  --muted-foreground: 210 24% 67%;   /* #97ABBF labels, secondary text */
  --border: 208 34% 35%;             /* #3B5B78 emphasized borders, outline buttons */
  --primary: 45 100% 60%;            /* #FFCC33 Give / primary buttons, verse citations */
  --primary-hover: 45 100% 72%;      /* #FFDB70 */
  --primary-foreground: 204 90% 8%;  /* #021827 text on yellow */
  --ring: 187 100% 65%;              /* #4DEAFF focus ring */
  --link: 187 100% 65%;              /* #4DEAFF */
  --link-hover: 193 98% 83%;         /* #A9ECFE */
  --eyebrow: 193 98% 83%;            /* #A9ECFE section labels */
  --blue-900: 204 90% 8%;            /* #021827 scripture band, footer, logo panel */
  --radius: 10px;
}
```

## Type — Inter
| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| H1 | clamp(36px, 4.3vw, 56px) | 800 | 1.06 | -0.025em |
| H2 | clamp(28px, 3.2vw, 42px) | 700 | 1.12 | -0.02em |
| Scripture | clamp(26px, 3vw, 38px) | 600 | 1.3 | -0.015em |
| H3 / card title | 18–20px | 700 | 1.3 | 0 |
| Lead | 17–19px | 400 | 1.6 | 0 |
| Body | 16–17px | 400 | 1.65 | 0 |
| Eyebrow | 13px uppercase | 600 | — | 0.08em |
| Label / small | 13–15px | 400–500 | 1.5 | 0 |

## Spacing
- Container max 1200px; side padding clamp(20px, 4vw, 40px)
- Section rhythm: clamp(64px, 8vw, 104px) vertical
- Stack gaps: 8 / 12 / 16 / 18 / 22 / 28px
- Card padding: 22–48px (scales with viewport)
- Touch targets: min 44px (nav rows 52px on mobile)
- Mobile nav breakpoint: 880px

## Logo
The mark has a white outline built for dark grounds; every placement sits on `--background` or `--blue-900`. There's no light variant yet.
