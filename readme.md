<h1>Day Planner</h1>

<img src="https://lh3.googleusercontent.com/k6wzWxJyJQk177KLif4xfzhxX9mt6pkUYzzOMDTzPmnKc0gRtbr9KodaXpDR9G_ujVW5hOKzoA4RTtfQTctPxzMBvJ9JSnqkYRxYhwJ1JFdT8urbvbBwzTx-hpNWggT-ZwraR_4Hmn6Mxl6bW4rttOWcp95Fyz4FY-bvtq3otuuHUO-88UFJI0tWHaPiJOhPBk7rsXJW8R1HFWv1KMub3PEBlQRVHbiljuI1bbhhyV6DgqM3nL2Uvq2SpHUjUXub4NtLdxxgKzlxHrzFbHngcofyuMtaxTDtAE383fLc1NCsIMawUPuc7KDhqJ_QfjJYwLNjFW0bcIn7ysA-CI-DYIpricSSFEL986xCIH8SWr5weTCk6N2E2jCA61Cd3oOVh3wzxpPz2gwE27oGP7sHZq2XMT-ORSvTyKKNBlJhO7hsXU11OTtdrQzQ0aFt5qApVb5zexPUTGXIrdEW3QYxtsso-ytzwl4uvrJhQCZOO7ZCYhBmQp26VmAN9Z_OPOHTnpqH-1e5vFQoh3FAzVTHOfOL5h25yJ4xUSPifOJs56nKM7ZdDXl530H8BNuJZ7STj63VB2Ot0C9YA71p-g4XiIEPVCZp1ukbeXYygWq1Qio4kfipjGm0MsjGUsnKM5HSMhhz_alvrc3odjkP7FAvajE9sDGjtFjuab9as4nxfBbFb0sauszVVtCLMPAgYNmzr7UNsD9R4kQSUmxYmxq9-yYLp7cfCVvKY8EOh1udJCvVTwJV1tYCUOk=w1436-h879-no"
    alt="Screenshot of the day planner app">

<h2>The Code</h2>
<a href="https://uxhawk.github.io/gw-hmwk-05-day-planner/">Open Day Planner
    Demo</a>

<p>This day planner uses <a href="https://momentjs.com/">moment.js</a> in two ways:</p>
<ol>
    <li>format the date to display today's schedule</li>
    <li>return the current hour then check if scheduled task occurs in the past, present hour, or future</li>
</ol>
<p>The day planner uses the <a href="https://api.jquery.com/">jQuery API</a> to manipulate the DOM.</p>

<p><a href="https://getbootstrap.com/">Bootstrap</a> CSS and components are used to display the day's schedule and task
    list. <a href="https://getbootstrap.com/docs/4.4/components/alerts/">Alerts</a>, <a
        href="https://getbootstrap.com/docs/4.4/components/card/">Cards</a>, and <a
        href="https://getbootstrap.com/docs/4.4/components/modal/">Modals</a> are the primary compo
</p>

<h3>Local Storage</h3>
<p>The day planner saves tasks in local storage. After users create a task in the <a
        href="https://getbootstrap.com/docs/4.4/components/modal/">Modal</a> window, the name and desription are added
    as an object to <code>var events = []</code> array. A <code>time-index</code> key value pair is added to the object,
    and refers to a specific row in the day's schedule. Since users can add tasks to their schedule in any order, the
    <code>time-index</code> value makes it possible to display the correct tasks in their appropriate row. </p>

<h2>How to Use</h2>
<p>Click or tap in the hour to pull up a <a href="https://getbootstrap.com/docs/4.4/components/modal/">Modal</a> window,
    then enter a task name and description.</p>
