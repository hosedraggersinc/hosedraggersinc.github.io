import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

export default function VentBlog() {
  return (
    <article className="container mx-auto mt-10 pt-10 px-5">
      <header className="text-4xl pl-8">
        {/* BLOG TITLE */}
        <h1>Vertical Venting Operations</h1>
      </header>
      <section className="flex flex-col">
        <p className="italic">
          {/* AUTHOR */}
          Adam Steenburg - HOSEBED{" "}
          <time dateTime="2024-09-14" className="pl-5">
            September 14, 2024
          </time>
        </p>
        <div className="flex flex-col mb-10">
          <p className="mt-5 pt-10 pb-5">
            If you haven't already, watch the venting operation posted by our
            friends over at Blue Collar Firemen (@bluecollarfiremen) on Insta.
            You're welcome to skip right to the comment section if you want, but
            you probably know where this is going.
          </p>
          <p className="py-5">
            One comment in particular pointed out that the roof was vented. The
            video was shot from the ground and appears to be from across the
            street. There are at least three firefighters on the residential
            two-story structure opening the roof, or perhaps improving a
            self-vented hole. Either way, the roof is venting, and they are
            doing good work with their handline and hooks. Other comments range
            from questioning why LA Fire likes to hang out on the roof after
            performing a vent, to suggesting that performing a vertical vent is
            more tradition than firefighting. This particular comment strikes me
            as someone who doesn't have a strong background in firefighting.
          </p>
          <p className="py-5">
            Vertical venting has scientific evidence that it is effective if
            performed correctly. Anyone who can hide behind their keyboard on
            social media and argue that it's too dangerous needs to go back to
            recruit class and learn the basics of firefighting and fire
            dynamics. Our jobs are inherently dangerous. Why go interior with
            zero visibility looking for a fire that is getting ready to flash if
            your means of egress is bailing out a window? But you won't go on a
            roof to ventilate? Are you serious? Where did you learn to be a
            firefighter? Did you even pay attention to the basics of fire
            behavior?
          </p>
          <p className="text-2xl uppercase italic pt-5">
            <FontAwesomeIcon icon={faInfo} className="mr-2" />
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              What does it do?
            </span>
          </p>
          <p className="py-5">
            Let's break down what vertical venting (roof ventilation) is - in a
            nutshell, it's a process for:
          </p>
          <ul className="list-disc pl-10">
            <li>Removing heat, including superheated gases</li>
            <li>Removing smoke</li>
            <li>Improving visibility and survivability</li>
            <li>Making the space more tenable</li>
          </ul>
          <p className="py-5">
            For the trained, this is a straightforward task. Unfortunately, for
            others, it's ineptitude. The first fireground tactical priority is
            life safety, which includes firefighters and occupants. Water is
            great, but it can also create problems. In a superheated
            environment, you can steam burn potential survivors and yourself.
            It's best to remove the gases first with a well-coordinated vent,
            then hit it with water. A good hole up top, perhaps a louver cut,
            allows the science to take over. It only takes a few seconds for
            those gases to escape.
          </p>
          <p className="py-5">
            <span className="bg-gradient-to-r from-rose-500 to-rose-300 bg-clip-text text-transparent">
              <a
                href="https://www.youtube.com/watch?v=DjPU6yf4RPQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here
              </a>
            </span>{" "}
            is a great example from the San Bernardino FD that explains the
            "why" of venting.
          </p>
          <p className="py-5">
            Now, this isn't for the faint of heart. You're actually going to see
            fire! Super dangerous! But wait, you're standing where you're
            supposed to, the hole is the right size, the interior crew was set
            up, and you didn't fall in?? How strange is that? It seems it was a
            perfectly safe operation and you helped rescue someone who left the
            stove on.
          </p>
          <p className="text-2xl uppercase italic pt-5">
            <FontAwesomeIcon icon={faInfo} className="mr-2" />
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              Why not use a different method?
            </span>
          </p>
          <p className="py-5">
            So, why not horizontal ventilation? Most of the time this is better
            suited for overhaul. During the fire stage, horizontal ventilation
            is too risky if you have multiple interior crews. If you need to
            ventilate from inside, isolate and use hydraulic ventilation. If you
            can't isolate, ensure you coordinate well with other crews. The
            problem with hydraulic ventilation is that it can take up valuable
            time when you could be continuing your primary. Ideally, this would
            be completed during your secondary or overhaul operation. This is a
            perfect example of why vertical ventilation is a far superior
            technique.
          </p>
          <p className="text-2xl uppercase italic pt-5">
            <FontAwesomeIcon icon={faInfo} className="mr-2" />
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
              Key takeaway
            </span>
          </p>
          <p className="py-5">
            Do what your department requires of you. If you are on a department
            that doesn't vertically vent, that's fine. But don't criticize other
            departments when you don't know what you're talking about,
            especially if they are good at what they do - because they train and
            they train hard. Whatever you do, do it safely. We all go home.
          </p>
        </div>
      </section>
    </article>
  );
}
