<h1>Day Planner</h1>

<img src="https://lh3.googleusercontent.com/T_ujF9Ne0xyofgWkwOmwadChgKeC5YiJ1WdtsoGuhBT0eoJT38afMOTFnq67cf7OMeGU5pSc5OvGwfH6Fjysca-HWqSiQWTIZDJM0uJy2ndQMhYhK5U1JKQ9fdbKLGRdytQNuKt8Y1X2bX0FwNhd7p3ZqRWSd3pcfuEwbcvcL4hDJGwffn8PpSSJiitepID6m8rHsNU4cJvvG3B6eh770BwmFz8rDB_OYqPi5zRM-V7WPsTc6JNWIo6cAz-XJpNKkGsLnVtTSpp_8c-x5NV9gtwKbvZr-JAbq3r78anDpml2bR26X2yWtuH8uqntUIcio2NJtQW_VBGLyLGytZZvsuDVf5DOpcjapoKITdeX4foxNA-tE35Y0OAGtDoirGNcLOfYiOoeuDtI-aOqD42yvZXb0mPltjII6p6Koti3O1hsYIIsm7invrYy6rvl_mNLqwwP8V8BsMdF3wPsFIa9RZJ4SaS2xjxagnH6OYsPtW-DfY6T3_-DAfL0ZTa_GqmIDF3JuCGfDFfzYP6VC6cJrdK_gElRH1DjwcIydG24U6QD7n3yp1AN4q55YspZNu9WQmfSuBCJxLlM7fVBOCRZP5wc_an2kpu4bhvYdw0MkY2HS8lQ3mdjSp2Xep0HS0T7DS7VwwOEPPLUMijoHSGn5v-5aKGARh7P9krxzq5hOhwYob7SobNO_6DsgkYC2A=w1582-h968-no"
    alt="Screenshot of the day planner app">

<h2>The Code</h2>
<a href="https://uxhawk.github.io/class-activities/week-05_third-party-apis/homework/index.html">Open Day Planner
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
