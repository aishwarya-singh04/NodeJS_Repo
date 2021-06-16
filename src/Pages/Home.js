import React from 'react'

export default function Home() {
    return (
        <div className="container">
            <h1 style={{fontSize: "80px", padding:"10px"}}>Home</h1>
            <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications (SPA).  </p>
            React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.

            <p>React Router uses component structure to call components, which display the appropriate information. React router also allows the user to utilize browser functionality like the back button, and the refresh page, all while maintaining the correct view of the application.</p>
        </div>
    )
}
