// src/pages/BlogDetails.jsx

import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const blogData = {
  1: {
    title: "The Science of Stillness: How We Study the Universe Without Ever Touching It",
    author: "Lavu Anvita",
    content: `
In the vast theatre of science, most disciplines begin with contact. We humans come to understand the world through our senses. We taste to know if something is ripe, touch to gauge its texture, listen for patterns in the air, watch for movement, and smell for danger or delight. Even our sciences follow this instinct, they press, stir, split, examine, and handle the world to coax meaning from matter. However, there is a peculiar paradox in astronomy: it is a science of the physical world, and yet, one in which the subject can never be touched, never be held, never be brought into a laboratory. One that peers across unimaginable distances, receiving only the gentlest trace of light, without ever once laying hands on what it studies. It is a science conducted entirely at a distance, and perhaps because of that, it reveals truths closer to the soul. 

In astronomy, light is everything. A single photon from a distant galaxy may have begun its journey before humans stood upright, only to end its voyage in a telescope lens or an astronomer’s eye. It carries within it the signature of its birthplace: the temperature of a star’s surface, the composition of a nebula, the motion of a galaxy.
To study the universe is to study this light. That light, however old or faint, tells stories written in spectral lines and subtle shifts. We don’t experiment on the universe. We listen. We interpret. And we imagine. A bright spot may look like a single star, but it’s a cluster of hundreds. A symmetrical galaxy may appear peaceful but could be in the aftermath of a violent collision. Astronomers learn to trust the math more than their eyes. In astronomy, what you see is not always what is, and yet, what can be found in the way light bends or shifts. It is the closest we come to reading letters written in a language older than humanity.

What makes this more remarkable is the level of precision it allows. We know the structure of stars we will never reach and can map the invisible pull of black holes through distortions in light, but not the full depths of our own oceans. We can estimate the diameter of a neutron star thousands of light-years away to the kilometre, though it would crush all memory of form if held in the palm. And we do this not through contact, but through patience, through mathematics, interpretation, and long listening. Astronomy does not permit intervention. It only offers clues. We make meaning not by asking the universe to respond, but by learning how to read its stillness.
Astronomy relies on inference, the patient art of connecting what we see to what must be. From the redshift of a galaxy, we deduce its velocity and distance. From the dimming of a star, we infer the orbit of an unseen exoplanet. From warped light paths, we discover black holes that bend space itself. Astronomy is not experimentation; it is interpretation.

Unlike other sciences, astronomy operates on a time delay. We never see the cosmos as it is, only as it was. The night sky is not a snapshot but a layered palimpsest of different centuries. We navigate not just space, but time. And sometimes, what we observe no longer even exists.
The farther we look, the further back in time we see. Telescopes are not just optical instruments; they are time machines. Light travels with time stitched into its movement, so to gaze at a star ten million light-years away is to see it ten million years ago. In astronomy, every glimpse of the cosmos is a glimpse into history, we never see the universe now, only its echo from the past.
And here lies a quiet truth: the night sky is never “live.” The constellations above us are illusions of simultaneity, each star telling its own story from a different epoch. The light of some stars began its journey before telescopes existed. Others began shining before Earth knew humans. 

In the stillness of observation lies astronomy’s uniqueness. It does not rush. It waits. It records. It contemplates. An astronomer may spend years collecting data on a single supernova, knowing it will never appear again. Instruments may be designed to catch a single gravitational wave, a ripple from an ancient collision that occurred when multicellular life had only just begun to form on Earth. Despite being confined to one rotating planet in one solar system, astronomy aims to map the entire universe. It's the most ambitious extrapolation in all of science. Where other sciences are active, astronomy is contemplative, a science of presence, not of pressure.

This discipline, strangely distant, feels deeply human. Perhaps it’s because in studying the stars, we study ourselves. The atoms in our bodies were forged in the hearts of ancient suns. When we observe the cosmos, we are not just looking outward, we are remembering where we came from. And yet, for all its remoteness, astronomy is perhaps the most human of sciences. It evokes awe in the way a drop of acid or a petri dish never can. To gaze at Saturn’s rings or the Andromeda galaxy is to confront not only the cosmos, but also the profound question of our place within it. 

Carl Sagan captured this with haunting clarity in the image of the Pale Blue Dot, Earth as seen from the edge of the solar system, suspended in a shaft of sunlight, barely a pixel in the darkness, everything we’ve ever known, every war, every act of love, every triumph and failure, has taken place on a speck barely visible from the edge of our own solar system. “Our posturings, our imagined self-importance”, he said “the delusion that we have some privileged position in the universe, are challenged by this point of pale light. To me, it underscores our responsibility to deal more kindly and compassionately with one another and to preserve and cherish that pale blue dot, the only home we've ever known.”

Astronomy teaches humility in a way few sciences can. The universe offers no direct feedback. It does not bend to our curiosity, nor adjust itself for our instruments. It simply continues, vast, indifferent, and unhurried. And yet, in that silence, we are shaped. It calls for a mind that finds meaning not in ownership, but in understanding, not in haste, but in stillness. 
Yet, for all its distance, there is an unmistakable intimacy. Stargazing is a quiet ritual that has echoed across civilizations and millennia. To look at the night sky is to be part of something continuous, a kind of memory passed down in light. The very photons that now reach our telescopes once touched the eyes of Galileo or shimmered on the ocean-bound gaze of ancient navigators steering by Polaris. In those moments of stillness beneath the stars, the act becomes more than scientific, it becomes meditative. A quiet confrontation with the infinite, where we do not seek answers, but remember how to wonder.

In the end, astronomy is the act of loving something from afar. It is reading the light of something that may no longer exist and yet treating that light as sacred evidence. It is a science built not on manipulation, but on imagination, not on contact, but on connection. We may never touch what we study, and yet, it changes us. Perhaps that is the quiet miracle of astronomy: of all the sciences, it keeps the greatest distance from its subject and still leaves the deepest impression on its observer.
 `,
  },
  2: {
    title: "THE COSMIC TUG OF WAR - HOW THE GREAT ATTRACTOR SHAPES GALACTIC MOTION",
    author: "Prateek Srinath",
    content: `
The universe is a vast, dynamic canvas, constantly in motion. Galaxies are not only spreading apart due to cosmic expansion, but also subtly drifting, nudged and tugged by the invisible hands of gravity. In the 1970s and 1980s, astronomers stumbled upon a cosmic puzzle: our Milky Way, along with thousands of neighbouring galaxies, was moving at astonishing speeds—around 600 kilometres per second—toward a particular region of space. Yet, curiously, when astronomers peered in that direction, they found… nothing. No massive cluster. No clear explanation. This strange, unseen force became known as the Great Attractor.
The trail of clues began with the cosmic microwave background (CMB)—the relic radiation from the Big Bang. The CMB is expected to be nearly uniform across the sky, but precise measurements revealed a subtle asymmetry: one hemisphere appeared slightly warmer, the other cooler. This variation, called the CMB dipole, was not a glitch—it was evidence of motion. It is suggested that our galaxy is moving through the universe with remarkable velocity in a specific direction, roughly toward the Centaurus constellation.

Under normal cosmic expansion, galaxies recede from each other evenly, like dots on an inflating balloon. But this observed “drift” toward something unseen suggested a gravitational influence pulling us inward—something dense and powerful enough to divert the path of entire galaxy groups.
Despite decades of searching, the Great Attractor remains shrouded in darkness—not metaphorically, but literally. It lies behind the Zone of Avoidance, a thick swath of the night sky densely packed with stars, gas, and dust from our own Milky Way. This makes it nearly invisible in optical wavelengths.
But astronomers didn’t give up. Instead, they adapted:
Infrared and X-ray telescopes allowed scientists to peer through interstellar dust.
Redshift surveys tracked how fast galaxies were moving and in what direction.
Peculiar velocity maps helped chart deviations from the expected Hubble flow (the standard expansion of space).
Most importantly, the CMB dipole continued to act as a cosmic compass, confirming that our motion wasn't random—it was being pulled.
Collectively, these tools helped confirm that a gravitational anomaly—hidden though it may be—was influencing galactic motions across hundreds of millions of light-years.
The Great Attractor isn’t a single object or galaxy. It’s best described as a dense region of the cosmic web, likely composed of massive galaxy clusters, hidden concentrations of dark matter, and possibly unknown forms of mass. Its gravitational reach extends over vast regions, enough to affect the motion of entire superclusters, including the one we live in.
And yet, as astronomers peered deeper into the same direction, they discovered something even more massive.
Located farther away than the Great Attractor is the Shapley Supercluster, one of the largest known mass concentrations in the nearby universe. Stretching across 650 million light-years. It contains more than 8,000 galaxies and exerts an even stronger gravitational pull than the Great Attractor.
This discovery led scientists to reconsider their model: perhaps the Great Attractor isn’t the main destination, but a midpoint in a larger river of galactic motion. Just as tributaries lead to a central stream, many galaxies—including ours—might be part of a cosmic flow directed ultimately toward the Shapley Supercluster.
In 2014, scientists redefined our place in the universe with a revolutionary map of galactic motion. They identified a sprawling supercluster called Laniakea, meaning “immense heaven” in Hawaiian. It stretches over 500 million light-years and contains over 100,000 galaxies, including our Milky Way.


Unlike earlier maps based solely on position, Laniakea was charted by studying the motion of galaxies—how they fall inward along gravitational channels. At the center of this flow lies the Great Attractor. This means the mysterious mass isn't just influencing us; it’s effectively the gravitational heart of our supercluster, anchoring thousands of galaxies in motion.
The discovery of the Great Attractor, and the even more massive structures surrounding it, reveals an important truth: the universe is not evenly spread out. While the cosmological principle suggests that matter is roughly uniform on very large scales, local and regional gravitational variations create enormous structures—webs, nodes, and filaments where galaxies cluster and move.

These flows cannot be fully explained by visible matter alone. The presence of dark matter—invisible, yet gravitationally significant—is essential. Its distribution shapes these cosmic highways, and the Great Attractor may sit at the intersection of several such dark matter veins.
While most scientists agree the Great Attractor is a region of high mass concentration, it’s worth imagining: what if it’s something more exotic?
Could the Great Attractor be a gateway to a different phase of space-time? A primordial black hole swarm? Or even a gravitational anomaly caused by quantum fluctuations on cosmic scales?
Some fringe theories suggest it might be the leading edge of a larger structure beyond the observable universe—a gravitational echo from a multiverse collision or a leftover wrinkle from inflation. While these are speculative, they encourage us to keep asking questions and pushing the boundaries of what we think we know.
The Great Attractor remains partially hidden, but its influence is undeniable. It sparked a rethinking of galactic motion, revealed hidden matter in the universe, and led to the identification of Laniakea—our true home in the cosmos.
Though we cannot see it yet, its gravitational pull is real. And as telescopes grow more powerful and cosmic maps more precise, we inch closer to understanding the full picture. The Great Attractor may not just be a clue to local motion, but a signpost pointing us toward the deep architecture of the universe.
In the end, it's a mystery that reminds us that in space—and in science—not everything real is visible.
 `,
  },
  3: {
    title: "Spaghettification in Our Solar System: A Cosmic Catastrophe",
    author: "Priyadharshini. V. S",
    content: `
Imagine a rogue black hole wandering into our solar system an invisible entity with gravity so intense, it begins to reshape everything we know but before that, what is it exactly? A Black hole is a region of space where gravity is so intense that even light can’t escape from it. It forms when a massive star collapses under its own gravity at the end of its life. The mass of the star is compressed into an extremely small space, forming what’s called a singularity a point of infinite density. Despite being invisible, black holes can be detected by their effects on nearby matter and light. They can pull in gas, stars, and even light itself, creating fascinating effects around them. Continuing further, Planets fall out of orbit, pulled helplessly toward the dark abyss.                                      As Earth approaches the event horizon, something terrifying begins: spaghettification.
Surrounding the black hole is the event horizon the “point of no return.” Once something crosses this invisible boundary, it cannot escape. Even if you moved at the speed of light, you couldn’t get out. Think of it like a waterfall: imagine a river flowing toward a drop. Far from the edge, a swimmer can still paddle back to shore. But once they pass the edge (the event horizon), no effort can bring them back up. That’s how it works with gravity at the event horizon. All these bizarre behaviours come from Einstein’s theory of general relativity. Instead of thinking of gravity as a force like Newton did, Einstein described it as the warping of space and time together known as spacetime by mass and energy. A Black hole is a place where this warping becomes extreme. Imagine placing a heavy ball on a trampoline. The fabric dips. Smaller balls roll toward the centre. That’s how gravity works in relativity: objects curve the fabric of spacetime, and other objects move along that curvature.
 In relativity, time doesn't tick the same everywhere. Near a strong gravitational field, like that of a black hole, time slows down. This is called gravitational time dilation. Suppose you're falling toward a black hole while your friend watches from far away. From their point of view, your clock ticks more and more slowly as you get closer to the event horizon. In fact, you’d appear to freeze just above the horizon and gradually fade away. But from your point of view, time feels normal. You fall in, cross the event horizon, and continue your journey toward the centre all in what feels like real-time.
 Now comes the dramatic part spaghettification.
Black holes don't pull you in evenly. The gravitational force gets stronger the closer you are. That means if you're falling feet-first, your feet are closer to the singularity than your head, and feel a stronger pull.  This difference in gravitational pull across your body is called a tidal force.
 Do You Die Instantly?
That depends on the size of the black hole: Stellar-mass black holes (a few times the Sun's mass) have very steep gravitational gradients. You would be stretched and torn apart before you even cross the event horizon. Death would be almost instantaneous. Supermassive black holes (millions to billions of solar masses), like the one at the centre of our galaxy, have a much gentler gradient near the event horizon.            You could cross the horizon intact, with no immediate spaghettification. Only much deeper inside, closer to the singularity, would tidal forces rip you apart. So ironically, falling into a bigger black hole might let you survive longer. So what’s next Eventually, everything that falls into a black hole which heads toward the singularity, where density becomes infinite and physics as we know it breaks down. Whether anything can escape from inside or what exactly happens at the core is still unknown it’s one of the biggest mysteries in physics. Some theories suggest that quantum gravity or string theory might someday explain what happens, but for now, it’s hidden beyond the veil of the event horizon.
Spaghettification isn’t just science fiction. it’s a real prediction from general relativity and physics. It combines time bending, space warping, and extreme gravity into one eerie outcome. By understanding black holes, event horizons, time dilation, and tidal forces, we begin to see how strange and beautiful the universe really is. `,
  },
  
  4: {
    title: "Baryon Asymmetry: The Tiny Imbalance That Built The Universe",
    author: "Jiya Jaiswal",
    content: `
The universe should have been a perfect balance of matter and antimatter resulting in mutual
annihilation but instead something rather tipped this quantitative cosmic scale in the favor of
matter. This imbalance is known as Baryon Asymmetry and it’s one of the most profound
unsolved problems in modern physics.

According to cosmological models, matter and antimatter were created in equal quantities during
the Big Bang. As the universe cooled, these particles should have collided and annihilated each
other completely leaving only radiation behind. Yet, matter is everywhere around us while anti
matter is rare in fact the remaining fraction, just one part in a billion is what makes up everything
we see today.
This leads us to come up with theories that could explain the phenomena that tipped the scale in
favour of matter. To uncover this mystery, physicist Andrei Sakharov outlined three conditions
and called them “Sakharov conditions”. The first being Baryon Number Violation which implies
the usual conservation of baryons like protons and neutrons must be broken to generate more
matter than antimatter.
The second is based on C-Symmetry and CP-Symmetry Violation. C-symmetry means laws of
physics are unchanged if particles are swapped with their antiparticles. CP-symmetry combines
this with spatial reflection. Both need to be violated for matter to behave differently than
antimatter.
At last Departure from Thermal Equilibrium which says if the universe stayed in perfect thermal
balance, matter and antimatter would have been erased equally but during rapid changes like the
electroweak phase transition, the universe fell out of equilibrium allowing any small
asymmetries to freeze in
Many theories have been proposed to satisfy the Sakharov conditions and explain the
matter-antimatter imbalance. One such idea is Electroweak Baryogenesis which proposes that
during the early universe’s phase transitions, CP-violating interactions at expanding bubble
boundaries could generate a baryon surplus. However, the Standard Model’s version of this

phase transition is too weak, and stronger transitions would require new particles, like extra
Higgs bosons.

Another promising theory is Leptogenesis that suggests that heavy right-handed neutrinos
decayed asymmetrically, creating a lepton imbalance that was later converted into baryon
asymmetry through sphaleron processes. This theory is especially promising because it could
also explain the tiny masses of observed neutrinos.
Finally,GUT Baryogenesis involves the decay of massive particles predicted by Grand Unified
Theories. These decays would naturally violate both baryon number and CP symmetry at
extremely high energies, making them a strong candidate for the source of the asymmetry.
Asymmetric Dark Matter theories go a step further, proposing that the same mechanism
responsible for baryon asymmetry also created an imbalance between dark matter and dark
antimatter. This could explain why the observed amount of dark matter is roughly five times that
of ordinary matter without requiring symmetric dark-antidark annihilations.

Despite these possible explanations, baryon asymmetry isn't completely answered. Experiments
continue to search for stronger CP violations, especially in baryon decays, and future particle
accelerators or cosmological observations may help broaden our understanding. The problem

isn't just academic, solving it could reshape our understanding of the universe’s origin, the fate of
antimatter, and the nature of dark matter itself. Until then, baryon asymmetry stands as a beacon
guiding physicists toward a deeper, more complete theory of reality.`,
  },
  5: {
    title: "Asteroid Mining - The Journey from Space Rocks to Goldmines",
    author: "P. Varshaa",
    content: `What would happen if the next biggest treasure hunt does not occur on Earth, but on a
chunk of rock 20 million miles away? Well, buckle up, because these huge and dusty space
stones might actually be the universe’s hidden treasure chests, loaded with precious metals
and other resources that could kickstart a new expedition. Say hello to Asteroid mining - it
has been the hot topic amongst budding researchers and scientists for its exciting outcomes.
Asteroid mining is the complex process of extracting precious and valuable resources like
water, iron, cobalt and platinum from asteroids. Platinums are very expensive and cool, but
this isn't just about extracting resources to be rich. Asteroid mining is about creating a future
where we can build, live, and explore beyond Earth, using the very rocks drifting in space as
our fuel and foundation.
Asteroids are considered to be rocks that float in space, but in reality, there is more to these
huge chunks of wanderers. They are known to be insanely valuable. One metallic asteroid is
found to contain almost 10,000 quadrillion USD or 100,000 crores INR worth of metals.
These enormous rocks also contain valuable resources, such as water, which can be broken
down into H2O2, and we use this to power our fuel cells for rockets. It's a fact that we have
an abundance of water on our Earth, but instead of carrying the majority of supplies from
Earth, which is expensive and exploits ground resources, asteroid mining allows us to "live
off the land" in space. This concept is called ISRU- In Situ Resource Utilisation.
How can one mine a rock that's flying through space at a thousand km per hour velocity? It
soounds extremely impossible, but space scientists have been researching some clever
ways to make it happen. From spotting the right rock to figuring out how to grab stuff without
floating off into space, every step is a mysterious puzzle. Let’s break it down! The process of
asteroid mining has 4 huge steps to it. The first step is where the scientists conduct
telescopic observations to identify the most suitable rock, followed by sending robots on
missions to bring these rocks to Earth. Once this resourceful rock had landed, the mining
process would commence, where drilling, heating and mechanical collection would be done.
The final process includes sending the mined resources to space stations and other
industries to make good use of these asteroids.
Asteroid mining is more than just a dream now! NASA’s OSIRIS-REx mission made it to the
top of headlines when it went up to meet an asteroid named Bennu, collected some of its
dust, and brought it back home. Japan's space agency did something similar and cool.
Hayabusa missions by Japan ended up collecting tiny pieces from asteroids Itokawa and
Ryugu, like space seashells. These missions weren’t completely about mining, but they
proved that mining material from huge space rocks is possible. A few private companies also
jumped in early, like Planetary Resources and Deep Space Industries. They had big dreams
of mining in space, but real-world challenges forced them to slow down or shift focus.
Various countries like the U.S, China, and Luxembourg are also now heavily investing in
asteroid mining. It is true that till date there is no evidence of active mission, but its crystal
clear that asteroid mining has a huge role to play in the future.
Asteroid mining sounds pretty simple. All one has to do is bring the asteroid down, mine it
and extract the resourceful elements. But asteroid mining has a lot more to it and it is not as

simple as it sounds which is one of the major reasons for scientists to hold it back till date.
There are various technical challenges acting as a huge barrier to asteroid mining. Asteroid
landing sounds simple, but landing on rocks with zero gravity, which float in space, is tricky.
Then there is a need for simple and cost efficient machines to mine without man labour, and
after collecting all valuable resources, storing them in a safe and sound environment is
critical. Apart from technical challenges, scientists are debating about asteroid mining and its
ethical considerations. Questions like “Who owns Space and its resources?” and “Could
mining disrupt the solar system?” are part of the ongoing ethical challenges. Asteroid mining
can only happen if all these challenges are overcome.
Asteroid mining is not just a far-off sci-fi dream anymore; it’s shaping up to be a real part of
our space future. With active missions revolving around this concept, asteroid mining has
emerged as one of the major missions for science. In the upcoming decades, we might get
to see the mining that supports space stations or even provides fuel for deeper exploration.
While there are still big challenges that need to be studied, one thing has come clear: the
next resource race may not happen on Earth, but somewhere far above it, drifting silently
among the stars.`,
  },
};


function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData[id];

  if (!blog) {
    return (
      <div className="text-white text-center mt-20">Blog not found</div>
    );
  }

  return (
    <div className="text-white bg-cover bg-center min-h-screen font-[Anuphan]">
      <Navbar />

      {/* Main Content */}
      <div className="px-6 md:px-12 py-8 pt-32 flex justify-center">
        <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          
          {/* Back Button */}
          <div className="flex justify-start mb-6">
            <button
              className="bg-white text-black px-5 py-2 rounded-full border border-gray-300 font-semibold shadow hover:bg-gray-100 transition"
              onClick={() => navigate("/publications")}
            >
              &lt; Back
            </button>
          </div>

          {/* Blog Title & Author */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {blog.title}
          </h1>
          <p className="text-lg md:text-xl text-pink-300 font-medium mb-8">
            By {blog.author}
          </p>

          {/* Blog Content */}
          <div
            className="text-lg md:text-xl leading-8 text-left md:text-justify whitespace-pre-line prose prose-invert max-w-none"
          >
            {blog.content}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BlogDetails;
