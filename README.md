Javascript Exchange Rate Converter

This project consists of two rate converters. 
- The first one converts only from the US Dollar (base currency) to 150 currencies.
- The second one converts between multiple currencies but limited to only 52 currencies.

Assumptions Made: 
- During the course of the project, we discovered that the API used (openexchange.org API) only converts from one currency
(the base currency which is US dollar) to other currencies and the base currency does not change. So it was decided amongst the team to develop two converters-
one that converts from US dollar to multiple currencies using the openexchange.org API and another converter that converts or accepts multiple 
base currencies using exchangerate-api.com API limited to 52 currencies excluding the Nigerian Naira.
- The menu components in the webpage are inactive as they were included primarily for aesthetics. 

Issues Faced: 
- Obtaining a free API that accepts a wide range of multiple base currencies to convert from was a challenge.
- Integrating the two API's we selected for the project in one javascript file wasn't feasible, due to one of the API's accepting the base currency only as USD (US Dollar) will result in inaccuracies in the rate calculation.

Feedback: The project was a good choice as it challenged the team to use a tool (API's) we were previously non-conversant with.

Project Contributors: Samuel Abah (@Technelly), Raheem Abeeb Ishola (@Beloved), Mawuena Hayes (@mawuena), Oluwafemi Akinyemi (@Femi), TaraKuds (@TaraKuds) .

![](Readme%20image/ReadmeImage.png)
