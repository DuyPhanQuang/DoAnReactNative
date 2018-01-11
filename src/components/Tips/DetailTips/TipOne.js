import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

// export default {
// classesStyles: {'last-paragraph': { font-size: '2em', padding: '10%' }}
// }

const htmlContentOne = `
<div style="padding: 15">
<h1 style="color: #F66D6A">How to increase your motivation</h1>
<p style="textAlign: center; font-size: 1.1em">If you're reading this, it means that you're serious about losing weight.Our application offers you a unique training plan of different workouts. Cardio, fullbody and trouble zone oriented workouts will help you to burn more calories in less time.
</p>
<p style="textAlign: center; font-size: 1.1em">To maintain a stable weight loss, take a closer look at your eating habits and make healthy choices. In app tips you'll find the important infomation about working out and everything connected with healthy living.
</p>
<p style="textAlign: center; font-size: 1.1em">Additionally, you'll learn how to distinguish between good and bad food. You'll also learn what protein, fat, carbs are, why you need them, and you'll understand how many calories you need to consume daily to lose weight, get fit and stay healthy. Enjoy reading and good luck as you embark on your journey to a healthier and stronger and stronger version of yourself!
</p>
</div>
`;
const htmlContentTwo = `
<div style="padding: 15 15">
<h1 style="color: #F66D6A">How to increase your motivation</h1>
<img src="http://i.imgur.com/gzvFlEQ.jpg" />
<p style="textAlign: center; font-size: 1.1em">In order to achieve your weight loss goals faster, keep your motivation high. Here are a few tricks which will help you increase your level of motivation:</p>
<ul>
    <li style="font-size: 1.1em">Stick to the plan. It makes your workout more challenging when you follow a plan, gradually in crease the workout intentsity and review your stats and progress. Follow our Premium Training Plan to achieve better results </li>
    <li style="font-size: 1.1em">Get audio instructions. It'll help you to workout correctly and will stay motivated.</li>
    <li style="font-size: 1.1em">Listen to music mixes. This app gives the opportunity to select music from created playlists</li>
    <li style="font-size: 1.1em">Celebrate your achievements. Choose motivational gifts that will encourage you to train even harder. To get maximum of your training and to boost your motivation, try the PREMIUM FEATURES</li>
</ul>
    </div>
`;
const htmlContentThree = `
<div style="padding: 15 15">
<h1 style="color: #F66D6A">Fitness for Weight Loss Premium Plan</h1>
<img src="http://i.imgur.com/gzvFlEQ.jpg" />
<p style="textAlign: center; font-size: 1.1em">Enjoy the benefits of the Premium Plan:</p>
<ul>
    <li style="font-size: 1.1em">personalized training plan based on your needs</li>
    <li style="font-size: 1.1em">flexible training schedule.</li>
    <li style="font-size: 1.1em">Every training adjusts to your progress and current level</li>
    <li style="font-size: 1.1em">1000+ cool workout mixes</li>
    <li style="font-size: 1.1em">no ads</li>
</ul>
<p>Get premium features: Menu -> in head you can see Upgrade to Premium</p>
</div>
`;
const htmlContentFour = `
<div style="padding: 15 15">
<h1 style="color: #F66D6A">Water & Food</h1>
<img src="http://i.imgur.com/Z73YHoFg.jpg" />
<p style="textAlign: center; font-size: 1.1em">Hydrate throughout your day, not just after a workout. Get in the habit of sipping water continuously during the day.</p>
<img src="http://i.imgur.com/UESCPih.jpg" />
<p style="textAlign: center; font-size: 1.1em">If you start your workout dehydrated, you won't get the maximum out of your workout, as water helps your body to exercise more efficiently. General guidelines are to drink 17 to 20 ounces of water 2 to 3 hours before exercising, another 8 ounces during your warm-up (or 20 to 30 minutes before exercising), 7 to 10 ounces every 10 to 20 minutes during exercise, and 8 ounces of water within 30 minutes after exercising.</p>
<p style="textAlign: center; font-size: 1.1em">Always have a bottle of water nearby when exercising, even at home.</p>
<ul>
    <li style="font-size: 1.1em">Staying hydrated is essential when working out, in order to replace the fluids you lose in perspiration; it also helps you to maintain your energy.</li>
    <li style="font-size: 1.1em">A great time to drink water is during a break in between exercises sets, for example.</li>
</ul>
<img src="http://i.imgur.com/miIOfM8g.jpg" />
<p style="textAlign: center; font-size: 1.1em">To maximize the results of your training, try to eat 2 - 3 hours before you exercise. Whether you're trying to stay in shape or shed a few pounds, it's a good idea to eat within 45 minutes or an hour after your workout.</p>
</div>
`;
const htmlContentSeven = `
<div style="padding: 15 15">
<h1 style="color: #F66D6A">How to workout at home</h1>
<p style="textAlign: center; font-size: 1.1em">Exercising at home has many benefits: you save travelling time, and you can work out whenever you like. Ideally, your workout regime should be as consistent as possible, so that you take your exercise sessions seriously. Please follow the plan:</p>
<img src="http://i.imgur.com/j7tSv7Yg.jpg" />
<ul>
    <li style="font-size: 1.1em">Select certain days and time for your workout session (i.e. Monday, Wednesday and Friday's at 7:00 a.m.)</li>
    <li style="font-size: 1.1em">Designate the area of your home where you can exercise freely. Be sure you have enough space, with no unstable or fragile objects around.</li>
    <li style="font-size: 1.1em">Stay focused. Don't allow yourself to get lazy just because you are at home.</li>
</ul>
<img src="http://i.imgur.com/7IgI7Xug.jpg" />
<p style="textAlign: center; font-size: 1.1em">In our application you should set your week timetable.</p>
<p style="textAlign: center; font-size: 1.1em">Try to work out when you are alone at home. You don't want to be interrupted by your family members as they get on with their everyday routine. Young children often like to climb all over adults doing push-ups and sit-ups </p>
<p style="textAlign: center; font-size: 1.1em">If a family member stops by and distracts you, it's easy to let that be an excuse to skip your work or to end your session earlier than planned.</p>
</div>
`;
const htmlContentEight = `
<div style="padding: 15 15">
<h1 style="color: #F66D6A">Workouts</h1>
<p style="textAlign: center; font-size: 1.1em">Strength training or cardio? Which is better? Although it's a reassonable question, there is no correct answer. Each type of exercises is different and achieves totally different results. Cardio imporves your cardiovascular fitness and it is the main method of burning fat and losing weight. Strength training builds and strengthens your muscles to make you stronger and improve muscle definition. So whether you exercise for health reasons or just to look good, both types of exercise are important.</p>
<p style="textAlign: center; font-size: 1.1em">There're 3 types of workouts in our application. The Free Training Plan includes only cardio workouts.</p>
<p style="textAlign: center; font-size: 1.1em">Cardio exercise is any exercise that raises your heart rate. And we all know that to keep our muscles in shape we need to move them. This movement makes them stronger, and stronger muscles make your body healthier. Your heart is a muscle and must be kept healthy.</p>
<p style="textAlign: center; font-size: 1.1em">The Full Body Workout is for every muscle group in the body. It combines upper body exercises, lower body exercises, and core exercises.</p>
</div>
`;
const htmlContentNine = `
<div style="padding: 15 15">
<h1 style="color: #F66D6A">Diet Plans Weeks For Weight Loss</h1>
<img src="http://i.imgur.com/DLLYKbu.jpg" />
<ul>
    <li>
        <div>
            <h2 style="color: #FFBF57">Start everyday with a promise to yourself.</h2>
            <p style="textAlign: center; font-size: 1.1em">Write it down in a notebook, or recite it in front of the mirror in the morning.</p>          
        </div>
    </li>
    <li>
        <div>
            <h2 style="color: #FFBF57">Quick weight loss diet strategy</h2>
            <p style="textAlign: center; font-size: 1.1em"></p>
            <ul>
                <li style="font-size: 1em">Eat a little less food than you feel you need. Attempt to consume meals that are small enough so you could feel hungry every 3 hours.</li>
                <li style="font-size: 1em">Do not consume water throughtout and after meals, wait 1 hour after eating to consume a cup of water.</li>
                <li style="font-size: 1em">Select a liquid diet plan with various soups and milk. 25-30% of your meals need to be liquid.</li>
                <li style="font-size: 1em">Don't consume excessive coffee, alcohol, sodas, tea, and canned juice.</li>
                <li style="font-size: 1em">Don't eat after 8 P.M. However, if you feel hungry drink a cup of milk or take a piece of fruit. </li>
                <li style="font-size: 1em">For treats, you can have lime juice, seasonal fruit, smoothies or salad. Don't eat snacks more than 4 times a day. Do not let snacks be your habit.</li>
                <li style="font-size: 1em">Start and end your day with a glass of lukewarm water.</li>
                <li style="font-size: 1em">Do not consume unhealthy food (fried foods, hot-dog, junk food, sweets, processed foods pastries, pizza, as they are abundant in chemicals and preservatives).</li>
                <li style="font-size: 1em">Eat lightly prepared vegetarian food, at least with some meal.</li>
                <li style="font-size: 1em">Try walking at least four times a day for 15 minutes, prior to meals.</li>
            </ul>
        </div>
    </li>
    <li>
        <div>
            <h2 style="color: #FFBF57">Some Meal Plan For One Weeks</h2>
            <p style="textAlign: center; font-size: 1.1em">Extreme Diet Weekly Meal Plan</p>
            <img src="http://i.imgur.com/kdH5Ibsg.png" />
            <p style="textAlign: center; font-size: 1.1em">Meal Plan Of The Week</p>
            <img src="http://i.imgur.com/WureEsxg.jpg" />
            <p style="textAlign: center; font-size: 1.1em">One Week Meal Plan</p>
            <img src="http://i.imgur.com/SFYePITg.jpg" />
        </div>
    </li>
</ul>
</div>
`;

class TipOne extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#FFF' }}>
                    <HTML
                    html={htmlContentNine} imagesMaxWidth={Dimensions.get('window').width - 100 }
                    />
            </ScrollView>
        );
    }
}
export default TipOne;
