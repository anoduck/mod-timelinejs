---
title: Test site
description: Site to test module shortcode(s).
date: 2023-07-10
---

__There should be a fancy Timeline element below.__

This plugin works with both json files in the timelinejs format AND Google Sheets.


{{< timelinejs blockId="timeline-id" tlData="./timelinejs.json" >}}

<!-- {{< timelinejs blockId="timeline-id" tlData="https://docs.google.com/spreadsheets/u/1/d/1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk/pubhtml" >}} -->

If there is not, then check the browser console to see if it loaded, then inspect the element to see if the element has the proper dimensions.
