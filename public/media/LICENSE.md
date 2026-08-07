# Media attribution

Placeholder footage for the five interactive feature demos. Swap these for
real product capture when it's ready — search the codebase for
`public/media/` to find every reference.

History: several clips tried before landing on each of these — for 01, Big
Buck Bunny (too cartoonish), an original canvas-drawn anime fight animation
(didn't read well visually), a Tears of Steel clip (bizarre out of context,
robot dogs and all), a single-shot motocross clip (too plain), and a wide-shot
race-car clip (no precise moment to actually demonstrate frame-stepping on)
before the karts clip below, confirmed good. For 02: rain droplets on glass,
river rapids, and campfire flames — full story in that section below.

## karts-race.mp4 (feature 01 — frame navigation)

"Two drivers racing in a race track" — go-kart racing, close pass on a curb.
1280×720, ~7s, 2.2 MB.
Source: [Pexels](https://www.pexels.com/video/two-drivers-racing-in-a-race-track-5638369/)
Licence: [Pexels License](https://www.pexels.com/license/) — free for commercial
use including product marketing, self-hosting explicitly permitted,
**attribution not required**.

## wind-turbines.mp4 (feature 02 — playback speed)

"360 Drone Footage of Wind Turbines in a Field" — slow aerial orbit.
1280×720, ~133s, 27.1 MB.
Source: [Pexels](https://www.pexels.com/video/360-drone-footage-of-wind-turbines-in-a-field-12301441/)
Licence: [Pexels License](https://www.pexels.com/license/) — same terms as above.

Four clips tried for this section, in order:

| Clip | Avg. motion score | Outcome |
|---|---:|---|
| rain droplets on glass | — | too subtle to visibly speed up/slow down |
| river rapids | 21.69 | *looked* dynamic but was already shot/edited slower than real time |
| campfire flames | 33.52 | best score of everything tested, but read as flickering texture rather than legible directional motion |
| **wind turbines (chosen)** | **2.56** | lowest score of anything tried — picked by eye over the metric anyway |

The scoring method: draw a video frame to canvas, play one real second at ×1,
draw again, average the per-pixel colour difference. It correctly caught the
first two failures (neither showed up in file metadata — only obvious by
actually watching the clip), but it has a real blind spot: fast rotational
motion blurs into a near-static-looking blob frame to frame (several spinning
fan/propeller candidates scored 10–15 despite spinning fast), and chaotic
per-pixel change (fire) scores high without necessarily reading as legible
*directional* motion to a person. The wind turbine clip is a slow, smooth
drone orbit — barely anything changes within any single second, which the
score reflects accurately — but it was chosen anyway, by eye, over the
measurement. If this section ever reads as too static, that tension is why,
and swapping back to the campfire clip is a one-line change in
`PlaybackSpeed.astro`.

## aquarium.mp4 (feature 03 — floating controls)

"Multitude of fishes swimming in aquarium" — school of fish, aquarium tank.
1280×720, ~10.6s, 8.1 MB.
Source: [Pexels](https://www.pexels.com/video/multitude-of-fishes-swimming-in-aquarium-35756706/)
Licence: [Pexels License](https://www.pexels.com/license/) — same terms as above.

No motion-score screening needed here — Picture-in-Picture doesn't depend on
how fast anything moves, just on there being a real `<video>` to pop out.

## city-traffic.mp4 (feature 04 — screenshot capture)

"Aerial view of urban intersection during daytime" — sharp, in-focus traffic.
1280×720, ~30s, 27.2 MB.
Source: [Pexels](https://www.pexels.com/video/aerial-view-of-urban-intersection-during-daytime-31631262/)
Licence: [Pexels License](https://www.pexels.com/license/) — same terms as above.

Replaced a first choice — "Bokeh footage of city lights at night" — that was
wrong on two counts: deliberately defocused (the whole point of a screenshot
demo is to show something crisp in the capture, not artistic blur) and only
~16s, too short to comfortably record a clip from. No motion-score screening
needed for this section either way — screenshot capture works on whatever
frame happens to be showing, and clip recording just needs enough runway.

## piano-greensleeves.mp4 (feature 05 — volume amplification)

The one section on this page that needs a real, audible soundtrack — every
other clip on this page is silent b-roll by design. Getting here took three
attempts, kept here in full because each one was rejected for a specific,
useful reason:

**Attempt 1 — a nature-sound clip (`waterfall.mp4`, Pexels 16415568).** Had
real audio (verified, not assumed), but wrong content: "solo se escucha el
agua golpear, muy fuerte" — harsh, single-note, not remotely music.

**Attempt 2 — video and music from separate libraries.** Reasoned that stock
b-roll is essentially always delivered silent (confirmed by testing 60+
candidates across Pexels and Mixkit — DJ gear, guitar, podcast studios,
vlogging, concert crowds, all checked with a live Web Audio `AnalyserNode`,
not file metadata or tags; full list below), so paired a silent Mixkit CGI
clip ("Silhouette of a man playing the piano in the dark") with a separate
Mixkit chillout track ("Serene View") via two synced media elements. Also
rejected: the visual read as an obvious 3D/Blender render, the music as
generic "lo-fi", and — the core objection — it wasn't actually the video's
own sound, which defeats the point of a feature literally about amplifying
a video's volume.

Every silent candidate from that search, for the record:

| Candidate | Source | Result |
|---|---|---|
| keyboard/mixer close-up (6695082) | Pexels | audio track present but near-silent (peak ~1/127) |
| DJ console hands (10783541) | Pexels | silent |
| podcast studio (37751433) | Pexels | silent |
| 2× acoustic guitar clips (5390403, 3064251) | Pexels | silent |
| 2× piano hands clips (29175602, 4251009) | Pexels | silent |
| vinyl record spinning (16453329) | Pexels | silent |
| 25+ more from Pexels grids: "street musician", "live band performance", "vlogger talking to camera" | Pexels | all silent or noise-floor only |
| "crowd dancing on concert" (12695729) | Pexels | real but very faint ambient crowd noise (peak ~10/127) — no melody, not usable as "music" |
| 6× Mixkit music-category video clips (piano silhouette, DJ turntable ×2, tape recorder, guitar, drums) | Mixkit | all silent |
| 20× Mixkit piano-category audio tracks | Mixkit | (this library is real audio by design — used one, see below) |
| 20× Pixabay piano-search preview clips | Pixabay | 19 silent, 1 real hit |

**Attempt 3, shipped — piano-greensleeves.mp4.** Widening the video search
to Pixabay (in addition to Pexels/Mixkit) found one real hit: "Piano,
Keyboard, Anonymous Composer" — real filmed footage of a real performance
(not CGI), playing Greensleeves (public-domain melody), tagged by the
uploader as "Anonymous Composer" (no identity implied or needed). 1280×720,
60.8s (loops), 18.2 MB. This is genuinely the same file the visual comes
from — `createMediaElementSource(video)` reads its own audio track directly,
no separate track, no muxing. Verified with a live Web Audio `AnalyserNode`
across 8 samples over ~5.6s: sustained, dynamic signal (peaks 10–23),
consistent with real playing rather than a spike or noise floor.
Source: [Pixabay](https://pixabay.com/videos/id-3487/)
Licence: [Pixabay Content License](https://pixabay.com/service/license-summary/)
— free for commercial use, modification permitted, no attribution required.
Sole relevant restriction: no standalone redistribution of the unmodified
file, which doesn't apply to embedding it in this page.

## Format note

MP4/H.264 — the one format every browser decodes without issue. Verified by
loading the file in an actual `<video>` element and checking
`videoWidth`/`videoHeight`, same as every other clip tried for this page —
never assumed from the container format alone (an earlier Ogg/Theora clip
looked fine as a file but silently failed to decode in current Chrome/Edge).
