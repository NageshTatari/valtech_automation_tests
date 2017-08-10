$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("valtech_tests.feature");
formatter.feature({
  "line": 1,
  "name": "Tester should be able to verify all Valtech website pages.",
  "description": "\r\nAs a Tester,\r\nI would like to open valtech websit,\r\nSo that I can verify all valtech pages are build as per requirements.",
  "id": "tester-should-be-able-to-verify-all-valtech-website-pages.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8402692023,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User in Valtech home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Valtech_Tests.launchValtech()"
});
formatter.result({
  "duration": 5561017475,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify Latest News Section is displaying",
  "description": "",
  "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;verify-latest-news-section-is-displaying",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Latest News Section is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Valtech_Tests.latestNews()"
});
formatter.result({
  "duration": 181299532,
  "status": "passed"
});
formatter.after({
  "duration": 1558901686,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "check the H1 of each page",
  "description": "",
  "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;check-the-h1-of-each-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am in \u003cpageName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "H1 should be \u003cpageHeader\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;check-the-h1-of-each-page;",
  "rows": [
    {
      "cells": [
        "pageName",
        "pageHeader"
      ],
      "line": 21,
      "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;check-the-h1-of-each-page;;1"
    },
    {
      "cells": [
        "ABOUT",
        "About"
      ],
      "line": 22,
      "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;check-the-h1-of-each-page;;2"
    },
    {
      "cells": [
        "SERVICES",
        "Services"
      ],
      "line": 23,
      "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;check-the-h1-of-each-page;;3"
    },
    {
      "cells": [
        "WORK",
        "Work"
      ],
      "line": 24,
      "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;check-the-h1-of-each-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7040397939,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User in Valtech home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Valtech_Tests.launchValtech()"
});
formatter.result({
  "duration": 3336559558,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "check the H1 of each page",
  "description": "",
  "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;check-the-h1-of-each-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am in ABOUT",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "H1 should be About",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ABOUT",
      "offset": 8
    }
  ],
  "location": "Valtech_Tests.pages(String)"
});
formatter.result({
  "duration": 1933973593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About",
      "offset": 13
    }
  ],
  "location": "Valtech_Tests.h1(String)"
});
formatter.result({
  "duration": 113107972,
  "status": "passed"
});
formatter.after({
  "duration": 868751664,
  "status": "passed"
});
formatter.before({
  "duration": 7276394214,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User in Valtech home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Valtech_Tests.launchValtech()"
});
formatter.result({
  "duration": 2573020633,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "check the H1 of each page",
  "description": "",
  "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;check-the-h1-of-each-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am in SERVICES",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "H1 should be Services",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SERVICES",
      "offset": 8
    }
  ],
  "location": "Valtech_Tests.pages(String)"
});
formatter.result({
  "duration": 2535331823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Services",
      "offset": 13
    }
  ],
  "location": "Valtech_Tests.h1(String)"
});
formatter.result({
  "duration": 90292247,
  "status": "passed"
});
formatter.after({
  "duration": 806290673,
  "status": "passed"
});
formatter.before({
  "duration": 7004653857,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User in Valtech home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Valtech_Tests.launchValtech()"
});
formatter.result({
  "duration": 3597282073,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "check the H1 of each page",
  "description": "",
  "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;check-the-h1-of-each-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am in WORK",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "H1 should be Work",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "WORK",
      "offset": 8
    }
  ],
  "location": "Valtech_Tests.pages(String)"
});
formatter.result({
  "duration": 5796514250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work",
      "offset": 13
    }
  ],
  "location": "Valtech_Tests.h1(String)"
});
formatter.result({
  "duration": 95283828,
  "status": "passed"
});
formatter.after({
  "duration": 1113421259,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "count the offices",
  "description": "",
  "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;count-the-offices",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am in \u003cpageName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see \u003cvaltechOffices\u003e count",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;count-the-offices;",
  "rows": [
    {
      "cells": [
        "pageName",
        "valtechOffices"
      ],
      "line": 32,
      "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;count-the-offices;;1"
    },
    {
      "cells": [
        "CONTACT",
        "36"
      ],
      "line": 33,
      "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;count-the-offices;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8102480640,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User in Valtech home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Valtech_Tests.launchValtech()"
});
formatter.result({
  "duration": 3165592644,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "count the offices",
  "description": "",
  "id": "tester-should-be-able-to-verify-all-valtech-website-pages.;count-the-offices;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am in CONTACT",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see 36 count",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CONTACT",
      "offset": 8
    }
  ],
  "location": "Valtech_Tests.pages(String)"
});
formatter.result({
  "duration": 424214033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36",
      "offset": 13
    }
  ],
  "location": "Valtech_Tests.offices(int)"
});
formatter.result({
  "duration": 128249867,
  "status": "passed"
});
formatter.after({
  "duration": 886837288,
  "status": "passed"
});
});