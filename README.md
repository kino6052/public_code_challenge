# Farm App Trace Genomics Full Stack Tech Assessment

## Getting Started

### How to Run

In order to run the project, first make sure that node packages are installed with `npm i`. Then, you can run `npm run start` command. This will run the project on port `8000`

### Running Tests

In order to run tests, execute `npm run test`

## What's Inside?

### Decision Making Process

Since the applications, like the one I wrote for this project, are essentially a way of presenting data to the end user, I had to understand what the data looks like, and in what way it could be presented in such way that all the requirements are solved effectively.

Once I saw the data, my first intuition was to see whether there were projects that had to deal with similar data, and what decisions they made. This usually saves me a lot of time, when I work on personal projects, as I can quickly gauge what has worked out and what has not for them.

Among the projects I looked at, `LandAndFarm.com` seemed like a very simple, yet effective solution, that was also very similar to this task. I especially liked the way they approached the price-range filter.

I put together a simple mock in Figma, to make sure it looks exactly what I was thinking it was going to, and it seemed alright.

At this point, I knew that I had to start with front-end, because it would determine how I would be interacting with data, and hence would tell me how to better serve it to the client.

I decided to add TypeScript. It took some time to reconfigure Webpack. The reason for that was to enable `IntelliSense` to improve development experience, as well as to avoid numerous runtime errors you can overlook when working with pure JavaScript.

I used MaterialUI as advised.

I really like the philosophy behind pure [React thinking](https://reactjs.org/docs/thinking-in-react.html). According to it, I started with a mock, with no logic whatsoever. I then, tried to have a part of the functionality to work statically.s

My next step was a slightly experimental idea to segregate events from React. The reason for that was an attempt to avoid tainting "React thinking" with passing logic to all the functional components down the tree from the top level, which is usually not a very pleasant thing to do. I think this attempt was successful. I hope I was also able to demonstrate that such way allows for much leaner components (as opposed to event-handler-bloated material-ui components)

I used RxJS for state-management, as well as to demonstrate decoupling practices. "Reactive services" (Services that use RxJS) are a great example of how business logic can exist without knowing anything about presentation, as well as presentation doesn't have to know anything about the business logic, aside from what shape the `ApplicationService` state has. The services are also quite unaware of each other. Such approach is quite easy to test, it also makes it easy to add new logic. The only caveat, is that I had to introduce a hook, that was connecting the RxJS subject with the React state, to make the presentation logic to react to the changes to the business logic.

The unexpected challenge was dealing with router. I am still not sure what went wrong, but I couldn't get React Router to work correctly.

At the end, I had to take care of the data layer.

I decided to load all of the data at once. The data we present could have been displayed in a card without the need of routes, yet that is probably not the most effective way for the data presentation to the user. But since the data is not very complex, I treat it as essentially just cards. Therefore, as a scalability approach, I would have added pagination, but still would load it partially at initialization.

Therefore, the endpoint on the server side was very simple and just returned the dummy data.

I believe that the application fulfills the main goal of giving a way for users to easily view farm information by letting them to look up farms by name, find farms by revenue, view field details for a given farm.

## Future Directions

Working on this challenge, I was humbled and reminded just how complex application development process really is. Just how many decisions should be taken during this process. So, of course I would want to add numerous additional improvements to both the UI and functionality.

**List of Enhancements**

- Adding User Accounts
- Sort by name, price ....
- Images
- Map
- Responsive
- Performance
- Server-side rendering
- Routes
- SEO
- Accessibility
- ARIA
- Internationalization
- Browsers
- Security
