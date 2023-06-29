import React, { useEffect } from "react";
import { Navbar, Banner, BlogSocial, Footer } from "../components";
import { customer } from "../assets";
import { Helmet } from "react-helmet";

export default function CustomerFocused() {
  return (
    <div>
      <Helmet>
        <title>Why Do Customer Focused User Journeys Matter? | Codecraft</title>
      </Helmet>
      <Navbar />
      <Banner
        heading="Why Do Customer Focused User Journeys Matter?"
        image={customer}
      />
      <div className="flex flex-col-reverse md:flex-row gap-10 px-5 py-20 max-w-5xl mx-auto">
        <BlogSocial title="Why Do Customer Focused User Journeys Matter?" />
        <div className="flex flex-col gap-5">
          <p>
            You have a great product and your initial customer base loves it.
            You have your target audience narrowed down and you have plans in
            place to advertise to this audience with custom messaging. Your
            Google Analytics shows that people are visiting your website, but
            none of these visitors are converting to leads. A crucial element of
            converting website visitors to leads is a strategic narrative. You
            can begin structuring a strategic narrative by doing a positioning
            exercise called “Who/Why/What/How”. This will help you to discover a
            company story that can be used to portray your company vision and
            related products to your audience.
          </p>
          <h1 className="text-2xl">
            It is important to ask yourself these questions:
          </h1>
          <ul className="list-decimal ml-5 marker:text-yellow-400">
            <li>Who are you selling to? </li>
            <li>Why are they visiting your site? </li>
            <li>
              What does your target audience want to know about your product
              before purchasing?{" "}
            </li>
            <li>How do customers hear about your product?</li>
          </ul>
          <p>
            Answering these questions will help you to strategically develop a
            compelling company story that fuses together different elements of
            your organization and tells a powerful narrative about your
            business. Let’s take a dive into the four questions and see how we
            can derive some meaning from this process.
          </p>
          <h1 className="text-2xl">Who Are You Selling To?</h1>
          <p>
            One of our clients is a recently funded company that markets and
            sells a sales automation software solution. Theoretically, its
            market can be defined as all of the companies with a sales team.
            However, this is unrealistic because of the companies finite
            resources in sales, marketing, and software support.
          </p>
          <p>
            The initial step was to define our client’s market segments -
            US-based companies with more than 1,000 employees and a sales team
            with more than 20 reps or high-growth technology companies with 100
            to 250 employees and at least 10 people on their sales team.{" "}
          </p>
          <p>
            There were 3 significant advantages of breaking down the market into
            segments
          </p>
          <ul className="list-decimal ml-5 marker:text-yellow-500">
            <li>We were able to pinpoint the requirements of each group</li>
            <li>
              We could identify a few target segments where our client could
              effectively compete in
            </li>
            <li>Identify segments that could be targeted at a later stage </li>
          </ul>
          <p>
            After you have identified your target segments, you need to
            thoroughly break down who your ideal buyer is. While the C-suite
            usually has the final sign-off, according to a 2014 study by Google,
            81% of non-C-suiters have a say in purchase decisions. The research
            phase is usually done by Directors and Managers who prepare an RFP
            and evaluate competitors.
          </p>
          <h1 className="text-2xl">Why Is This Person On Your Website?</h1>
          <p>
            The "why" is different for researchers and final decision-makers:
            The researchers, for instance, visit the site to learn about your
            product and to compare the features and benefits of different
            options.
          </p>
          <p>
            The final decision-makers are usually concerned with the high-level
            benefits of your product or solution. Typical questions that they
            would ask are -{" "}
          </p>
          <ul className="list-decimal ml-5 marker:text-yellow-500">
            <li>“Will this solution help my company win more deals?”</li>
            <li>
              “How will this solution help make the processes at my company more
              straightforward?”
            </li>
          </ul>
          <p>
            Usually, decision-makers don’t have the time to learn about how each
            feature works.
          </p>
          <p>
            Therefore, it is of utmost importance that your website highlights
            the high-level benefits of your solution as well as having
            easy-to-access feature-specific information.
          </p>
          <h1 className="text-2xl">
            What Product or Solution Information Does Your Target Audience Need
            To Know About Before Purchasing?
          </h1>
          <p>
            Before making any purchasing decision, people usually compare
            different options against a set of criteria. Therefore, your website
            needs to address these areas that visitors will use to evaluate your
            product or service. It is important to answer your customers’
            questions in the right order. By mapping out your ideal customers’
            evaluation process you will be able to narrow in on the “what” for
            your website and business.
          </p>
          <h1 className="text-2xl">
            How Do Customers Hear About Your Product?
          </h1>
          <p>
            It is of utmost importance to understand the different channels that
            bring traffic to your website. This helps paint a clear picture of
            what channels bring the most effective traffic to your website.{" "}
          </p>
          <p>
            Let’s take our software automation client as an example. If someone
            lands on their website through a Google search, it means that this
            person is actively researching sales automation software. This could
            mean that they are either evaluating a few vendors or just
            researching the technology behind your solution or product.{" "}
          </p>
          <p>
            We identified that quite a few website visitors were arriving from
            various social profiles. Most of these visitors were not converting
            as leads and only showed an interest in browsing the content on our
            client’s website. This highlighted that social media visitors are
            probably not too keen on signing up for a demo or a product
            walk-through. Taking this information into consideration, we tweaked
            the call to action to persuade social media visitors to subscribe to
            our client’s blog.
          </p>
          <h1 className="text-2xl">Quick Recap:</h1>
          <p>
            In order to create a captivating company story that will persuade
            site visitors to take certain desired actions, it is extremely
            important to understand:
          </p>
          <ul className="list-decimal ml-5 marker:text-yellow-500">
            <li>Who is coming to your site?</li>
            <li>Why are they visiting your brand?</li>
            <li>What product information are they searching for? </li>
            <li>How do visitors get to your site? </li>
          </ul>
          <p>
            By answering these four questions, you put your business in a
            position to create unified company messaging that drives tangible
            business results.
          </p>
          <p className="text-sm font-bold">
            It is important to ask yourself these questions:
          </p>
          <ul className="list-decimal ml-5 marker:text-yellow-500">
            <li>Who are you selling to?</li>
            <li>Why are they visiting your site?</li>
            <li>
              What does your target audience want to know about your product
              before purchasing?
            </li>
            <li>How do customers hear about your product?</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
