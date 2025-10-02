+++
date = '2025-10-02T16:22:54+02:00'
draft = false
title = 'The Brutally Honest Programming Guide That Actually Works'
tags = ["guide", "programming", "beginner", "tips", "career"]
categories = ["Programming", "Tutorials"]
featured = true
+++

Look, if you don't have the energy to read this whole thing, maybe coding isn't your cup of tea. Have you considered becoming a YouTuber instead?

## TL;DR

- Build as you go — stop waiting to “know everything.”
- Google relentlessly — solve problems, make those brain cells work.
- Make **real software** like companies do, not TicTacToe clones.
- Show off your projects — companies won’t find you lurking.
- Stick to **one course or resource**; finish it.
- If you don't laugh at your old code, you are not growing.
- Imposter syndrome is real so embrace it.
- Either you die a developer or live long enough to become a CTO.

---

## So You Wanna Be a Developer, Huh?

Classic advice everybody gives: “Start with Python! Learn C! Master data structures!”  
Then you open a tutorial, keep on watching a 10-hour-long video just to build a calculator and wonder why you’re not the next Zuckerberg. Here’s the reality:

> You **don’t need to memorize the whole language** before building something meaningful.  
> That’s like thinking you need to understand quantum physics before using a microwave.

So stop wasting time on TicTacToe and Todo lists and binge watching Youtube tutorials.

## What to build?

How to come up with project ideas? It's simple as hell. [Build things you’d actually build at your dream job.]() Want to be a full-stack developer? Stop making basic apps and websites that look like they were designed in 2003. Create fully functional, real-life applications. Avoid simple, basic projects even if you are a beginner.

**Example:** _Making a weather app?_ Don't just show temperature and call it a day like some bootcamp graduate. Include login options, bookmarks, weather statistics, air quality data, multiple themes, and use an actual database for user data. Make it feel like a real product.

_Building a music app?_ Give it ALL the features of Spotify—user authentication, playlists, sharing options, recommendations, the works. Show that you can develop robust applications like a real company would.

## The "Learn as You Build" Strategy

Stop trying to learn _everything_ before you start.  
[Focus on building first, learning as you go.]()

---

### Example: A Car Rental App

Suppose you want to create a **car rental app** with react native that shows a list of cars available to rent.

> You don't need to know anything about React Native; Don't worry, just skim.

<div style="text-align: center;">
    <img src="/images/car_rental_app.jpg" alt="Car rental" width="200">
    <p style="font-style: italic; color: #666; margin-top: 8px; font-size: 14px;">Car Rental App - Main Screen Layout</p>
</div>

Instead of saying _“I must master all of React Native first”_, we break the problem down into **smaller features** and learn just enough to build each.

So what do we need then:

- some square boxes with car infos
- a bar to filter and sort
- some buttons + texts

---

### Step 1: The Smallest Building Block → A Car Card

The app’s main screen is basically a **list of cars stacked vertically**.  
The smallest unit of that list is a **card** — like a small box with text and maybe an image.

👉 But before we jump in, let’s pause and answer: _What is a component?_

Think of a component as a shape(square, circle) you place on a board or screen to build what you see in the app.

For example:

- A button is a component.
- A header is a component.
- And in our case, a **CarCard** will be a component. [_(which we googled of course)_]()

<div style="text-align: center;">
    <img src="/images/car_card.png" alt="Car card component" width="200">
    <p style="font-style: italic; color: #666; margin-top: 8px; font-size: 14px;">Individual Car Card Component</p>
</div>

Now we can render a single car like this:
`<CarCard name="Nissan GT-R" /> `

> Think that each time we write `<CarCard/>` our computer builds card and places it on screen.

---

### Step 2: From One Card to Many

Okay, but a car rental app doesn’t just have one car.  
We need a list of cars.

👉 Question: How do we take a list/array of cars [[Nissan GT-R, Porsche 911, Range Rover]]() and stack them to achieve our app view?

The answer is the `map` method: it takes a whole list and transforms it, so in our case it turns plain car data into ready-made cards. Instead of building every card ourselves, we just tell map how one card should look, and it goes through the list and creates a card for each car automatically — giving us the full set in one go.:

```jsx
const cars = ['Nissan GT-R', 'Porsche 911', 'Range Rover'];

// we turn every raw data into a car card component
{
  cars.map(car => <CarCard key={car.id} data={car} />);
}
```

Boom 💥 now each car is wrapped in its own `<CarCard/>`.

### Step 3: Placing the list of card in a single column

Now to place them in a single column. If you search hard enough in **google** you'll know React Native gives us `FlatList`, a special component for lists, that will take a list of components and place them in a column. You already know the answer—we wrap the list of cards we get from the map method inside it, and we are done.

```jsx
<FlatList
  data={cars}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => <CarCard data={item} />}
/>
```

## What just happenend?

Don't worry if you didn't get the code, what I wanted you to notice was:
We didn’t try to learn everything about React Native.
We just asked:

- What is a component?
- How do I build a card?
- How do I repeat the card for a list?
- How do I display those in a single column?

Each question led us to a tiny piece of code, and step by step, the app emerges.

That’s **“Learn as You Build.”** Even if you didn't get anything now you know how react natve builds an app. All that just from some random google searches.

## Resource Starter Pack

My personal recommendation is **Documentation > Tutorials**. So read official docs or atleast build a habit of it, thank me later when you realize the importance.

Still, here's some resources to get you started:

> Stick to one resource even if there's a better one out there.

📌[More catagories will be added later and some course are paid, but I will upload them in a drive if guys are unable to find them on your own]()

### Web Development

###### HTML <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="16" height="16" style="vertical-align: middle;"/> / CSS <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="16" height="16" style="vertical-align: middle;"/>

- [W3Schools](https://www.w3schools.com/)
- [FreeCodeCamp – Responsive Web Design](https://www.freecodecamp.org/learn/2022/responsive-web-design/)
- [Josh Comeau – Courses](https://www.joshwcomeau.com/courses/) (Best one out there)
- [Kevin Powell – Courses](https://www.kevinpowell.co/courses/) (follow him on YT)

**Note:** Watch a FreeCodeCamp/Brocode HTML tutorial (20-30 min) on YouTube. Then go through W3Schools documentation. Next, create a basic web page about yourself with headings, images, and everything you learned. After that, learn CSS from a tutorial not longer than 30 minutes. Try styling the web page you created with HTML. Finally, continue exploring and experimenting with own.

##### JavaScript <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="16" height="16" style="vertical-align: middle;"/>

- [JavaScript.info](https://javascript.info)
- [The Odin Project](https://www.theodinproject.com/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [The Complete JavaScript Course – Jonas Schmedtmann (Udemy)](https://www.udemy.com/course/the-complete-javascript-course/)
- [30 Day Vanilla JS Coding Challenge](https://javascript30.com/)

**Note:** After learning a bit of html & css, start with the js.info or Eloquent js site. If you want a structured course go for odin project. If reading isn't your strong suit, do the course. He's one the best in the industry. Do the coding challange as well, it's really good and purely follows our learn as you build strategy.

##### React <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="16" height="16" style="vertical-align: middle;"/>

- [React Official Docs](https://react.dev/learn)
- [Full Stack Open](https://fullstackopen.com/en/)
- [Joy of React](https://www.joyofreact.com/)
- [The Ultimate React Course – Jonas Schmedtmann (Udemy)](https://www.udemy.com/course/the-ultimate-react-course/)

**Note:** React did a great job in documentation. If you start their doc you will understand how every other framework should have done the same. So, go for the fullstack open and read the doc side by side. Alternatively, you could choose one of the video courses both are great for in-depth learning.

### Mobile App Development

**Note:** For all of them read the doc a bit for a headstart, then dive into the courses. If you need to clear up any ideas then hit the doc again but only for those portions.

##### Flutter <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" width="16" height="16" style="vertical-align: middle;"/>

- [Dart Language Docs](https://dart.dev/language)
- [Flutter & Dart by Maximilian Schwarzmüller (Udemy - Recommended)](https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/)
- [Flutter Crash Course by Net Ninja (YouTube Playlist)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ) (a bit old but good for starting)
- [Flutter Basics – Rivaan Ranawat (YouTube)](https://www.youtube.com/watch?v=CzRQ9mnmh44)

##### React Native <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="16" height="16" style="vertical-align: middle;"/>

- [React Native Docs](https://reactnative.dev/docs/environment-setup)
- [React Native: The Practical Guide by Maximilian Schwarzmüller (Udemy)](https://www.udemy.com/course/react-native-the-practical-guide/)
- [The Complete React Native & Redux Course by Stephen Grider (Udemy)](https://www.udemy.com/course/the-complete-react-native-and-redux-course/)

##### Kotlin <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" width="16" height="16" style="vertical-align: middle;"/> (Android Development)

- [Android Basics with Compose](https://developer.android.com/courses/android-basics-compose/course)
- [Typealias – Kotlin Tutorianormalls](https://typealias.com/start/)
- [Hyperskill Kotlin](https://hyperskill.org/categories/4)

##### Swift <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" width="16" height="16" style="vertical-align: middle;"/> (iOS Development)

- [Swift – Get Started](https://developer.apple.com/swift/get-started/)
- [SwiftUI Tutorials](https://developer.apple.com/tutorials/swiftui/)
- [Swift Book](https://docs.swift.org/swift-book/documentation/the-swift-programming-language)
- [Stanford CS193p – SwiftUI](https://cs193p.stanford.edu/2023)
- [100 Days of SwiftUI – Hacking with Swift](https://www.hackingwithswift.com/100/swiftui)

## The Stuff Nobody Mentions (But Should)

- **Forget stuff?** Google it, speedrun a yt video. Don’t feel embarrassed. Even the best programmer forgets stuff.
- **Stop trying to be a genius.** You can't come up with clever solution from day one. You'll impove day by day, it's exponential.
- **Eat that frog:** Do the hardest task today. Don’t procrastinate. There are no such words which would motivate you unless you want to be. Remember it's always about what you choose.

## Final Reality Check

Build real stuff, **show it off everywhere**, make noise about your work. Lurking in the shadows won’t get you hired.
