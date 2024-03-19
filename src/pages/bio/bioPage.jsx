import Header from "components/Header";
import React from "react";

export default function BioPage() {
  return (
    <>
      <Header
        title="A short biography"
        html_emoji="&#9757;"
        text="My humble beginning, interests and future."
      />
      <article>
        <div className="image-container">
          <img src="self.jpg" width="300" height="400" alt="a portrait of me" />
        </div>
        <h2 className="heading">My journey</h2>
        <p>
          started off in Libya, just your average kid doing kid stuff. Then,
          bam! Parents decided it's time to ditch the drama and head to Italy,
          right before all hell broke loose in Libya. Spent a decent three years
          soaking in the Italian vibes, but you know how it is - got the itch
          for something new. Ended up in Sweden in December 2011, and life took
          a whole new turn.
        </p>

        <p>
          Did the school thing, got a job, all that jazz. But here's the kicker:
          stumbled into this 3D modeling thing and it became my go-to hobby.
          Thing is, hobbies have this funny way of evolving. Wanted more
          control, more pizzazz, so naturally, coding and programming swooped
          in. Life's been a wild ride, from Libya to Italy, and now Sweden - and
          who would've thought coding would be my secret sauce for a good time?
        </p>

        <h2 className="heading">Personal hobbies and interests</h2>
        <p>
          Back in the day, I was this football-crazy kid in Libya, dreaming big
          about becoming the next Messi or Ronaldo (the Brazilian one, not the
          other two). I ate, slept, and breathed football, and I was always the
          star player in my team. But you know how dreams go - sometimes they
          change. Mine shifted gears when I discovered my artistic side and fell
          head over heels for animation. That led me down the rabbit hole of 3D
          modeling, and I thought, "Hey, this is it!"
        </p>
        <p>
          Fast forward to now, and life's got a new rhythm. The football dreams
          might've faded, but my passion for creating never did. These days, I'm
          knee-deep in programming – building websites, tinkering with apps, and
          diving into all the cool new tech out there.
        </p>
        <h2 className="heading">Future aspiration</h2>
        <p>
          Looking ahead, my eyes are set on Saudi Arabia. Europe's been cool and
          all, but I've always felt a bit adrift. Saudi Arabia? Feels like home,
          you know? I've got this itch to build something big there, maybe an
          app that shakes things up and helps out millions. And yeah, dream boss
          move – picture me at the helm of a tech company, calling the shots.
          Life's short, but my dreams? They're not playing small. Here's to
          making waves and finding that sense of belonging in the Middle East.
        </p>
      </article>
    </>
  );
}
