import React from "react";
import MainLayout from "../Layout/MainLayout";
import "./HealthPage.css";

function HealthPage() {
  return (
    <MainLayout>
      <div className="healthTips">
        <div className="heathTitle">
          10 TIPS FOR MAINTAINING A HEALTHY LIFESTYLE AND BODY WEIGHT
          <p>
            {" "}
            Yiqing Song, Professor of Epidemiology, Department of Epidemiology,
            Fairbanks School of Public Health
          </p>
        </div>

        <div className="healthDesc">
          At this extreme moment, we began working from home, away from campus,
          and keeping social distance for as many people as possible. As we stay
          home and are stuck with the foods that have been in our fridge or
          pantry for a while, we are temporarily living a sedentary lifestyle
          with increased odds of physical inactivity, excessive eating and
          sitting, stress, anxiety, and depression. In particular, many of us
          will gain some weight during the pandemic and may keep the extra
          weight permanently, which may carry considerable health risks for type
          2 diabetes, hypertension, heart attack, stroke, and other health
          problems.
        </div>

        <div className="tip-container">
          <div className="tip1">
            <div className="number">
              1<p>Measure and Watch Your Weight</p>
            </div>

            <p className="tip-desc">
              {" "}
              Keeping track of your body weight on a daily or weekly basis will
              help you see what you’re losing and/or what you’re gaining
            </p>
          </div>
          <div className="tip1">
            <div className="number">
              2 <p>Limit Unhealthy Foods and Eat Healthy Meals</p>
            </div>
            <p className="tip-desc">
              Limit Unhealthy Foods and Eat Healthy Meals Do not forget to eat
              breakfast and choose a nutritious meal with more protein and fiber
              and less fat, sugar, and calories.{" "}
            </p>
          </div>
          <div className="tip1">
            <div className="number">
              3 <p>Take Multivitamin Supplements </p>
            </div>

            <p className="tip-desc">
              To make sure you have sufficient levels of nutrients, taking a
              daily multivitamin supplement is a good idea, especially when you
              do not have a variety of vegetables and fruits at home. Many
              micronutrients are vital to your immune system, including vitamins
              A, B6, B12, C, D, and E, as well as zinc, iron, copper, selenium,
              and magnesium. However, there’s currently NO available evidence
              that adding any supplements or “miracle mineral supplements” to
              your diet will help protect you from the virus or increase
              recovery. In some cases, high doses of vitamins can be bad for
              your health.
            </p>
          </div>
        </div>
        <div className="tip-container2">
          <div className="tip4">
            <div className="number">
              4<p>Drink Water and Stay Hydrated, and Limit Sugared Beverages</p>
            </div>

            <p className="tip-desc">
              Drink water regularly to stay healthy, but there is NO evidence
              that drinking water frequently (e.g. every 15 minutes) can help
              prevent any viral infection. For more information on drinking
              water and coronavirus, please check the following EPA website:
            </p>
          </div>
          <div className="tip1">
            <div className="number">
              5 <p>Exercise Regularly and Be Physically Active</p>
            </div>
            <p className="tip-desc">
              At this time, at-home workouts may be a good idea. But you can
              also walk your dog or run outside. Be sure you know what’s going
              on in your area and if there are any restrictions or mandatory
              self-quarantines.{" "}
            </p>
          </div>
          <div className="tip6">
            <div className="number">
              6 <p>Reduce Sitting and Screen Time </p>
            </div>

            <p className="tip-desc">
              Exercise can’t immunize you from your sedentary time. Even people
              who exercise regularly could be at increased risk for diabetes and
              heart disease and stroke if they spend lots of time sitting behind
              computers. Practically speaking, you could consider taking breaks
              from sedentary time, such as walking around the office/room a
              couple of times in a day.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HealthPage;
