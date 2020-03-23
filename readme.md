<h1>Day Planner</h1>

<img src="https://lh3.googleusercontent.com/C7Cbq4BnQhHzxOt5fDa75val-cqf95kBWEksC87iblOjJpaxnI7_B1rD1yxIhzoCL2u1eFk9XB8ZopjxPiyRvXsvINNmwHm8i5-9tkDTcM_qUekyqygJUIsETwNwAS86AzryWtIBrCY_8Riy7FhgnrUeptjDulipO89tmSX3bQE8fOMqPQL7aySjzIM3bJRa8foHRvEou2vbVLtzka04qPaWmclIY0uM9nNT3WOhquPMxe8tb_DDxFdmpUlP9T-xBfBxhYZ8XPJmadlM6WWJwaoImGVLxE0UgH5Dy_KAwsPcg-s4Df_YiKh38q75Vlqzz7zLGFMyHgp8SzDb7JgoUf7A1RigNohQ3Qu8nslh4r-mAd5fBRGb8kT9NO-WgDhnnp8mtnYNf4gc1jpuLIoBmRyofBm_TyBIWZVN9d3cRYasg_WY3bjDjV1uplHJZeWRRtmSbWpMLFwLCxj8v_op-fdH39Fpm5DuY6JDCeQlsCPsOx9KK7SRxBkxjUtYXjqGbesp47wf-u5RDHDDPn7okJp8jKjo9RbY5eumAawJZ8b22PUOPsR9-mNvCM0wLSwniXMbR2JsY6YM2WLZ5sZGcOdPdkNAMuv6dsLNLWiyF1uRQs3J4tfVOkOjrttfHhl_p5Ug_IFnQandChUiliNyjxDAl6x7uYxhN3MnZ5oGdmVl52tGvLKqAPE=w1862-h1140-no"
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